import { useState, useMemo } from "react";

const ROSTER = [
{"name":"Thaovy Tran","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":75},
{"name":"Abigail Le","state":"PA","wc":"F-43","cat":"Raw","div":"J","total":0},
{"name":"Brennan Fallon","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":0},
{"name":"Abygail Guzman","state":"TX","wc":"F-43","cat":"Equipped","div":"SJ","total":0},
{"name":"Molly Hutchinson","state":"LA","wc":"F-43","cat":"Equipped","div":"SJ","total":0},
{"name":"Leanna Schnell","state":"AZ","wc":"F-47","cat":"Raw","div":"SO","total":122.5},
{"name":"Chiaki Takada","state":"TX","wc":"F-47","cat":"Raw","div":"M3","total":295},
{"name":"Suzie Johnson","state":"WA","wc":"F-47","cat":"Raw","div":"M3","total":0},
{"name":"Kelley Sherwin","state":"WI","wc":"F-47","cat":"Raw","div":"M2","total":0},
{"name":"Andrea Nolting","state":"IN","wc":"F-47","cat":"Raw","div":"M2","total":0},
{"name":"Emma Horn","state":"--","wc":"F-47","cat":"Raw","div":"J","total":0},
{"name":"Addisyn Lege","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":175},
{"name":"Joanie Cannon","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":0},
{"name":"Jazlene Rios","state":"TX","wc":"F-47","cat":"Equipped","div":"SJ","total":0},
{"name":"Jlynn Fernandez","state":"--","wc":"F-47","cat":"Equipped","div":"J","total":282.5},
{"name":"Gabriella Garza","state":"--","wc":"F-47","cat":"Equipped","div":"J","total":75},
{"name":"Lisa Weiss","state":"OH","wc":"F-52","cat":"Raw","div":"M3","total":280},
{"name":"Claire Keel","state":"AL","wc":"F-52","cat":"Raw","div":"M3","total":147.5},
{"name":"Lesley Scott","state":"OR","wc":"F-52","cat":"Raw","div":"M3","total":0},
{"name":"Suzanne Hartwig-Gary","state":"MT","wc":"F-52","cat":"Raw","div":"M2","total":75},
{"name":"Claudia Romero","state":"TX","wc":"F-52","cat":"Raw","div":"M1","total":307.5},
{"name":"Cynthia Smith","state":"NC","wc":"F-52","cat":"Raw","div":"M1","total":192.5},
{"name":"Ruhi Patel","state":"TX","wc":"F-52","cat":"Raw","div":"SJ","total":0},
{"name":"Marina Maxwell","state":"NC","wc":"F-52","cat":"Raw","div":"J","total":75},
{"name":"Trinity Infante","state":"CA","wc":"F-52","cat":"Raw","div":"J","total":0},
{"name":"Ava Dean","state":"LA","wc":"F-52","cat":"Equipped","div":"SJ","total":0},
{"name":"Nyeli Arispe","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":0},
{"name":"Noemi Blancarte","state":"LA","wc":"F-52","cat":"Equipped","div":"SJ","total":0},
{"name":"Abcde Mata","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":0},
{"name":"Katelynn Billiot","state":"LA","wc":"F-52","cat":"Equipped","div":"J","total":275},
{"name":"Itzel Loreto","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":0},
{"name":"Autumn Gilday","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":0},
{"name":"Dora Justice","state":"--","wc":"F-57","cat":"Raw","div":"M3","total":270.5},
{"name":"Kathleen Casper","state":"MN","wc":"F-57","cat":"Raw","div":"M3","total":75},
{"name":"Loraine Efron","state":"TX","wc":"F-57","cat":"Raw","div":"M3","total":75},
{"name":"Janice Woerner","state":"NY","wc":"F-57","cat":"Raw","div":"M3","total":0},
{"name":"Alana Mcgolrick","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":0},
{"name":"Jo Aita","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":0},
{"name":"Lindsay Rubel","state":"NY","wc":"F-57","cat":"Raw","div":"M1","total":75},
{"name":"Patria Jimenez","state":"MA","wc":"F-57","cat":"Raw","div":"M1","total":0},
{"name":"Paige Gunkel","state":"WI","wc":"F-57","cat":"Raw","div":"SJ","total":0},
{"name":"Luka Paskell","state":"MA","wc":"F-57","cat":"Raw","div":"SJ","total":0},
{"name":"Eleni Guerrera","state":"VA","wc":"F-57","cat":"Raw","div":"J","total":413.5},
{"name":"Keira Segura","state":"LA","wc":"F-57","cat":"Raw","div":"J","total":375},
{"name":"Lauren Jansen","state":"WI","wc":"F-57","cat":"Raw","div":"J","total":342.5},
{"name":"Claire Thomas","state":"PA","wc":"F-57","cat":"Raw","div":"J","total":75},
{"name":"Julia Ty","state":"--","wc":"F-57","cat":"Raw","div":"J","total":0},
{"name":"Kathleen Carroll","state":"IL","wc":"F-57","cat":"Raw","div":"J","total":0},
{"name":"Lexi Gonsalves","state":"CA","wc":"F-57","cat":"Raw","div":"J","total":0},
{"name":"Ellie Weinstein","state":"MN","wc":"F-57","cat":"Raw","div":"J","total":0},
{"name":"Abigail Yandrich","state":"OH","wc":"F-57","cat":"Raw","div":"J","total":0},
{"name":"Lindalee Urquieta","state":"TX","wc":"F-57","cat":"Raw","div":"J","total":0},
{"name":"Charleen Balcer Rowekamp","state":"MN","wc":"F-57","cat":"Equipped","div":"M1","total":320},
{"name":"Jasmine Nguyen","state":"--","wc":"F-57","cat":"Equipped","div":"SJ","total":285},
{"name":"Ava Dean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0},
{"name":"Lyla Felean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0},
{"name":"Paloma Calderon","state":"TX","wc":"F-57","cat":"Equipped","div":"SJ","total":0},
{"name":"Lylah Jones","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0},
{"name":"Octavia Hill","state":"OK","wc":"F-57","cat":"Equipped","div":"J","total":397.5},
{"name":"Elizabeth Pizarro","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":325},
{"name":"Madaline Kennemer","state":"LA","wc":"F-57","cat":"Equipped","div":"J","total":0},
{"name":"Macayla Cano","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":0},
{"name":"Shelly Stettner","state":"MI","wc":"F-63","cat":"Raw","div":"M4","total":0},
{"name":"Jessica Marshall","state":"--","wc":"F-63","cat":"Raw","div":"M3","total":75},
{"name":"Lynn Pietig","state":"--","wc":"F-63","cat":"Raw","div":"M3","total":75},
{"name":"Tiffany Dean","state":"NV","wc":"F-63","cat":"Raw","div":"M3","total":0},
{"name":"Isabelle Iliev","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":377.5},
{"name":"Leah Cruciani","state":"PA","wc":"F-63","cat":"Raw","div":"M2","total":332.5},
{"name":"Heather Campbell","state":"OR","wc":"F-63","cat":"Raw","div":"M2","total":315},
{"name":"Stacie Taylor","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":75},
{"name":"Lisa Shen","state":"TX","wc":"F-63","cat":"Raw","div":"M2","total":0},
{"name":"Molly Jones","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":412.5},
{"name":"Eleanor Gease","state":"DC","wc":"F-63","cat":"Raw","div":"M1","total":307.5},
{"name":"Ashley Hickert","state":"MT","wc":"F-63","cat":"Raw","div":"M1","total":75},
{"name":"Katie Achille","state":"NJ","wc":"F-63","cat":"Raw","div":"M1","total":75},
{"name":"Yvy Llambes","state":"TX","wc":"F-63","cat":"Raw","div":"M1","total":0},
{"name":"Rina Shapiro","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":0},
{"name":"Mariele Arthur","state":"TX","wc":"F-63","cat":"Raw","div":"SJ","total":352.5},
{"name":"Kylie Gunkel","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":0},
{"name":"Arden Hyatt","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":0},
{"name":"Lindsey Jade Ligsay","state":"HI","wc":"F-63","cat":"Raw","div":"J","total":385},
{"name":"Hannah Smith","state":"IL","wc":"F-63","cat":"Raw","div":"J","total":367.5},
{"name":"Laynie Buli","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":282.5},
{"name":"Kennedy Azzatori","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":115},
{"name":"Aile Banuelos","state":"CA","wc":"F-63","cat":"Raw","div":"J","total":0},
{"name":"Elizabeth Sanchez","state":"FL","wc":"F-63","cat":"Raw","div":"J","total":0},
{"name":"Farida-Farrah Marreez","state":"KY","wc":"F-63","cat":"Raw","div":"J","total":0},
{"name":"Kaylee Beltran","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":0},
{"name":"Sophia Fortin","state":"MA","wc":"F-63","cat":"Raw","div":"J","total":0},
{"name":"Victoria Imes","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":0},
{"name":"Christine Cranford","state":"MI","wc":"F-63","cat":"Raw","div":"J","total":0},
{"name":"Katarina Herrera","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":0},
{"name":"Nataleigh Hunter","state":"DE","wc":"F-63","cat":"Raw","div":"O","total":493},
{"name":"Sidney Konig Brock","state":"LA","wc":"F-63","cat":"Raw","div":"O","total":0},
{"name":"Maura Shuttleworth","state":"NM","wc":"F-63","cat":"Equipped","div":"M2","total":110},
{"name":"Nora Keller","state":"FL","wc":"F-63","cat":"Equipped","div":"M1","total":75},
{"name":"Ava Finley","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":0},
{"name":"Sophia Villarreal","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":0},
{"name":"Nevaeh Suarez","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":0},
{"name":"Cadence Audler","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":0},
{"name":"Gracie Cassidy","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":340},
{"name":"Shelby Fischer","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":300},
{"name":"Ayden Lege","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":292.5},
{"name":"Julie Donaho","state":"TX","wc":"F-69","cat":"Raw","div":"","total":0},
{"name":"Alma Kimura","state":"WA","wc":"F-69","cat":"Raw","div":"M4","total":310.5},
{"name":"Gale Williams","state":"GA","wc":"F-69","cat":"Raw","div":"M4","total":285},
{"name":"Denise Ragozzino","state":"NV","wc":"F-69","cat":"Raw","div":"M4","total":0},
{"name":"Roberta Carlson","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":397.5},
{"name":"Susan Gibson","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":290},
{"name":"Jackie Barone","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":75},
{"name":"Cathy Avery","state":"--","wc":"F-69","cat":"Raw","div":"M2","total":358},
{"name":"Kari Cashen","state":"NV","wc":"F-69","cat":"Raw","div":"M2","total":215},
{"name":"Claudia Beatty","state":"NC","wc":"F-69","cat":"Raw","div":"M2","total":0},
{"name":"Becky Enright","state":"WA","wc":"F-69","cat":"Raw","div":"M1","total":427.5},
{"name":"Angela Compilli","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":365},
{"name":"Clair Crawford","state":"--","wc":"F-69","cat":"Raw","div":"M1","total":280},
{"name":"Elena Gutierrez","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":0},
{"name":"Kollet Wharton","state":"TX","wc":"F-69","cat":"Raw","div":"M1","total":0},
{"name":"Stephanie Bazan","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":0},
{"name":"Kisha Fields","state":"NC","wc":"F-69","cat":"Raw","div":"M1","total":0},
{"name":"Hayley Csepella","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":0},
{"name":"Emma Millana","state":"FL","wc":"F-69","cat":"Raw","div":"SJ","total":0},
{"name":"Gianna Ancona","state":"CT","wc":"F-69","cat":"Raw","div":"SJ","total":0},
{"name":"Kaleia Knothe","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":0},
{"name":"Maia Forsyth","state":"CO","wc":"F-69","cat":"Raw","div":"J","total":450},
{"name":"Brooke Naegel","state":"SC","wc":"F-69","cat":"Raw","div":"J","total":438},
{"name":"Anne Augustin","state":"NY","wc":"F-69","cat":"Raw","div":"J","total":345},
{"name":"Mallory Salinas","state":"TX","wc":"F-69","cat":"Raw","div":"J","total":0},
{"name":"Maggy Weymiller","state":"IA","wc":"F-69","cat":"Raw","div":"J","total":0},
{"name":"Annika Minotti","state":"CT","wc":"F-69","cat":"Raw","div":"J","total":0},
{"name":"Greta Aberle","state":"WI","wc":"F-69","cat":"Raw","div":"J","total":0},
{"name":"Abigail Breiner","state":"TN","wc":"F-69","cat":"Raw","div":"J","total":0},
{"name":"Juliette Brewer","state":"LA","wc":"F-69","cat":"Equipped","div":"#N/A","total":0},
{"name":"Donna Marts","state":"WY","wc":"F-69","cat":"Equipped","div":"M3","total":96},
{"name":"Celeste Godinez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":432.5},
{"name":"Jewlee Recio","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":0},
{"name":"Amanda Cougle","state":"LA","wc":"F-69","cat":"Equipped","div":"SJ","total":0},
{"name":"Jesaeh Suarez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":0},
{"name":"Aeryn Anderson","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":395},
{"name":"Pipper Lemaire","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":75},
{"name":"Beth Whitney","state":"KS","wc":"F-69","cat":"Equipped","div":"J","total":0},
{"name":"Linda Franklin","state":"OR","wc":"F-76","cat":"Raw","div":"M4","total":0},
{"name":"Suzanne D'Avalon","state":"NM","wc":"F-76","cat":"Raw","div":"M4","total":0},
{"name":"Cheryl Ventola","state":"MA","wc":"F-76","cat":"Raw","div":"M3","total":305},
{"name":"Barbara Beaudin","state":"NH","wc":"F-76","cat":"Raw","div":"M3","total":75},
{"name":"Beth Macauley","state":"MI","wc":"F-76","cat":"Raw","div":"M3","total":0},
{"name":"Joah Iannotta","state":"PA","wc":"F-76","cat":"Raw","div":"M2","total":462.5},
{"name":"Pamela Riley","state":"TX","wc":"F-76","cat":"Raw","div":"M2","total":347.5},
{"name":"Siri Hoogen","state":"OR","wc":"F-76","cat":"Raw","div":"M2","total":75},
{"name":"Cheryl Iseri","state":"ID","wc":"F-76","cat":"Raw","div":"M2","total":75},
{"name":"Hannah Sowd","state":"--","wc":"F-76","cat":"Raw","div":"M2","total":0},
{"name":"Leah Lutz","state":"CA","wc":"F-76","cat":"Raw","div":"M2","total":0},
{"name":"Melissa Dixon","state":"WA","wc":"F-76","cat":"Raw","div":"M2","total":0},
{"name":"Dayna Mcneal","state":"ND","wc":"F-76","cat":"Raw","div":"M1","total":557.5},
{"name":"Linette Bogdan","state":"NJ","wc":"F-76","cat":"Raw","div":"M1","total":445},
{"name":"Jennifer Sauter","state":"NY","wc":"F-76","cat":"Raw","div":"M1","total":430},
{"name":"Helen Lewis-Rzeszutek","state":"WI","wc":"F-76","cat":"Raw","div":"M1","total":420},
{"name":"Amberly Kuhlmann","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":407.5},
{"name":"Kim Inoshita","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":185},
{"name":"Amanda Koldjeski","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":0},
{"name":"Taylor Boykins","state":"OH","wc":"F-76","cat":"Raw","div":"SJ","total":342.5},
{"name":"Sarah Kleinman","state":"MD","wc":"F-76","cat":"Raw","div":"SJ","total":0},
{"name":"Sonia Espitia","state":"NY","wc":"F-76","cat":"Raw","div":"SJ","total":0},
{"name":"Alice Gardner","state":"WI","wc":"F-76","cat":"Raw","div":"SJ","total":0},
{"name":"Dakota Courtright","state":"NE","wc":"F-76","cat":"Raw","div":"SJ","total":0},
{"name":"Esperanza Delgado","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":492.5},
{"name":"Dayna Bland","state":"NC","wc":"F-76","cat":"Raw","div":"J","total":370},
{"name":"Daisey Fields","state":"GA","wc":"F-76","cat":"Raw","div":"J","total":367.5},
{"name":"Abigail Dietz","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":327.5},
{"name":"Zsofia Toth","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":0},
{"name":"Ekaterina Sapoznikova","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":0},
{"name":"Sneha Sureshkumar","state":"MN","wc":"F-76","cat":"Raw","div":"J","total":0},
{"name":"Amber Gomez","state":"TX","wc":"F-76","cat":"Equipped","div":"M1","total":445},
{"name":"Summer Brittain","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":0},
{"name":"Gia Garlington","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0},
{"name":"Gavigail Martinez","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":0},
{"name":"Gabby Haire","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0},
{"name":"Kaylee Robin","state":"LA","wc":"F-76","cat":"Equipped","div":"J","total":455},
{"name":"Margie Schnell","state":"AZ","wc":"F-84","cat":"Raw","div":"M3","total":0},
{"name":"Marcia Homer","state":"--","wc":"F-84","cat":"Raw","div":"M3","total":0},
{"name":"Michelle Kane","state":"OH","wc":"F-84","cat":"Raw","div":"M2","total":435},
{"name":"Allison Snead","state":"NC","wc":"F-84","cat":"Raw","div":"M2","total":0},
{"name":"Alexis Goldstein","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":512.5},
{"name":"Rosanna Orosco","state":"CA","wc":"F-84","cat":"Raw","div":"M1","total":407.5},
{"name":"Bethany Blankespoor","state":"DC","wc":"F-84","cat":"Raw","div":"M1","total":302.5},
{"name":"Lauren Kolb","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":0},
{"name":"Rebekah Givan","state":"--","wc":"F-84","cat":"Raw","div":"SJ","total":335},
{"name":"Saige Back","state":"NY","wc":"F-84","cat":"Raw","div":"SJ","total":75},
{"name":"Madilyn Cantu","state":"TX","wc":"F-84","cat":"Raw","div":"SJ","total":75},
{"name":"Emma Hagen","state":"AZ","wc":"F-84","cat":"Raw","div":"J","total":75},
{"name":"Tytiyana Flott","state":"MI","wc":"F-84","cat":"Raw","div":"J","total":0},
{"name":"Kristen Palmer","state":"GA","wc":"F-84","cat":"Raw","div":"J","total":0},
{"name":"Zoe Soleil Goykhman","state":"PA","wc":"F-84","cat":"Raw","div":"J","total":0},
{"name":"Brooke Ruland","state":"WI","wc":"F-84","cat":"Raw","div":"J","total":0},
{"name":"Sara Rodock","state":"WI","wc":"F-84","cat":"Equipped","div":"M1","total":510},
{"name":"Elaina Canales","state":"--","wc":"F-84","cat":"Equipped","div":"SJ","total":0},
{"name":"Kaitlyn Huff","state":"TX","wc":"F-84","cat":"Equipped","div":"SJ","total":0},
{"name":"Cristina Angelloz","state":"--","wc":"F-84","cat":"Equipped","div":"J","total":327.5},
{"name":"Patrice Lockhart","state":"GA","wc":"F-84+","cat":"Raw","div":"SO","total":0},
{"name":"Linda Gorham","state":"MD","wc":"F-84+","cat":"Raw","div":"M4","total":312.5},
{"name":"Vicki Brackett","state":"GA","wc":"F-84+","cat":"Raw","div":"M3","total":387.5},
{"name":"Heidi Meeley","state":"WA","wc":"F-84+","cat":"Raw","div":"M3","total":365},
{"name":"Patricia Johnson","state":"CA","wc":"F-84+","cat":"Raw","div":"M2","total":547.5},
{"name":"Lilyan Jackson","state":"TX","wc":"F-84+","cat":"Raw","div":"M2","total":492.5},
{"name":"Lori Sousa","state":"FL","wc":"F-84+","cat":"Raw","div":"M2","total":300},
{"name":"Shanti Murphy","state":"--","wc":"F-84+","cat":"Raw","div":"M2","total":0},
{"name":"Melissa Copeland","state":"--","wc":"F-84+","cat":"Raw","div":"M1","total":555},
{"name":"Tiffany Miranda","state":"NC","wc":"F-84+","cat":"Raw","div":"M1","total":0},
{"name":"Allison White","state":"--","wc":"F-84+","cat":"Raw","div":"M1","total":0},
{"name":"Emily Douglas","state":"MD","wc":"F-84+","cat":"Raw","div":"M1","total":0},
{"name":"Cora Osei-Adjei","state":"TX","wc":"F-84+","cat":"Raw","div":"SJ","total":0},
{"name":"Emily Bombardier","state":"NY","wc":"F-84+","cat":"Raw","div":"J","total":415},
{"name":"Emma Jones","state":"MA","wc":"F-84+","cat":"Raw","div":"J","total":410},
{"name":"Maya Moise","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0},
{"name":"Kathryn Tranum","state":"IN","wc":"F-84+","cat":"Raw","div":"J","total":0},
{"name":"Izabela Ramirez","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0},
{"name":"Sarah Jerry","state":"AL","wc":"F-84+","cat":"Raw","div":"J","total":0},
{"name":"Jacqueline Fly","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0},
{"name":"Kamilah Todd","state":"LA","wc":"F-84+","cat":"Equipped","div":"M1","total":602.5},
{"name":"Emelia Dauterive","state":"LA","wc":"F-84+","cat":"Equipped","div":"SJ","total":400},
{"name":"Gabriella Adrian","state":"--","wc":"F-84+","cat":"Equipped","div":"SJ","total":0},
{"name":"Addyson Perez","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0},
{"name":"Olivia Cardenas","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0},
{"name":"Emmerson Mokuiki","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0},
{"name":"Long Chau","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0},
{"name":"Nicholas Zambrano","state":"SC","wc":"M-53","cat":"Raw","div":"SJ","total":0},
{"name":"Ahmed Al Fatli","state":"IA","wc":"M-53","cat":"Raw","div":"SJ","total":0},
{"name":"Alec Weinstein","state":"PA","wc":"M-53","cat":"Raw","div":"SJ","total":0},
{"name":"Alejandro Garcia","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0},
{"name":"Daniel Saenz","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0},
{"name":"James Medrano","state":"TX","wc":"M-53","cat":"Raw","div":"J","total":0},
{"name":"Trey Nguyen","state":"LA","wc":"M-53","cat":"Equipped","div":"SJ","total":0},
{"name":"Brayden Hollier","state":"--","wc":"M-53","cat":"Equipped","div":"J","total":75},
{"name":"Jonathan Nico","state":"AZ","wc":"M-59","cat":"Raw","div":"SO","total":150},
{"name":"David Berube","state":"--","wc":"M-59","cat":"Raw","div":"SA","total":75},
{"name":"Eric Kupperstein","state":"MA","wc":"M-59","cat":"Raw","div":"M3","total":407.5},
{"name":"Alexander Kim","state":"IL","wc":"M-59","cat":"Raw","div":"M3","total":0},
{"name":"Kaleb Mcdowell","state":"MD","wc":"M-59","cat":"Raw","div":"M2","total":0},
{"name":"Huaiyu Tan","state":"FL","wc":"M-59","cat":"Raw","div":"M1","total":75},
{"name":"Newton Cheng","state":"CA","wc":"M-59","cat":"Raw","div":"M1","total":0},
{"name":"William Tenerelli","state":"NJ","wc":"M-59","cat":"Raw","div":"M1","total":0},
{"name":"Justin Nguyen","state":"CA","wc":"M-59","cat":"Raw","div":"SJ","total":507.5},
{"name":"Masato Gentle","state":"NV","wc":"M-59","cat":"Raw","div":"SJ","total":447.5},
{"name":"Grayson Manning","state":"IA","wc":"M-59","cat":"Raw","div":"SJ","total":0},
{"name":"Tyler Friedman","state":"PA","wc":"M-59","cat":"Raw","div":"SJ","total":0},
{"name":"Daniel Elliott","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0},
{"name":"Zaiden Olvera","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0},
{"name":"Alex Martinez","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0},
{"name":"Timmy Truong","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":530},
{"name":"Cesar Perez","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":467.5},
{"name":"Patrick Devine","state":"NJ","wc":"M-59","cat":"Raw","div":"J","total":437.5},
{"name":"Cardin Do","state":"MA","wc":"M-59","cat":"Raw","div":"J","total":0},
{"name":"Deondre Moody","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0},
{"name":"Brady Price","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0},
{"name":"A Phi Le","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0},
{"name":"Fabian Viernes","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0},
{"name":"Tyler Morrow","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0},
{"name":"Ryan Sturgis","state":"--","wc":"M-59","cat":"Raw","div":"J","total":0},
{"name":"Ethan Andrews","state":"--","wc":"M-59","cat":"Equipped","div":"SJ","total":417.5},
{"name":"Ethen Bui","state":"LA","wc":"M-59","cat":"Equipped","div":"SJ","total":0},
{"name":"Rafael Arredondo","state":"TX","wc":"M-59","cat":"Equipped","div":"SJ","total":0},
{"name":"Bodie Lacoe","state":"PA","wc":"M-59","cat":"Equipped","div":"J","total":585},
{"name":"Jesus Martinez","state":"TX","wc":"M-59","cat":"Equipped","div":"J","total":0},
{"name":"Adrian Mcghee","state":"GA","wc":"M-66","cat":"Raw","div":"SO","total":372.5},
{"name":"Ben Boehm","state":"IN","wc":"M-66","cat":"Raw","div":"SO","total":262.5},
{"name":"Elliot Guinn","state":"--","wc":"M-66","cat":"Raw","div":"SO","total":0},
{"name":"Manuel Rodriguez","state":"FL","wc":"M-66","cat":"Raw","div":"M4","total":440},
{"name":"Richard Flaum","state":"TX","wc":"M-66","cat":"Raw","div":"M4","total":0},
{"name":"Eric Verbel","state":"NJ","wc":"M-66","cat":"Raw","div":"M3","total":75},
{"name":"Michael Feldhaus","state":"OH","wc":"M-66","cat":"Raw","div":"M3","total":0},
{"name":"Jay Thompson","state":"NC","wc":"M-66","cat":"Raw","div":"M3","total":0},
{"name":"Rick Brink","state":"CO","wc":"M-66","cat":"Raw","div":"M2","total":522.5},
{"name":"Ron Brinker","state":"OH","wc":"M-66","cat":"Raw","div":"M2","total":497.5},
{"name":"Tuan Nguyen","state":"PA","wc":"M-66","cat":"Raw","div":"M1","total":540},
{"name":"An Nguyen","state":"CA","wc":"M-66","cat":"Raw","div":"M1","total":0},
{"name":"Shawn Frasquillo","state":"TX","wc":"M-66","cat":"Raw","div":"M1","total":0},
{"name":"Wyatt Dodson","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":405},
{"name":"Sammy Sobie","state":"--","wc":"M-66","cat":"Raw","div":"SJ","total":340},
{"name":"Suhan Hajela","state":"CA","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Denzil Smith","state":"AR","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Brody Wyatt","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Benjamin Yang","state":"NY","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Berkeley Britt","state":"GA","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Bryan Lara","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Anthony Acampora","state":"--","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Levi Jansen","state":"WI","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Kyren Howard","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Damien Sanchez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Martin Alvarez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0},
{"name":"Tucker Abbott","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":542.5},
{"name":"Pierce Woodworth","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":500},
{"name":"Nathan Lovemore","state":"LA","wc":"M-66","cat":"Raw","div":"J","total":75},
{"name":"Enzo Vickroy","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Timothy Ochoa","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Hayden Wolf","state":"WI","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Tristian Davila","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Austin Harris","state":"NC","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Evan Hawk","state":"FL","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Tanner Jacobi","state":"MO","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Hassan Coleman","state":"GA","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Xavier Zambrano","state":"SC","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Vedant Ray","state":"OH","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Nicholas Lagen","state":"AL","wc":"M-66","cat":"Raw","div":"J","total":0},
{"name":"Alex Galant","state":"CO","wc":"M-66","cat":"Equipped","div":"M4","total":0},
{"name":"Eric Verbel","state":"NJ","wc":"M-66","cat":"Equipped","div":"M3","total":460},
{"name":"Hennis Washington Iii","state":"--","wc":"M-66","cat":"Equipped","div":"M2","total":0},
{"name":"Kamil Iwasiow","state":"FL","wc":"M-66","cat":"Equipped","div":"M1","total":675},
{"name":"Bryand Mao","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":502.5},
{"name":"George Cunningham Iv","state":"NC","wc":"M-66","cat":"Equipped","div":"SJ","total":435},
{"name":"Andrew J Pena","state":"TX","wc":"M-66","cat":"Equipped","div":"SJ","total":0},
{"name":"Charles Battaglia","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0},
{"name":"Jace Duchesne","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0},
{"name":"Alex Folmar","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0},
{"name":"Robert Godinez","state":"--","wc":"M-66","cat":"Equipped","div":"SJ","total":0},
{"name":"Marcelo Chanaba","state":"--","wc":"M-66","cat":"Equipped","div":"J","total":512.5},
{"name":"Gahel Griner","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":490},
{"name":"Joseph Marceaux","state":"LA","wc":"M-66","cat":"Equipped","div":"J","total":75},
{"name":"Isaiah Glasgow","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0},
{"name":"Juventino Zapata Iv","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0},
{"name":"Andrew Gonzalez","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0},
{"name":"David Floyd","state":"GA","wc":"M-74","cat":"Raw","div":"SO","total":0},
{"name":"Joseph Songco","state":"TX","wc":"M-74","cat":"Raw","div":"SA","total":0},
{"name":"John Laflamme","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":450},
{"name":"Louis Caruana","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":267.5},
{"name":"Thomas Ashbrook","state":"CA","wc":"M-74","cat":"Raw","div":"M3","total":485},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Raw","div":"M3","total":142.5},
{"name":"Robert Lane","state":"WA","wc":"M-74","cat":"Raw","div":"M2","total":602.5},
{"name":"Matthew Chapman","state":"VA","wc":"M-74","cat":"Raw","div":"M2","total":400},
{"name":"Patrick Foster","state":"PA","wc":"M-74","cat":"Raw","div":"M2","total":0},
{"name":"Donald Bigham","state":"SC","wc":"M-74","cat":"Raw","div":"M2","total":0},
{"name":"Michael Haran","state":"MD","wc":"M-74","cat":"Raw","div":"M1","total":642.5},
{"name":"Lee Rogers","state":"NH","wc":"M-74","cat":"Raw","div":"M1","total":487.5},
{"name":"Carlos Mata","state":"--","wc":"M-74","cat":"Raw","div":"M1","total":135},
{"name":"Due Nguyen","state":"NY","wc":"M-74","cat":"Raw","div":"M1","total":0},
{"name":"Weston Lisemby","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":572.5},
{"name":"Javier Gonzalez","state":"WI","wc":"M-74","cat":"Raw","div":"SJ","total":75},
{"name":"Graham Steel","state":"FL","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Joshua Ambrose","state":"--","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Xzavier Aguilar","state":"--","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Parker Golden","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Evan Machik","state":"PA","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Vihaan Barar","state":"NJ","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Jaxon Backus","state":"AR","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Jamie Huh","state":"CA","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Ben Tran","state":"MA","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Kane West","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Connor Townsend","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"David Mays","state":"OH","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Damon Llamas","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Orlando Torres","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0},
{"name":"Everardo Crispin","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":722.5},
{"name":"Jeremy Rodriguez","state":"MA","wc":"M-74","cat":"Raw","div":"J","total":685},
{"name":"Asante Gordon","state":"IA","wc":"M-74","cat":"Raw","div":"J","total":607.5},
{"name":"Cameron Kennedy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":592.5},
{"name":"Rito Flores","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":590.5},
{"name":"Alexander Lucero","state":"NM","wc":"M-74","cat":"Raw","div":"J","total":557.5},
{"name":"Garrett Rogers","state":"DE","wc":"M-74","cat":"Raw","div":"J","total":555},
{"name":"Wyatt Abbott","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":460},
{"name":"Nicolas Gaines","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":75},
{"name":"Gabriel Garza","state":"--","wc":"M-74","cat":"Raw","div":"J","total":75},
{"name":"Ivan Liu","state":"GA","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Edgar Duran","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Joshua Lawson","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Kyle Cones","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Braden Mertz","state":"PA","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Brayden Molinyawe","state":"OH","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Gavin Gill","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Alexander Hunt","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Byron Moore","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Harrison Lamy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Jacob Anucilla","state":"CA","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Luke Christopherson","state":"MN","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Santiago Lara","state":"LA","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Kai Vasquez","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Caleb Chan","state":"CA","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"James Beard","state":"MS","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Alejandro Mccormick","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Emiliano Fraga","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0},
{"name":"Durwin Ho","state":"NJ","wc":"M-74","cat":"Raw","div":"O","total":0},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Equipped","div":"M3","total":643},
{"name":"Liam Kincanon","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":0},
{"name":"Gavin Desalvo","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":0},
{"name":"Lawson Lillo","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":75},
{"name":"Logan Edmonds","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":0},
{"name":"Will Eckford","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":0},
{"name":"Cole Goudeau","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":0},
{"name":"Noah Duplichan","state":"LA","wc":"M-83","cat":"Raw","div":"SO","total":0},
{"name":"Ken Levine","state":"PA","wc":"M-83","cat":"Raw","div":"M4","total":432.5},
{"name":"Russ Marr","state":"NM","wc":"M-83","cat":"Raw","div":"M4","total":0},
{"name":"Willie Wong","state":"CA","wc":"M-83","cat":"Raw","div":"M3","total":552.5},
{"name":"Carlos Lewis","state":"TX","wc":"M-83","cat":"Raw","div":"M3","total":535},
{"name":"Laddie Gibson","state":"NY","wc":"M-83","cat":"Raw","div":"M3","total":0},
{"name":"Steve Destephen","state":"OH","wc":"M-83","cat":"Raw","div":"M3","total":0},
{"name":"Jesus Fragoso","state":"--","wc":"M-83","cat":"Raw","div":"M2","total":625},
{"name":"Thaddeus Say","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":560},
{"name":"Garrin Clark","state":"MI","wc":"M-83","cat":"Raw","div":"M2","total":225},
{"name":"Mfon Akpan","state":"OK","wc":"M-83","cat":"Raw","div":"M2","total":0},
{"name":"Sikander Aasim","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":0},
{"name":"Ross Leppala","state":"GA","wc":"M-83","cat":"Raw","div":"M1","total":747.5},
{"name":"Anthony Perkins","state":"TX","wc":"M-83","cat":"Raw","div":"M1","total":642.5},
{"name":"Robert Rodriguez","state":"LA","wc":"M-83","cat":"Raw","div":"M1","total":430},
{"name":"Julien Comte","state":"PA","wc":"M-83","cat":"Raw","div":"M1","total":75},
{"name":"Lauren Cohen","state":"MA","wc":"M-83","cat":"Raw","div":"M1","total":75},
{"name":"Ben Dresher","state":"--","wc":"M-83","cat":"Raw","div":"M1","total":0},
{"name":"Lionel Stoxstell Ii","state":"NV","wc":"M-83","cat":"Raw","div":"M1","total":0},
{"name":"Ryan Kuhlmann","state":"AL","wc":"M-83","cat":"Raw","div":"M1","total":0},
{"name":"Jaime Velasquez","state":"MD","wc":"M-83","cat":"Raw","div":"M1","total":0},
{"name":"Eli Sobie","state":"MI","wc":"M-83","cat":"Raw","div":"SJ","total":477.5},
{"name":"Aidan Bauer","state":"AZ","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Mason Madji","state":"NC","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Ogden Horowitz Shea","state":"NY","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Advaith Goud Sirisanagandla","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Tate Van Essen","state":"IA","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Valentin Caballero Rivera","state":"CA","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"John Longano","state":"OH","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Joshua Tang","state":"MD","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Oscar Rivas","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Kayden Curtiss","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Timothy Coleman","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Matthew Lim","state":"--","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Brody Williamson","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Jairo Ordonez Jr","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0},
{"name":"Eric Gonzalez-Tunon","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":745},
{"name":"Dillon Johnson","state":"--","wc":"M-83","cat":"Raw","div":"J","total":715},
{"name":"Kacey Morgan","state":"AL","wc":"M-83","cat":"Raw","div":"J","total":600},
{"name":"Raphael Rivera","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":575},
{"name":"Noah Raulston","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":565},
{"name":"Jonathan Vasquez","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":542.5},
{"name":"Rayce Pennartz","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":485},
{"name":"Ibrahiem Hamed","state":"LA","wc":"M-83","cat":"Raw","div":"J","total":75},
{"name":"Jordan Zavala","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Calvin Trapp","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Daniel Castaneda","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Wilson Guo","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Aaron Welch","state":"CO","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Talon Pippin","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Justin Ng","state":"IL","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Sean Fitzgerald","state":"PA","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Aiolya Zhang","state":"MI","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Ryan Bautista","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Aron Atakuzi","state":"OK","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Brendon Vineyard","state":"NY","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Patrick Broussard","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Dylan Stefan","state":"OH","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Ryan Samadi","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Joshua Ham","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Xavier Mccarty","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Wayne Anderson","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Samuel Johnson","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Jackson Voss","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Danny Lawrence","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Max Wright","state":"KY","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Jack Schultz","state":"IA","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Juan Renderos","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Luke Medina","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Fisher Chung","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Luis Alvarado","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0},
{"name":"Gabriel Pongchit","state":"MD","wc":"M-83","cat":"Raw","div":"O","total":585},
{"name":"Thomas Fagiano","state":"NH","wc":"M-83","cat":"Raw","div":"O","total":0},
{"name":"Joshua Rafael Ramos","state":"CA","wc":"M-83","cat":"Raw","div":"O","total":0},
{"name":"Will Mankhey","state":"NE","wc":"M-83","cat":"Raw","div":"O","total":0},
{"name":"William Clayton","state":"NJ","wc":"M-83","cat":"Equipped","div":"M4","total":387.5},
{"name":"Chris Boillot","state":"AZ","wc":"M-83","cat":"Equipped","div":"M3","total":607.5},
{"name":"Keith Nautel","state":"NY","wc":"M-83","cat":"Equipped","div":"M3","total":0},
{"name":"Travis Pardue","state":"NC","wc":"M-83","cat":"Equipped","div":"M2","total":590},
{"name":"Jose Munoz","state":"NM","wc":"M-83","cat":"Equipped","div":"M1","total":392.5},
{"name":"Nate Crowder","state":"GA","wc":"M-83","cat":"Equipped","div":"M1","total":75},
{"name":"Wyatt Gremillion","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0},
{"name":"Juan David Aguirre Iii","state":"TX","wc":"M-83","cat":"Equipped","div":"SJ","total":0},
{"name":"Paxton Audler","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0},
{"name":"Michael Delaney","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0},
{"name":"Ty Felle","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":595},
{"name":"Carter Lewis","state":"LA","wc":"M-83","cat":"Equipped","div":"J","total":75},
{"name":"Troy Nguyen","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":0},
{"name":"Stephen Simpson","state":"IN","wc":"M-93","cat":"Raw","div":"SO","total":0},
{"name":"Robert Moore","state":"MD","wc":"M-93","cat":"Raw","div":"M4","total":490},
{"name":"Phillip Rosenstern","state":"PA","wc":"M-93","cat":"Raw","div":"M4","total":487.5},
{"name":"Bruce Bullock","state":"NC","wc":"M-93","cat":"Raw","div":"M4","total":0},
{"name":"Peter Tressel","state":"MN","wc":"M-93","cat":"Raw","div":"M3","total":502.5},
{"name":"Steven Carpenter","state":"FL","wc":"M-93","cat":"Raw","div":"M3","total":490},
{"name":"Todd Peterson","state":"NV","wc":"M-93","cat":"Raw","div":"M3","total":472.5},
{"name":"Darrell Gaspard","state":"LA","wc":"M-93","cat":"Raw","div":"M3","total":75},
{"name":"David Ricks","state":"FL","wc":"M-93","cat":"Raw","div":"M3","total":0},
{"name":"Troy Gibson","state":"NY","wc":"M-93","cat":"Raw","div":"M3","total":0},
{"name":"Edward Ruland","state":"FL","wc":"M-93","cat":"Raw","div":"M2","total":645},
{"name":"Marquies Sampa","state":"TX","wc":"M-93","cat":"Raw","div":"M2","total":0},
{"name":"Rodney Elm","state":"AZ","wc":"M-93","cat":"Raw","div":"M2","total":0},
{"name":"Layne Norton","state":"FL","wc":"M-93","cat":"Raw","div":"M1","total":788},
{"name":"Michael Reed","state":"OH","wc":"M-93","cat":"Raw","div":"M1","total":682.5},
{"name":"Nathan Kulas","state":"ME","wc":"M-93","cat":"Raw","div":"M1","total":75},
{"name":"Courtney Leffall","state":"TX","wc":"M-93","cat":"Raw","div":"M1","total":0},
{"name":"Roy Jackson","state":"AL","wc":"M-93","cat":"Raw","div":"M1","total":0},
{"name":"Sam Maiewski","state":"MA","wc":"M-93","cat":"Raw","div":"SJ","total":550},
{"name":"Eric Jin","state":"IN","wc":"M-93","cat":"Raw","div":"SJ","total":545},
{"name":"Noel Kurtin","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":415},
{"name":"Xander Lane","state":"OR","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Ethan Cohen","state":"GA","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Selwyn Logan","state":"ME","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Liam Goldich","state":"PA","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Dylan Moyal","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Justin Corle","state":"MI","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Paul Mourain","state":"LA","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Jack Cox","state":"NJ","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Jet Jones","state":"WI","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Tyler Plumley","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Manar Albeirakdar","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0},
{"name":"Kyle White","state":"--","wc":"M-93","cat":"Raw","div":"J","total":807.5},
{"name":"Jack Reynolds","state":"MA","wc":"M-93","cat":"Raw","div":"J","total":795},
{"name":"Dylan Albert","state":"LA","wc":"M-93","cat":"Raw","div":"J","total":725},
{"name":"Nahuel Peralta","state":"--","wc":"M-93","cat":"Raw","div":"J","total":707.5},
{"name":"Brendan Mackin","state":"--","wc":"M-93","cat":"Raw","div":"J","total":680},
{"name":"Demitri Ayala","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":680},
{"name":"Alex Vastey","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":637.5},
{"name":"Nick Walker","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":635},
{"name":"Victor Herrera","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":635},
{"name":"Laakea Faurot","state":"HI","wc":"M-93","cat":"Raw","div":"J","total":602.5},
{"name":"Aaron Estocin","state":"NM","wc":"M-93","cat":"Raw","div":"J","total":562.5},
{"name":"Riley Morgan","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Davis Wenger","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Waylon Vidler","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Adam Greer","state":"CA","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Cameron Thayer","state":"--","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Miles Hartway","state":"NY","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Devin Mervau","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Jake Lewis","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Ben Mckinney","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Evan Ross","state":"VA","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Adam Bretsch","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Jacob Danielson","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Jonathan Eppler","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Simon Powell","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Kane Smith","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Nick Sanchelli","state":"SC","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Peyton Morgan","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Jonatan Hernandez","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Jayvon Irwin","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Justin Blechinger","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Luke Mitchell","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Samuel Lopez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Eric Pinon","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Arnol Rosales","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Aryan Nautiyal","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Emanol Gonzalez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0},
{"name":"Jovanni Ontiveros","state":"TX","wc":"M-93","cat":"Raw","div":"O","total":0},
{"name":"Thomas Cencich","state":"CO","wc":"M-93","cat":"Equipped","div":"M3","total":606},
{"name":"James Brown","state":"PA","wc":"M-93","cat":"Equipped","div":"M3","total":587.5},
{"name":"Gerard Dally","state":"--","wc":"M-93","cat":"Equipped","div":"M3","total":530},
{"name":"Steven Carpenter","state":"FL","wc":"M-93","cat":"Equipped","div":"M3","total":490},
{"name":"Marcos Sanchez","state":"--","wc":"M-93","cat":"Equipped","div":"M2","total":642.5},
{"name":"William Kahapea","state":"--","wc":"M-93","cat":"Equipped","div":"M2","total":585},
{"name":"Rick Fowler","state":"IL","wc":"M-93","cat":"Equipped","div":"M2","total":75},
{"name":"Matt Rodock","state":"WI","wc":"M-93","cat":"Equipped","div":"M1","total":847.5},
{"name":"Jerry Contreras","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":0},
{"name":"Brennan Jarrell","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":0},
{"name":"Caleb Frnka","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":0},
{"name":"Thomas Killam","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":0},
{"name":"Rocky Dufort","state":"LA","wc":"M-93","cat":"Equipped","div":"J","total":637.5},
{"name":"Ronnie Guerra","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":75},
{"name":"Encarnacion Lugo Jr.","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":0},
{"name":"John Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"SO","total":527.5},
{"name":"Dion Thomas","state":"GA","wc":"M-105","cat":"Raw","div":"SO","total":452.5},
{"name":"Dave Schneider","state":"OH","wc":"M-105","cat":"Raw","div":"M4","total":490},
{"name":"Michael Lobb","state":"OR","wc":"M-105","cat":"Raw","div":"M4","total":440},
{"name":"John Wetter","state":"--","wc":"M-105","cat":"Raw","div":"M3","total":545},
{"name":"Peter Severenuk","state":"NJ","wc":"M-105","cat":"Raw","div":"M3","total":427.5},
{"name":"Jeffrey Fellows","state":"OR","wc":"M-105","cat":"Raw","div":"M3","total":417.5},
{"name":"Jeff Olsen","state":"WA","wc":"M-105","cat":"Raw","div":"M3","total":0},
{"name":"Egan Walker","state":"NV","wc":"M-105","cat":"Raw","div":"M3","total":0},
{"name":"David Koch","state":"MN","wc":"M-105","cat":"Raw","div":"M2","total":700},
{"name":"Chris Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"M2","total":75},
{"name":"David Nix","state":"OR","wc":"M-105","cat":"Raw","div":"M2","total":0},
{"name":"Matthew Naegel","state":"SC","wc":"M-105","cat":"Raw","div":"M2","total":0},
{"name":"Bob Eucker","state":"OH","wc":"M-105","cat":"Raw","div":"M2","total":0},
{"name":"Carlos Santoliquido","state":"--","wc":"M-105","cat":"Raw","div":"M1","total":832.5},
{"name":"Ls Mcclain","state":"--","wc":"M-105","cat":"Raw","div":"M1","total":812.5},
{"name":"Ryan Donnelly","state":"NJ","wc":"M-105","cat":"Raw","div":"M1","total":742.5},
{"name":"Jermaine Williams","state":"MD","wc":"M-105","cat":"Raw","div":"M1","total":575},
{"name":"Gerald Ratulowski","state":"TX","wc":"M-105","cat":"Raw","div":"M1","total":75},
{"name":"Alpha Dumbuya","state":"GA","wc":"M-105","cat":"Raw","div":"M1","total":0},
{"name":"Nikhil Karulkar","state":"WA","wc":"M-105","cat":"Raw","div":"M1","total":0},
{"name":"Jason Coble","state":"CA","wc":"M-105","cat":"Raw","div":"M1","total":0},
{"name":"Jacob Tumminello","state":"MS","wc":"M-105","cat":"Raw","div":"SJ","total":0},
{"name":"Aaron Quail","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0},
{"name":"Vedant Remella","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0},
{"name":"Matheo Nave","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0},
{"name":"Michael Cruz","state":"OK","wc":"M-105","cat":"Raw","div":"SJ","total":0},
{"name":"Brenden Ross","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0},
{"name":"Sawyer Reinart","state":"WI","wc":"M-105","cat":"Raw","div":"SJ","total":0},
{"name":"Matthew Teal","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0},
{"name":"Austin Wilson","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0},
{"name":"Hunter Olsen","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":770},
{"name":"Evan Gonsorcik","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":730},
{"name":"Ej Chikando","state":"--","wc":"M-105","cat":"Raw","div":"J","total":692.5},
{"name":"Erick Severino","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":692.5},
{"name":"Cash Zumhingst","state":"IN","wc":"M-105","cat":"Raw","div":"J","total":660},
{"name":"Ashton Smith","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":650},
{"name":"Angelo Carpino","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":630},
{"name":"Gil Romero Lopez","state":"AZ","wc":"M-105","cat":"Raw","div":"J","total":627.5},
{"name":"Kaiden Funderburk","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":617.5},
{"name":"Steven Aderhold","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":572.5},
{"name":"Josue Aguilera","state":"--","wc":"M-105","cat":"Raw","div":"J","total":75},
{"name":"Luke Wymer","state":"OH","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"George Acosta","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Joshua Lawson","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Kaden Mullins","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Austin Mckinney","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Mark Hoffman","state":"ID","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Lawrence Jones","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Alex Paige","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Charles Porter","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Zachary Olsen","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Thomas Boyd","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Nico Meisser","state":"CA","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Dallas Romanowski","state":"NC","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Fernando Rivera","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Noah Schmidtberger","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Austin Hamilton","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":0},
{"name":"Bryan Prado","state":"CA","wc":"M-105","cat":"Raw","div":"O","total":0},
{"name":"Keith Taylor","state":"--","wc":"M-105","cat":"Equipped","div":"M4","total":547.5},
{"name":"Richard Johnson","state":"MA","wc":"M-105","cat":"Equipped","div":"M3","total":587.5},
{"name":"Ron Falcone Jr","state":"NJ","wc":"M-105","cat":"Equipped","div":"M3","total":500},
{"name":"Dana Rosenzweig","state":"IL","wc":"M-105","cat":"Equipped","div":"M3","total":475},
{"name":"Dale Mclaren","state":"GA","wc":"M-105","cat":"Equipped","div":"M2","total":912.5},
{"name":"Ryan Donnelly","state":"NJ","wc":"M-105","cat":"Equipped","div":"M1","total":805},
{"name":"Pete Nees","state":"--","wc":"M-105","cat":"Equipped","div":"M1","total":0},
{"name":"Cooper Trosclair","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0},
{"name":"Hutsen Roberts","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0},
{"name":"Brody Young","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0},
{"name":"Tristian Luna","state":"TX","wc":"M-105","cat":"Equipped","div":"SJ","total":0},
{"name":"Mason Matrone","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0},
{"name":"Jose Bellon","state":"FL","wc":"M-105","cat":"Equipped","div":"J","total":75},
{"name":"Matthew Hammond","state":"LA","wc":"M-120","cat":"Raw","div":"SO","total":0},
{"name":"Erik Madsen","state":"WA","wc":"M-120","cat":"Raw","div":"M4","total":485},
{"name":"Rory Mccoy","state":"PA","wc":"M-120","cat":"Raw","div":"M4","total":465},
{"name":"Michael Bitting","state":"FL","wc":"M-120","cat":"Raw","div":"M4","total":0},
{"name":"Wilson Martinez","state":"--","wc":"M-120","cat":"Raw","div":"M3","total":707.5},
{"name":"Austin Keanu","state":"HI","wc":"M-120","cat":"Raw","div":"M3","total":75},
{"name":"Michael Mcqueen","state":"TX","wc":"M-120","cat":"Raw","div":"M2","total":717.5},
{"name":"Esteban Rubens","state":"NH","wc":"M-120","cat":"Raw","div":"M2","total":680},
{"name":"Michael Mcqueen","state":"--","wc":"M-120","cat":"Raw","div":"M2","total":122.5},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Raw","div":"M2","total":0},
{"name":"Daniel Gomez","state":"CA","wc":"M-120","cat":"Raw","div":"M2","total":0},
{"name":"Craig Hickman","state":"ID","wc":"M-120","cat":"Raw","div":"M2","total":0},
{"name":"Thomas Crist","state":"NC","wc":"M-120","cat":"Raw","div":"M2","total":0},
{"name":"Michael Tuchscherer","state":"AK","wc":"M-120","cat":"Raw","div":"M1","total":900},
{"name":"Jonathan Jurewicz","state":"MD","wc":"M-120","cat":"Raw","div":"M1","total":75},
{"name":"Cordell Estrada","state":"--","wc":"M-120","cat":"Raw","div":"M1","total":0},
{"name":"Nathan Alexander","state":"WA","wc":"M-120","cat":"Raw","div":"M1","total":0},
{"name":"Aaron Mizushima","state":"HI","wc":"M-120","cat":"Raw","div":"M1","total":0},
{"name":"Desmond Jordan","state":"NC","wc":"M-120","cat":"Raw","div":"M1","total":0},
{"name":"Austin Oakley","state":"IN","wc":"M-120","cat":"Raw","div":"SJ","total":0},
{"name":"Cesar Garcia","state":"OR","wc":"M-120","cat":"Raw","div":"SJ","total":0},
{"name":"Dante Deleon","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":898.5},
{"name":"Cain Lopez","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":817.5},
{"name":"Jacob Breckinridge","state":"PA","wc":"M-120","cat":"Raw","div":"J","total":807.5},
{"name":"Tanner Newman","state":"OK","wc":"M-120","cat":"Raw","div":"J","total":780},
{"name":"Gilberto Villarreal","state":"CA","wc":"M-120","cat":"Raw","div":"J","total":740},
{"name":"Leonardo Tarango","state":"NM","wc":"M-120","cat":"Raw","div":"J","total":592.5},
{"name":"Connor Long","state":"KY","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Nicolas Hawke","state":"--","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Reagan Belvin","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Lincoln Mickelsen","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Daniel Navarrete","state":"--","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Chancellor Buford","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Brayden Naus","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Alex Paige","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Bennett Montplaisir","state":"OR","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Ty Morawski","state":"OH","wc":"M-120","cat":"Raw","div":"J","total":0},
{"name":"Brad Salter","state":"TX","wc":"M-120","cat":"Equipped","div":"M4","total":447.5},
{"name":"Wilson Martinez","state":"--","wc":"M-120","cat":"Equipped","div":"M3","total":762.5},
{"name":"Anthony Harris","state":"HI","wc":"M-120","cat":"Equipped","div":"M3","total":245},
{"name":"Travis Koehn","state":"WY","wc":"M-120","cat":"Equipped","div":"M2","total":822.5},
{"name":"Michael Kalter","state":"ME","wc":"M-120","cat":"Equipped","div":"M2","total":807.5},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Equipped","div":"M2","total":0},
{"name":"Adam Moore","state":"MD","wc":"M-120","cat":"Equipped","div":"M1","total":460},
{"name":"Carson Frnka","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":0},
{"name":"Israel Soliz","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":0},
{"name":"Dar'Reyus Scott","state":"LA","wc":"M-120","cat":"Equipped","div":"SJ","total":0},
{"name":"Tyler Halpert","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":0},
{"name":"Louis Maxwell","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":0},
{"name":"Luke Bergeron","state":"LA","wc":"M-120+","cat":"Raw","div":"SO","total":0},
{"name":"Mark Branham","state":"IN","wc":"M-120+","cat":"Raw","div":"M4","total":0},
{"name":"Domenick Fonio","state":"--","wc":"M-120+","cat":"Raw","div":"M3","total":0},
{"name":"Kenneth Cameron","state":"NV","wc":"M-120+","cat":"Raw","div":"M2","total":722.5},
{"name":"Christopher Ptacek","state":"OR","wc":"M-120+","cat":"Raw","div":"M2","total":0},
{"name":"Patrick Northcutt","state":"IL","wc":"M-120+","cat":"Raw","div":"M2","total":0},
{"name":"Robert Ward","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":830},
{"name":"James Farrior","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":817.5},
{"name":"Nathan Gorham","state":"MD","wc":"M-120+","cat":"Raw","div":"M1","total":805},
{"name":"Khourey Royal","state":"NC","wc":"M-120+","cat":"Raw","div":"M1","total":745},
{"name":"Henry Coates","state":"OR","wc":"M-120+","cat":"Raw","div":"M1","total":0},
{"name":"Valente Inniss-Thompson","state":"TX","wc":"M-120+","cat":"Raw","div":"M1","total":0},
{"name":"Perry Ellis","state":"GA","wc":"M-120+","cat":"Raw","div":"M1","total":0},
{"name":"Andrew Gonzalez","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":0},
{"name":"Omar Kalo","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":0},
{"name":"Jack Bartlett","state":"ID","wc":"M-120+","cat":"Raw","div":"J","total":830},
{"name":"Uriel Perez","state":"--","wc":"M-120+","cat":"Raw","div":"J","total":725},
{"name":"Jordan Blincoe","state":"NY","wc":"M-120+","cat":"Raw","div":"J","total":705},
{"name":"Carlos Olivares","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":660},
{"name":"Jason Escobar Jr","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":642.5},
{"name":"Carson Crawford","state":"--","wc":"M-120+","cat":"Raw","div":"J","total":250},
{"name":"Jose Lugo","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":0},
{"name":"Kevin Garza","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":0},
{"name":"Corey Jackson","state":"MD","wc":"M-120+","cat":"Raw","div":"O","total":687.5},
{"name":"Robert Keller","state":"FL","wc":"M-120+","cat":"Equipped","div":"M3","total":162.5},
{"name":"Steve Davenport","state":"NE","wc":"M-120+","cat":"Equipped","div":"M2","total":710},
{"name":"Douglas Rawson","state":"NV","wc":"M-120+","cat":"Equipped","div":"M2","total":450},
{"name":"Tim Brockett","state":"OH","wc":"M-120+","cat":"Equipped","div":"M1","total":645},
{"name":"Andrew Cargill","state":"--","wc":"M-120+","cat":"Equipped","div":"M1","total":292.5},
{"name":"Michael Jean Sr.","state":"--","wc":"M-120+","cat":"Equipped","div":"M1","total":0},
{"name":"Cameron Ross","state":"LA","wc":"M-120+","cat":"Equipped","div":"SJ","total":0},
{"name":"Ryan Rubio","state":"--","wc":"M-120+","cat":"Equipped","div":"SJ","total":0},
{"name":"Alfonso Gutierrez","state":"--","wc":"M-120+","cat":"Equipped","div":"J","total":0},
{"name":"Katherine Evert","state":"MO","wc":"Out","cat":"Raw","div":"M4","total":0},
{"name":"Jim Kathios","state":"NH","wc":"Out","cat":"Raw","div":"M3","total":605},
{"name":"Ron Falcone Jr","state":"NJ","wc":"Out","cat":"Raw","div":"M3","total":442.5},
{"name":"Melissa Forbis","state":"--","wc":"Out","cat":"Raw","div":"M3","total":282.5},
{"name":"Sheila Hoover","state":"OR","wc":"Out","cat":"Raw","div":"M3","total":0},
{"name":"John Demchak","state":"SC","wc":"Out","cat":"Raw","div":"M2","total":527.5},
{"name":"Stephanie Carpenter","state":"ID","wc":"Out","cat":"Raw","div":"M2","total":427.5},
{"name":"Cynthia Browning","state":"IN","wc":"Out","cat":"Raw","div":"M2","total":410},
{"name":"Christopher Ptacek","state":"OR","wc":"Out","cat":"Raw","div":"M2","total":0},
{"name":"Eli O'Keefe","state":"OH","wc":"Out","cat":"Raw","div":"J","total":0},
{"name":"Marina Tran","state":"LA","wc":"Out","cat":"Raw","div":"J","total":0}
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
  const [sortCol, setSortCol] = useState("total");
  const [sortDir, setSortDir] = useState("desc");
  const [showZero, setShowZero] = useState(true);
  const [genderFilter, setGenderFilter] = useState("All");

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
  }, [divFilter, wcFilter, catFilter, genderFilter, showZero, searchTerm, sortCol, sortDir]);

  const handleSort = (col) => {
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
          <FilterSelect label="Division" value={divFilter} onChange={setDivFilter}
            options={[{v:"All",l:"All Divisions"}, ...allDivisions.map(d => ({v:d, l:`${d} — ${DIV_LABELS[d]||d}`}))]} />
          <FilterSelect label="Gender" value={genderFilter} onChange={(v) => { setGenderFilter(v); setWcFilter("All"); }}
            options={[{v:"All",l:"All"},{v:"M",l:"Male"},{v:"F",l:"Female"}]} />
          <FilterSelect label="Weight Class" value={wcFilter} onChange={setWcFilter}
            options={[{v:"All",l:"All Classes"}, ...weightClasses.map(w => ({v:w, l:w}))]} />
          <FilterSelect label="Category" value={catFilter} onChange={setCatFilter}
            options={[{v:"All",l:"All"},{v:"Raw",l:"Raw"},{v:"Equipped",l:"Equipped"}]} />
        </div>
        <div style={{display:"flex", gap:12, marginBottom:16, alignItems:"center", flexWrap:"wrap"}}>
          <div style={{position:"relative", flex:"1 1 200px", maxWidth:320}}>
            <input
              type="text" placeholder="Search by name or state..."
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
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
                <tr><td colSpan={6} style={{padding:40, textAlign:"center", color:"#555", fontSize:15}}>
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
                    {r.name}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop:10, fontSize:11, color:"#444", textAlign:"center"}}>
          QT = Qualifying Total · Sort by clicking column headers
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
