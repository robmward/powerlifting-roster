import { useState, useMemo } from "react";


const ROSTER = [
{"name":"Abigail Le","state":"PA","wc":"F-43","cat":"Raw","div":"J","total":247.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Thaovy Tran","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":242.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brennan Fallon","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Abygail Guzman","state":"TX","wc":"F-43","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Molly Hutchinson","state":"LA","wc":"F-43","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Leanna Schnell","state":"AZ","wc":"F-47","cat":"Raw","div":"SO","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Chiaki Takada","state":"TX","wc":"F-47","cat":"Raw","div":"M3","total":295,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Suzie Johnson","state":"WA","wc":"F-47","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrea Nolting","state":"IN","wc":"F-47","cat":"Raw","div":"M2","total":270,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kelley Sherwin","state":"WI","wc":"F-47","cat":"Raw","div":"M2","total":255,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emma Horn","state":"PA","wc":"F-47","cat":"Raw","div":"J","total":296,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jlynn Fernandez","state":"TX","wc":"F-47","cat":"Equipped","div":"J","total":325,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gabriella Garza","state":"TX","wc":"F-47","cat":"Equipped","div":"J","total":317.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Addisyn Lege","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":175,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joanie Cannon","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jazlene Rios","state":"TX","wc":"F-47","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lisa Weiss","state":"OH","wc":"F-52","cat":"Raw","div":"M3","total":287.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lesley Scott","state":"OR","wc":"F-52","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Suzanne Hartwig-Gary","state":"MT","wc":"F-52","cat":"Raw","div":"M2","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Claudia Sherman","state":"TX","wc":"F-52","cat":"Raw","div":"M1","total":317.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cynthia Smith","state":"NC","wc":"F-52","cat":"Raw","div":"M1","total":222.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Marina Maxwell","state":"NC","wc":"F-52","cat":"Raw","div":"J","total":420,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Trinity Infante","state":"CA","wc":"F-52","cat":"Raw","div":"J","total":337.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ruhi Patel","state":"TX","wc":"F-52","cat":"Raw","div":"SJ","total":185,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Autumn Gilday","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":327.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Katelynn Billiot - Mem. Error","state":"--","wc":"F-52","cat":"Equipped","div":"J","total":295,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Itzel Loreto","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":235,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Abcde Mata","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":297.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nyeli Arispe","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Noemi Blancarte","state":"LA","wc":"F-52","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dora Justice","state":"TX","wc":"F-57","cat":"Raw","div":"M3","total":273.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kathleen Casper","state":"MN","wc":"F-57","cat":"Raw","div":"M3","total":222.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Janice Woerner","state":"NY","wc":"F-57","cat":"Raw","div":"M3","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Loraine Efron","state":"TX","wc":"F-57","cat":"Raw","div":"M3","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alana Mcgolrick","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":335,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jo Aita","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Patria Jimenez","state":"MA","wc":"F-57","cat":"Raw","div":"M1","total":387.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lindsay Rubel","state":"NY","wc":"F-57","cat":"Raw","div":"M1","total":350,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ellie Weinstein","state":"MN","wc":"F-57","cat":"Raw","div":"J","total":452.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eleni Guerrera","state":"VA","wc":"F-57","cat":"Raw","div":"J","total":440,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kathleen Carroll","state":"IL","wc":"F-57","cat":"Raw","div":"J","total":397.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Keira Segura","state":"LA","wc":"F-57","cat":"Raw","div":"J","total":395,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lauren Jansen","state":"WI","wc":"F-57","cat":"Raw","div":"J","total":327.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lexi Gonsalves","state":"CA","wc":"F-57","cat":"Raw","div":"J","total":285,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Claire Thomas","state":"PA","wc":"F-57","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Julia Ty","state":"CA","wc":"F-57","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Abigail Yandrich","state":"OH","wc":"F-57","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lindalee Urquieta","state":"TX","wc":"F-57","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Paige Gunkel","state":"WI","wc":"F-57","cat":"Raw","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luka Paskell","state":"MA","wc":"F-57","cat":"Raw","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Charleen Balcer Rowekamp","state":"MN","wc":"F-57","cat":"Equipped","div":"M1","total":320,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Octavia Hill","state":"OK","wc":"F-57","cat":"Equipped","div":"J","total":480,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Macayla Cano","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":360,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Elizabeth Pizarro","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":342.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Madaline Kennemer","state":"LA","wc":"F-57","cat":"Equipped","div":"J","total":242.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ava Dean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":201.9,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Paloma Calderon","state":"TX","wc":"F-57","cat":"Equipped","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jasmine Nguyen","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lyla Felean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lylah Jones","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sidney Konig Brock","state":"LA","wc":"F-63","cat":"Raw","div":"G","total":380,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Shelly Stettner","state":"MI","wc":"F-63","cat":"Raw","div":"M4","total":342.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jessica Marshall","state":"NY","wc":"F-63","cat":"Raw","div":"M3","total":356,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lynn Pietig","state":"MN","wc":"F-63","cat":"Raw","div":"M3","total":342.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tiffany Dean","state":"NV","wc":"F-63","cat":"Raw","div":"M3","total":265,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Isabelle Iliev","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":377.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Leah Cruciani","state":"PA","wc":"F-63","cat":"Raw","div":"M2","total":347.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Heather Campbell","state":"NY","wc":"F-63","cat":"Raw","div":"M2","total":330,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lisa Shen","state":"TX","wc":"F-63","cat":"Raw","div":"M2","total":330,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Stacie Taylor","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":292.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Yvy Llambes","state":"TX","wc":"F-63","cat":"Raw","div":"M1","total":482.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Molly Jones","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":420,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ashley Hickert","state":"MT","wc":"F-63","cat":"Raw","div":"M1","total":352.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Katie Achille","state":"NJ","wc":"F-63","cat":"Raw","div":"M1","total":340,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rina Shapiro","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":322.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eleanor Gease","state":"DC","wc":"F-63","cat":"Raw","div":"M1","total":307.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sophia Fortin","state":"MA","wc":"F-63","cat":"Raw","div":"J","total":477.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aile Banuelos","state":"CA","wc":"F-63","cat":"Raw","div":"J","total":415,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Hannah Smith","state":"IL","wc":"F-63","cat":"Raw","div":"J","total":402.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kennedy Azzatori","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":400,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaylee Beltran","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":357.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Christine Cranford","state":"MI","wc":"F-63","cat":"Raw","div":"J","total":352.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Farida-Farrah Marreez","state":"KY","wc":"F-63","cat":"Raw","div":"J","total":325,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Katarina Herrera","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":322.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Laynie Buli","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":310,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Elizabeth Sanchez","state":"FL","wc":"F-63","cat":"Raw","div":"J","total":295,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Victoria Imes","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Arden Hyatt","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":407.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mariele Arthur","state":"TX","wc":"F-63","cat":"Raw","div":"SJ","total":395,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kylie Gunkel","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":302.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gracie Cassidy","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":425,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mackenzie Cunningham","state":"KS","wc":"F-63","cat":"Equipped","div":"J","total":355,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ayden Lege","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":347.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Shelby Fischer","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":300,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sophia Villarreal","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":335,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nevaeh Suarez","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":320,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ava Finley","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":275,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cadence Audler","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alma Kimura","state":"WA","wc":"F-69","cat":"Raw","div":"M4","total":310.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gale Williams","state":"GA","wc":"F-69","cat":"Raw","div":"M4","total":292.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Denise Ragozzino","state":"NV","wc":"F-69","cat":"Raw","div":"M4","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Roberta Carlson","state":"WA","wc":"F-69","cat":"Raw","div":"M3","total":400,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Susan Gibson","state":"NV","wc":"F-69","cat":"Raw","div":"M3","total":290,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jackie Barone - Mem. Error","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":227.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Claudia Beatty","state":"NC","wc":"F-69","cat":"Raw","div":"M2","total":370,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kari Cashen","state":"NV","wc":"F-69","cat":"Raw","div":"M2","total":245,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Angela Compilli","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":463,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Becky Enright","state":"WA","wc":"F-69","cat":"Raw","div":"M1","total":440.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kisha Fields","state":"NC","wc":"F-69","cat":"Raw","div":"M1","total":422.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kollet Wharton","state":"TX","wc":"F-69","cat":"Raw","div":"M1","total":317.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Elena Gutierrez","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":310,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Stephanie Bazan","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":285,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Maia Forsyth","state":"CO","wc":"F-69","cat":"Raw","div":"J","total":480,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brooke Naegel","state":"SC","wc":"F-69","cat":"Raw","div":"J","total":438,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Greta Aberle","state":"WI","wc":"F-69","cat":"Raw","div":"J","total":427.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Maggy Weymiller","state":"IA","wc":"F-69","cat":"Raw","div":"J","total":410,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Anne Augustin","state":"NY","wc":"F-69","cat":"Raw","div":"J","total":400,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Annika Minotti","state":"OH","wc":"F-69","cat":"Raw","div":"J","total":390,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mallory Salinas","state":"TX","wc":"F-69","cat":"Raw","div":"J","total":360,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Abigail Breiner","state":"TN","wc":"F-69","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gianna Ancona","state":"CT","wc":"F-69","cat":"Raw","div":"SJ","total":424,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Hayley Csepella","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":395,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaleia Knothe","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":392.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emma Millana","state":"FL","wc":"F-69","cat":"Raw","div":"SJ","total":372.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Julie Donaho","state":"TX","wc":"F-69","cat":"Raw","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Donna Marts","state":"WY","wc":"F-69","cat":"Equipped","div":"M3","total":255,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aeryn Anderson","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":395,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Beth Whitney","state":"KS","wc":"F-69","cat":"Equipped","div":"J","total":312.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Pipper Lemaire","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Celeste Godinez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":432.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jesaeh Suarez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":345,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jewlee Recio","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":330,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Amanda Cougle","state":"LA","wc":"F-69","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Juliette Brewer","state":"LA","wc":"F-69","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Linda Franklin","state":"OR","wc":"F-76","cat":"Raw","div":"M4","total":377.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Suzanne D'Avalon","state":"NM","wc":"F-76","cat":"Raw","div":"M4","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cheryl Ventola","state":"MA","wc":"F-76","cat":"Raw","div":"M3","total":305,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Beth Macauley","state":"MI","wc":"F-76","cat":"Raw","div":"M3","total":267.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Barbara Beaudin","state":"NH","wc":"F-76","cat":"Raw","div":"M3","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joah Iannotta","state":"PA","wc":"F-76","cat":"Raw","div":"M2","total":462.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Leah Lutz","state":"CA","wc":"F-76","cat":"Raw","div":"M2","total":407.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cheryl Iseri","state":"ID","wc":"F-76","cat":"Raw","div":"M2","total":367.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Hannah Sowd","state":"CA","wc":"F-76","cat":"Raw","div":"M2","total":307.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Siri Hoogen","state":"OR","wc":"F-76","cat":"Raw","div":"M2","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Melissa Dixon","state":"WA","wc":"F-76","cat":"Raw","div":"M2","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Linette Bogdan","state":"NJ","wc":"F-76","cat":"Raw","div":"M1","total":445,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jennifer Sauter","state":"NY","wc":"F-76","cat":"Raw","div":"M1","total":437.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Amberly Kuhlmann","state":"AL","wc":"F-76","cat":"Raw","div":"M1","total":420,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Helen Lewis-Rzeszutek","state":"WI","wc":"F-76","cat":"Raw","div":"M1","total":420,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Amanda Koldjeski - Mem. Error","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":352.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kim Inoshita","state":"HI","wc":"F-76","cat":"Raw","div":"M1","total":242.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Esperanza Delgado","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":528.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ekaterina Sapoznikova","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":457.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Zsofia Toth","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":442.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dayna Bland","state":"NC","wc":"F-76","cat":"Raw","div":"J","total":395,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daisey Fields","state":"GA","wc":"F-76","cat":"Raw","div":"J","total":387.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Abigail Dietz","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":360,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sneha Sureshkumar","state":"MN","wc":"F-76","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Taylor Boykins","state":"OH","wc":"F-76","cat":"Raw","div":"SJ","total":342.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alice Gardner","state":"WI","wc":"F-76","cat":"Raw","div":"SJ","total":340,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sarah Kleinman","state":"MD","wc":"F-76","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sonia Espitia","state":"NY","wc":"F-76","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dakota Courtright","state":"NE","wc":"F-76","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Amber Gomez","state":"TX","wc":"F-76","cat":"Equipped","div":"M1","total":460,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaylee Robin","state":"LA","wc":"F-76","cat":"Equipped","div":"J","total":490,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Summer Brittain","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":305,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gia Garlington","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gavigail Martinez","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gabby Haire","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Marcia Homer","state":"OR","wc":"F-84","cat":"Raw","div":"M3","total":320,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Margie Schnell","state":"AZ","wc":"F-84","cat":"Raw","div":"M3","total":200,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michelle Kane","state":"OH","wc":"F-84","cat":"Raw","div":"M2","total":445.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Allison Snead","state":"NC","wc":"F-84","cat":"Raw","div":"M2","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alexis Goldstein","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":512.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rosanna Orosco","state":"CA","wc":"F-84","cat":"Raw","div":"M1","total":422.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bethany Blankespoor","state":"DC","wc":"F-84","cat":"Raw","div":"M1","total":302.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lauren Kolb","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":297.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Zoe Soleil Goykhman","state":"PA","wc":"F-84","cat":"Raw","div":"J","total":470,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kristen Palmer","state":"GA","wc":"F-84","cat":"Raw","div":"J","total":440,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emma Hagen","state":"AZ","wc":"F-84","cat":"Raw","div":"J","total":362.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tytiyana Flott","state":"MI","wc":"F-84","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brooke Ruland","state":"WI","wc":"F-84","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rebekah Givan","state":"NY","wc":"F-84","cat":"Raw","div":"SJ","total":352.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Madilyn Cantu","state":"TX","wc":"F-84","cat":"Raw","div":"SJ","total":322.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Saige Back","state":"NY","wc":"F-84","cat":"Raw","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sara Rodock","state":"WI","wc":"F-84","cat":"Equipped","div":"M1","total":530,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mena Reeves","state":"KS","wc":"F-84","cat":"Equipped","div":"J","total":492.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cristina Angelloz","state":"LA","wc":"F-84","cat":"Equipped","div":"J","total":327.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaitlyn Huff","state":"TX","wc":"F-84","cat":"Equipped","div":"SJ","total":400,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Elaina Canales","state":"TX","wc":"F-84","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Patrice Lockhart","state":"GA","wc":"F-84+","cat":"Raw","div":"SO","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Linda Gorham","state":"MD","wc":"F-84+","cat":"Raw","div":"M4","total":312.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Vicki Brackett","state":"GA","wc":"F-84+","cat":"Raw","div":"M3","total":387.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Heidi Meeley","state":"WA","wc":"F-84+","cat":"Raw","div":"M3","total":367.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Patricia Johnson","state":"CA","wc":"F-84+","cat":"Raw","div":"M2","total":547.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lilyan Jackson","state":"TX","wc":"F-84+","cat":"Raw","div":"M2","total":492.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lori Sousa","state":"FL","wc":"F-84+","cat":"Raw","div":"M2","total":327.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Shanti Murphy - Mem. Error","state":"--","wc":"F-84+","cat":"Raw","div":"M2","total":315,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Melissa Copeland","state":"MD","wc":"F-84+","cat":"Raw","div":"M1","total":575.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Allison White","state":"VA","wc":"F-84+","cat":"Raw","div":"M1","total":515,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emily Douglas","state":"MD","wc":"F-84+","cat":"Raw","div":"M1","total":490,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tiffany Miranda","state":"NC","wc":"F-84+","cat":"Raw","div":"M1","total":367.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kathryn Tranum","state":"IN","wc":"F-84+","cat":"Raw","div":"J","total":540,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emma Jones","state":"MA","wc":"F-84+","cat":"Raw","div":"J","total":452.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emily Bombardier","state":"NY","wc":"F-84+","cat":"Raw","div":"J","total":437.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Maya Moise","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":420,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Izabela Ramirez","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":375,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sarah Jerry","state":"AL","wc":"F-84+","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jacqueline Fly","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cora Osei-Adjei","state":"TX","wc":"F-84+","cat":"Raw","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kamilah Todd","state":"LA","wc":"F-84+","cat":"Equipped","div":"M1","total":602.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Abigail Lee - Mem. Error","state":"--","wc":"F-84+","cat":"Equipped","div":"J","total":677.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gianna Trevino","state":"TX","wc":"F-84+","cat":"Equipped","div":"J","total":292.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gabriella Adrian","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":432.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emelia Dauterive","state":"LA","wc":"F-84+","cat":"Equipped","div":"SJ","total":427.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emmerson Mokuiki","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":412.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Addyson Perez","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Olivia Cardenas","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"James Medrano","state":"TX","wc":"M-53","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ahmed Al Fatli","state":"IA","wc":"M-53","cat":"Raw","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Long Chau","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nicholas Zambrano","state":"SC","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alec Weinstein","state":"PA","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alejandro Garcia","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daniel Saenz","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brayden Hollier","state":"LA","wc":"M-53","cat":"Equipped","div":"J","total":397.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Trey Nguyen","state":"LA","wc":"M-53","cat":"Equipped","div":"SJ","total":350,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Berube","state":"TX","wc":"M-59","cat":"Raw","div":"SA","total":275,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jonathan Nico","state":"AZ","wc":"M-59","cat":"Raw","div":"SO","total":212.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eric Kupperstein","state":"MA","wc":"M-59","cat":"Raw","div":"M3","total":465,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alexander Kim","state":"IL","wc":"M-59","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaleb Mcdowell","state":"MD","wc":"M-59","cat":"Raw","div":"M2","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Huaiyu Tan","state":"FL","wc":"M-59","cat":"Raw","div":"M1","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"William Tenerelli","state":"NJ","wc":"M-59","cat":"Raw","div":"M1","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tyler Morrow","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":590,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Timmy Truong","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":580,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Deondre Moody","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":535,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cesar Perez","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":517.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Fabian Viernes","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":502.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Patrick Devine","state":"NJ","wc":"M-59","cat":"Raw","div":"J","total":500,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Sturgis","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":487.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cardin Do","state":"MA","wc":"M-59","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brady Price","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"A Phi Le","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Justin Nguyen - Mem. Error","state":"--","wc":"M-59","cat":"Raw","div":"SJ","total":585.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alex Martinez","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":502.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Masato Gentle","state":"NV","wc":"M-59","cat":"Raw","div":"SJ","total":482.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tyler Friedman","state":"PA","wc":"M-59","cat":"Raw","div":"SJ","total":460,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Grayson Manning","state":"IA","wc":"M-59","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daniel Elliott","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Zaiden Olvera","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bodie Lacoe","state":"PA","wc":"M-59","cat":"Equipped","div":"J","total":623,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jesus Martinez","state":"TX","wc":"M-59","cat":"Equipped","div":"J","total":412.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ethan Andrews","state":"LA","wc":"M-59","cat":"Equipped","div":"SJ","total":455,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ethen Bui","state":"LA","wc":"M-59","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rafael Arredondo","state":"TX","wc":"M-59","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Elliot Guinn","state":"LA","wc":"M-66","cat":"Raw","div":"SA","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Adrian Mcghee","state":"GA","wc":"M-66","cat":"Raw","div":"SO","total":372.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ben Boehm","state":"IN","wc":"M-66","cat":"Raw","div":"SO","total":265,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Manuel Rodriguez","state":"FL","wc":"M-66","cat":"Raw","div":"M4","total":440,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Richard Flaum","state":"TX","wc":"M-66","cat":"Raw","div":"M4","total":257.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Feldhaus","state":"OH","wc":"M-66","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jay Thompson","state":"NC","wc":"M-66","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rick Brink","state":"CO","wc":"M-66","cat":"Raw","div":"M2","total":522.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ron Brinker","state":"OH","wc":"M-66","cat":"Raw","div":"M2","total":497.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"An Nguyen","state":"CA","wc":"M-66","cat":"Raw","div":"M1","total":580,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tuan Nguyen","state":"PA","wc":"M-66","cat":"Raw","div":"M1","total":570,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Shawn Frasquillo","state":"TX","wc":"M-66","cat":"Raw","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tristian Davila","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":677.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Evan Hawk","state":"NC","wc":"M-66","cat":"Raw","div":"J","total":670,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tucker Abbott","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":590,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Enzo Vickroy","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":555,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Austin Harris","state":"NC","wc":"M-66","cat":"Raw","div":"J","total":460,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nathan Lovemore","state":"LA","wc":"M-66","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Timothy Ochoa","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Hayden Wolf","state":"WI","wc":"M-66","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tanner Jacobi","state":"MO","wc":"M-66","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Hassan Coleman","state":"GA","wc":"M-66","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Xavier Zambrano","state":"SC","wc":"M-66","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Vedant Ray","state":"OH","wc":"M-66","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nicholas Lagen","state":"AL","wc":"M-66","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Denzil Smith","state":"AR","wc":"M-66","cat":"Raw","div":"SJ","total":565,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Martin Alvarez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":562.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brody Wyatt","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":542.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kyren Howard","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":507.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Suhan Hajela","state":"CA","wc":"M-66","cat":"Raw","div":"SJ","total":492.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Levi Jansen","state":"WI","wc":"M-66","cat":"Raw","div":"SJ","total":490,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Anthony Acampora","state":"PA","wc":"M-66","cat":"Raw","div":"SJ","total":487.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Wyatt Dodson","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":427.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Berkeley Britt","state":"GA","wc":"M-66","cat":"Raw","div":"SJ","total":420,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sammy Sobie","state":"MI","wc":"M-66","cat":"Raw","div":"SJ","total":397.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Benjamin Yang","state":"NY","wc":"M-66","cat":"Raw","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bryan Lara","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Damien Sanchez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alex Galant","state":"CO","wc":"M-66","cat":"Equipped","div":"M4","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eric Verbel","state":"NJ","wc":"M-66","cat":"Equipped","div":"M3","total":460,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Hennis Washington Iii","state":"FL","wc":"M-66","cat":"Equipped","div":"M2","total":517.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kamil Iwasiow","state":"FL","wc":"M-66","cat":"Equipped","div":"M1","total":675,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gahel Griner","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":557.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Marcelo Chanaba","state":"AZ","wc":"M-66","cat":"Equipped","div":"J","total":527.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joseph Marceaux","state":"LA","wc":"M-66","cat":"Equipped","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Isaiah Glasgow","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Juventino Zapata Iv","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew Gonzalez","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"George Cunningham Iv","state":"NC","wc":"M-66","cat":"Equipped","div":"SJ","total":565,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bryand Mao","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":502.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jace Duchesne","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":490,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Robert Godinez","state":"TX","wc":"M-66","cat":"Equipped","div":"SJ","total":340,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew J Pena","state":"TX","wc":"M-66","cat":"Equipped","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Charles Battaglia","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alex Folmar","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joseph Songco","state":"TX","wc":"M-74","cat":"Raw","div":"SA","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Floyd","state":"GA","wc":"M-74","cat":"Raw","div":"SO","total":317.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Laflamme","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":450.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Louis Caruana","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":300,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Raw","div":"M3","total":588.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Thomas Ashbrook","state":"CA","wc":"M-74","cat":"Raw","div":"M3","total":485,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Robert Lane","state":"WA","wc":"M-74","cat":"Raw","div":"M2","total":602.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Patrick Foster","state":"PA","wc":"M-74","cat":"Raw","div":"M2","total":480,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Donald Bigham","state":"HI","wc":"M-74","cat":"Raw","div":"M2","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Carlos Mata","state":"TX","wc":"M-74","cat":"Raw","div":"M1","total":655,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Haran","state":"MD","wc":"M-74","cat":"Raw","div":"M1","total":642.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lee Rogers","state":"NH","wc":"M-74","cat":"Raw","div":"M1","total":510,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Due Nguyen","state":"NY","wc":"M-74","cat":"Raw","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Everardo Crispin","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":730,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jeremy Rodriguez","state":"MA","wc":"M-74","cat":"Raw","div":"J","total":715,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Caleb Chan","state":"CA","wc":"M-74","cat":"Raw","div":"J","total":700,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nicolas Gaines","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":685,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Asante Gordon","state":"IA","wc":"M-74","cat":"Raw","div":"J","total":685,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ivan Liu","state":"GA","wc":"M-74","cat":"Raw","div":"J","total":680,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Garrett Rogers","state":"DE","wc":"M-74","cat":"Raw","div":"J","total":667.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Byron Moore","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":665.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cameron Kennedy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":640,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gabriel Garza","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":622.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joshua Lawson","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":607.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Braden Mertz","state":"PA","wc":"M-74","cat":"Raw","div":"J","total":607.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Edgar Duran","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":595,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rito Flores","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":590.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gavin Gill","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":572.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alexander Lucero","state":"NM","wc":"M-74","cat":"Raw","div":"J","total":560,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Harrison Lamy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":552.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"James Beard","state":"MS","wc":"M-74","cat":"Raw","div":"J","total":507.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Wyatt Abbott","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":497.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Santiago Lara","state":"LA","wc":"M-74","cat":"Raw","div":"J","total":437.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kyle Cones","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":410,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brayden Molinyawe","state":"OH","wc":"M-74","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alexander Hunt","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luke Christopherson","state":"MN","wc":"M-74","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kai Vasquez","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alejandro Mccormick","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emiliano Fraga","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ben Tran","state":"MA","wc":"M-74","cat":"Raw","div":"SJ","total":680,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Orlando Torres","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":617.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Weston Lisemby","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":610,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Graham Steel","state":"FL","wc":"M-74","cat":"Raw","div":"SJ","total":600,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Xzavier Aguilar - Mem. Error","state":"--","wc":"M-74","cat":"Raw","div":"SJ","total":597.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joshua Ambrose","state":"CA","wc":"M-74","cat":"Raw","div":"SJ","total":575,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jamie Huh","state":"CA","wc":"M-74","cat":"Raw","div":"SJ","total":442.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Damon Llamas","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":440,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Javier Gonzalez","state":"WI","wc":"M-74","cat":"Raw","div":"SJ","total":432.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Parker Golden","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Evan Machik","state":"PA","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Vihaan Barar","state":"NJ","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jaxon Backus","state":"AR","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kane West","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Connor Townsend","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Mays","state":"OH","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Equipped","div":"M3","total":643,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lawson Lillo","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":787.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Logan Edmonds","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":730,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Will Eckford","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cole Goudeau","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gavin Desalvo","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":545,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Liam Kincanon","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":542.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Will Mankhey","state":"NE","wc":"M-83","cat":"Raw","div":"G","total":685,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gabriel Pongchit","state":"MD","wc":"M-83","cat":"Raw","div":"G","total":585,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Noah Duplichan","state":"LA","wc":"M-83","cat":"Raw","div":"SA","total":377.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Russ Marr","state":"NM","wc":"M-83","cat":"Raw","div":"M4","total":471,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ken Levine","state":"PA","wc":"M-83","cat":"Raw","div":"M4","total":462.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Laddie Gibson","state":"NY","wc":"M-83","cat":"Raw","div":"M3","total":575,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Carlos Lewis","state":"TX","wc":"M-83","cat":"Raw","div":"M3","total":555,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Willie Wong","state":"CA","wc":"M-83","cat":"Raw","div":"M3","total":552.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Steve Destephen","state":"OH","wc":"M-83","cat":"Raw","div":"M3","total":437.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jesus Fragoso","state":"ID","wc":"M-83","cat":"Raw","div":"M2","total":647.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Thaddeus Say","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":560,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Garrin Clark","state":"MI","wc":"M-83","cat":"Raw","div":"M2","total":545,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sikander Aasim","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":480,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mfon Akpan","state":"OK","wc":"M-83","cat":"Raw","div":"M2","total":462.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ross Leppala","state":"GA","wc":"M-83","cat":"Raw","div":"M1","total":747.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Anthony Perkins","state":"TX","wc":"M-83","cat":"Raw","div":"M1","total":642.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Julien Comte","state":"PA","wc":"M-83","cat":"Raw","div":"M1","total":625,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Kuhlmann","state":"AL","wc":"M-83","cat":"Raw","div":"M1","total":590,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lionel Stoxstell Ii","state":"NV","wc":"M-83","cat":"Raw","div":"M1","total":585,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jaime Velasquez","state":"MD","wc":"M-83","cat":"Raw","div":"M1","total":505,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Robert Rodriguez","state":"LA","wc":"M-83","cat":"Raw","div":"M1","total":430,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lauren Cohen","state":"MA","wc":"M-83","cat":"Raw","div":"M1","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Max Wright","state":"KY","wc":"M-83","cat":"Raw","div":"J","total":787.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dillon Johnson","state":"OK","wc":"M-83","cat":"Raw","div":"J","total":784,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aaron Welch","state":"CO","wc":"M-83","cat":"Raw","div":"J","total":780,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Bautista","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":760,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eric Gonzalez-Tunon","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":745,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Xavier Mccarty","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":735,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luke Medina","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":730,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Calvin Trapp","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":705,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Justin Ng","state":"IL","wc":"M-83","cat":"Raw","div":"J","total":690,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brendon Vineyard","state":"NY","wc":"M-83","cat":"Raw","div":"J","total":687.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dylan Stefan","state":"OH","wc":"M-83","cat":"Raw","div":"J","total":682.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aron Atakuzi","state":"OK","wc":"M-83","cat":"Raw","div":"J","total":667.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sean Fitzgerald","state":"PA","wc":"M-83","cat":"Raw","div":"J","total":640,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Noah Raulston","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":637.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daniel Castaneda","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":635,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kacey Morgan","state":"AL","wc":"M-83","cat":"Raw","div":"J","total":635,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jackson Voss","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":585,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Raphael Rivera","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":575,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Juan Renderos","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":572.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jonathan Vasquez","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":560,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jordan Zavala","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":545,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Wilson Guo","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":530,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rayce Pennartz","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":527.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Talon Pippin","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":495,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Patrick Broussard","state":"NV","wc":"M-83","cat":"Raw","div":"J","total":382.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Wayne Anderson","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":275,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Samadi - Mem. Error","state":"--","wc":"M-83","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Samuel Johnson","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ibrahiem Hamed","state":"LA","wc":"M-83","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aiolya Zhang","state":"MI","wc":"M-83","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joshua Ham","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Danny Lawrence","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jack Schultz","state":"IA","wc":"M-83","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Fisher Chung","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luis Alvarado","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tate Van Essen","state":"IA","wc":"M-83","cat":"Raw","div":"SJ","total":640,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eli Sobie","state":"MI","wc":"M-83","cat":"Raw","div":"SJ","total":540,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Advaith Goud Sirisanagandla","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":537.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aidan Bauer","state":"AZ","wc":"M-83","cat":"Raw","div":"SJ","total":535,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daniil Petc","state":"CA","wc":"M-83","cat":"Raw","div":"SJ","total":535,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brody Williamson","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":505,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joshua Tang","state":"MD","wc":"M-83","cat":"Raw","div":"SJ","total":455,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kayden Curtiss","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":432.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mason Madji","state":"NC","wc":"M-83","cat":"Raw","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Valentin Caballero Rivera","state":"CA","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Longano","state":"OH","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Oscar Rivas","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Timothy Coleman","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Matthew Lim","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jairo Ordonez Jr","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"William Clayton","state":"NJ","wc":"M-83","cat":"Equipped","div":"M4","total":387.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Keith Nautel","state":"NY","wc":"M-83","cat":"Equipped","div":"M3","total":705,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Chris Boillot","state":"AZ","wc":"M-83","cat":"Equipped","div":"M3","total":607.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nate Crowder","state":"GA","wc":"M-83","cat":"Equipped","div":"M1","total":610,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jose Munoz","state":"NM","wc":"M-83","cat":"Equipped","div":"M1","total":435,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Carter Lewis","state":"LA","wc":"M-83","cat":"Equipped","div":"J","total":797.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ty Felle","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":595,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Troy Nguyen","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":582.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Wyatt Gremillion","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":610,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Juan David Aguirre Iii","state":"TX","wc":"M-83","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Paxton Audler","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Delaney","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Stephen Simpson","state":"IN","wc":"M-93","cat":"Raw","div":"SO","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Robert Moore","state":"MD","wc":"M-93","cat":"Raw","div":"M4","total":505,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Phillip Rosenstern","state":"PA","wc":"M-93","cat":"Raw","div":"M4","total":487.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bruce Bullock","state":"NC","wc":"M-93","cat":"Raw","div":"M4","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Darrell Gaspard","state":"LA","wc":"M-93","cat":"Raw","div":"M3","total":537.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Peter Tressel","state":"MN","wc":"M-93","cat":"Raw","div":"M3","total":517.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Todd Peterson","state":"NV","wc":"M-93","cat":"Raw","div":"M3","total":472.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Troy Gibson","state":"NY","wc":"M-93","cat":"Raw","div":"M3","total":400,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Ricks","state":"FL","wc":"M-93","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Edward Ruland","state":"FL","wc":"M-93","cat":"Raw","div":"M2","total":645,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rodney Elm","state":"AZ","wc":"M-93","cat":"Raw","div":"M2","total":605,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Marquies Sampa","state":"TX","wc":"M-93","cat":"Raw","div":"M2","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Roy Jackson","state":"AL","wc":"M-93","cat":"Raw","div":"M1","total":825,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nathan Kulas","state":"ME","wc":"M-93","cat":"Raw","div":"M1","total":813,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Layne Norton","state":"FL","wc":"M-93","cat":"Raw","div":"M1","total":788,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Reed","state":"OH","wc":"M-93","cat":"Raw","div":"M1","total":712.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Courtney Leffall","state":"TX","wc":"M-93","cat":"Raw","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Devin Mervau","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":865,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Demitri Ayala","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":863,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jack Reynolds","state":"MA","wc":"M-93","cat":"Raw","div":"J","total":861,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Evan Ross","state":"VA","wc":"M-93","cat":"Raw","div":"J","total":832.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kyle White","state":"TN","wc":"M-93","cat":"Raw","div":"J","total":820,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dylan Albert","state":"LA","wc":"M-93","cat":"Raw","div":"J","total":780,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Miles Hartway","state":"NY","wc":"M-93","cat":"Raw","div":"J","total":737.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kane Smith","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":720,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brendan Mackin","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":717.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nahuel Peralta","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":707.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jake Lewis","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":697.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Victor Herrera","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":687.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Waylon Vidler","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":682.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aryan Nautiyal","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":667.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alex Vastey","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":665,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Riley Morgan","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":642.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"La'Akea Faurot","state":"HI","wc":"M-93","cat":"Raw","div":"J","total":637.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nick Walker","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":635,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Adam Greer","state":"CA","wc":"M-93","cat":"Raw","div":"J","total":617.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Adam Bretsch","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":597.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aaron Estocin","state":"NM","wc":"M-93","cat":"Raw","div":"J","total":597.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cameron Thayer","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":592.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jonatan Hernandez","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":575,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Davis Wenger","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":555,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ben Mckinney","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jacob Danielson","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jonathan Eppler","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Simon Powell","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nick Sanchelli","state":"SC","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Peyton Morgan","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jayvon Irwin","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Justin Blechinger","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luke Mitchell","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Samuel Lopez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eric Pinon","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Arnol Rosales","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emanol Gonzalez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ethan Cohen","state":"GA","wc":"M-93","cat":"Raw","div":"SJ","total":717.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Noel Kurtin","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":672.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sam Maiewski","state":"MA","wc":"M-93","cat":"Raw","div":"SJ","total":670,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Liam Goldich","state":"PA","wc":"M-93","cat":"Raw","div":"SJ","total":652.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jack Cox","state":"NJ","wc":"M-93","cat":"Raw","div":"SJ","total":652.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Paul Mourain","state":"LA","wc":"M-93","cat":"Raw","div":"SJ","total":587.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eric Jin","state":"IN","wc":"M-93","cat":"Raw","div":"SJ","total":572.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Xander Lane","state":"OR","wc":"M-93","cat":"Raw","div":"SJ","total":367.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dylan Moyal","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Justin Corle","state":"MI","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jet Jones","state":"WI","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tyler Plumley","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Manar Albeirakdar","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"James Brown","state":"PA","wc":"M-93","cat":"Equipped","div":"M3","total":703,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Thomas Cencich","state":"CO","wc":"M-93","cat":"Equipped","div":"M3","total":606,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gerard Dally","state":"NJ","wc":"M-93","cat":"Equipped","div":"M3","total":530,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Steven Carpenter","state":"FL","wc":"M-93","cat":"Equipped","div":"M3","total":490,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Marcos Sanchez","state":"FL","wc":"M-93","cat":"Equipped","div":"M2","total":642.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"William Kahapea - Mem. Error","state":"--","wc":"M-93","cat":"Equipped","div":"M2","total":585,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rick Fowler","state":"IL","wc":"M-93","cat":"Equipped","div":"M2","total":537.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Matt Rodock","state":"WI","wc":"M-93","cat":"Equipped","div":"M1","total":847.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rocky Dufort","state":"LA","wc":"M-93","cat":"Equipped","div":"J","total":732.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ronnie Guerra","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":540,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Encarnacion Lugo Jr.","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Caleb Frnka","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":607.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brennan Jarrell","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":542.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jerry Contreras","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Thomas Killam","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"SA","total":605,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dion Thomas","state":"GA","wc":"M-105","cat":"Raw","div":"SO","total":462.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dave Schneider","state":"OH","wc":"M-105","cat":"Raw","div":"M4","total":490,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Lobb","state":"OR","wc":"M-105","cat":"Raw","div":"M4","total":480,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jeff Olsen","state":"WA","wc":"M-105","cat":"Raw","div":"M3","total":600,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Wetter","state":"CA","wc":"M-105","cat":"Raw","div":"M3","total":545,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Peter Severenuk","state":"NJ","wc":"M-105","cat":"Raw","div":"M3","total":455,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jeffrey Fellows","state":"OR","wc":"M-105","cat":"Raw","div":"M3","total":437.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Egan Walker","state":"NV","wc":"M-105","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Koch","state":"MN","wc":"M-105","cat":"Raw","div":"M2","total":715,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Matt Naegel","state":"SC","wc":"M-105","cat":"Raw","div":"M2","total":605,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Chris Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"M2","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Nix","state":"OR","wc":"M-105","cat":"Raw","div":"M2","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bob Eucker","state":"OH","wc":"M-105","cat":"Raw","div":"M2","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Carlos Santoliquido","state":"TX","wc":"M-105","cat":"Raw","div":"M1","total":832.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ls Mcclain - Mem. Error","state":"--","wc":"M-105","cat":"Raw","div":"M1","total":812.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gerald Ratulowski","state":"TX","wc":"M-105","cat":"Raw","div":"M1","total":705,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alpha Dumbuya","state":"GA","wc":"M-105","cat":"Raw","div":"M1","total":655,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nikhil Karulkar","state":"WA","wc":"M-105","cat":"Raw","div":"M1","total":607.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jermaine Williams","state":"MD","wc":"M-105","cat":"Raw","div":"M1","total":575,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luke Wymer","state":"OH","wc":"M-105","cat":"Raw","div":"J","total":802.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Hunter Olsen","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":797.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dallas Romanowski","state":"NC","wc":"M-105","cat":"Raw","div":"J","total":790,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Thomas Boyd","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":785,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaden Mullins","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":736,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Evan Gonsorcik","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":730,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Erick Severino","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":725,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Charles Porter","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":722.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"E.J. Chikando","state":"AZ","wc":"M-105","cat":"Raw","div":"J","total":710,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mark Hoffman","state":"ID","wc":"M-105","cat":"Raw","div":"J","total":702.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"George Acosta","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":695,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ashton Smith","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":687.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gil Romero Lopez","state":"AZ","wc":"M-105","cat":"Raw","div":"J","total":675,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaiden Funderburk - Mem. Error","state":"--","wc":"M-105","cat":"Raw","div":"J","total":662.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cash Zumhingst","state":"IN","wc":"M-105","cat":"Raw","div":"J","total":660,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nico Meisser","state":"CA","wc":"M-105","cat":"Raw","div":"J","total":655,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Angelo Carpino","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":642.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Austin Hamilton","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":637.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Fernando Rivera","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":617.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Steven Aderhold","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":572.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Austin Mckinney","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":440,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Josue Aguilera","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lawrence Jones","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Zachary Olsen","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Noah Schmidtberger","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Austin Wilson","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":816,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jacob Tumminello","state":"MS","wc":"M-105","cat":"Raw","div":"SJ","total":702.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Selwyn Logan","state":"ME","wc":"M-105","cat":"Raw","div":"SJ","total":577.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Matheo Nave","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":452.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brenden Ross","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aaron Quail","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Vedant Remella","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Cruz","state":"OK","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sawyer Reinart","state":"WI","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Matthew Teal","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Keith Taylor","state":"LA","wc":"M-105","cat":"Equipped","div":"M4","total":547.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Richard Johnson","state":"MA","wc":"M-105","cat":"Equipped","div":"M3","total":587.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dana Rosenzweig","state":"IL","wc":"M-105","cat":"Equipped","div":"M3","total":557.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ron Falcone Jr","state":"NJ","wc":"M-105","cat":"Equipped","div":"M3","total":500,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dale Mclaren","state":"GA","wc":"M-105","cat":"Equipped","div":"M2","total":935,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Donnelly","state":"NJ","wc":"M-105","cat":"Equipped","div":"M1","total":805,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Pete Nees - Mem. Error","state":"--","wc":"M-105","cat":"Equipped","div":"M1","total":797.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ashton Fischer","state":"WI","wc":"M-105","cat":"Equipped","div":"J","total":862.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jose Bellon","state":"FL","wc":"M-105","cat":"Equipped","div":"J","total":675,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cooper Trosclair","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":532.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Hutsen Roberts","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":512.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brody Young","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tristian Luna","state":"TX","wc":"M-105","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mason Matrone","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Matthew Hammond","state":"LA","wc":"M-120","cat":"Raw","div":"SA","total":322.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rory Mccoy","state":"PA","wc":"M-120","cat":"Raw","div":"M4","total":522.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Bitting","state":"FL","wc":"M-120","cat":"Raw","div":"M4","total":400,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Wilson Martinez","state":"NJ","wc":"M-120","cat":"Raw","div":"M3","total":707.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Austin Keanu","state":"HI","wc":"M-120","cat":"Raw","div":"M3","total":577.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Mcqueen","state":"TX","wc":"M-120","cat":"Raw","div":"M2","total":717.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Esteban Rubens","state":"NH","wc":"M-120","cat":"Raw","div":"M2","total":695,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daniel Gomez","state":"CA","wc":"M-120","cat":"Raw","div":"M2","total":580,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Raw","div":"M2","total":450,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Craig Hickman","state":"ID","wc":"M-120","cat":"Raw","div":"M2","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Thomas Crist","state":"NC","wc":"M-120","cat":"Raw","div":"M2","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Tuchscherer","state":"AK","wc":"M-120","cat":"Raw","div":"M1","total":902.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Desmond Jordan","state":"NC","wc":"M-120","cat":"Raw","div":"M1","total":900,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cordell Estrada","state":"GA","wc":"M-120","cat":"Raw","div":"M1","total":690,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nathan Alexander","state":"WA","wc":"M-120","cat":"Raw","div":"M1","total":610,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jonathan Jurewicz","state":"MD","wc":"M-120","cat":"Raw","div":"M1","total":407.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aaron Mizushima - Mem. Error","state":"--","wc":"M-120","cat":"Raw","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dante Deleon","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":898.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brayden Naus","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":875,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cain Lopez","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":822.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jacob Breckinridge","state":"PA","wc":"M-120","cat":"Raw","div":"J","total":810,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tanner Newman","state":"OK","wc":"M-120","cat":"Raw","div":"J","total":807.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ty Morawski","state":"OH","wc":"M-120","cat":"Raw","div":"J","total":770,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nicolas Hawke","state":"CA","wc":"M-120","cat":"Raw","div":"J","total":760,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aidan Wilder","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":755,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gilberto Villarreal","state":"CA","wc":"M-120","cat":"Raw","div":"J","total":750,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lincoln Mickelsen","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":690,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Connor Long","state":"KY","wc":"M-120","cat":"Raw","div":"J","total":672.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daniel Navarrete - Mem. Error","state":"--","wc":"M-120","cat":"Raw","div":"J","total":662.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Reagan Belvin","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":657.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alex Paige","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":637.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Leonardo Tarango","state":"NM","wc":"M-120","cat":"Raw","div":"J","total":600,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Chancellor Buford","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bennett Montplaisir","state":"OR","wc":"M-120","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Austin Oakley","state":"IN","wc":"M-120","cat":"Raw","div":"SJ","total":730,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cesar Garcia","state":"OR","wc":"M-120","cat":"Raw","div":"SJ","total":687.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Brad Salter","state":"TX","wc":"M-120","cat":"Equipped","div":"M4","total":447.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Anthony Harris","state":"HI","wc":"M-120","cat":"Equipped","div":"M3","total":727.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Travis Koehn","state":"WY","wc":"M-120","cat":"Equipped","div":"M2","total":822.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Kalter","state":"ME","wc":"M-120","cat":"Equipped","div":"M2","total":807.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Equipped","div":"M2","total":450,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Adam Moore - Mem. Error","state":"--","wc":"M-120","cat":"Equipped","div":"M1","total":692.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Creasy","state":"TX","wc":"M-120","cat":"Equipped","div":"J","total":900,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Carson Frnka","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":735,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Israel Soliz","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":407.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dar’Reyus Scott","state":"LA","wc":"M-120","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Corey Jackson","state":"MD","wc":"M-120+","cat":"Raw","div":"G","total":700,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luke Bergeron","state":"LA","wc":"M-120+","cat":"Raw","div":"SA","total":287.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tyler Halpert","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":412.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Louis Maxwell","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mark Branham","state":"IN","wc":"M-120+","cat":"Raw","div":"M4","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Domenick Fonio","state":"PA","wc":"M-120+","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kenneth Cameron","state":"NV","wc":"M-120+","cat":"Raw","div":"M2","total":730,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Christopher Ptacek","state":"OR","wc":"M-120+","cat":"Raw","div":"M2","total":725,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Patrick Northcutt","state":"IL","wc":"M-120+","cat":"Raw","div":"M2","total":712.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nathan Gorham","state":"MD","wc":"M-120+","cat":"Raw","div":"M1","total":860,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rob Ward","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":830,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"James Farrior","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":827.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Khourey Royal","state":"NC","wc":"M-120+","cat":"Raw","div":"M1","total":745,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Henry Coates","state":"OR","wc":"M-120+","cat":"Raw","div":"M1","total":632.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Valente Inniss-Thompson","state":"TX","wc":"M-120+","cat":"Raw","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Perry Ellis","state":"GA","wc":"M-120+","cat":"Raw","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jose Lugo","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":817.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Uriel Perez","state":"AZ","wc":"M-120+","cat":"Raw","div":"J","total":780,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jordan Blincoe","state":"NY","wc":"M-120+","cat":"Raw","div":"J","total":762.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jason Escobar Jr","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":737.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Carson Crawford","state":"MI","wc":"M-120+","cat":"Raw","div":"J","total":730,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kevin Garza","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":707.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Carlos Olivares","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":660,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew Gonzalez","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":675,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Omar Kalo","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":630,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Robert Keller","state":"FL","wc":"M-120+","cat":"Equipped","div":"M3","total":162.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Douglas Rawson","state":"NV","wc":"M-120+","cat":"Equipped","div":"M2","total":527.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew Cargill - Mem. Error","state":"--","wc":"M-120+","cat":"Equipped","div":"M1","total":907.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Jean Sr.","state":"FL","wc":"M-120+","cat":"Equipped","div":"M1","total":785,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tim Brockett","state":"OH","wc":"M-120+","cat":"Equipped","div":"M1","total":645,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dwayne Coleman","state":"KS","wc":"M-120+","cat":"Equipped","div":"J","total":995,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alfonso Gutierrez","state":"TX","wc":"M-120+","cat":"Equipped","div":"J","total":672.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Rubio","state":"TX","wc":"M-120+","cat":"Equipped","div":"SJ","total":497.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cameron Ross","state":"LA","wc":"M-120+","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Thomas Fagiano","state":"NH","wc":"Out","cat":"Raw","div":"G","total":670,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Erik Madsen - Mem. Error","state":"--","wc":"Out","cat":"Raw","div":"M4","total":502.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Katherine Evert","state":"MO","wc":"Out","cat":"Raw","div":"M4","total":260,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jim Kathios","state":"NH","wc":"Out","cat":"Raw","div":"M3","total":612.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sheila Hoover","state":"OR","wc":"Out","cat":"Raw","div":"M3","total":342.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Melissa Forbis - Mem. Error","state":"--","wc":"Out","cat":"Raw","div":"M3","total":282.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Claire Keel","state":"AL","wc":"Out","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Christopher Ptacek","state":"OR","wc":"Out","cat":"Raw","div":"M2","total":725,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Demchak","state":"SC","wc":"Out","cat":"Raw","div":"M2","total":530,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cynthia Browning","state":"IN","wc":"Out","cat":"Raw","div":"M2","total":439.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Stephanie Carpenter","state":"ID","wc":"Out","cat":"Raw","div":"M2","total":427.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Matthew Chapman","state":"VA","wc":"Out","cat":"Raw","div":"M2","total":400,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cathy Avery - Mem. Error","state":"--","wc":"Out","cat":"Raw","div":"M2","total":377.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Pamela Riley","state":"TX","wc":"Out","cat":"Raw","div":"M2","total":355,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jason Coble","state":"CA","wc":"Out","cat":"Raw","div":"M1","total":735,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ben Dresher - Mem. Error","state":"--","wc":"Out","cat":"Raw","div":"M1","total":667.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dayna Mcneal","state":"ND","wc":"Out","cat":"Raw","div":"M1","total":560,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Newton Cheng","state":"CA","wc":"Out","cat":"Raw","div":"M1","total":315,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Clair Crawford","state":"OH","wc":"Out","cat":"Raw","div":"M1","total":280,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jack Bartlett","state":"ID","wc":"Out","cat":"Raw","div":"J","total":830,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jacob Anucilla","state":"CA","wc":"Out","cat":"Raw","div":"J","total":590,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Pierce Woodworth","state":"CA","wc":"Out","cat":"Raw","div":"J","total":535,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eli O'Keefe","state":"OH","wc":"Out","cat":"Raw","div":"J","total":517.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lindsey Jade Ligsay","state":"HI","wc":"Out","cat":"Raw","div":"J","total":422.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Marina Tran","state":"LA","wc":"Out","cat":"Raw","div":"J","total":242.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ogden Horowitz Shea","state":"NY","wc":"Out","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Steve Davenport","state":"NE","wc":"Out","cat":"Equipped","div":"M2","total":710,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Travis Pardue","state":"NC","wc":"Out","cat":"Equipped","div":"M2","total":590,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Maura Shuttleworth","state":"NM","wc":"Out","cat":"Equipped","div":"M2","total":242.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nora Keller","state":"FL","wc":"Out","cat":"Equipped","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""}
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
            Roster data was pulled on <strong style={{color:"#fff"}}>May 28, 2026 at 8:42 AM UTC</strong> and may not reflect updates made after that time.
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
