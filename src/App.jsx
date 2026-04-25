import { useState, useMemo } from "react";


const ROSTER = [
{"name":"Thaovy Tran","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":75.0,"best":250.0,"bestWc":"47","diffWc":true,"bestFed":"AMP","bestDate":"Nov '24","ig":"","opl":"thaovytran"},
{"name":"Abigail Le","state":"PA","wc":"F-43","cat":"Raw","div":"J","total":0.0,"best":247.5,"bestWc":"43","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"abigaille"},
{"name":"Brennan Fallon","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":0.0,"best":310.0,"bestWc":"44","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '24","ig":"","opl":"brennanfallon"},
{"name":"Abygail Guzman","state":"TX","wc":"F-43","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Molly Hutchinson","state":"LA","wc":"F-43","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Leanna Schnell","state":"AZ","wc":"F-47","cat":"Raw","div":"SO","total":122.5,"best":125.0,"bestWc":"47","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"leannaschnell"},
{"name":"Chiaki Takada","state":"TX","wc":"F-47","cat":"Raw","div":"M3","total":295.0,"best":295.0,"bestWc":"47","diffWc":false,"bestFed":"AMP","bestDate":"Oct '24","ig":"","opl":"chiakitakada"},
{"name":"Suzie Johnson","state":"WA","wc":"F-47","cat":"Raw","div":"M3","total":0.0,"best":212.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '24","ig":"","opl":"suziejohnson"},
{"name":"Kelley Sherwin","state":"WI","wc":"F-47","cat":"Raw","div":"M2","total":0.0,"best":292.5,"bestWc":"52","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"","opl":"kelleysherwin"},
{"name":"Andrea Nolting","state":"IN","wc":"F-47","cat":"Raw","div":"M2","total":0.0,"best":257.5,"bestWc":"48","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"","opl":"andreanolting2"},
{"name":"Emma Horn","state":"--","wc":"F-47","cat":"Raw","div":"J","total":0.0,"best":312.5,"bestWc":"52","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"emmahorn"},
{"name":"Addisyn Lege","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":175.0,"best":200.0,"bestWc":"44","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '23","ig":"","opl":"addisynlege"},
{"name":"Joanie Cannon","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jazlene Rios","state":"TX","wc":"F-47","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jlynn Fernandez","state":"--","wc":"F-47","cat":"Equipped","div":"J","total":282.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gabriella Garza","state":"--","wc":"F-47","cat":"Equipped","div":"J","total":75.0,"best":320.0,"bestWc":"52","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '24","ig":"","opl":"gabriellagarza2"},
{"name":"Lisa Weiss","state":"OH","wc":"F-52","cat":"Raw","div":"M3","total":280.0,"best":287.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"lisaweiss1"},
{"name":"Claire Keel","state":"AL","wc":"F-52","cat":"Raw","div":"M3","total":147.5,"best":157.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"clairekeel"},
{"name":"Lesley Scott","state":"OR","wc":"F-52","cat":"Raw","div":"M3","total":0.0,"best":210.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"lesleyscott"},
{"name":"Suzanne Hartwig-Gary","state":"MT","wc":"F-52","cat":"Raw","div":"M2","total":75.0,"best":357.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"siouxz52kg","opl":"suzannehartwiggary"},
{"name":"Claudia Romero","state":"TX","wc":"F-52","cat":"Raw","div":"M1","total":307.5,"best":317.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"claudiaromero"},
{"name":"Cynthia Smith","state":"NC","wc":"F-52","cat":"Raw","div":"M1","total":192.5,"best":222.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"cynthiasmith"},
{"name":"Ruhi Patel","state":"TX","wc":"F-52","cat":"Raw","div":"SJ","total":0.0,"best":185.0,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"ruhipatel"},
{"name":"Marina Maxwell","state":"NC","wc":"F-52","cat":"Raw","div":"J","total":75.0,"best":410.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"marina52kg","opl":"marinamaxwell"},
{"name":"Trinity Infante","state":"CA","wc":"F-52","cat":"Raw","div":"J","total":0.0,"best":337.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"trinityinfante"},
{"name":"Ava Dean","state":"LA","wc":"F-52","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nyeli Arispe","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Noemi Blancarte","state":"LA","wc":"F-52","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Abcde Mata","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":0.0,"best":297.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"abcdemata"},
{"name":"Katelynn Billiot","state":"LA","wc":"F-52","cat":"Equipped","div":"J","total":275.0,"best":295.0,"bestWc":"47","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"katelynnbilliot"},
{"name":"Itzel Loreto","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":0.0,"best":277.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"itzelloreto"},
{"name":"Autumn Gilday","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":0.0,"best":325.0,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"autumngilday"},
{"name":"Dora Justice","state":"--","wc":"F-57","cat":"Raw","div":"M3","total":270.5,"best":273.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"dorajustice"},
{"name":"Kathleen Casper","state":"MN","wc":"F-57","cat":"Raw","div":"M3","total":75.0,"best":220.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"kathleencasper"},
{"name":"Loraine Efron","state":"TX","wc":"F-57","cat":"Raw","div":"M3","total":75.0,"best":232.5,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"loraineefron"},
{"name":"Janice Woerner","state":"NY","wc":"F-57","cat":"Raw","div":"M3","total":0.0,"best":292.5,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"","opl":"janicewoerner"},
{"name":"Alana Mcgolrick","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":0.0,"best":337.5,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"alanamcgolrick"},
{"name":"Jo Aita","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lindsay Rubel","state":"NY","wc":"F-57","cat":"Raw","div":"M1","total":75.0,"best":400.0,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"lindsayrubel"},
{"name":"Patria Jimenez","state":"MA","wc":"F-57","cat":"Raw","div":"M1","total":0.0,"best":387.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"quadsofthegodzilla","opl":"patriajimenez"},
{"name":"Paige Gunkel","state":"WI","wc":"F-57","cat":"Raw","div":"SJ","total":0.0,"best":307.5,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"paigegunkel"},
{"name":"Luka Paskell","state":"MA","wc":"F-57","cat":"Raw","div":"SJ","total":0.0,"best":345.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"lukap.26","opl":"lukapaskell"},
{"name":"Eleni Guerrera","state":"VA","wc":"F-57","cat":"Raw","div":"J","total":413.5,"best":440.0,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"elenilifts57","opl":"eleniguerrera"},
{"name":"Keira Segura","state":"LA","wc":"F-57","cat":"Raw","div":"J","total":375.0,"best":412.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"keirasegura"},
{"name":"Lauren Jansen","state":"WI","wc":"F-57","cat":"Raw","div":"J","total":342.5,"best":390.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"laurenjansen"},
{"name":"Claire Thomas","state":"PA","wc":"F-57","cat":"Raw","div":"J","total":75.0,"best":425.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"clairethomas"},
{"name":"Julia Ty","state":"--","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":390.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"juliaty"},
{"name":"Kathleen Carroll","state":"IL","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":400.0,"bestWc":"60","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '24","ig":"","opl":"kathleencarroll"},
{"name":"Lexi Gonsalves","state":"CA","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":285.0,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"lexigonsalves"},
{"name":"Ellie Weinstein","state":"MN","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":452.5,"bestWc":"","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"ellieweinsteinlfts","opl":"ellieweinstein"},
{"name":"Abigail Yandrich","state":"OH","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":397.5,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"abigailyandrich"},
{"name":"Lindalee Urquieta","state":"TX","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":340.0,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"lindaleeurquieta"},
{"name":"Charleen Balcer Rowekamp","state":"MN","wc":"F-57","cat":"Equipped","div":"M1","total":320.0,"best":320.0,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Apr '24","ig":"","opl":"charleenbalcerrowekamp"},
{"name":"Jasmine Nguyen","state":"--","wc":"F-57","cat":"Equipped","div":"SJ","total":285.0,"best":307.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"jasminenguyen1"},
{"name":"Ava Dean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lyla Felean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Paloma Calderon","state":"TX","wc":"F-57","cat":"Equipped","div":"SJ","total":0.0,"best":360.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"palomacalderon"},
{"name":"Lylah Jones","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Octavia Hill","state":"OK","wc":"F-57","cat":"Equipped","div":"J","total":397.5,"best":437.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"avi._.hill","opl":"octaviahill"},
{"name":"Elizabeth Pizarro","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":325.0,"best":392.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"elizabethpizarro"},
{"name":"Madaline Kennemer","state":"LA","wc":"F-57","cat":"Equipped","div":"J","total":0.0,"best":242.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"madalinekennemer"},
{"name":"Macayla Cano","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":0.0,"best":360.0,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"macaylacano"},
{"name":"Shelly Stettner","state":"MI","wc":"F-63","cat":"Raw","div":"M4","total":0.0,"best":342.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"shelly_ann_28","opl":"shellystettner"},
{"name":"Jessica Marshall","state":"--","wc":"F-63","cat":"Raw","div":"M3","total":75.0,"best":356.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jessicamarshall1"},
{"name":"Lynn Pietig","state":"--","wc":"F-63","cat":"Raw","div":"M3","total":75.0,"best":345.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '24","ig":"","opl":"lynnpietig"},
{"name":"Tiffany Dean","state":"NV","wc":"F-63","cat":"Raw","div":"M3","total":0.0,"best":265.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"tiffanydean"},
{"name":"Isabelle Iliev","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":377.5,"best":377.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Sep '24","ig":"","opl":"isabelleiliev"},
{"name":"Leah Cruciani","state":"PA","wc":"F-63","cat":"Raw","div":"M2","total":332.5,"best":347.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"leahcruciani"},
{"name":"Heather Campbell","state":"OR","wc":"F-63","cat":"Raw","div":"M2","total":315.0,"best":330.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"heathercampbell"},
{"name":"Stacie Taylor","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":75.0,"best":295.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Sep '24","ig":"","opl":"stacietaylor"},
{"name":"Lisa Shen","state":"TX","wc":"F-63","cat":"Raw","div":"M2","total":0.0,"best":330.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"lisashen"},
{"name":"Molly Jones","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":412.5,"best":422.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"mollyjones"},
{"name":"Eleanor Gease","state":"DC","wc":"F-63","cat":"Raw","div":"M1","total":307.5,"best":317.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Dec '23","ig":"","opl":"eleanorgease"},
{"name":"Ashley Hickert","state":"MT","wc":"F-63","cat":"Raw","div":"M1","total":75.0,"best":365.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"mamaswoleasaurus","opl":"ashleyhickert"},
{"name":"Katie Achille","state":"NJ","wc":"F-63","cat":"Raw","div":"M1","total":75.0,"best":345.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"katieachille"},
{"name":"Yvy Llambes","state":"TX","wc":"F-63","cat":"Raw","div":"M1","total":0.0,"best":500.0,"bestWc":"65","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '25","ig":"funsize.powerlifter","opl":"yvyllambes"},
{"name":"Rina Shapiro","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":0.0,"best":322.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"rinashapiro"},
{"name":"Mariele Arthur","state":"TX","wc":"F-63","cat":"Raw","div":"SJ","total":352.5,"best":425.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"marielearthur"},
{"name":"Kylie Gunkel","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":0.0,"best":302.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"kylie.gunkel.lifts","opl":"kyliegunkel"},
{"name":"Arden Hyatt","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":0.0,"best":380.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"ardenhyatt"},
{"name":"Lindsey Jade Ligsay","state":"HI","wc":"F-63","cat":"Raw","div":"J","total":385.0,"best":422.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"lindseyjadeligsay"},
{"name":"Hannah Smith","state":"IL","wc":"F-63","cat":"Raw","div":"J","total":367.5,"best":392.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"hannahsmith4"},
{"name":"Laynie Buli","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":282.5,"best":310.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"layniebuli"},
{"name":"Kennedy Azzatori","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":115.0,"best":385.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"kennedyazzatori"},
{"name":"Aile Banuelos","state":"CA","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":430.0,"bestWc":"65","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '25","ig":"ailelifts","opl":"ailebanuelos"},
{"name":"Elizabeth Sanchez","state":"FL","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":295.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"elizabethsanchez2"},
{"name":"Farida-Farrah Marreez","state":"KY","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":347.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"farrahmarreez","opl":"faridafarrahmarreez"},
{"name":"Kaylee Beltran","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":357.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kayleebeltran"},
{"name":"Sophia Fortin","state":"MA","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":485.0,"bestWc":"60","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"sophiarose.03","opl":"sophiafortin"},
{"name":"Victoria Imes","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":305.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"victoriaimes"},
{"name":"Christine Cranford","state":"MI","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":365.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"christinecranford"},
{"name":"Katarina Herrera","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":322.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"katarinaherrera"},
{"name":"Nataleigh Hunter","state":"DE","wc":"F-63","cat":"Raw","div":"O","total":493.0,"best":500.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"nat.hunter","opl":"nataleighhunter"},
{"name":"Sidney Konig Brock","state":"LA","wc":"F-63","cat":"Raw","div":"O","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Maura Shuttleworth","state":"NM","wc":"F-63","cat":"Equipped","div":"M2","total":110.0,"best":242.5,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"maurashuttleworth"},
{"name":"Nora Keller","state":"FL","wc":"F-63","cat":"Equipped","div":"M1","total":75.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ava Finley","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":0.0,"best":275.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"avafinley"},
{"name":"Sophia Villarreal","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":0.0,"best":335.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"sophiavillarreal"},
{"name":"Nevaeh Suarez","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":0.0,"best":320.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"nevaehsuarez"},
{"name":"Cadence Audler","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gracie Cassidy","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":340.0,"best":410.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"graciecassidy"},
{"name":"Shelby Fischer","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":300.0,"best":300.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"Apr '24","ig":"","opl":"shelbyfischer"},
{"name":"Ayden Lege","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":292.5,"best":347.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"aydenlege"},
{"name":"Julie Donaho","state":"TX","wc":"F-69","cat":"Raw","div":"","total":0.0,"best":190.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"juliedonaho"},
{"name":"Alma Kimura","state":"WA","wc":"F-69","cat":"Raw","div":"M4","total":310.5,"best":322.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"May '23","ig":"","opl":"almakimura"},
{"name":"Gale Williams","state":"GA","wc":"F-69","cat":"Raw","div":"M4","total":285.0,"best":292.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"galewilliams"},
{"name":"Denise Ragozzino","state":"NV","wc":"F-69","cat":"Raw","div":"M4","total":0.0,"best":172.5,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"deniseragozzino"},
{"name":"Roberta Carlson","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":397.5,"best":396.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"rcarlsini","opl":"robertacarlson1"},
{"name":"Susan Gibson","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":290.0,"best":290.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"susangibson"},
{"name":"Jackie Barone","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":75.0,"best":227.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jackiebarone"},
{"name":"Cathy Avery","state":"--","wc":"F-69","cat":"Raw","div":"M2","total":358.0,"best":377.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"naturallystrongbeauty","opl":"cathyavery"},
{"name":"Kari Cashen","state":"NV","wc":"F-69","cat":"Raw","div":"M2","total":215.0,"best":245.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"karicashen"},
{"name":"Claudia Beatty","state":"NC","wc":"F-69","cat":"Raw","div":"M2","total":0.0,"best":390.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"claudiabeatty"},
{"name":"Becky Enright","state":"WA","wc":"F-69","cat":"Raw","div":"M1","total":427.5,"best":445.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"becky.enright","opl":"beckyenright"},
{"name":"Angela Compilli","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":365.0,"best":463.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"angelacompilli"},
{"name":"Clair Crawford","state":"--","wc":"F-69","cat":"Raw","div":"M1","total":280.0,"best":297.5,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"claircrawford"},
{"name":"Elena Gutierrez","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":0.0,"best":335.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"elenagutierrez"},
{"name":"Kollet Wharton","state":"TX","wc":"F-69","cat":"Raw","div":"M1","total":0.0,"best":317.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"kolletwharton"},
{"name":"Stephanie Bazan","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":0.0,"best":317.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"stephaniebazan"},
{"name":"Kisha Fields","state":"NC","wc":"F-69","cat":"Raw","div":"M1","total":0.0,"best":422.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"kishafields"},
{"name":"Hayley Csepella","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":0.0,"best":397.5,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"hayleycsepella"},
{"name":"Emma Millana","state":"FL","wc":"F-69","cat":"Raw","div":"SJ","total":0.0,"best":372.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"emmamillana"},
{"name":"Gianna Ancona","state":"CT","wc":"F-69","cat":"Raw","div":"SJ","total":0.0,"best":424.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"giannaancona"},
{"name":"Kaleia Knothe","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":0.0,"best":392.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"kaleiaknothe"},
{"name":"Maia Forsyth","state":"CO","wc":"F-69","cat":"Raw","div":"J","total":450.0,"best":480.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"maiaforsyth"},
{"name":"Brooke Naegel","state":"SC","wc":"F-69","cat":"Raw","div":"J","total":438.0,"best":427.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Jul '25","ig":"","opl":"brookenaegel"},
{"name":"Anne Augustin","state":"NY","wc":"F-69","cat":"Raw","div":"J","total":345.0,"best":400.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"anneaugustin"},
{"name":"Mallory Salinas","state":"TX","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":392.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"mallorysalinas"},
{"name":"Maggy Weymiller","state":"IA","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":410.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"maggyweymiller"},
{"name":"Annika Minotti","state":"CT","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":390.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"annikaminotti"},
{"name":"Greta Aberle","state":"WI","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":427.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"gretaaberle"},
{"name":"Abigail Breiner","state":"TN","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":367.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"abigailbreiner"},
{"name":"Juliette Brewer","state":"LA","wc":"F-69","cat":"Equipped","div":"#N/A","total":0.0,"best":370.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Apr '24","ig":"","opl":"juliettebrewer"},
{"name":"Donna Marts","state":"WY","wc":"F-69","cat":"Equipped","div":"M3","total":96.0,"best":430.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"donnamarts"},
{"name":"Celeste Godinez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":432.5,"best":440.0,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"celestegodinez"},
{"name":"Jewlee Recio","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":0.0,"best":330.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jewleerecio"},
{"name":"Amanda Cougle","state":"LA","wc":"F-69","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jesaeh Suarez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":0.0,"best":345.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jesaehsuarez"},
{"name":"Aeryn Anderson","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":395.0,"best":375.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"aerynanderson1"},
{"name":"Pipper Lemaire","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":75.0,"best":345.0,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"pipperlemaire"},
{"name":"Beth Whitney","state":"KS","wc":"F-69","cat":"Equipped","div":"J","total":0.0,"best":312.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"bethwhitney"},
{"name":"Linda Franklin","state":"OR","wc":"F-76","cat":"Raw","div":"M4","total":0.0,"best":377.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"linda.gets.strong","opl":"lindafranklin"},
{"name":"Suzanne D'Avalon","state":"NM","wc":"F-76","cat":"Raw","div":"M4","total":0.0,"best":180.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"suzannedavalon"},
{"name":"Cheryl Ventola","state":"MA","wc":"F-76","cat":"Raw","div":"M3","total":305.0,"best":305.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Feb '24","ig":"","opl":"cherylventola"},
{"name":"Barbara Beaudin","state":"NH","wc":"F-76","cat":"Raw","div":"M3","total":75.0,"best":335.0,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"Mar '23","ig":"","opl":"barbarabeaudin"},
{"name":"Beth Macauley","state":"MI","wc":"F-76","cat":"Raw","div":"M3","total":0.0,"best":292.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '23","ig":"","opl":"bethmacauley"},
{"name":"Joah Iannotta","state":"PA","wc":"F-76","cat":"Raw","div":"M2","total":462.5,"best":462.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"iron__empress","opl":"joahiannotta"},
{"name":"Pamela Riley","state":"TX","wc":"F-76","cat":"Raw","div":"M2","total":347.5,"best":355.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"pamelariley"},
{"name":"Siri Hoogen","state":"OR","wc":"F-76","cat":"Raw","div":"M2","total":75.0,"best":435.0,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"sirihoogen"},
{"name":"Cheryl Iseri","state":"ID","wc":"F-76","cat":"Raw","div":"M2","total":75.0,"best":392.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"cheryliseri"},
{"name":"Hannah Sowd","state":"--","wc":"F-76","cat":"Raw","div":"M2","total":0.0,"best":307.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"hannahsowd"},
{"name":"Leah Lutz","state":"CA","wc":"F-76","cat":"Raw","div":"M2","total":0.0,"best":412.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '23","ig":"leah_barbellmedicine","opl":"leahlutz"},
{"name":"Melissa Dixon","state":"WA","wc":"F-76","cat":"Raw","div":"M2","total":0.0,"best":297.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"melissadixon"},
{"name":"Dayna Mcneal","state":"ND","wc":"F-76","cat":"Raw","div":"M1","total":557.5,"best":560.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"versus_myself","opl":"daynamcneal"},
{"name":"Linette Bogdan","state":"NJ","wc":"F-76","cat":"Raw","div":"M1","total":445.0,"best":445.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"outdoorsport3","opl":"linettebogdan"},
{"name":"Jennifer Sauter","state":"NY","wc":"F-76","cat":"Raw","div":"M1","total":430.0,"best":437.5,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Mar '25","ig":"jennifer_sauter_lifts","opl":"jennifersauter"},
{"name":"Helen Lewis-Rzeszutek","state":"WI","wc":"F-76","cat":"Raw","div":"M1","total":420.0,"best":420.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"helenlewisrzeszutek"},
{"name":"Amberly Kuhlmann","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":407.5,"best":420.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"amberlykuhlmann"},
{"name":"Kim Inoshita","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":185.0,"best":242.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"kiminoshita"},
{"name":"Amanda Koldjeski","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":0.0,"best":367.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '23","ig":"","opl":"amandakoldjeski"},
{"name":"Taylor Boykins","state":"OH","wc":"F-76","cat":"Raw","div":"SJ","total":342.5,"best":387.5,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"taylorboykins"},
{"name":"Sarah Kleinman","state":"MD","wc":"F-76","cat":"Raw","div":"SJ","total":0.0,"best":297.5,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"sarahkleinman"},
{"name":"Sonia Espitia","state":"NY","wc":"F-76","cat":"Raw","div":"SJ","total":0.0,"best":390.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"soniaespitia"},
{"name":"Alice Gardner","state":"WI","wc":"F-76","cat":"Raw","div":"SJ","total":0.0,"best":340.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"alicegardner"},
{"name":"Dakota Courtright","state":"NE","wc":"F-76","cat":"Raw","div":"SJ","total":0.0,"best":402.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '25","ig":"","opl":"dakotacourtright"},
{"name":"Esperanza Delgado","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":492.5,"best":505.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"esperanzalifts","opl":"esperanzadelgado2"},
{"name":"Dayna Bland","state":"NC","wc":"F-76","cat":"Raw","div":"J","total":370.0,"best":395.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"daynabland"},
{"name":"Daisey Fields","state":"GA","wc":"F-76","cat":"Raw","div":"J","total":367.5,"best":387.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"daiseyfields"},
{"name":"Abigail Dietz","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":327.5,"best":360.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"abigaildietz"},
{"name":"Zsofia Toth","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":0.0,"best":442.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"zsofiatoth"},
{"name":"Ekaterina Sapoznikova","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":0.0,"best":473.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"ekaterinasapoznikova"},
{"name":"Sneha Sureshkumar","state":"MN","wc":"F-76","cat":"Raw","div":"J","total":0.0,"best":370.0,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"snehasureshkumar"},
{"name":"Amber Gomez","state":"TX","wc":"F-76","cat":"Equipped","div":"M1","total":445.0,"best":460.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"ortizlee","opl":"ambergomez"},
{"name":"Summer Brittain","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":0.0,"best":305.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"summerbrittain"},
{"name":"Gia Garlington","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gavigail Martinez","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gabby Haire","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaylee Robin","state":"LA","wc":"F-76","cat":"Equipped","div":"J","total":455.0,"best":490.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"kayleerobin"},
{"name":"Margie Schnell","state":"AZ","wc":"F-84","cat":"Raw","div":"M3","total":0.0,"best":200.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"margieschnell"},
{"name":"Marcia Homer","state":"--","wc":"F-84","cat":"Raw","div":"M3","total":0.0,"best":320.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"marciahomer"},
{"name":"Michelle Kane","state":"OH","wc":"F-84","cat":"Raw","div":"M2","total":435.0,"best":433.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"michelle_being_michelle","opl":"michellekane"},
{"name":"Allison Snead","state":"NC","wc":"F-84","cat":"Raw","div":"M2","total":0.0,"best":482.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '23","ig":"","opl":"allisonsnead"},
{"name":"Alexis Goldstein","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":512.5,"best":512.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Sep '24","ig":"","opl":"alexisgoldstein"},
{"name":"Rosanna Orosco","state":"CA","wc":"F-84","cat":"Raw","div":"M1","total":407.5,"best":422.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"rosannaorosco"},
{"name":"Bethany Blankespoor","state":"DC","wc":"F-84","cat":"Raw","div":"M1","total":302.5,"best":302.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"bethanyblankespoor"},
{"name":"Lauren Kolb","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":0.0,"best":297.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Feb '25","ig":"","opl":"laurenkolb"},
{"name":"Rebekah Givan","state":"--","wc":"F-84","cat":"Raw","div":"SJ","total":335.0,"best":352.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"rebekahgivan"},
{"name":"Saige Back","state":"NY","wc":"F-84","cat":"Raw","div":"SJ","total":75.0,"best":290.0,"bestWc":"84+","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"saigeback"},
{"name":"Madilyn Cantu","state":"TX","wc":"F-84","cat":"Raw","div":"SJ","total":75.0,"best":322.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"madilyncantu"},
{"name":"Emma Hagen","state":"AZ","wc":"F-84","cat":"Raw","div":"J","total":75.0,"best":370.0,"bestWc":"84+","diffWc":true,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"emmahagen"},
{"name":"Tytiyana Flott","state":"MI","wc":"F-84","cat":"Raw","div":"J","total":0.0,"best":455.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"tytiyanaflott"},
{"name":"Kristen Palmer","state":"GA","wc":"F-84","cat":"Raw","div":"J","total":0.0,"best":440.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kristenpalmer"},
{"name":"Zoe Soleil Goykhman","state":"PA","wc":"F-84","cat":"Raw","div":"J","total":0.0,"best":477.5,"bestWc":"84+","diffWc":true,"bestFed":"AMP","bestDate":"Mar '25","ig":"","opl":"zoesoleilgoykhman"},
{"name":"Brooke Ruland","state":"WI","wc":"F-84","cat":"Raw","div":"J","total":0.0,"best":480.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '26","ig":"","opl":"brookeruland"},
{"name":"Sara Rodock","state":"WI","wc":"F-84","cat":"Equipped","div":"M1","total":510.0,"best":530.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"sararodock"},
{"name":"Elaina Canales","state":"--","wc":"F-84","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaitlyn Huff","state":"TX","wc":"F-84","cat":"Equipped","div":"SJ","total":0.0,"best":400.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"kaitlynhuff"},
{"name":"Cristina Angelloz","state":"--","wc":"F-84","cat":"Equipped","div":"J","total":327.5,"best":327.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Apr '24","ig":"","opl":"cristinaangelloz"},
{"name":"Patrice Lockhart","state":"GA","wc":"F-84+","cat":"Raw","div":"SO","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Linda Gorham","state":"MD","wc":"F-84+","cat":"Raw","div":"M4","total":312.5,"best":310.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"lindagorham"},
{"name":"Vicki Brackett","state":"GA","wc":"F-84+","cat":"Raw","div":"M3","total":387.5,"best":387.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"vickibrackett"},
{"name":"Heidi Meeley","state":"WA","wc":"F-84+","cat":"Raw","div":"M3","total":365.0,"best":367.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"heidimeeley"},
{"name":"Patricia Johnson","state":"CA","wc":"F-84+","cat":"Raw","div":"M2","total":547.5,"best":557.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Mar '23","ig":"drpatjohnsonifbbpro","opl":"patriciajohnson"},
{"name":"Lilyan Jackson","state":"TX","wc":"F-84+","cat":"Raw","div":"M2","total":492.5,"best":482.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"botgurl","opl":"lilyanjackson"},
{"name":"Lori Sousa","state":"FL","wc":"F-84+","cat":"Raw","div":"M2","total":300.0,"best":337.5,"bestWc":"100+","diffWc":true,"bestFed":"USAPL","bestDate":"Mar '23","ig":"","opl":"lorisousa"},
{"name":"Shanti Murphy","state":"--","wc":"F-84+","cat":"Raw","div":"M2","total":0.0,"best":315.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"shantimurphy"},
{"name":"Melissa Copeland","state":"--","wc":"F-84+","cat":"Raw","div":"M1","total":555.0,"best":575.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"melarmy","opl":"melissacopeland"},
{"name":"Tiffany Miranda","state":"NC","wc":"F-84+","cat":"Raw","div":"M1","total":0.0,"best":367.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"tiffanymiranda"},
{"name":"Allison White","state":"--","wc":"F-84+","cat":"Raw","div":"M1","total":0.0,"best":515.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"allisonwhite"},
{"name":"Emily Douglas","state":"MD","wc":"F-84+","cat":"Raw","div":"M1","total":0.0,"best":517.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"emilydouglas2"},
{"name":"Cora Osei-Adjei","state":"TX","wc":"F-84+","cat":"Raw","div":"SJ","total":0.0,"best":520.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"coraoseiadjei"},
{"name":"Emily Bombardier","state":"NY","wc":"F-84+","cat":"Raw","div":"J","total":415.0,"best":437.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"emilybombardier"},
{"name":"Emma Jones","state":"MA","wc":"F-84+","cat":"Raw","div":"J","total":410.0,"best":452.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"emmajones4"},
{"name":"Maya Moise","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":450.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"mayamoise"},
{"name":"Kathryn Tranum","state":"IN","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":540.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kathryntranum"},
{"name":"Izabela Ramirez","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":375.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"izabelaramirez"},
{"name":"Sarah Jerry","state":"AL","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":420.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"sarahjerry"},
{"name":"Jacqueline Fly","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":505.0,"bestWc":"100+","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"","opl":"jacquelinefly"},
{"name":"Kamilah Todd","state":"LA","wc":"F-84+","cat":"Equipped","div":"M1","total":602.5,"best":590.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"kntodd","opl":"kamilahtodd"},
{"name":"Emelia Dauterive","state":"LA","wc":"F-84+","cat":"Equipped","div":"SJ","total":400.0,"best":427.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"emeliadauterive"},
{"name":"Gabriella Adrian","state":"--","wc":"F-84+","cat":"Equipped","div":"SJ","total":0.0,"best":432.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"gabriellaadrian"},
{"name":"Addyson Perez","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Olivia Cardenas","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emmerson Mokuiki","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0.0,"best":412.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"emmersonmokuiki"},
{"name":"Long Chau","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":382.5,"bestWc":"53","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"longchau"},
{"name":"Nicholas Zambrano","state":"SC","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":297.5,"bestWc":"53","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"nicholaszambrano"},
{"name":"Ahmed Al Fatli","state":"IA","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":457.5,"bestWc":"59","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"ahmedalfatli"},
{"name":"Alec Weinstein","state":"PA","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":277.5,"bestWc":"53","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"alecweinstein"},
{"name":"Alejandro Garcia","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daniel Saenz","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"James Medrano","state":"TX","wc":"M-53","cat":"Raw","div":"J","total":0.0,"best":520.0,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"jamesmedrano"},
{"name":"Trey Nguyen","state":"LA","wc":"M-53","cat":"Equipped","div":"SJ","total":0.0,"best":350.0,"bestWc":"53","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"treynguyen"},
{"name":"Brayden Hollier","state":"--","wc":"M-53","cat":"Equipped","div":"J","total":75.0,"best":395.0,"bestWc":"53","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"braydenhollier"},
{"name":"Jonathan Nico","state":"AZ","wc":"M-59","cat":"Raw","div":"SO","total":150.0,"best":195.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jonathannico"},
{"name":"David Berube","state":"--","wc":"M-59","cat":"Raw","div":"SA","total":75.0,"best":282.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Oct '23","ig":"","opl":"davidberube2"},
{"name":"Eric Kupperstein","state":"MA","wc":"M-59","cat":"Raw","div":"M3","total":407.5,"best":465.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"erickupperstein"},
{"name":"Alexander Kim","state":"IL","wc":"M-59","cat":"Raw","div":"M3","total":0.0,"best":347.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"alexanderkim5"},
{"name":"Kaleb Mcdowell","state":"MD","wc":"M-59","cat":"Raw","div":"M2","total":0.0,"best":305.0,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"kalebmcdowell"},
{"name":"Huaiyu Tan","state":"FL","wc":"M-59","cat":"Raw","div":"M1","total":75.0,"best":500.0,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"huaiyutan"},
{"name":"Newton Cheng","state":"CA","wc":"M-59","cat":"Raw","div":"M1","total":0.0,"best":528.0,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"newtoncheng","opl":"newtoncheng"},
{"name":"William Tenerelli","state":"NJ","wc":"M-59","cat":"Raw","div":"M1","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Justin Nguyen","state":"CA","wc":"M-59","cat":"Raw","div":"SJ","total":507.5,"best":595.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '23","ig":"","opl":"justinnguyen"},
{"name":"Masato Gentle","state":"NV","wc":"M-59","cat":"Raw","div":"SJ","total":447.5,"best":502.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"masatogentle"},
{"name":"Grayson Manning","state":"IA","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":489.5,"bestWc":"60","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"graysonmanning"},
{"name":"Tyler Friedman","state":"PA","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":460.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"tylerfriedman"},
{"name":"Daniel Elliott","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":465.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"May '25","ig":"","opl":"danielelliott2"},
{"name":"Zaiden Olvera","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":487.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"zaidenolvera"},
{"name":"Alex Martinez","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":665.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '24","ig":"","opl":"alexmartinez14"},
{"name":"Timmy Truong","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":530.0,"best":607.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"timmytruong"},
{"name":"Cesar Perez","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":467.5,"best":585.0,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '23","ig":"","opl":"cesarperez1"},
{"name":"Patrick Devine","state":"NJ","wc":"M-59","cat":"Raw","div":"J","total":437.5,"best":510.0,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"patrickdevine"},
{"name":"Cardin Do","state":"MA","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":645.0,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"cardindo"},
{"name":"Deondre Moody","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":535.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"deondremoody"},
{"name":"Brady Price","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":595.0,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"thatboyprice","opl":"bradyprice"},
{"name":"A Phi Le","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":557.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"aphile"},
{"name":"Fabian Viernes","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":502.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"fabianviernes"},
{"name":"Tyler Morrow","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":585.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"tylermorrow1"},
{"name":"Ryan Sturgis","state":"--","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":487.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"ryansturgis"},
{"name":"Ethan Andrews","state":"--","wc":"M-59","cat":"Equipped","div":"SJ","total":417.5,"best":472.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"ethanandrews"},
{"name":"Ethen Bui","state":"LA","wc":"M-59","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rafael Arredondo","state":"TX","wc":"M-59","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bodie Lacoe","state":"PA","wc":"M-59","cat":"Equipped","div":"J","total":585.0,"best":640.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"bodielacoe04","opl":"bodielacoe"},
{"name":"Jesus Martinez","state":"TX","wc":"M-59","cat":"Equipped","div":"J","total":0.0,"best":417.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jesusmartinez10"},
{"name":"Adrian Mcghee","state":"GA","wc":"M-66","cat":"Raw","div":"SO","total":372.5,"best":372.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"adrianmcghee"},
{"name":"Ben Boehm","state":"IN","wc":"M-66","cat":"Raw","div":"SO","total":262.5,"best":265.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"benboehm"},
{"name":"Elliot Guinn","state":"--","wc":"M-66","cat":"Raw","div":"SO","total":0.0,"best":290.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"elliotguinn"},
{"name":"Manuel Rodriguez","state":"FL","wc":"M-66","cat":"Raw","div":"M4","total":440.0,"best":615.0,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"May '25","ig":"","opl":"manuelrodriguez7"},
{"name":"Richard Flaum","state":"TX","wc":"M-66","cat":"Raw","div":"M4","total":0.0,"best":257.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"richardflaum"},
{"name":"Eric Verbel","state":"NJ","wc":"M-66","cat":"Raw","div":"M3","total":75.0,"best":457.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '23","ig":"","opl":"ericverbel"},
{"name":"Michael Feldhaus","state":"OH","wc":"M-66","cat":"Raw","div":"M3","total":0.0,"best":540.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"michaelfeldhaus"},
{"name":"Jay Thompson","state":"NC","wc":"M-66","cat":"Raw","div":"M3","total":0.0,"best":510.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '24","ig":"","opl":"jaythompson"},
{"name":"Rick Brink","state":"CO","wc":"M-66","cat":"Raw","div":"M2","total":522.5,"best":522.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '23","ig":"","opl":"rickbrink"},
{"name":"Ron Brinker","state":"OH","wc":"M-66","cat":"Raw","div":"M2","total":497.5,"best":510.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Feb '24","ig":"","opl":"ronbrinker"},
{"name":"Tuan Nguyen","state":"PA","wc":"M-66","cat":"Raw","div":"M1","total":540.0,"best":637.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"tuannguyen5"},
{"name":"An Nguyen","state":"CA","wc":"M-66","cat":"Raw","div":"M1","total":0.0,"best":580.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"an_lifts","opl":"annguyen4"},
{"name":"Shawn Frasquillo","state":"TX","wc":"M-66","cat":"Raw","div":"M1","total":0.0,"best":590.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '23","ig":"","opl":"shawnfrasquillo"},
{"name":"Wyatt Dodson","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":405.0,"best":460.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"wyattdodson"},
{"name":"Sammy Sobie","state":"--","wc":"M-66","cat":"Raw","div":"SJ","total":340.0,"best":397.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"sammysobie"},
{"name":"Suhan Hajela","state":"CA","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":492.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"suhanhajela"},
{"name":"Denzil Smith","state":"AR","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":565.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"denzilsmith"},
{"name":"Brody Wyatt","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":542.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"brodywyatt"},
{"name":"Benjamin Yang","state":"NY","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":560.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"benjaminyang"},
{"name":"Berkeley Britt","state":"GA","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":420.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"berkeleybritt"},
{"name":"Bryan Lara","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":425.0,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"bryanlara"},
{"name":"Anthony Acampora","state":"--","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":487.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"anthonyacampora"},
{"name":"Levi Jansen","state":"WI","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":490.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"levijansen"},
{"name":"Kyren Howard","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":507.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"kyrenhoward"},
{"name":"Damien Sanchez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":425.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '23","ig":"","opl":"damiensanchez"},
{"name":"Martin Alvarez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":562.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"martinalvarez"},
{"name":"Tucker Abbott","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":542.5,"best":620.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"tuckerabbott"},
{"name":"Pierce Woodworth","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":500.0,"best":535.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"piercewoodworth"},
{"name":"Nathan Lovemore","state":"LA","wc":"M-66","cat":"Raw","div":"J","total":75.0,"best":610.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"nathanlovemore"},
{"name":"Enzo Vickroy","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":555.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"enzovickroy"},
{"name":"Timothy Ochoa","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":662.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"timothyochoa"},
{"name":"Hayden Wolf","state":"WI","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":435.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Dec '25","ig":"","opl":"haydenwolf"},
{"name":"Tristian Davila","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":677.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"tristiandavila"},
{"name":"Austin Harris","state":"NC","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":557.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '24","ig":"","opl":"austinharris5"},
{"name":"Evan Hawk","state":"FL","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":713.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"evanhawk"},
{"name":"Tanner Jacobi","state":"MO","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":405.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"tannerjacobi"},
{"name":"Hassan Coleman","state":"GA","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":670.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"hassancoleman"},
{"name":"Xavier Zambrano","state":"SC","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":527.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"xavierzambrano"},
{"name":"Vedant Ray","state":"OH","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":537.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '24","ig":"","opl":"vedantray"},
{"name":"Nicholas Lagen","state":"AL","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":577.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"nicholaslagen"},
{"name":"Alex Galant","state":"CO","wc":"M-66","cat":"Equipped","div":"M4","total":0.0,"best":205.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"alexgalant"},
{"name":"Eric Verbel","state":"NJ","wc":"M-66","cat":"Equipped","div":"M3","total":460.0,"best":410.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"ericverbel"},
{"name":"Hennis Washington Iii","state":"--","wc":"M-66","cat":"Equipped","div":"M2","total":0.0,"best":517.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"henniswashingtoniii"},
{"name":"Kamil Iwasiow","state":"FL","wc":"M-66","cat":"Equipped","div":"M1","total":675.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bryand Mao","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":502.5,"best":502.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"bryandmao"},
{"name":"George Cunningham Iv","state":"NC","wc":"M-66","cat":"Equipped","div":"SJ","total":435.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew J Pena","state":"TX","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":417.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"andrewjpena"},
{"name":"Charles Battaglia","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jace Duchesne","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":490.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"jaceduchesne"},
{"name":"Alex Folmar","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Robert Godinez","state":"--","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":340.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"robertgodinez2"},
{"name":"Marcelo Chanaba","state":"--","wc":"M-66","cat":"Equipped","div":"J","total":512.5,"best":527.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"marcelochanaba"},
{"name":"Gahel Griner","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":490.0,"best":572.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Nov '24","ig":"","opl":"gahelgriner"},
{"name":"Joseph Marceaux","state":"LA","wc":"M-66","cat":"Equipped","div":"J","total":75.0,"best":435.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"josephmarceaux"},
{"name":"Isaiah Glasgow","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Juventino Zapata Iv","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew Gonzalez","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0.0,"best":675.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"andrewgonzalez10"},
{"name":"David Floyd","state":"GA","wc":"M-74","cat":"Raw","div":"SO","total":0.0,"best":392.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"davidfloyd"},
{"name":"Joseph Songco","state":"TX","wc":"M-74","cat":"Raw","div":"SA","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Laflamme","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":450.0,"best":526.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"johnlaflamme83kg","opl":"johnlaflamme"},
{"name":"Louis Caruana","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":267.5,"best":300.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"louiscaruana"},
{"name":"Thomas Ashbrook","state":"CA","wc":"M-74","cat":"Raw","div":"M3","total":485.0,"best":485.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"thomasashbrook"},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Raw","div":"M3","total":142.5,"best":867.5,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"michaelrodriguez1"},
{"name":"Robert Lane","state":"WA","wc":"M-74","cat":"Raw","div":"M2","total":602.5,"best":602.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"lane.robert.s","opl":"robertlane1"},
{"name":"Matthew Chapman","state":"VA","wc":"M-74","cat":"Raw","div":"M2","total":400.0,"best":400.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '24","ig":"","opl":"matthewchapman1"},
{"name":"Patrick Foster","state":"PA","wc":"M-74","cat":"Raw","div":"M2","total":0.0,"best":525.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"","opl":"patrickfoster"},
{"name":"Donald Bigham","state":"SC","wc":"M-74","cat":"Raw","div":"M2","total":0.0,"best":647.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"onetimepowerlifting","opl":"donaldbigham"},
{"name":"Michael Haran","state":"MD","wc":"M-74","cat":"Raw","div":"M1","total":642.5,"best":637.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '23","ig":"","opl":"michaelharan"},
{"name":"Lee Rogers","state":"NH","wc":"M-74","cat":"Raw","div":"M1","total":487.5,"best":510.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"leerogers"},
{"name":"Carlos Mata","state":"--","wc":"M-74","cat":"Raw","div":"M1","total":135.0,"best":682.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"carlosmata1"},
{"name":"Due Nguyen","state":"NY","wc":"M-74","cat":"Raw","div":"M1","total":0.0,"best":457.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"duenguyen2"},
{"name":"Weston Lisemby","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":572.5,"best":610.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"westonlisemby"},
{"name":"Javier Gonzalez","state":"WI","wc":"M-74","cat":"Raw","div":"SJ","total":75.0,"best":432.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"javiergonzalez4"},
{"name":"Graham Steel","state":"FL","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":600.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"grahamsteel"},
{"name":"Joshua Ambrose","state":"--","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":582.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"","opl":"joshuaambrose"},
{"name":"Xzavier Aguilar","state":"--","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":597.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"xzavieraguilar"},
{"name":"Parker Golden","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":480.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"parkergolden"},
{"name":"Evan Machik","state":"PA","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":565.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"May '25","ig":"","opl":"evanmachik"},
{"name":"Vihaan Barar","state":"NJ","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":537.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Aug '25","ig":"","opl":"vihaanbarar"},
{"name":"Jaxon Backus","state":"AR","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":520.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"jaxonbackus"},
{"name":"Jamie Huh","state":"CA","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":442.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jamiehuh"},
{"name":"Ben Tran","state":"MA","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":680.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"bentran"},
{"name":"Kane West","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Connor Townsend","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Mays","state":"OH","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":210.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"davidmays"},
{"name":"Damon Llamas","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":440.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"damonllamas"},
{"name":"Orlando Torres","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":617.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"orlandotorres"},
{"name":"Everardo Crispin","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":722.5,"best":730.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"_.crispin03","opl":"everardocrispin"},
{"name":"Jeremy Rodriguez","state":"MA","wc":"M-74","cat":"Raw","div":"J","total":685.0,"best":715.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"jrodbigquad","opl":"jeremyrodriguez5"},
{"name":"Asante Gordon","state":"IA","wc":"M-74","cat":"Raw","div":"J","total":607.5,"best":685.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"asantegordon"},
{"name":"Cameron Kennedy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":592.5,"best":640.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"cameronkennedy1"},
{"name":"Rito Flores","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":590.5,"best":657.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"rito75kg","opl":"ritoflores"},
{"name":"Alexander Lucero","state":"NM","wc":"M-74","cat":"Raw","div":"J","total":557.5,"best":560.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"alexanderlucero"},
{"name":"Garrett Rogers","state":"DE","wc":"M-74","cat":"Raw","div":"J","total":555.0,"best":667.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"gmoneystrong","opl":"garrettrogers"},
{"name":"Wyatt Abbott","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":460.0,"best":497.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"wyattabbott"},
{"name":"Nicolas Gaines","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":75.0,"best":685.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Mar '25","ig":"nickgaines74","opl":"nicolasgaines"},
{"name":"Gabriel Garza","state":"--","wc":"M-74","cat":"Raw","div":"J","total":75.0,"best":622.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"gabrielgarza7"},
{"name":"Ivan Liu","state":"GA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":680.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"ivanliu1"},
{"name":"Edgar Duran","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":595.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"edgarduran"},
{"name":"Joshua Lawson","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":607.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"joshualawson"},
{"name":"Kyle Cones","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":410.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kylecones"},
{"name":"Braden Mertz","state":"PA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":607.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"bradenmertz"},
{"name":"Brayden Molinyawe","state":"OH","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":735.0,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"braydenmolinyawe"},
{"name":"Gavin Gill","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":572.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"gavingill"},
{"name":"Alexander Hunt","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":582.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"alexanderhunt"},
{"name":"Byron Moore","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":670.0,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"byronmoore"},
{"name":"Harrison Lamy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":552.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"harrisonlamy"},
{"name":"Jacob Anucilla","state":"CA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":590.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jacobanucilla"},
{"name":"Luke Christopherson","state":"MN","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":655.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"lukechristopherson"},
{"name":"Santiago Lara","state":"LA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":437.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"santiagolara"},
{"name":"Kai Vasquez","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":660.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"kaivasquez"},
{"name":"Caleb Chan","state":"CA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":700.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"calebchan"},
{"name":"James Beard","state":"MS","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":507.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jamesbeard"},
{"name":"Alejandro Mccormick","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":512.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"alejandromccormick"},
{"name":"Emiliano Fraga","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":610.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Oct '25","ig":"","opl":"emilianofraga"},
{"name":"Durwin Ho","state":"NJ","wc":"M-74","cat":"Raw","div":"O","total":0.0,"best":585.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"durwinho"},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Equipped","div":"M3","total":643.0,"best":643.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"michaelrodriguez13"},
{"name":"Liam Kincanon","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":0.0,"best":542.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"liamkincanon"},
{"name":"Gavin Desalvo","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":0.0,"best":545.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"gavindesalvo"},
{"name":"Lawson Lillo","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":75.0,"best":760.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"lawsonlillo"},
{"name":"Logan Edmonds","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":0.0,"best":730.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"loganedmonds"},
{"name":"Will Eckford","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":0.0,"best":821.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '26","ig":"","opl":"willeckford"},
{"name":"Cole Goudeau","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Noah Duplichan","state":"LA","wc":"M-83","cat":"Raw","div":"SO","total":0.0,"best":385.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"noahduplichan"},
{"name":"Ken Levine","state":"PA","wc":"M-83","cat":"Raw","div":"M4","total":432.5,"best":462.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"kenlevine"},
{"name":"Russ Marr","state":"NM","wc":"M-83","cat":"Raw","div":"M4","total":0.0,"best":477.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '23","ig":"","opl":"russmarr"},
{"name":"Willie Wong","state":"CA","wc":"M-83","cat":"Raw","div":"M3","total":552.5,"best":555.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"willie_wong83kg","opl":"williewong1"},
{"name":"Carlos Lewis","state":"TX","wc":"M-83","cat":"Raw","div":"M3","total":535.0,"best":555.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '25","ig":"","opl":"carloslewis"},
{"name":"Laddie Gibson","state":"NY","wc":"M-83","cat":"Raw","div":"M3","total":0.0,"best":575.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"laddiegibson"},
{"name":"Steve Destephen","state":"OH","wc":"M-83","cat":"Raw","div":"M3","total":0.0,"best":455.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"stevedestephen"},
{"name":"Jesus Fragoso","state":"--","wc":"M-83","cat":"Raw","div":"M2","total":625.0,"best":647.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"deadliftingjesus","opl":"jesusfragoso"},
{"name":"Thaddeus Say","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":560.0,"best":560.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"thaddeussay"},
{"name":"Garrin Clark","state":"MI","wc":"M-83","cat":"Raw","div":"M2","total":225.0,"best":552.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"gmanf3","opl":"garrinclark"},
{"name":"Mfon Akpan","state":"OK","wc":"M-83","cat":"Raw","div":"M2","total":0.0,"best":462.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"mfonakpan"},
{"name":"Sikander Aasim","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":0.0,"best":480.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"sikanderaasim"},
{"name":"Ross Leppala","state":"GA","wc":"M-83","cat":"Raw","div":"M1","total":747.5,"best":747.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"ross.leppala","opl":"rossleppala"},
{"name":"Anthony Perkins","state":"TX","wc":"M-83","cat":"Raw","div":"M1","total":642.5,"best":642.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"anthonyperkins1"},
{"name":"Robert Rodriguez","state":"LA","wc":"M-83","cat":"Raw","div":"M1","total":430.0,"best":437.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"robertrodriguez10"},
{"name":"Julien Comte","state":"PA","wc":"M-83","cat":"Raw","div":"M1","total":75.0,"best":647.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"","opl":"juliencomte"},
{"name":"Lauren Cohen","state":"MA","wc":"M-83","cat":"Raw","div":"M1","total":75.0,"best":702.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Jul '25","ig":"","opl":"laurencohen"},
{"name":"Ben Dresher","state":"--","wc":"M-83","cat":"Raw","div":"M1","total":0.0,"best":682.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Oct '24","ig":"ben.rpe10","opl":"bendresher"},
{"name":"Lionel Stoxstell Ii","state":"NV","wc":"M-83","cat":"Raw","div":"M1","total":0.0,"best":585.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"lionelstoxstellii"},
{"name":"Ryan Kuhlmann","state":"AL","wc":"M-83","cat":"Raw","div":"M1","total":0.0,"best":590.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"robo_rhino42","opl":"ryankuhlmann"},
{"name":"Jaime Velasquez","state":"MD","wc":"M-83","cat":"Raw","div":"M1","total":0.0,"best":505.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jaimevelasquez"},
{"name":"Eli Sobie","state":"MI","wc":"M-83","cat":"Raw","div":"SJ","total":477.5,"best":540.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"elisobie"},
{"name":"Aidan Bauer","state":"AZ","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":535.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"aidanbauer"},
{"name":"Mason Madji","state":"NC","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":465.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"masonmadji"},
{"name":"Ogden Horowitz Shea","state":"NY","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":635.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"ogdenhorowitzshea"},
{"name":"Advaith Goud Sirisanagandla","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":537.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"advaithgoudsirisanagandla"},
{"name":"Tate Van Essen","state":"IA","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":640.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"tatevanessen"},
{"name":"Valentin Caballero Rivera","state":"CA","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Longano","state":"OH","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":587.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"johnlongano"},
{"name":"Joshua Tang","state":"MD","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":455.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"anabolic_goldfish","opl":"joshuatang"},
{"name":"Oscar Rivas","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":627.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"oscarrivas"},
{"name":"Kayden Curtiss","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":432.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"kaydencurtiss"},
{"name":"Timothy Coleman","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":592.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Jul '25","ig":"","opl":"timothycoleman"},
{"name":"Matthew Lim","state":"--","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":697.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"matthewlim"},
{"name":"Brody Williamson","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":505.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"brodywilliamson"},
{"name":"Jairo Ordonez Jr","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eric Gonzalez-Tunon","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":745.0,"best":745.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"the.war.on.gravity","opl":"ericgonzaleztunon"},
{"name":"Dillon Johnson","state":"--","wc":"M-83","cat":"Raw","div":"J","total":715.0,"best":835.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"_.dillonjohnson","opl":"dillonjohnson1"},
{"name":"Kacey Morgan","state":"AL","wc":"M-83","cat":"Raw","div":"J","total":600.0,"best":635.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"kaceymorgan2"},
{"name":"Raphael Rivera","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":575.0,"best":605.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"raphaelrivera1"},
{"name":"Noah Raulston","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":565.0,"best":637.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"noahraulston"},
{"name":"Jonathan Vasquez","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":542.5,"best":560.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jonathanvasquez"},
{"name":"Rayce Pennartz","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":485.0,"best":527.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"raycepennartz"},
{"name":"Ibrahiem Hamed","state":"LA","wc":"M-83","cat":"Raw","div":"J","total":75.0,"best":582.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Nov '24","ig":"","opl":"ibrahiemhamed"},
{"name":"Jordan Zavala","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":545.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"jordanzavala"},
{"name":"Calvin Trapp","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":705.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"calvintrapp"},
{"name":"Daniel Castaneda","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":605.0,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"danielcastaneda3"},
{"name":"Wilson Guo","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":530.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"wilsonguo"},
{"name":"Aaron Welch","state":"CO","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":780.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"aaronwelch"},
{"name":"Talon Pippin","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":495.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"talonpippin"},
{"name":"Justin Ng","state":"IL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":692.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"ng82.5kg","opl":"justinng1"},
{"name":"Sean Fitzgerald","state":"PA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":677.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"seanfitzpl","opl":"seanfitzgerald"},
{"name":"Aiolya Zhang","state":"MI","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":610.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Aug '25","ig":"","opl":"aiolyazhang"},
{"name":"Ryan Bautista","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":760.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"ryanbautista"},
{"name":"Aron Atakuzi","state":"OK","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":667.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"aronatakuzi"},
{"name":"Brendon Vineyard","state":"NY","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":687.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"brendonvineyard"},
{"name":"Patrick Broussard","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":382.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"patrickbroussard"},
{"name":"Dylan Stefan","state":"OH","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":690.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"dylanstefan"},
{"name":"Ryan Samadi","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":585.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"ryansamadi"},
{"name":"Joshua Ham","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":555.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '26","ig":"","opl":"joshuaham"},
{"name":"Xavier Mccarty","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":735.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"xaviermccarty"},
{"name":"Wayne Anderson","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":512.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"wayneanderson3"},
{"name":"Samuel Johnson","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":712.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"samueljohnson4"},
{"name":"Jackson Voss","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":660.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"jacksonvoss"},
{"name":"Danny Lawrence","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":725.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"dannylawrence"},
{"name":"Max Wright","state":"KY","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":787.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '25","ig":"maxcristwright","opl":"maxwright"},
{"name":"Jack Schultz","state":"IA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Juan Renderos","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":572.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '25","ig":"","opl":"juanrenderos"},
{"name":"Luke Medina","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":730.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"lukemedina"},
{"name":"Fisher Chung","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luis Alvarado","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":520.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"luisalvarado"},
{"name":"Gabriel Pongchit","state":"MD","wc":"M-83","cat":"Raw","div":"O","total":585.0,"best":585.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '24","ig":"","opl":"gabrielpongchit"},
{"name":"Thomas Fagiano","state":"NH","wc":"M-83","cat":"Raw","div":"O","total":0.0,"best":670.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"thomasfagiano"},
{"name":"Joshua Rafael Ramos","state":"CA","wc":"M-83","cat":"Raw","div":"O","total":0.0,"best":527.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '25","ig":"","opl":"joshuarafaelramos"},
{"name":"Will Mankhey","state":"NE","wc":"M-83","cat":"Raw","div":"O","total":0.0,"best":685.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"willmankhey"},
{"name":"William Clayton","state":"NJ","wc":"M-83","cat":"Equipped","div":"M4","total":387.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Chris Boillot","state":"AZ","wc":"M-83","cat":"Equipped","div":"M3","total":607.5,"best":607.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"chrisboillot"},
{"name":"Keith Nautel","state":"NY","wc":"M-83","cat":"Equipped","div":"M3","total":0.0,"best":705.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"keithnautel"},
{"name":"Travis Pardue","state":"NC","wc":"M-83","cat":"Equipped","div":"M2","total":590.0,"best":570.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"travispardue"},
{"name":"Jose Munoz","state":"NM","wc":"M-83","cat":"Equipped","div":"M1","total":392.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nate Crowder","state":"GA","wc":"M-83","cat":"Equipped","div":"M1","total":75.0,"best":610.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"natecrowder"},
{"name":"Wyatt Gremillion","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0.0,"best":610.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"wyattgremillion"},
{"name":"Juan David Aguirre Iii","state":"TX","wc":"M-83","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Paxton Audler","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Delaney","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ty Felle","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":595.0,"best":592.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Apr '24","ig":"","opl":"tyfelle"},
{"name":"Carter Lewis","state":"LA","wc":"M-83","cat":"Equipped","div":"J","total":75.0,"best":797.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"carterlewis"},
{"name":"Troy Nguyen","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":0.0,"best":582.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"troynguyen"},
{"name":"Stephen Simpson","state":"IN","wc":"M-93","cat":"Raw","div":"SO","total":0.0,"best":335.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"stephensimpson2"},
{"name":"Robert Moore","state":"MD","wc":"M-93","cat":"Raw","div":"M4","total":490.0,"best":727.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Nov '24","ig":"","opl":"robertmoore11"},
{"name":"Phillip Rosenstern","state":"PA","wc":"M-93","cat":"Raw","div":"M4","total":487.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bruce Bullock","state":"NC","wc":"M-93","cat":"Raw","div":"M4","total":0.0,"best":295.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"brucebullock"},
{"name":"Peter Tressel","state":"MN","wc":"M-93","cat":"Raw","div":"M3","total":502.5,"best":517.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"petertressel"},
{"name":"Steven Carpenter","state":"FL","wc":"M-93","cat":"Raw","div":"M3","total":490.0,"best":580.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Mar '24","ig":"","opl":"stevencarpenter1"},
{"name":"Todd Peterson","state":"NV","wc":"M-93","cat":"Raw","div":"M3","total":472.5,"best":472.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Sep '24","ig":"","opl":"toddpeterson"},
{"name":"Darrell Gaspard","state":"LA","wc":"M-93","cat":"Raw","div":"M3","total":75.0,"best":537.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"darrellgaspard"},
{"name":"David Ricks","state":"FL","wc":"M-93","cat":"Raw","div":"M3","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"ricks.david","opl":""},
{"name":"Troy Gibson","state":"NY","wc":"M-93","cat":"Raw","div":"M3","total":0.0,"best":400.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"troygibson"},
{"name":"Edward Ruland","state":"FL","wc":"M-93","cat":"Raw","div":"M2","total":645.0,"best":645.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"edwardruland"},
{"name":"Marquies Sampa","state":"TX","wc":"M-93","cat":"Raw","div":"M2","total":0.0,"best":570.0,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"marquiessampa"},
{"name":"Rodney Elm","state":"AZ","wc":"M-93","cat":"Raw","div":"M2","total":0.0,"best":605.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"rodneyelm"},
{"name":"Layne Norton","state":"FL","wc":"M-93","cat":"Raw","div":"M1","total":788.0,"best":788.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"biolayne","opl":"laynenorton"},
{"name":"Michael Reed","state":"OH","wc":"M-93","cat":"Raw","div":"M1","total":682.5,"best":712.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Feb '24","ig":"crazysocks.powerlifter","opl":"michaelreed4"},
{"name":"Nathan Kulas","state":"ME","wc":"M-93","cat":"Raw","div":"M1","total":75.0,"best":805.0,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"omrsafetyo","opl":"nathankulas"},
{"name":"Courtney Leffall","state":"TX","wc":"M-93","cat":"Raw","div":"M1","total":0.0,"best":555.0,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '25","ig":"","opl":"courtneyleffall"},
{"name":"Roy Jackson","state":"AL","wc":"M-93","cat":"Raw","div":"M1","total":0.0,"best":825.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"royjackson"},
{"name":"Sam Maiewski","state":"MA","wc":"M-93","cat":"Raw","div":"SJ","total":550.0,"best":670.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"sammaiewski"},
{"name":"Eric Jin","state":"IN","wc":"M-93","cat":"Raw","div":"SJ","total":545.0,"best":610.0,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"ericjin2"},
{"name":"Noel Kurtin","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":415.0,"best":672.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"noelkurtin"},
{"name":"Xander Lane","state":"OR","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":367.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"xanderlane"},
{"name":"Ethan Cohen","state":"GA","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":717.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"ethancohen2"},
{"name":"Selwyn Logan","state":"ME","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":577.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"selwynlogan"},
{"name":"Liam Goldich","state":"PA","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":652.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"liamgoldich"},
{"name":"Dylan Moyal","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":632.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"dylanmoyal"},
{"name":"Justin Corle","state":"MI","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":690.0,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Feb '26","ig":"justcorle","opl":"justincorle"},
{"name":"Paul Mourain","state":"LA","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":587.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"paulmourain"},
{"name":"Jack Cox","state":"NJ","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":652.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"jackcox"},
{"name":"Jet Jones","state":"WI","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tyler Plumley","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Manar Albeirakdar","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":515.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Jul '25","ig":"","opl":"manaralbeirakdar"},
{"name":"Kyle White","state":"--","wc":"M-93","cat":"Raw","div":"J","total":807.5,"best":820.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"kylewhite1"},
{"name":"Jack Reynolds","state":"MA","wc":"M-93","cat":"Raw","div":"J","total":795.0,"best":825.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"jack_reynolds333","opl":"jackreynolds"},
{"name":"Dylan Albert","state":"LA","wc":"M-93","cat":"Raw","div":"J","total":725.0,"best":780.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"dylanalbert"},
{"name":"Nahuel Peralta","state":"--","wc":"M-93","cat":"Raw","div":"J","total":707.5,"best":707.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"nahuelperalta"},
{"name":"Brendan Mackin","state":"--","wc":"M-93","cat":"Raw","div":"J","total":680.0,"best":717.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"brendanmackin"},
{"name":"Demitri Ayala","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":680.0,"best":837.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"dtree707","opl":"demitriayala"},
{"name":"Alex Vastey","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":637.5,"best":662.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"alexvastey"},
{"name":"Nick Walker","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":635.0,"best":647.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"nickwalker2"},
{"name":"Victor Herrera","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":635.0,"best":687.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"victorherrera1"},
{"name":"Laakea Faurot","state":"HI","wc":"M-93","cat":"Raw","div":"J","total":602.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aaron Estocin","state":"NM","wc":"M-93","cat":"Raw","div":"J","total":562.5,"best":597.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jul '25","ig":"","opl":"aaronestocin"},
{"name":"Riley Morgan","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":657.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"rileymorgan1"},
{"name":"Davis Wenger","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":555.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"daviswenger"},
{"name":"Waylon Vidler","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":682.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"waylonvidler"},
{"name":"Adam Greer","state":"CA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":617.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"adamgreer"},
{"name":"Cameron Thayer","state":"--","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":592.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"cameronthayer"},
{"name":"Miles Hartway","state":"NY","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":737.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"mileshartway"},
{"name":"Devin Mervau","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":865.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"devinmervau","opl":"devinmervau"},
{"name":"Jake Lewis","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":697.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jakelewis4"},
{"name":"Ben Mckinney","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":695.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"benmckinney"},
{"name":"Evan Ross","state":"VA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":832.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"minihulk_lifts","opl":"evanross"},
{"name":"Adam Bretsch","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":620.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"adambretsch"},
{"name":"Jacob Danielson","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":690.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"jacobdanielson"},
{"name":"Jonathan Eppler","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":652.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"jonathaneppler"},
{"name":"Simon Powell","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":477.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"simonpowell2"},
{"name":"Kane Smith","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":720.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"kanererer","opl":"kanesmith"},
{"name":"Nick Sanchelli","state":"SC","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":685.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"nicksanchelli"},
{"name":"Peyton Morgan","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":587.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"peytonmorgan"},
{"name":"Jonatan Hernandez","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":575.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jonatanhernandez"},
{"name":"Jayvon Irwin","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Justin Blechinger","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":682.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '24","ig":"","opl":"justinblechinger"},
{"name":"Luke Mitchell","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"lifterluke","opl":""},
{"name":"Samuel Lopez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":602.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '25","ig":"","opl":"samuellopez"},
{"name":"Eric Pinon","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":645.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"ericpinon"},
{"name":"Arnol Rosales","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":535.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"arnolrosales"},
{"name":"Aryan Nautiyal","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":667.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"aryannautiyal"},
{"name":"Emanol Gonzalez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":557.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Jul '25","ig":"","opl":"emanolgonzalez"},
{"name":"Jovanni Ontiveros","state":"TX","wc":"M-93","cat":"Raw","div":"O","total":0.0,"best":512.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jovanniontiveros"},
{"name":"Thomas Cencich","state":"CO","wc":"M-93","cat":"Equipped","div":"M3","total":606.0,"best":602.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"thomascencich"},
{"name":"James Brown","state":"PA","wc":"M-93","cat":"Equipped","div":"M3","total":587.5,"best":690.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jamesbrown3"},
{"name":"Gerard Dally","state":"--","wc":"M-93","cat":"Equipped","div":"M3","total":530.0,"best":522.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"gerarddally"},
{"name":"Steven Carpenter","state":"FL","wc":"M-93","cat":"Equipped","div":"M3","total":490.0,"best":457.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jul '25","ig":"","opl":"stevencarpenter2"},
{"name":"Marcos Sanchez","state":"--","wc":"M-93","cat":"Equipped","div":"M2","total":642.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"William Kahapea","state":"--","wc":"M-93","cat":"Equipped","div":"M2","total":585.0,"best":615.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '24","ig":"","opl":"williamkahapea"},
{"name":"Rick Fowler","state":"IL","wc":"M-93","cat":"Equipped","div":"M2","total":75.0,"best":555.0,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Jul '24","ig":"","opl":"rickfowler"},
{"name":"Matt Rodock","state":"WI","wc":"M-93","cat":"Equipped","div":"M1","total":847.5,"best":862.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"mattrodock"},
{"name":"Jerry Contreras","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brennan Jarrell","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":0.0,"best":542.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"brennanjarrell"},
{"name":"Caleb Frnka","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":0.0,"best":607.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"calebfrnka"},
{"name":"Thomas Killam","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rocky Dufort","state":"LA","wc":"M-93","cat":"Equipped","div":"J","total":637.5,"best":732.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"rockydufort"},
{"name":"Ronnie Guerra","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":75.0,"best":662.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"","opl":"ronnieguerra"},
{"name":"Encarnacion Lugo Jr.","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"SO","total":527.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dion Thomas","state":"GA","wc":"M-105","cat":"Raw","div":"SO","total":452.5,"best":462.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Mar '25","ig":"","opl":"dionthomas"},
{"name":"Dave Schneider","state":"OH","wc":"M-105","cat":"Raw","div":"M4","total":490.0,"best":500.0,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"daveschneider1"},
{"name":"Michael Lobb","state":"OR","wc":"M-105","cat":"Raw","div":"M4","total":440.0,"best":450.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"michaellobb"},
{"name":"John Wetter","state":"--","wc":"M-105","cat":"Raw","div":"M3","total":545.0,"best":552.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"","opl":"johnwetter"},
{"name":"Peter Severenuk","state":"NJ","wc":"M-105","cat":"Raw","div":"M3","total":427.5,"best":455.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"peterseverenuk"},
{"name":"Jeffrey Fellows","state":"OR","wc":"M-105","cat":"Raw","div":"M3","total":417.5,"best":437.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jeffreyfellows"},
{"name":"Jeff Olsen","state":"WA","wc":"M-105","cat":"Raw","div":"M3","total":0.0,"best":600.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jeffolsen"},
{"name":"Egan Walker","state":"NV","wc":"M-105","cat":"Raw","div":"M3","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Koch","state":"MN","wc":"M-105","cat":"Raw","div":"M2","total":700.0,"best":712.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"davidkoch1"},
{"name":"Chris Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"M2","total":75.0,"best":682.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"chrisengebretson"},
{"name":"David Nix","state":"OR","wc":"M-105","cat":"Raw","div":"M2","total":0.0,"best":530.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"davidnix"},
{"name":"Matthew Naegel","state":"SC","wc":"M-105","cat":"Raw","div":"M2","total":0.0,"best":622.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"matthewnaegel"},
{"name":"Bob Eucker","state":"OH","wc":"M-105","cat":"Raw","div":"M2","total":0.0,"best":742.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '23","ig":"bobeucker","opl":"bobeucker"},
{"name":"Carlos Santoliquido","state":"--","wc":"M-105","cat":"Raw","div":"M1","total":832.5,"best":832.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Mar '24","ig":"","opl":"carlossantoliquido"},
{"name":"Ls Mcclain","state":"--","wc":"M-105","cat":"Raw","div":"M1","total":812.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"lsmcclain","opl":""},
{"name":"Ryan Donnelly","state":"NJ","wc":"M-105","cat":"Raw","div":"M1","total":742.5,"best":752.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"Nov '23","ig":"dukeknobbz","opl":"ryandonnelly"},
{"name":"Jermaine Williams","state":"MD","wc":"M-105","cat":"Raw","div":"M1","total":575.0,"best":575.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"jermainewilliams"},
{"name":"Gerald Ratulowski","state":"TX","wc":"M-105","cat":"Raw","div":"M1","total":75.0,"best":705.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"geraldratulowski"},
{"name":"Alpha Dumbuya","state":"GA","wc":"M-105","cat":"Raw","div":"M1","total":0.0,"best":655.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"alphadumbuya"},
{"name":"Nikhil Karulkar","state":"WA","wc":"M-105","cat":"Raw","div":"M1","total":0.0,"best":607.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"nikhilkarulkar"},
{"name":"Jason Coble","state":"CA","wc":"M-105","cat":"Raw","div":"M1","total":0.0,"best":735.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jasoncoble"},
{"name":"Jacob Tumminello","state":"MS","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":702.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"jacobtumminello"},
{"name":"Aaron Quail","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":675.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"aaronquail"},
{"name":"Vedant Remella","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":542.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"vedantremella"},
{"name":"Matheo Nave","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":452.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"matheonave"},
{"name":"Michael Cruz","state":"OK","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":732.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '26","ig":"","opl":"michaelcruz8"},
{"name":"Brenden Ross","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":760.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"brendenross"},
{"name":"Sawyer Reinart","state":"WI","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":517.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Mar '24","ig":"","opl":"sawyerreinart"},
{"name":"Matthew Teal","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Austin Wilson","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":788.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"austinwilson8"},
{"name":"Hunter Olsen","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":770.0,"best":797.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"hunterolsen"},
{"name":"Evan Gonsorcik","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":730.0,"best":730.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"evangonsorcik"},
{"name":"Ej Chikando","state":"--","wc":"M-105","cat":"Raw","div":"J","total":692.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Erick Severino","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":692.5,"best":725.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"erickseverino"},
{"name":"Cash Zumhingst","state":"IN","wc":"M-105","cat":"Raw","div":"J","total":660.0,"best":750.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"cashzumhingst"},
{"name":"Ashton Smith","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":650.0,"best":687.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"ashtonsmith4"},
{"name":"Angelo Carpino","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":630.0,"best":642.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"angelocarpino"},
{"name":"Gil Romero Lopez","state":"AZ","wc":"M-105","cat":"Raw","div":"J","total":627.5,"best":675.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"gilromerolopez"},
{"name":"Kaiden Funderburk","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":617.5,"best":677.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"kaidenfunderburk"},
{"name":"Steven Aderhold","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":572.5,"best":622.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"stevenaderhold"},
{"name":"Josue Aguilera","state":"--","wc":"M-105","cat":"Raw","div":"J","total":75.0,"best":775.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"josueaguilera"},
{"name":"Luke Wymer","state":"OH","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":802.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"lukewymer1"},
{"name":"George Acosta","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":695.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"georgeacosta"},
{"name":"Joshua Lawson","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":607.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"joshualawson"},
{"name":"Kaden Mullins","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":700.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"kadenmullins"},
{"name":"Austin Mckinney","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":440.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"austinmckinney"},
{"name":"Mark Hoffman","state":"ID","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":702.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"markhoffman3"},
{"name":"Lawrence Jones","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":910.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"lawrencejones"},
{"name":"Alex Paige","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":637.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"alexpaige"},
{"name":"Charles Porter","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":722.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"charlesporter"},
{"name":"Zachary Olsen","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":737.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"zacharyolsen"},
{"name":"Thomas Boyd","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":785.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"thomasboyd"},
{"name":"Nico Meisser","state":"CA","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":655.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"nicomeisser"},
{"name":"Dallas Romanowski","state":"NC","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":790.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"dallasromanowski"},
{"name":"Fernando Rivera","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":625.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"May '25","ig":"","opl":"fernandorivera2"},
{"name":"Noah Schmidtberger","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":547.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '25","ig":"","opl":"noahschmidtberger"},
{"name":"Austin Hamilton","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":637.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"austinhamilton2"},
{"name":"Bryan Prado","state":"CA","wc":"M-105","cat":"Raw","div":"O","total":0.0,"best":782.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"bryanprado"},
{"name":"Keith Taylor","state":"--","wc":"M-105","cat":"Equipped","div":"M4","total":547.5,"best":535.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"keithtaylor2"},
{"name":"Richard Johnson","state":"MA","wc":"M-105","cat":"Equipped","div":"M3","total":587.5,"best":590.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"richardjohnson2"},
{"name":"Ron Falcone Jr","state":"NJ","wc":"M-105","cat":"Equipped","div":"M3","total":500.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dana Rosenzweig","state":"IL","wc":"M-105","cat":"Equipped","div":"M3","total":475.0,"best":557.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"danarosenzweig"},
{"name":"Dale Mclaren","state":"GA","wc":"M-105","cat":"Equipped","div":"M2","total":912.5,"best":935.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"dalemclaren"},
{"name":"Ryan Donnelly","state":"NJ","wc":"M-105","cat":"Equipped","div":"M1","total":805.0,"best":850.0,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"dukeknobbz","opl":"ryandonnelly"},
{"name":"Pete Nees","state":"--","wc":"M-105","cat":"Equipped","div":"M1","total":0.0,"best":802.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"petenees"},
{"name":"Cooper Trosclair","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":532.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"coopertrosclair"},
{"name":"Hutsen Roberts","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":512.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"hutsenroberts"},
{"name":"Brody Young","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tristian Luna","state":"TX","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":657.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Feb '25","ig":"","opl":"tristianluna"},
{"name":"Mason Matrone","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":577.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"masonmatrone"},
{"name":"Jose Bellon","state":"FL","wc":"M-105","cat":"Equipped","div":"J","total":75.0,"best":700.0,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"josebellon"},
{"name":"Matthew Hammond","state":"LA","wc":"M-120","cat":"Raw","div":"SO","total":0.0,"best":322.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"matthewhammond"},
{"name":"Erik Madsen","state":"WA","wc":"M-120","cat":"Raw","div":"M4","total":485.0,"best":498.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"erikmadsen"},
{"name":"Rory Mccoy","state":"PA","wc":"M-120","cat":"Raw","div":"M4","total":465.0,"best":497.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"rorymccoy"},
{"name":"Michael Bitting","state":"FL","wc":"M-120","cat":"Raw","div":"M4","total":0.0,"best":437.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Apr '23","ig":"","opl":"michaelbitting"},
{"name":"Wilson Martinez","state":"--","wc":"M-120","cat":"Raw","div":"M3","total":707.5,"best":707.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"wilsonmartinez"},
{"name":"Austin Keanu","state":"HI","wc":"M-120","cat":"Raw","div":"M3","total":75.0,"best":652.5,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"austinkeanu"},
{"name":"Michael Mcqueen","state":"TX","wc":"M-120","cat":"Raw","div":"M2","total":717.5,"best":717.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"michaelmcqueen"},
{"name":"Esteban Rubens","state":"NH","wc":"M-120","cat":"Raw","div":"M2","total":680.0,"best":692.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"estebanrubens"},
{"name":"Michael Mcqueen","state":"--","wc":"M-120","cat":"Raw","div":"M2","total":122.5,"best":717.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"michaelmcqueen"},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Raw","div":"M2","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daniel Gomez","state":"CA","wc":"M-120","cat":"Raw","div":"M2","total":0.0,"best":592.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"danielgomez"},
{"name":"Craig Hickman","state":"ID","wc":"M-120","cat":"Raw","div":"M2","total":0.0,"best":580.0,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"craighickman"},
{"name":"Thomas Crist","state":"NC","wc":"M-120","cat":"Raw","div":"M2","total":0.0,"best":580.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"thomascrist"},
{"name":"Michael Tuchscherer","state":"AK","wc":"M-120","cat":"Raw","div":"M1","total":900.0,"best":902.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"miketuchscherer","opl":"michaeltuchscherer"},
{"name":"Jonathan Jurewicz","state":"MD","wc":"M-120","cat":"Raw","div":"M1","total":75.0,"best":407.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jonathanjurewicz"},
{"name":"Cordell Estrada","state":"--","wc":"M-120","cat":"Raw","div":"M1","total":0.0,"best":710.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '23","ig":"","opl":"cordellestrada"},
{"name":"Nathan Alexander","state":"WA","wc":"M-120","cat":"Raw","div":"M1","total":0.0,"best":790.0,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Oct '24","ig":"alexandernathan","opl":"nathanalexander1"},
{"name":"Aaron Mizushima","state":"HI","wc":"M-120","cat":"Raw","div":"M1","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Desmond Jordan","state":"NC","wc":"M-120","cat":"Raw","div":"M1","total":0.0,"best":900.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"desmond.jordan.94","opl":"desmondjordan"},
{"name":"Austin Oakley","state":"IN","wc":"M-120","cat":"Raw","div":"SJ","total":0.0,"best":750.0,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"austinistiny","opl":"austinoakley"},
{"name":"Cesar Garcia","state":"OR","wc":"M-120","cat":"Raw","div":"SJ","total":0.0,"best":687.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"cesargarcia7"},
{"name":"Dante Deleon","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":898.5,"best":898.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"dantedeleon"},
{"name":"Cain Lopez","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":817.5,"best":822.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"cainlopez"},
{"name":"Jacob Breckinridge","state":"PA","wc":"M-120","cat":"Raw","div":"J","total":807.5,"best":810.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jacobbreckinridge"},
{"name":"Tanner Newman","state":"OK","wc":"M-120","cat":"Raw","div":"J","total":780.0,"best":810.0,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '24","ig":"","opl":"tannernewman"},
{"name":"Gilberto Villarreal","state":"CA","wc":"M-120","cat":"Raw","div":"J","total":740.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Leonardo Tarango","state":"NM","wc":"M-120","cat":"Raw","div":"J","total":592.5,"best":600.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"leonardotarango"},
{"name":"Connor Long","state":"KY","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":682.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"connor.long99","opl":"connorlong3"},
{"name":"Nicolas Hawke","state":"--","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":765.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"nicolashawke"},
{"name":"Reagan Belvin","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":657.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"reaganbelvin"},
{"name":"Lincoln Mickelsen","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":690.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"lincolnmickelsen"},
{"name":"Daniel Navarrete","state":"--","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":740.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"danielnavarrete"},
{"name":"Chancellor Buford","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":900.5,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"chancellorbuford"},
{"name":"Brayden Naus","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":875.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"braydennaus"},
{"name":"Alex Paige","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":637.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"alexpaige"},
{"name":"Bennett Montplaisir","state":"OR","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":617.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"bennettmontplaisir"},
{"name":"Ty Morawski","state":"OH","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":770.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"tymorawski"},
{"name":"Brad Salter","state":"TX","wc":"M-120","cat":"Equipped","div":"M4","total":447.5,"best":460.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"bradsalter"},
{"name":"Wilson Martinez","state":"--","wc":"M-120","cat":"Equipped","div":"M3","total":762.5,"best":762.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"wilsonmartinez"},
{"name":"Anthony Harris","state":"HI","wc":"M-120","cat":"Equipped","div":"M3","total":245.0,"best":727.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"tharris220","opl":"anthonyharris1"},
{"name":"Travis Koehn","state":"WY","wc":"M-120","cat":"Equipped","div":"M2","total":822.5,"best":820.0,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '24","ig":"","opl":"traviskoehn"},
{"name":"Michael Kalter","state":"ME","wc":"M-120","cat":"Equipped","div":"M2","total":807.5,"best":807.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"michaelkalter"},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Equipped","div":"M2","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Adam Moore","state":"MD","wc":"M-120","cat":"Equipped","div":"M1","total":460.0,"best":692.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"adammoore"},
{"name":"Carson Frnka","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":0.0,"best":707.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"carsonfrnka"},
{"name":"Israel Soliz","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":0.0,"best":325.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '24","ig":"","opl":"israelsoliz"},
{"name":"Dar'Reyus Scott","state":"LA","wc":"M-120","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tyler Halpert","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":0.0,"best":417.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"tylerhalpert"},
{"name":"Louis Maxwell","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":0.0,"best":542.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"louismaxwell"},
{"name":"Luke Bergeron","state":"LA","wc":"M-120+","cat":"Raw","div":"SO","total":0.0,"best":287.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"lukebergeron"},
{"name":"Mark Branham","state":"IN","wc":"M-120+","cat":"Raw","div":"M4","total":0.0,"best":435.0,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '24","ig":"","opl":"markbranham"},
{"name":"Domenick Fonio","state":"--","wc":"M-120+","cat":"Raw","div":"M3","total":0.0,"best":625.0,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '23","ig":"","opl":"domenickfonio"},
{"name":"Kenneth Cameron","state":"NV","wc":"M-120+","cat":"Raw","div":"M2","total":722.5,"best":760.0,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"kennethcameron"},
{"name":"Christopher Ptacek","state":"OR","wc":"M-120+","cat":"Raw","div":"M2","total":0.0,"best":740.0,"bestWc":"140+","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"","opl":"christopherptacek"},
{"name":"Patrick Northcutt","state":"IL","wc":"M-120+","cat":"Raw","div":"M2","total":0.0,"best":712.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"patricknorthcutt"},
{"name":"Rob Ward","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":830.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"robmward","opl":"robertward1"},
{"name":"James Farrior","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":817.5,"best":827.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jamesfarrior"},
{"name":"Nathan Gorham","state":"MD","wc":"M-120+","cat":"Raw","div":"M1","total":805.0,"best":848.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"nathangorham","opl":"nathangorham"},
{"name":"Khourey Royal","state":"NC","wc":"M-120+","cat":"Raw","div":"M1","total":745.0,"best":745.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"khoureyroyal"},
{"name":"Henry Coates","state":"OR","wc":"M-120+","cat":"Raw","div":"M1","total":0.0,"best":632.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"henrycoates"},
{"name":"Valente Inniss-Thompson","state":"TX","wc":"M-120+","cat":"Raw","div":"M1","total":0.0,"best":757.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Oct '23","ig":"","opl":"valenteinnissthompson"},
{"name":"Perry Ellis","state":"GA","wc":"M-120+","cat":"Raw","div":"M1","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew Gonzalez","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":0.0,"best":675.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"andrewgonzalez10"},
{"name":"Omar Kalo","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":0.0,"best":630.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"omarkalo"},
{"name":"Jack Bartlett","state":"ID","wc":"M-120+","cat":"Raw","div":"J","total":830.0,"best":830.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Sep '24","ig":"_jackbartlett","opl":"jackbartlett1"},
{"name":"Uriel Perez","state":"--","wc":"M-120+","cat":"Raw","div":"J","total":725.0,"best":780.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"urielperez"},
{"name":"Jordan Blincoe","state":"NY","wc":"M-120+","cat":"Raw","div":"J","total":705.0,"best":762.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"jordanblincoe"},
{"name":"Carlos Olivares","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":660.0,"best":660.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Jul '24","ig":"","opl":"carlosolivares"},
{"name":"Jason Escobar Jr","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":642.5,"best":642.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"jasonescobarjr"},
{"name":"Carson Crawford","state":"--","wc":"M-120+","cat":"Raw","div":"J","total":250.0,"best":730.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"carsoncrawford"},
{"name":"Jose Lugo","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":0.0,"best":817.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"joselugo4"},
{"name":"Kevin Garza","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":0.0,"best":707.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kevingarza3"},
{"name":"Corey Jackson","state":"MD","wc":"M-120+","cat":"Raw","div":"O","total":687.5,"best":700.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"coreyjackson"},
{"name":"Robert Keller","state":"FL","wc":"M-120+","cat":"Equipped","div":"M3","total":162.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Steve Davenport","state":"NE","wc":"M-120+","cat":"Equipped","div":"M2","total":710.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Douglas Rawson","state":"NV","wc":"M-120+","cat":"Equipped","div":"M2","total":450.0,"best":617.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"douglasrawson"},
{"name":"Tim Brockett","state":"OH","wc":"M-120+","cat":"Equipped","div":"M1","total":645.0,"best":715.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"timbrockett"},
{"name":"Andrew Cargill","state":"--","wc":"M-120+","cat":"Equipped","div":"M1","total":292.5,"best":907.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"odin_reachvalhalla","opl":"andrewcargill"},
{"name":"Michael Jean Sr.","state":"--","wc":"M-120+","cat":"Equipped","div":"M1","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cameron Ross","state":"LA","wc":"M-120+","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Rubio","state":"--","wc":"M-120+","cat":"Equipped","div":"SJ","total":0.0,"best":497.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"ryanrubiocp","opl":"ryanrubio2"},
{"name":"Alfonso Gutierrez","state":"--","wc":"M-120+","cat":"Equipped","div":"J","total":0.0,"best":672.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"alfonsogutierrez"},
{"name":"Katherine Evert","state":"MO","wc":"Out","cat":"Raw","div":"M4","total":0.0,"best":262.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Mar '23","ig":"","opl":"katherineevert"},
{"name":"Jim Kathios","state":"NH","wc":"Out","cat":"Raw","div":"M3","total":605.0,"best":617.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '23","ig":"","opl":"jimkathios"},
{"name":"Ron Falcone Jr","state":"NJ","wc":"Out","cat":"Raw","div":"M3","total":442.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Melissa Forbis","state":"--","wc":"Out","cat":"Raw","div":"M3","total":282.5,"best":282.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"melissaforbis"},
{"name":"Sheila Hoover","state":"OR","wc":"Out","cat":"Raw","div":"M3","total":0.0,"best":342.5,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"sheilahoover"},
{"name":"John Demchak","state":"SC","wc":"Out","cat":"Raw","div":"M2","total":527.5,"best":530.0,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"johndemchak"},
{"name":"Stephanie Carpenter","state":"ID","wc":"Out","cat":"Raw","div":"M2","total":427.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cynthia Browning","state":"IN","wc":"Out","cat":"Raw","div":"M2","total":410.0,"best":420.0,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"Feb '25","ig":"cindi_lifts","opl":"cynthiabrowning"},
{"name":"Christopher Ptacek","state":"OR","wc":"Out","cat":"Raw","div":"M2","total":0.0,"best":740.0,"bestWc":"140+","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"","opl":"christopherptacek"},
{"name":"Eli O'Keefe","state":"OH","wc":"Out","cat":"Raw","div":"J","total":0.0,"best":517.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"eliokeefe"},
{"name":"Marina Tran","state":"LA","wc":"Out","cat":"Raw","div":"J","total":0.0,"best":242.5,"bestWc":"84+","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"marinatran"}
];

const DIV_LABELS = {
  "SJ": "Sub-Junior",
  "J": "Junior",
  "O": "Open",
  "M1": "Masters 1",
  "M2": "Masters 2",
  "M3": "Masters 3",
  "M4": "Masters 4",
  "SO": "Special Olympic",
  "SA": "Special Adaptive",
  "#N/A": "N/A",
  "": "Unassigned"
};

const WC_ORDER = ["F-43","F-47","F-52","F-57","F-63","F-69","F-76","F-84","F-84+","M-53","M-59","M-66","M-74","M-83","M-93","M-105","M-120","M-120+","Out"];

export default function PowerliftingRoster() {
  const [divFilter, setDivFilter] = useState("M1");
  const [wcFilter, setWcFilter] = useState("All");
  const [catFilter, setCatFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCol, setSortCol] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [showZero, setShowZero] = useState(true);
  const [genderFilter, setGenderFilter] = useState("All");
  const [isInitialRender, setIsInitialRender] = useState(true);

  const allDivisions = useMemo(() => {
    const divs = [...new Set(ROSTER.map(r => r.div))].filter(Boolean);
    return divs.sort((a, b) => {
      const order = ["SJ","J","O","M1","M2","M3","M4","SO","SA","#N/A"];
      return order.indexOf(a) - order.indexOf(b);
    });
  }, []);

  const weightClasses = useMemo(() => {
    let filtered = ROSTER;
    if (genderFilter === "M") filtered = filtered.filter(r => r.wc.startsWith("M-"));
    if (genderFilter === "F") filtered = filtered.filter(r => r.wc.startsWith("F-"));
    const wcs = [...new Set(filtered.map(r => r.wc))];
    return wcs.sort((a, b) => WC_ORDER.indexOf(a) - WC_ORDER.indexOf(b));
  }, [genderFilter]);

  const filtered = useMemo(() => {
    let data = [...ROSTER];
    if (divFilter !== "All") data = data.filter(r => r.div === divFilter);
    if (wcFilter !== "All") data = data.filter(r => r.wc === wcFilter);
    if (catFilter !== "All") data = data.filter(r => r.cat === catFilter);
    if (genderFilter === "M") data = data.filter(r => r.wc.startsWith("M-"));
    if (genderFilter === "F") data = data.filter(r => r.wc.startsWith("F-"));
    if (!showZero) data = data.filter(r => r.total > 0);
    if (searchTerm.trim()) {
      const s = searchTerm.toLowerCase();
      data = data.filter(r => r.name.toLowerCase().includes(s) || r.state.toLowerCase().includes(s));
    }
    data.sort((a, b) => {
      // Easter egg: Rob and Jen at top on initial page load only
      if (isInitialRender) {
        const isRobA = a.name === "Rob Ward";
        const isRobB = b.name === "Rob Ward";
        const isJenA = a.name === "Jennifer Sauter";
        const isJenB = b.name === "Jennifer Sauter";
        
        if (isRobA) return -1;
        if (isRobB) return 1;
        if (isJenA) return -1;
        if (isJenB) return 1;
      }
      
      // Normal sorting
      let va = a[sortCol], vb = b[sortCol];
      if (typeof va === "string") va = va.toLowerCase();
      if (typeof vb === "string") vb = vb.toLowerCase();
      if (sortCol === "wc") {
        va = WC_ORDER.indexOf(a.wc);
        vb = WC_ORDER.indexOf(b.wc);
      }
      if (va < vb) return sortDir === "asc" ? -1 : 1;
      if (va > vb) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return data;
  }, [divFilter, wcFilter, catFilter, genderFilter, showZero, searchTerm, sortCol, sortDir, isInitialRender]);

  const handleSort = (col) => {
    setIsInitialRender(false); // Turn off joke mode
    if (sortCol === col) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortCol(col); setSortDir(col === "total" ? "desc" : "asc"); }
  };

  const sortIcon = (col) => {
    if (sortCol !== col) return <span style={{opacity:0.3, fontSize:10}}>&#9650;&#9660;</span>;
    return sortDir === "asc" ? <span style={{fontSize:10}}>&#9650;</span> : <span style={{fontSize:10}}>&#9660;</span>;
  };

  const totalWithQT = filtered.filter(r => r.total > 0).length;

  return (
    <div style={{
      fontFamily: "'Barlow Condensed', 'Oswald', 'Bebas Neue', sans-serif",
      background: "#0c0c0e",
      color: "#e8e6e1",
      minHeight: "100vh",
      padding: "20px 16px",
    }}>
      <div style={{maxWidth:1100, margin:"0 auto"}}>
        {/* Unofficial Disclaimer */}
        <div style={{
          background: "linear-gradient(90deg, #e6394620, #e6394610)",
          border: "1px solid #e6394650",
          borderRadius: 8,
          padding: "14px 18px",
          marginBottom: 16,
          fontSize: 13,
          lineHeight: 1.6,
          color: "#ccc",
        }}>
          <div style={{
            fontFamily:"'Bebas Neue', sans-serif",
            fontSize: 22,
            letterSpacing: 2,
            color: "#e63946",
            marginBottom: 4,
          }}>UNOFFICIAL AGE DIVISION NATIONALS ROSTER</div>
          <div>
            This is an <strong style={{color:"#fff"}}>unofficial</strong> copy of the roster for sorting and filtering purposes.
            Roster data was pulled on <strong style={{color:"#fff"}}>April 25, 2026 at 8:00 AM ET</strong> and may not reflect updates made after that time.
            For the official, up-to-date roster, visit{" "}
            <a href="https://powerlifting-america.com/age-division-nationals-roster/"
              target="_blank" rel="noopener noreferrer"
              style={{color:"#4ecdc4", textDecoration:"underline"}}>
              Powerlifting America's official roster page
            </a>.
          </div>
        </div>

        {/* Header */}
        <div style={{
          borderBottom: "3px solid #e63946",
          paddingBottom: 12,
          marginBottom: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 8,
        }}>
          <div>
            <div style={{
              fontFamily:"'Bebas Neue', sans-serif",
              fontSize: 36,
              letterSpacing: 3,
              lineHeight: 1,
              color: "#fff",
            }}>AGE DIVISION NATIONALS</div>
            <div style={{
              fontSize: 14,
              fontWeight: 300,
              letterSpacing: 4,
              color: "#e63946",
              textTransform: "uppercase",
              marginTop: 2,
            }}>Powerlifting America — 2026 Roster</div>
          </div>
          <div style={{
            background: "#1a1a1f",
            border: "1px solid #2a2a30",
            borderRadius: 6,
            padding: "8px 14px",
            fontSize: 13,
            fontWeight: 500,
            color: "#aaa",
          }}>
            <span style={{color:"#e63946", fontWeight:700, fontSize:20}}>{filtered.length}</span>
            <span style={{margin:"0 6px"}}>athletes</span>
            <span style={{color:"#555"}}>|</span>
            <span style={{margin:"0 6px"}}><span style={{color:"#4ecdc4", fontWeight:700, fontSize:20}}>{totalWithQT}</span> with QT</span>
          </div>
        </div>

        {/* Filters */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 10,
          marginBottom: 14,
        }}>
          <FilterSelect label="Division" value={divFilter} onChange={(v) => { setIsInitialRender(false); setDivFilter(v); }}
            options={[{v:"All",l:"All Divisions"}, ...allDivisions.map(d => ({v:d, l:`${d} — ${DIV_LABELS[d]||d}`}))]} />
          <FilterSelect label="Gender" value={genderFilter} onChange={(v) => { setIsInitialRender(false); setGenderFilter(v); setWcFilter("All"); }}
            options={[{v:"All",l:"All"},{v:"M",l:"Male"},{v:"F",l:"Female"}]} />
          <FilterSelect label="Weight Class" value={wcFilter} onChange={(v) => { setIsInitialRender(false); setWcFilter(v); }}
            options={[{v:"All",l:"All Classes"}, ...weightClasses.map(w => ({v:w, l:w}))]} />
          <FilterSelect label="Category" value={catFilter} onChange={(v) => { setIsInitialRender(false); setCatFilter(v); }}
            options={[{v:"All",l:"All"},{v:"Raw",l:"Raw"},{v:"Equipped",l:"Equipped"}]} />
        </div>
        <div style={{display:"flex", gap:12, marginBottom:16, alignItems:"center", flexWrap:"wrap"}}>
          <div style={{position:"relative", flex:"1 1 200px", maxWidth:320}}>
            <input
              type="text" placeholder="Search by name or state..."
              value={searchTerm} onChange={e => { setIsInitialRender(false); setSearchTerm(e.target.value); }}
              style={{
                width:"100%", background:"#14141a", border:"1px solid #2a2a30", borderRadius:6,
                padding:"9px 12px 9px 34px", color:"#e8e6e1", fontSize:14,
                fontFamily:"inherit", outline:"none", boxSizing:"border-box",
              }}
            />
            <span style={{position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", color:"#555", fontSize:16}}>&#128269;</span>
          </div>
          <label style={{
            display:"flex", alignItems:"center", gap:6, cursor:"pointer",
            fontSize:13, color:"#888", userSelect:"none",
          }}>
            <input type="checkbox" checked={showZero} onChange={e => setShowZero(e.target.checked)}
              style={{accentColor:"#e63946"}} />
            Show 0 totals
          </label>
        </div>

        {/* Table */}
        <div style={{
          overflowX: "auto",
          border: "1px solid #1e1e24",
          borderRadius: 8,
          background: "#111116",
        }}>
          <table style={{width:"100%", borderCollapse:"collapse", fontSize:14}}>
            <thead>
              <tr style={{background:"#1a1a20", borderBottom:"2px solid #e63946"}}>
                {[
                  {key:"name", label:"Athlete", align:"left"},
                  {key:"state", label:"ST"},
                  {key:"wc", label:"Class"},
                  {key:"cat", label:"Cat"},
                  {key:"div", label:"Div"},
                  {key:"total", label:"QT (kg)"},
                  {key:"best", label:"Best (kg)"},
                ].map(col => (
                  <th key={col.key}
                    onClick={() => handleSort(col.key)}
                    style={{
                      padding:"10px 12px", textAlign: col.align || "center",
                      cursor:"pointer", userSelect:"none", whiteSpace:"nowrap",
                      fontSize:12, fontWeight:600, letterSpacing:1.5,
                      textTransform:"uppercase", color:"#888",
                    }}>
                    {col.label} {sortIcon(col.key)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan={7} style={{padding:40, textAlign:"center", color:"#555", fontSize:15}}>
                  No athletes match your filters.
                </td></tr>
              )}
              {filtered.map((r, i) => (
                <tr key={i} style={{
                  borderBottom:"1px solid #1c1c22",
                  background: i % 2 === 0 ? "transparent" : "#14141a",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#1f1f28"}
                onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "transparent" : "#14141a"}
                >
                  <td style={{padding:"9px 12px", fontWeight:500, color:"#fff", whiteSpace:"nowrap"}}>
                    <div style={{display:"flex", alignItems:"center", gap:6}}>
                      {r.opl ? (
                        <a href={`https://www.openpowerlifting.org/u/${r.opl}`} target="_blank" rel="noopener noreferrer"
                          style={{color:"#fff", textDecoration:"none"}}>
                          {r.name}
                        </a>
                      ) : r.name}
                      {r.ig && (
                        <a href={`https://www.instagram.com/${r.ig}`} target="_blank" rel="noopener noreferrer"
                          style={{color:"#E1306C", textDecoration:"none", fontSize:16, lineHeight:1}}>
                          📷
                        </a>
                      )}
                    </div>
                  </td>
                  <td style={{padding:"9px 12px", textAlign:"center", color:"#888", fontWeight:400}}>
                    {r.state}
                  </td>
                  <td style={{padding:"9px 12px", textAlign:"center"}}>
                    <span style={{
                      background: r.wc.startsWith("F") ? "#2d1b3d" : "#1b2d3d",
                      color: r.wc.startsWith("F") ? "#c792ea" : "#82b1ff",
                      padding:"2px 8px", borderRadius:4, fontSize:12, fontWeight:600,
                    }}>{r.wc}</span>
                  </td>
                  <td style={{padding:"9px 12px", textAlign:"center"}}>
                    <span style={{
                      fontSize:11, fontWeight:600, letterSpacing:1,
                      color: r.cat === "Raw" ? "#4ecdc4" : "#ffbe76",
                    }}>{r.cat.toUpperCase()}</span>
                  </td>
                  <td style={{padding:"9px 12px", textAlign:"center", fontWeight:600, color:"#ccc"}}>
                    {r.div}
                  </td>
                  <td style={{
                    padding:"9px 12px", textAlign:"center", fontWeight:700,
                    fontFamily:"'Bebas Neue', sans-serif", fontSize:17, letterSpacing:1,
                    color: r.total > 0 ? "#fff" : "#3a3a40",
                  }}>
                    {r.total > 0 ? r.total : "—"}
                  </td>
                  <td style={{
                    padding:"9px 12px", textAlign:"center", fontWeight:700,
                    fontFamily:"'Bebas Neue', sans-serif", fontSize:17, letterSpacing:1,
                    color: r.best > 0 ? "#f0a500" : "#3a3a40",
                  }}>
                    {r.best > 0 ? (<>
                      {r.best}
                      <span style={{
                        fontSize:9, fontWeight:400, letterSpacing:0,
                        color:"#666", marginLeft:4, fontFamily:"sans-serif",
                      }}>
                        {r.bestDate && <>({r.bestDate})</>}
                        {r.diffWc && <span style={{color:"#e63946", marginLeft:2}}>@{r.bestWc}kg</span>}
                        {r.bestFed === "USAPL" && <span style={{color:"#82b1ff", marginLeft:2}}>USAPL</span>}
                      </span>
                    </>) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop:10, fontSize:11, color:"#444", textAlign:"center"}}>
          QT = Qualifying Total · Best = Best AMP/USAPL total (Jan 2023–present) · <span style={{color:"#e63946"}}>@kg</span> = Best was in a listed weight class · 📷 = Instagram · Names link to OpenPowerlifting history · Sort by clicking column headers
        </div>
        <div style={{
          marginTop: 16,
          padding: "12px 16px",
          background: "#14141a",
          border: "1px solid #1e1e24",
          borderRadius: 6,
          fontSize: 11,
          color: "#555",
          textAlign: "center",
          lineHeight: 1.6,
        }}>
          This page uses data from the{" "}
          <a href="https://www.openpowerlifting.org" target="_blank" rel="noopener noreferrer"
            style={{color:"#4ecdc4"}}>OpenPowerlifting project</a>.
          You may download a copy of the data at{" "}
          <a href="https://data.openpowerlifting.org" target="_blank" rel="noopener noreferrer"
            style={{color:"#4ecdc4"}}>data.openpowerlifting.org</a>.
        </div>
      </div>
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:3}}>
      <label style={{fontSize:10, fontWeight:600, letterSpacing:2, textTransform:"uppercase", color:"#555"}}>{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{
          background:"#14141a", border:"1px solid #2a2a30", borderRadius:6,
          padding:"8px 10px", color:"#e8e6e1", fontSize:13, fontFamily:"inherit",
          cursor:"pointer", outline:"none", appearance:"auto",
        }}>
        {options.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
      </select>
    </div>
  );
}
