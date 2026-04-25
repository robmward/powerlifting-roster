const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function scrapeRoster() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    console.log('Navigating to PA roster page...');
    await page.goto('https://powerlifting-america.com/age-division-nationals-roster/', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for table to be visible
    await page.waitForSelector('table tr', { timeout: 10000 });
    
    console.log('Extracting roster data...');
    const rosterData = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll('table tr'));
      // Skip header row
      return rows.slice(1).map(row => {
        const cells = Array.from(row.querySelectorAll('td'));
        if (cells.length < 6) return null;
        
        return {
          name: cells[0]?.textContent.trim() || '',
          state: cells[1]?.textContent.trim() || '',
          wc: cells[2]?.textContent.trim() || '',
          cat: cells[3]?.textContent.trim() || '',
          div: cells[4]?.textContent.trim() || '',
          total: parseFloat(cells[5]?.textContent.trim() || '0')
        };
      }).filter(r => r && r.name);
    });
    
    console.log(`Scraped ${rosterData.length} athletes`);
    
    // Load current App.jsx to preserve OPL/IG/Best data
    const appPath = path.join(__dirname, '../src/App.jsx');
    const appContent = fs.readFileSync(appPath, 'utf8');
    
    // Extract current roster data
    const rosterPattern = /\{"name":"([^"]+)","state":"([^"]+)","wc":"([^"]+)","cat":"([^"]+)","div":"([^"]*)","total":[\d.]+,"best":([\d.]+),"bestWc":"([^"]*)","diffWc":(true|false),"bestFed":"([^"]*)","bestDate":"([^"]*)","ig":"([^"]*)","opl":"([^"]*)"\}/g;
    
    const currentRoster = [];
    let match;
    while ((match = rosterPattern.exec(appContent)) !== null) {
      currentRoster.push({
        name: match[1],
        state: match[2],
        wc: match[3],
        cat: match[4],
        div: match[5],
        best: parseFloat(match[6]),
        bestWc: match[7],
        diffWc: match[8] === 'true',
        bestFed: match[9],
        bestDate: match[10],
        ig: match[11],
        opl: match[12]
      });
    }
    
    console.log(`Loaded ${currentRoster.length} existing athlete records`);
    
    // Merge: update QTs from scraped data, preserve everything else
    const mergedRoster = rosterData.map(scraped => {
      const existing = currentRoster.find(c => 
        c.name === scraped.name && 
        c.wc === scraped.wc && 
        c.cat === scraped.cat
      );
      
      if (existing) {
        return {
          name: scraped.name,
          state: scraped.state,
          wc: scraped.wc,
          cat: scraped.cat,
          div: scraped.div,
          total: scraped.total, // Updated QT from PA
          best: existing.best,
          bestWc: existing.bestWc,
          diffWc: existing.diffWc,
          bestFed: existing.bestFed,
          bestDate: existing.bestDate,
          ig: existing.ig,
          opl: existing.opl
        };
      } else {
        // New athlete - no OPL/IG/Best data yet
        return {
          name: scraped.name,
          state: scraped.state,
          wc: scraped.wc,
          cat: scraped.cat,
          div: scraped.div,
          total: scraped.total,
          best: 0,
          bestWc: '',
          diffWc: false,
          bestFed: '',
          bestDate: '',
          ig: '',
          opl: ''
        };
      }
    });
    
    // Generate new ROSTER array
    const rosterLines = mergedRoster.map(r => {
      return `{"name":"${r.name}","state":"${r.state}","wc":"${r.wc}","cat":"${r.cat}","div":"${r.div}","total":${r.total},"best":${r.best},"bestWc":"${r.bestWc}","diffWc":${r.diffWc},"bestFed":"${r.bestFed}","bestDate":"${r.bestDate}","ig":"${r.ig}","opl":"${r.opl}"}`;
    });
    
    const newRosterArray = `const ROSTER = [\n${rosterLines.join(',\n')}\n];`;
    
    // Replace ROSTER in App.jsx
    const beforeRoster = appContent.substring(0, appContent.indexOf('const ROSTER = ['));
    const afterRoster = appContent.substring(appContent.indexOf('];', appContent.indexOf('const ROSTER = [')) + 2);
    
    const newAppContent = beforeRoster + newRosterArray + afterRoster;
    
    // Update timestamp in disclaimer
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    });
    
    const updatedContent = newAppContent.replace(
      /Roster data was pulled on [^<]+/,
      `Roster data was pulled on ${dateStr}`
    );
    
    fs.writeFileSync(appPath, updatedContent);
    console.log('✅ Updated App.jsx with fresh roster data');
    
    // Log changes
    const changes = mergedRoster.filter((merged, i) => {
      const existing = currentRoster.find(c => c.name === merged.name);
      return existing && existing.total !== merged.total;
    });
    
    if (changes.length > 0) {
      console.log(`\n📊 QT changes detected for ${changes.length} athletes:`);
      changes.forEach(c => {
        const old = currentRoster.find(e => e.name === c.name);
        console.log(`  ${c.name}: ${old.total} → ${c.total}`);
      });
    } else {
      console.log('\n✨ No QT changes detected');
    }
    
  } catch (error) {
    console.error('❌ Scraping failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

scrapeRoster();
