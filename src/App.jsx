import { useState, useMemo } from "react";


const ROSTER = [
{"name":"Thaovy Tran","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":75.0,"best":250.0,"bestWc":"43","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Abigail Le","state":"PA","wc":"F-43","cat":"Raw","div":"J","total":0.0,"best":247.5,"bestWc":"43","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Brennan Fallon","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":0.0,"best":310.0,"bestWc":"44","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Abygail Guzman","state":"TX","wc":"F-43","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Molly Hutchinson","state":"LA","wc":"F-43","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Leanna Schnell","state":"AZ","wc":"F-47","cat":"Raw","div":"SO","total":122.5,"best":125.0,"bestWc":"47","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Chiaki Takada","state":"TX","wc":"F-47","cat":"Raw","div":"M3","total":295.0,"best":295.0,"bestWc":"47","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Suzie Johnson","state":"WA","wc":"F-47","cat":"Raw","div":"M3","total":0.0,"best":212.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Kelley Sherwin","state":"WI","wc":"F-47","cat":"Raw","div":"M2","total":0.0,"best":292.5,"bestWc":"52","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Andrea Nolting","state":"IN","wc":"F-47","cat":"Raw","div":"M2","total":0.0,"best":257.5,"bestWc":"48","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Emma Horn","state":"--","wc":"F-47","cat":"Raw","div":"J","total":0.0,"best":312.5,"bestWc":"52","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Addisyn Lege","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":175.0,"best":200.0,"bestWc":"44","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Joanie Cannon","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Jazlene Rios","state":"TX","wc":"F-47","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Jlynn Fernandez","state":"--","wc":"F-47","cat":"Equipped","div":"J","total":282.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Gabriella Garza","state":"--","wc":"F-47","cat":"Equipped","div":"J","total":75.0,"best":320.0,"bestWc":"52","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Lisa Weiss","state":"OH","wc":"F-52","cat":"Raw","div":"M3","total":280.0,"best":287.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Claire Keel","state":"AL","wc":"F-52","cat":"Raw","div":"M3","total":147.5,"best":157.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Lesley Scott","state":"OR","wc":"F-52","cat":"Raw","div":"M3","total":0.0,"best":210.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Suzanne Hartwig-Gary","state":"MT","wc":"F-52","cat":"Raw","div":"M2","total":75.0,"best":357.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","ig":"siouxz52kg"},
{"name":"Claudia Romero","state":"TX","wc":"F-52","cat":"Raw","div":"M1","total":307.5,"best":317.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Cynthia Smith","state":"NC","wc":"F-52","cat":"Raw","div":"M1","total":192.5,"best":222.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ruhi Patel","state":"TX","wc":"F-52","cat":"Raw","div":"SJ","total":0.0,"best":185.0,"bestWc":"52","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Marina Maxwell","state":"NC","wc":"F-52","cat":"Raw","div":"J","total":75.0,"best":410.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","ig":"marina52kg"},
{"name":"Trinity Infante","state":"CA","wc":"F-52","cat":"Raw","div":"J","total":0.0,"best":337.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ava Dean","state":"LA","wc":"F-52","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Nyeli Arispe","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Noemi Blancarte","state":"LA","wc":"F-52","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Abcde Mata","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":0.0,"best":297.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Katelynn Billiot","state":"LA","wc":"F-52","cat":"Equipped","div":"J","total":275.0,"best":295.0,"bestWc":"47","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Itzel Loreto","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":0.0,"best":277.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Autumn Gilday","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":0.0,"best":325.0,"bestWc":"52","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Dora Justice","state":"--","wc":"F-57","cat":"Raw","div":"M3","total":270.5,"best":273.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kathleen Casper","state":"MN","wc":"F-57","cat":"Raw","div":"M3","total":75.0,"best":220.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Loraine Efron","state":"TX","wc":"F-57","cat":"Raw","div":"M3","total":75.0,"best":232.5,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Janice Woerner","state":"NY","wc":"F-57","cat":"Raw","div":"M3","total":0.0,"best":292.5,"bestWc":"56","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Alana Mcgolrick","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":0.0,"best":337.5,"bestWc":"56","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Jo Aita","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Lindsay Rubel","state":"NY","wc":"F-57","cat":"Raw","div":"M1","total":75.0,"best":400.0,"bestWc":"76","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Patria Jimenez","state":"MA","wc":"F-57","cat":"Raw","div":"M1","total":0.0,"best":387.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":"quadsofthegodzilla"},
{"name":"Paige Gunkel","state":"WI","wc":"F-57","cat":"Raw","div":"SJ","total":0.0,"best":307.5,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Luka Paskell","state":"MA","wc":"F-57","cat":"Raw","div":"SJ","total":0.0,"best":345.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":"lukap.26"},
{"name":"Eleni Guerrera","state":"VA","wc":"F-57","cat":"Raw","div":"J","total":413.5,"best":440.0,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":"elenilifts57"},
{"name":"Keira Segura","state":"LA","wc":"F-57","cat":"Raw","div":"J","total":375.0,"best":412.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Lauren Jansen","state":"WI","wc":"F-57","cat":"Raw","div":"J","total":342.5,"best":390.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Claire Thomas","state":"PA","wc":"F-57","cat":"Raw","div":"J","total":75.0,"best":425.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Julia Ty","state":"--","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":390.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Kathleen Carroll","state":"IL","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":400.0,"bestWc":"60","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Lexi Gonsalves","state":"CA","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":285.0,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ellie Weinstein","state":"MN","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":450.0,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":"ellieweinsteinlfts"},
{"name":"Abigail Yandrich","state":"OH","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":397.5,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Lindalee Urquieta","state":"TX","wc":"F-57","cat":"Raw","div":"J","total":0.0,"best":340.0,"bestWc":"56","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Charleen Balcer Rowekamp","state":"MN","wc":"F-57","cat":"Equipped","div":"M1","total":320.0,"best":320.0,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jasmine Nguyen","state":"--","wc":"F-57","cat":"Equipped","div":"SJ","total":285.0,"best":307.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ava Dean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Lyla Felean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Paloma Calderon","state":"TX","wc":"F-57","cat":"Equipped","div":"SJ","total":0.0,"best":360.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Lylah Jones","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Octavia Hill","state":"OK","wc":"F-57","cat":"Equipped","div":"J","total":397.5,"best":437.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":"avi._.hill"},
{"name":"Elizabeth Pizarro","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":325.0,"best":392.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Madaline Kennemer","state":"LA","wc":"F-57","cat":"Equipped","div":"J","total":0.0,"best":242.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Macayla Cano","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":0.0,"best":360.0,"bestWc":"57","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Shelly Stettner","state":"MI","wc":"F-63","cat":"Raw","div":"M4","total":0.0,"best":342.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":"shelly_ann_28"},
{"name":"Jessica Marshall","state":"--","wc":"F-63","cat":"Raw","div":"M3","total":75.0,"best":356.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Lynn Pietig","state":"--","wc":"F-63","cat":"Raw","div":"M3","total":75.0,"best":345.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":""},
{"name":"Tiffany Dean","state":"NV","wc":"F-63","cat":"Raw","div":"M3","total":0.0,"best":265.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Isabelle Iliev","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":377.5,"best":377.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Leah Cruciani","state":"PA","wc":"F-63","cat":"Raw","div":"M2","total":332.5,"best":347.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Heather Campbell","state":"OR","wc":"F-63","cat":"Raw","div":"M2","total":315.0,"best":330.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Stacie Taylor","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":75.0,"best":295.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Lisa Shen","state":"TX","wc":"F-63","cat":"Raw","div":"M2","total":0.0,"best":325.0,"bestWc":"60","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Molly Jones","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":412.5,"best":422.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Eleanor Gease","state":"DC","wc":"F-63","cat":"Raw","div":"M1","total":307.5,"best":317.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ashley Hickert","state":"MT","wc":"F-63","cat":"Raw","div":"M1","total":75.0,"best":365.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":"mamaswoleasaurus"},
{"name":"Katie Achille","state":"NJ","wc":"F-63","cat":"Raw","div":"M1","total":75.0,"best":345.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Yvy Llambes","state":"TX","wc":"F-63","cat":"Raw","div":"M1","total":0.0,"best":500.0,"bestWc":"65","diffWc":true,"bestFed":"USAPL","ig":"funsize.powerlifter"},
{"name":"Rina Shapiro","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":0.0,"best":322.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Mariele Arthur","state":"TX","wc":"F-63","cat":"Raw","div":"SJ","total":352.5,"best":425.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kylie Gunkel","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":0.0,"best":302.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","ig":"kylie.gunkel.lifts"},
{"name":"Arden Hyatt","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":0.0,"best":380.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Lindsey Jade Ligsay","state":"HI","wc":"F-63","cat":"Raw","div":"J","total":385.0,"best":422.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Hannah Smith","state":"IL","wc":"F-63","cat":"Raw","div":"J","total":367.5,"best":392.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Laynie Buli","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":282.5,"best":310.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kennedy Azzatori","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":115.0,"best":385.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Aile Banuelos","state":"CA","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":430.0,"bestWc":"65","diffWc":true,"bestFed":"USAPL","ig":"ailelifts"},
{"name":"Elizabeth Sanchez","state":"FL","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":295.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Farida-Farrah Marreez","state":"KY","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":347.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":"farrahmarreez"},
{"name":"Kaylee Beltran","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":357.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Sophia Fortin","state":"MA","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":485.0,"bestWc":"60","diffWc":true,"bestFed":"USAPL","ig":"sophiarose.03"},
{"name":"Victoria Imes","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":305.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Christine Cranford","state":"MI","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":365.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Katarina Herrera","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":0.0,"best":322.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Nataleigh Hunter","state":"DE","wc":"F-63","cat":"Raw","div":"O","total":493.0,"best":500.0,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":"nat.hunter"},
{"name":"Sidney Konig Brock","state":"LA","wc":"F-63","cat":"Raw","div":"O","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Maura Shuttleworth","state":"NM","wc":"F-63","cat":"Equipped","div":"M2","total":110.0,"best":242.5,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Nora Keller","state":"FL","wc":"F-63","cat":"Equipped","div":"M1","total":75.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Ava Finley","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":0.0,"best":275.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Sophia Villarreal","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":0.0,"best":335.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Nevaeh Suarez","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":0.0,"best":320.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Cadence Audler","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Gracie Cassidy","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":340.0,"best":410.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Shelby Fischer","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":300.0,"best":300.0,"bestWc":"57","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Ayden Lege","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":292.5,"best":347.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Julie Donaho","state":"TX","wc":"F-69","cat":"Raw","div":"","total":0.0,"best":190.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alma Kimura","state":"WA","wc":"F-69","cat":"Raw","div":"M4","total":310.5,"best":322.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Gale Williams","state":"GA","wc":"F-69","cat":"Raw","div":"M4","total":285.0,"best":292.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Denise Ragozzino","state":"NV","wc":"F-69","cat":"Raw","div":"M4","total":0.0,"best":172.5,"bestWc":"84","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Roberta Carlson","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":397.5,"best":396.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":"rcarlsini"},
{"name":"Susan Gibson","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":290.0,"best":290.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jackie Barone","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":75.0,"best":227.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Cathy Avery","state":"--","wc":"F-69","cat":"Raw","div":"M2","total":358.0,"best":377.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":"naturallystrongbeauty"},
{"name":"Kari Cashen","state":"NV","wc":"F-69","cat":"Raw","div":"M2","total":215.0,"best":245.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Claudia Beatty","state":"NC","wc":"F-69","cat":"Raw","div":"M2","total":0.0,"best":390.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Becky Enright","state":"WA","wc":"F-69","cat":"Raw","div":"M1","total":427.5,"best":445.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":"becky.enright"},
{"name":"Angela Compilli","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":365.0,"best":463.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Clair Crawford","state":"--","wc":"F-69","cat":"Raw","div":"M1","total":280.0,"best":297.5,"bestWc":"76","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Elena Gutierrez","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":0.0,"best":335.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kollet Wharton","state":"TX","wc":"F-69","cat":"Raw","div":"M1","total":0.0,"best":317.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Stephanie Bazan","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":0.0,"best":317.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kisha Fields","state":"NC","wc":"F-69","cat":"Raw","div":"M1","total":0.0,"best":422.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Hayley Csepella","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":0.0,"best":397.5,"bestWc":"76","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Emma Millana","state":"FL","wc":"F-69","cat":"Raw","div":"SJ","total":0.0,"best":372.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Gianna Ancona","state":"CT","wc":"F-69","cat":"Raw","div":"SJ","total":0.0,"best":424.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Kaleia Knothe","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":0.0,"best":392.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Maia Forsyth","state":"CO","wc":"F-69","cat":"Raw","div":"J","total":450.0,"best":480.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Brooke Naegel","state":"SC","wc":"F-69","cat":"Raw","div":"J","total":438.0,"best":427.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Anne Augustin","state":"NY","wc":"F-69","cat":"Raw","div":"J","total":345.0,"best":400.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Mallory Salinas","state":"TX","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":392.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Maggy Weymiller","state":"IA","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":410.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Annika Minotti","state":"CT","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":390.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Greta Aberle","state":"WI","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":427.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Abigail Breiner","state":"TN","wc":"F-69","cat":"Raw","div":"J","total":0.0,"best":367.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Juliette Brewer","state":"LA","wc":"F-69","cat":"Equipped","div":"#N/A","total":0.0,"best":370.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Donna Marts","state":"WY","wc":"F-69","cat":"Equipped","div":"M3","total":96.0,"best":430.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Celeste Godinez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":432.5,"best":440.0,"bestWc":"76","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Jewlee Recio","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":0.0,"best":330.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Amanda Cougle","state":"LA","wc":"F-69","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Jesaeh Suarez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":0.0,"best":345.0,"bestWc":"63","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Aeryn Anderson","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":395.0,"best":375.0,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Pipper Lemaire","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":75.0,"best":345.0,"bestWc":"76","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Beth Whitney","state":"KS","wc":"F-69","cat":"Equipped","div":"J","total":0.0,"best":312.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Linda Franklin","state":"OR","wc":"F-76","cat":"Raw","div":"M4","total":0.0,"best":377.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":"linda.gets.strong"},
{"name":"Suzanne D'Avalon","state":"NM","wc":"F-76","cat":"Raw","div":"M4","total":0.0,"best":180.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Cheryl Ventola","state":"MA","wc":"F-76","cat":"Raw","div":"M3","total":305.0,"best":305.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Barbara Beaudin","state":"NH","wc":"F-76","cat":"Raw","div":"M3","total":75.0,"best":335.0,"bestWc":"84+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Beth Macauley","state":"MI","wc":"F-76","cat":"Raw","div":"M3","total":0.0,"best":292.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Joah Iannotta","state":"PA","wc":"F-76","cat":"Raw","div":"M2","total":462.5,"best":462.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":"iron__empress"},
{"name":"Pamela Riley","state":"TX","wc":"F-76","cat":"Raw","div":"M2","total":347.5,"best":355.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Siri Hoogen","state":"OR","wc":"F-76","cat":"Raw","div":"M2","total":75.0,"best":435.0,"bestWc":"84","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Cheryl Iseri","state":"ID","wc":"F-76","cat":"Raw","div":"M2","total":75.0,"best":392.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Hannah Sowd","state":"--","wc":"F-76","cat":"Raw","div":"M2","total":0.0,"best":307.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Leah Lutz","state":"CA","wc":"F-76","cat":"Raw","div":"M2","total":0.0,"best":412.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":"leah_barbellmedicine"},
{"name":"Melissa Dixon","state":"WA","wc":"F-76","cat":"Raw","div":"M2","total":0.0,"best":297.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Dayna Mcneal","state":"ND","wc":"F-76","cat":"Raw","div":"M1","total":557.5,"best":560.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":"versus_myself"},
{"name":"Linette Bogdan","state":"NJ","wc":"F-76","cat":"Raw","div":"M1","total":445.0,"best":445.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":"outdoorsport3"},
{"name":"Jennifer Sauter","state":"NY","wc":"F-76","cat":"Raw","div":"M1","total":430.0,"best":437.5,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":"jennifersauter"},
{"name":"Helen Lewis-Rzeszutek","state":"WI","wc":"F-76","cat":"Raw","div":"M1","total":420.0,"best":420.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Amberly Kuhlmann","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":407.5,"best":420.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Kim Inoshita","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":185.0,"best":242.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Amanda Koldjeski","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":0.0,"best":367.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Taylor Boykins","state":"OH","wc":"F-76","cat":"Raw","div":"SJ","total":342.5,"best":387.5,"bestWc":"84","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Sarah Kleinman","state":"MD","wc":"F-76","cat":"Raw","div":"SJ","total":0.0,"best":297.5,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Sonia Espitia","state":"NY","wc":"F-76","cat":"Raw","div":"SJ","total":0.0,"best":390.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alice Gardner","state":"WI","wc":"F-76","cat":"Raw","div":"SJ","total":0.0,"best":340.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Dakota Courtright","state":"NE","wc":"F-76","cat":"Raw","div":"SJ","total":0.0,"best":402.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Esperanza Delgado","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":492.5,"best":505.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":"esperanzalifts"},
{"name":"Dayna Bland","state":"NC","wc":"F-76","cat":"Raw","div":"J","total":370.0,"best":395.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Daisey Fields","state":"GA","wc":"F-76","cat":"Raw","div":"J","total":367.5,"best":387.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Abigail Dietz","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":327.5,"best":360.0,"bestWc":"69","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Zsofia Toth","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":0.0,"best":442.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ekaterina Sapoznikova","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":0.0,"best":473.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Sneha Sureshkumar","state":"MN","wc":"F-76","cat":"Raw","div":"J","total":0.0,"best":370.0,"bestWc":"84","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Amber Gomez","state":"TX","wc":"F-76","cat":"Equipped","div":"M1","total":445.0,"best":460.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":"ortizlee"},
{"name":"Summer Brittain","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":0.0,"best":305.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Gia Garlington","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Gavigail Martinez","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Gabby Haire","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Kaylee Robin","state":"LA","wc":"F-76","cat":"Equipped","div":"J","total":455.0,"best":490.0,"bestWc":"76","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Margie Schnell","state":"AZ","wc":"F-84","cat":"Raw","div":"M3","total":0.0,"best":200.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Marcia Homer","state":"--","wc":"F-84","cat":"Raw","div":"M3","total":0.0,"best":320.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Michelle Kane","state":"OH","wc":"F-84","cat":"Raw","div":"M2","total":435.0,"best":433.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":"michelle_being_michelle"},
{"name":"Allison Snead","state":"NC","wc":"F-84","cat":"Raw","div":"M2","total":0.0,"best":482.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":""},
{"name":"Alexis Goldstein","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":512.5,"best":512.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Rosanna Orosco","state":"CA","wc":"F-84","cat":"Raw","div":"M1","total":407.5,"best":422.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Bethany Blankespoor","state":"DC","wc":"F-84","cat":"Raw","div":"M1","total":302.5,"best":302.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Lauren Kolb","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":0.0,"best":297.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Rebekah Givan","state":"--","wc":"F-84","cat":"Raw","div":"SJ","total":335.0,"best":352.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Saige Back","state":"NY","wc":"F-84","cat":"Raw","div":"SJ","total":75.0,"best":290.0,"bestWc":"84+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Madilyn Cantu","state":"TX","wc":"F-84","cat":"Raw","div":"SJ","total":75.0,"best":322.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Emma Hagen","state":"AZ","wc":"F-84","cat":"Raw","div":"J","total":75.0,"best":370.0,"bestWc":"84+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Tytiyana Flott","state":"MI","wc":"F-84","cat":"Raw","div":"J","total":0.0,"best":455.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":""},
{"name":"Kristen Palmer","state":"GA","wc":"F-84","cat":"Raw","div":"J","total":0.0,"best":440.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Zoe Soleil Goykhman","state":"PA","wc":"F-84","cat":"Raw","div":"J","total":0.0,"best":477.5,"bestWc":"84+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Brooke Ruland","state":"WI","wc":"F-84","cat":"Raw","div":"J","total":0.0,"best":480.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Sara Rodock","state":"WI","wc":"F-84","cat":"Equipped","div":"M1","total":510.0,"best":530.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Elaina Canales","state":"--","wc":"F-84","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Kaitlyn Huff","state":"TX","wc":"F-84","cat":"Equipped","div":"SJ","total":0.0,"best":400.0,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Cristina Angelloz","state":"--","wc":"F-84","cat":"Equipped","div":"J","total":327.5,"best":327.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Patrice Lockhart","state":"GA","wc":"F-84+","cat":"Raw","div":"SO","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Linda Gorham","state":"MD","wc":"F-84+","cat":"Raw","div":"M4","total":312.5,"best":310.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Vicki Brackett","state":"GA","wc":"F-84+","cat":"Raw","div":"M3","total":387.5,"best":387.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Heidi Meeley","state":"WA","wc":"F-84+","cat":"Raw","div":"M3","total":365.0,"best":367.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Patricia Johnson","state":"CA","wc":"F-84+","cat":"Raw","div":"M2","total":547.5,"best":557.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":"drpatjohnsonifbbpro"},
{"name":"Lilyan Jackson","state":"TX","wc":"F-84+","cat":"Raw","div":"M2","total":492.5,"best":482.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":"botgurl"},
{"name":"Lori Sousa","state":"FL","wc":"F-84+","cat":"Raw","div":"M2","total":300.0,"best":337.5,"bestWc":"100+","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Shanti Murphy","state":"--","wc":"F-84+","cat":"Raw","div":"M2","total":0.0,"best":315.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Melissa Copeland","state":"--","wc":"F-84+","cat":"Raw","div":"M1","total":555.0,"best":575.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":"melarmy"},
{"name":"Tiffany Miranda","state":"NC","wc":"F-84+","cat":"Raw","div":"M1","total":0.0,"best":367.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Allison White","state":"--","wc":"F-84+","cat":"Raw","div":"M1","total":0.0,"best":515.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Emily Douglas","state":"MD","wc":"F-84+","cat":"Raw","div":"M1","total":0.0,"best":517.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Cora Osei-Adjei","state":"TX","wc":"F-84+","cat":"Raw","div":"SJ","total":0.0,"best":520.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Emily Bombardier","state":"NY","wc":"F-84+","cat":"Raw","div":"J","total":415.0,"best":437.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Emma Jones","state":"MA","wc":"F-84+","cat":"Raw","div":"J","total":410.0,"best":452.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Maya Moise","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":450.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kathryn Tranum","state":"IN","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":540.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Izabela Ramirez","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":375.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Sarah Jerry","state":"AL","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":420.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Jacqueline Fly","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0.0,"best":505.0,"bestWc":"100+","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Kamilah Todd","state":"LA","wc":"F-84+","cat":"Equipped","div":"M1","total":602.5,"best":590.0,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":"kntodd"},
{"name":"Emelia Dauterive","state":"LA","wc":"F-84+","cat":"Equipped","div":"SJ","total":400.0,"best":427.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Gabriella Adrian","state":"--","wc":"F-84+","cat":"Equipped","div":"SJ","total":0.0,"best":432.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Addyson Perez","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Olivia Cardenas","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Emmerson Mokuiki","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0.0,"best":412.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Long Chau","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":382.5,"bestWc":"53","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Nicholas Zambrano","state":"SC","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":297.5,"bestWc":"53","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ahmed Al Fatli","state":"IA","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":457.5,"bestWc":"59","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Alec Weinstein","state":"PA","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":277.5,"bestWc":"53","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alejandro Garcia","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Daniel Saenz","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"James Medrano","state":"TX","wc":"M-53","cat":"Raw","div":"J","total":0.0,"best":520.0,"bestWc":"56","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Trey Nguyen","state":"LA","wc":"M-53","cat":"Equipped","div":"SJ","total":0.0,"best":350.0,"bestWc":"53","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Brayden Hollier","state":"--","wc":"M-53","cat":"Equipped","div":"J","total":75.0,"best":395.0,"bestWc":"53","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jonathan Nico","state":"AZ","wc":"M-59","cat":"Raw","div":"SO","total":150.0,"best":195.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"David Berube","state":"--","wc":"M-59","cat":"Raw","div":"SA","total":75.0,"best":282.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Eric Kupperstein","state":"MA","wc":"M-59","cat":"Raw","div":"M3","total":407.5,"best":465.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alexander Kim","state":"IL","wc":"M-59","cat":"Raw","div":"M3","total":0.0,"best":347.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kaleb Mcdowell","state":"MD","wc":"M-59","cat":"Raw","div":"M2","total":0.0,"best":305.0,"bestWc":"66","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Huaiyu Tan","state":"FL","wc":"M-59","cat":"Raw","div":"M1","total":75.0,"best":500.0,"bestWc":"66","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Newton Cheng","state":"CA","wc":"M-59","cat":"Raw","div":"M1","total":0.0,"best":528.0,"bestWc":"56","diffWc":true,"bestFed":"USAPL","ig":"newtoncheng"},
{"name":"William Tenerelli","state":"NJ","wc":"M-59","cat":"Raw","div":"M1","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Justin Nguyen","state":"CA","wc":"M-59","cat":"Raw","div":"SJ","total":507.5,"best":595.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Masato Gentle","state":"NV","wc":"M-59","cat":"Raw","div":"SJ","total":447.5,"best":502.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Grayson Manning","state":"IA","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":489.5,"bestWc":"60","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Tyler Friedman","state":"PA","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":460.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Daniel Elliott","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":465.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Zaiden Olvera","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":487.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alex Martinez","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0.0,"best":665.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Timmy Truong","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":530.0,"best":607.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Cesar Perez","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":467.5,"best":585.0,"bestWc":"100","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Patrick Devine","state":"NJ","wc":"M-59","cat":"Raw","div":"J","total":437.5,"best":510.0,"bestWc":"66","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Cardin Do","state":"MA","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":645.0,"bestWc":"66","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Deondre Moody","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":535.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Brady Price","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":595.0,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":"thatboyprice"},
{"name":"A Phi Le","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":557.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Fabian Viernes","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":502.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Tyler Morrow","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":585.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ryan Sturgis","state":"--","wc":"M-59","cat":"Raw","div":"J","total":0.0,"best":487.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ethan Andrews","state":"--","wc":"M-59","cat":"Equipped","div":"SJ","total":417.5,"best":472.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Ethen Bui","state":"LA","wc":"M-59","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Rafael Arredondo","state":"TX","wc":"M-59","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Bodie Lacoe","state":"PA","wc":"M-59","cat":"Equipped","div":"J","total":585.0,"best":640.0,"bestWc":"59","diffWc":false,"bestFed":"AMP","ig":"bodielacoe04"},
{"name":"Jesus Martinez","state":"TX","wc":"M-59","cat":"Equipped","div":"J","total":0.0,"best":417.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Adrian Mcghee","state":"GA","wc":"M-66","cat":"Raw","div":"SO","total":372.5,"best":372.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ben Boehm","state":"IN","wc":"M-66","cat":"Raw","div":"SO","total":262.5,"best":265.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Elliot Guinn","state":"--","wc":"M-66","cat":"Raw","div":"SO","total":0.0,"best":290.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Manuel Rodriguez","state":"FL","wc":"M-66","cat":"Raw","div":"M4","total":440.0,"best":615.0,"bestWc":"125","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Richard Flaum","state":"TX","wc":"M-66","cat":"Raw","div":"M4","total":0.0,"best":255.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Eric Verbel","state":"NJ","wc":"M-66","cat":"Raw","div":"M3","total":75.0,"best":457.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Michael Feldhaus","state":"OH","wc":"M-66","cat":"Raw","div":"M3","total":0.0,"best":540.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Jay Thompson","state":"NC","wc":"M-66","cat":"Raw","div":"M3","total":0.0,"best":510.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":""},
{"name":"Rick Brink","state":"CO","wc":"M-66","cat":"Raw","div":"M2","total":522.5,"best":522.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":""},
{"name":"Ron Brinker","state":"OH","wc":"M-66","cat":"Raw","div":"M2","total":497.5,"best":510.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Tuan Nguyen","state":"PA","wc":"M-66","cat":"Raw","div":"M1","total":540.0,"best":637.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"An Nguyen","state":"CA","wc":"M-66","cat":"Raw","div":"M1","total":0.0,"best":580.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":"an_lifts"},
{"name":"Shawn Frasquillo","state":"TX","wc":"M-66","cat":"Raw","div":"M1","total":0.0,"best":590.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Wyatt Dodson","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":405.0,"best":460.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Sammy Sobie","state":"--","wc":"M-66","cat":"Raw","div":"SJ","total":340.0,"best":397.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Suhan Hajela","state":"CA","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":492.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Denzil Smith","state":"AR","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":565.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Brody Wyatt","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":542.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Benjamin Yang","state":"NY","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":560.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Berkeley Britt","state":"GA","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":420.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Bryan Lara","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":425.0,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Anthony Acampora","state":"--","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":487.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Levi Jansen","state":"WI","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":490.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kyren Howard","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":507.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Damien Sanchez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":425.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Martin Alvarez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0.0,"best":562.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Tucker Abbott","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":542.5,"best":620.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Pierce Woodworth","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":500.0,"best":535.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Nathan Lovemore","state":"LA","wc":"M-66","cat":"Raw","div":"J","total":75.0,"best":610.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Enzo Vickroy","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":555.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Timothy Ochoa","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":662.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Hayden Wolf","state":"WI","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":435.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":""},
{"name":"Tristian Davila","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":650.0,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Austin Harris","state":"NC","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":557.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Evan Hawk","state":"FL","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":713.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Tanner Jacobi","state":"MO","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":405.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Hassan Coleman","state":"GA","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":670.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Xavier Zambrano","state":"SC","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":527.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Vedant Ray","state":"OH","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":537.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Nicholas Lagen","state":"AL","wc":"M-66","cat":"Raw","div":"J","total":0.0,"best":577.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alex Galant","state":"CO","wc":"M-66","cat":"Equipped","div":"M4","total":0.0,"best":205.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Eric Verbel","state":"NJ","wc":"M-66","cat":"Equipped","div":"M3","total":460.0,"best":410.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Hennis Washington Iii","state":"--","wc":"M-66","cat":"Equipped","div":"M2","total":0.0,"best":517.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kamil Iwasiow","state":"FL","wc":"M-66","cat":"Equipped","div":"M1","total":675.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Bryand Mao","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":502.5,"best":502.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"George Cunningham Iv","state":"NC","wc":"M-66","cat":"Equipped","div":"SJ","total":435.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Andrew J Pena","state":"TX","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":417.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Charles Battaglia","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Jace Duchesne","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":490.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alex Folmar","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Robert Godinez","state":"--","wc":"M-66","cat":"Equipped","div":"SJ","total":0.0,"best":340.0,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Marcelo Chanaba","state":"--","wc":"M-66","cat":"Equipped","div":"J","total":512.5,"best":527.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Gahel Griner","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":490.0,"best":572.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Joseph Marceaux","state":"LA","wc":"M-66","cat":"Equipped","div":"J","total":75.0,"best":435.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Isaiah Glasgow","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Juventino Zapata Iv","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Andrew Gonzalez","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0.0,"best":675.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"David Floyd","state":"GA","wc":"M-74","cat":"Raw","div":"SO","total":0.0,"best":392.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Joseph Songco","state":"TX","wc":"M-74","cat":"Raw","div":"SA","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"John Laflamme","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":450.0,"best":526.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":"johnlaflamme83kg"},
{"name":"Louis Caruana","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":267.5,"best":300.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Thomas Ashbrook","state":"CA","wc":"M-74","cat":"Raw","div":"M3","total":485.0,"best":485.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Raw","div":"M3","total":142.5,"best":867.5,"bestWc":"140","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Robert Lane","state":"WA","wc":"M-74","cat":"Raw","div":"M2","total":602.5,"best":602.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":"lane.robert.s"},
{"name":"Matthew Chapman","state":"VA","wc":"M-74","cat":"Raw","div":"M2","total":400.0,"best":400.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Patrick Foster","state":"PA","wc":"M-74","cat":"Raw","div":"M2","total":0.0,"best":525.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Donald Bigham","state":"SC","wc":"M-74","cat":"Raw","div":"M2","total":0.0,"best":647.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":"onetimepowerlifting"},
{"name":"Michael Haran","state":"MD","wc":"M-74","cat":"Raw","div":"M1","total":642.5,"best":637.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Lee Rogers","state":"NH","wc":"M-74","cat":"Raw","div":"M1","total":487.5,"best":510.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Carlos Mata","state":"--","wc":"M-74","cat":"Raw","div":"M1","total":135.0,"best":682.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Due Nguyen","state":"NY","wc":"M-74","cat":"Raw","div":"M1","total":0.0,"best":457.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Weston Lisemby","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":572.5,"best":610.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Javier Gonzalez","state":"WI","wc":"M-74","cat":"Raw","div":"SJ","total":75.0,"best":432.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Graham Steel","state":"FL","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":600.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Joshua Ambrose","state":"--","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":582.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Xzavier Aguilar","state":"--","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":597.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Parker Golden","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":480.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Evan Machik","state":"PA","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":565.0,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":""},
{"name":"Vihaan Barar","state":"NJ","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":537.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":""},
{"name":"Jaxon Backus","state":"AR","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":520.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jamie Huh","state":"CA","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":442.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ben Tran","state":"MA","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":680.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kane West","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Connor Townsend","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"David Mays","state":"OH","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":210.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Damon Llamas","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":440.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Orlando Torres","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0.0,"best":617.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Everardo Crispin","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":722.5,"best":730.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":"_.crispin03"},
{"name":"Jeremy Rodriguez","state":"MA","wc":"M-74","cat":"Raw","div":"J","total":685.0,"best":715.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":"jrodbigquad"},
{"name":"Asante Gordon","state":"IA","wc":"M-74","cat":"Raw","div":"J","total":607.5,"best":685.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Cameron Kennedy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":592.5,"best":615.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Rito Flores","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":590.5,"best":657.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":"rito75kg"},
{"name":"Alexander Lucero","state":"NM","wc":"M-74","cat":"Raw","div":"J","total":557.5,"best":560.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Garrett Rogers","state":"DE","wc":"M-74","cat":"Raw","div":"J","total":555.0,"best":667.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":"gmoneystrong"},
{"name":"Wyatt Abbott","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":460.0,"best":497.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Nicolas Gaines","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":75.0,"best":685.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":"nickgaines74"},
{"name":"Gabriel Garza","state":"--","wc":"M-74","cat":"Raw","div":"J","total":75.0,"best":622.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ivan Liu","state":"GA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":680.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Edgar Duran","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":595.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Joshua Lawson","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":607.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kyle Cones","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":410.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Braden Mertz","state":"PA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":607.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Brayden Molinyawe","state":"OH","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":735.0,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Gavin Gill","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":572.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alexander Hunt","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":582.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Byron Moore","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":670.0,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Harrison Lamy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":552.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Jacob Anucilla","state":"CA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":590.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Luke Christopherson","state":"MN","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":655.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Santiago Lara","state":"LA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":437.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kai Vasquez","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":660.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Caleb Chan","state":"CA","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":700.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"James Beard","state":"MS","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":507.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alejandro Mccormick","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":512.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Emiliano Fraga","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0.0,"best":610.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Durwin Ho","state":"NJ","wc":"M-74","cat":"Raw","div":"O","total":0.0,"best":585.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Equipped","div":"M3","total":643.0,"best":643.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Liam Kincanon","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":0.0,"best":542.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Gavin Desalvo","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":0.0,"best":545.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Lawson Lillo","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":75.0,"best":760.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Logan Edmonds","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":0.0,"best":730.0,"bestWc":"74","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Will Eckford","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":0.0,"best":821.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Cole Goudeau","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Noah Duplichan","state":"LA","wc":"M-83","cat":"Raw","div":"SO","total":0.0,"best":385.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ken Levine","state":"PA","wc":"M-83","cat":"Raw","div":"M4","total":432.5,"best":462.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Russ Marr","state":"NM","wc":"M-83","cat":"Raw","div":"M4","total":0.0,"best":477.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Willie Wong","state":"CA","wc":"M-83","cat":"Raw","div":"M3","total":552.5,"best":555.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":"willie_wong83kg"},
{"name":"Carlos Lewis","state":"TX","wc":"M-83","cat":"Raw","div":"M3","total":535.0,"best":555.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Laddie Gibson","state":"NY","wc":"M-83","cat":"Raw","div":"M3","total":0.0,"best":575.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Steve Destephen","state":"OH","wc":"M-83","cat":"Raw","div":"M3","total":0.0,"best":455.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jesus Fragoso","state":"--","wc":"M-83","cat":"Raw","div":"M2","total":625.0,"best":647.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":"deadliftingjesus"},
{"name":"Thaddeus Say","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":560.0,"best":560.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Garrin Clark","state":"MI","wc":"M-83","cat":"Raw","div":"M2","total":225.0,"best":552.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":"gmanf3"},
{"name":"Mfon Akpan","state":"OK","wc":"M-83","cat":"Raw","div":"M2","total":0.0,"best":462.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Sikander Aasim","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":0.0,"best":480.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ross Leppala","state":"GA","wc":"M-83","cat":"Raw","div":"M1","total":747.5,"best":747.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":"ross.leppala"},
{"name":"Anthony Perkins","state":"TX","wc":"M-83","cat":"Raw","div":"M1","total":642.5,"best":642.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Robert Rodriguez","state":"LA","wc":"M-83","cat":"Raw","div":"M1","total":430.0,"best":437.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Julien Comte","state":"PA","wc":"M-83","cat":"Raw","div":"M1","total":75.0,"best":647.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Lauren Cohen","state":"MA","wc":"M-83","cat":"Raw","div":"M1","total":75.0,"best":702.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Ben Dresher","state":"--","wc":"M-83","cat":"Raw","div":"M1","total":0.0,"best":682.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":"ben.rpe10"},
{"name":"Lionel Stoxstell Ii","state":"NV","wc":"M-83","cat":"Raw","div":"M1","total":0.0,"best":585.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ryan Kuhlmann","state":"AL","wc":"M-83","cat":"Raw","div":"M1","total":0.0,"best":590.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":"robo_rhino42"},
{"name":"Jaime Velasquez","state":"MD","wc":"M-83","cat":"Raw","div":"M1","total":0.0,"best":505.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Eli Sobie","state":"MI","wc":"M-83","cat":"Raw","div":"SJ","total":477.5,"best":540.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Aidan Bauer","state":"AZ","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":535.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Mason Madji","state":"NC","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":465.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Ogden Horowitz Shea","state":"NY","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":635.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Advaith Goud Sirisanagandla","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":537.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Tate Van Essen","state":"IA","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":640.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Valentin Caballero Rivera","state":"CA","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"John Longano","state":"OH","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":587.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Joshua Tang","state":"MD","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":455.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":"anabolic_goldfish"},
{"name":"Oscar Rivas","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":627.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kayden Curtiss","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":432.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Timothy Coleman","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":592.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Matthew Lim","state":"--","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":697.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Brody Williamson","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":505.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jairo Ordonez Jr","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Eric Gonzalez-Tunon","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":745.0,"best":745.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":"the.war.on.gravity"},
{"name":"Dillon Johnson","state":"--","wc":"M-83","cat":"Raw","div":"J","total":715.0,"best":835.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":"_.dillonjohnson"},
{"name":"Kacey Morgan","state":"AL","wc":"M-83","cat":"Raw","div":"J","total":600.0,"best":635.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Raphael Rivera","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":575.0,"best":605.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Noah Raulston","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":565.0,"best":637.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jonathan Vasquez","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":542.5,"best":560.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Rayce Pennartz","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":485.0,"best":527.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ibrahiem Hamed","state":"LA","wc":"M-83","cat":"Raw","div":"J","total":75.0,"best":582.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Jordan Zavala","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":545.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Calvin Trapp","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":705.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Daniel Castaneda","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":605.0,"bestWc":"100","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Wilson Guo","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":530.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Aaron Welch","state":"CO","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":780.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Talon Pippin","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":495.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Justin Ng","state":"IL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":692.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":"ng82.5kg"},
{"name":"Sean Fitzgerald","state":"PA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":677.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":"seanfitzpl"},
{"name":"Aiolya Zhang","state":"MI","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":610.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Ryan Bautista","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":760.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Aron Atakuzi","state":"OK","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":667.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Brendon Vineyard","state":"NY","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":687.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Patrick Broussard","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":382.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Dylan Stefan","state":"OH","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":690.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ryan Samadi","state":"--","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":585.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Joshua Ham","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":555.0,"bestWc":"75","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Xavier Mccarty","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":735.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Wayne Anderson","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":512.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Samuel Johnson","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":712.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Jackson Voss","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":660.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Danny Lawrence","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":725.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Max Wright","state":"KY","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":787.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":"maxcristwright"},
{"name":"Jack Schultz","state":"IA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Juan Renderos","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":572.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Luke Medina","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":730.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Fisher Chung","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Luis Alvarado","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0.0,"best":520.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Gabriel Pongchit","state":"MD","wc":"M-83","cat":"Raw","div":"O","total":585.0,"best":585.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Thomas Fagiano","state":"NH","wc":"M-83","cat":"Raw","div":"O","total":0.0,"best":670.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Joshua Rafael Ramos","state":"CA","wc":"M-83","cat":"Raw","div":"O","total":0.0,"best":527.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Will Mankhey","state":"NE","wc":"M-83","cat":"Raw","div":"O","total":0.0,"best":660.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"William Clayton","state":"NJ","wc":"M-83","cat":"Equipped","div":"M4","total":387.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Chris Boillot","state":"AZ","wc":"M-83","cat":"Equipped","div":"M3","total":607.5,"best":607.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Keith Nautel","state":"NY","wc":"M-83","cat":"Equipped","div":"M3","total":0.0,"best":705.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Travis Pardue","state":"NC","wc":"M-83","cat":"Equipped","div":"M2","total":590.0,"best":570.0,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Jose Munoz","state":"NM","wc":"M-83","cat":"Equipped","div":"M1","total":392.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Nate Crowder","state":"GA","wc":"M-83","cat":"Equipped","div":"M1","total":75.0,"best":610.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Wyatt Gremillion","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0.0,"best":610.0,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Juan David Aguirre Iii","state":"TX","wc":"M-83","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Paxton Audler","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Michael Delaney","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Ty Felle","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":595.0,"best":592.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Carter Lewis","state":"LA","wc":"M-83","cat":"Equipped","div":"J","total":75.0,"best":797.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Troy Nguyen","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":0.0,"best":582.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Stephen Simpson","state":"IN","wc":"M-93","cat":"Raw","div":"SO","total":0.0,"best":335.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Robert Moore","state":"MD","wc":"M-93","cat":"Raw","div":"M4","total":490.0,"best":727.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Phillip Rosenstern","state":"PA","wc":"M-93","cat":"Raw","div":"M4","total":487.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Bruce Bullock","state":"NC","wc":"M-93","cat":"Raw","div":"M4","total":0.0,"best":295.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Peter Tressel","state":"MN","wc":"M-93","cat":"Raw","div":"M3","total":502.5,"best":517.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Steven Carpenter","state":"FL","wc":"M-93","cat":"Raw","div":"M3","total":490.0,"best":580.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Todd Peterson","state":"NV","wc":"M-93","cat":"Raw","div":"M3","total":472.5,"best":472.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Darrell Gaspard","state":"LA","wc":"M-93","cat":"Raw","div":"M3","total":75.0,"best":537.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"David Ricks","state":"FL","wc":"M-93","cat":"Raw","div":"M3","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":"ricks.david"},
{"name":"Troy Gibson","state":"NY","wc":"M-93","cat":"Raw","div":"M3","total":0.0,"best":400.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Edward Ruland","state":"FL","wc":"M-93","cat":"Raw","div":"M2","total":645.0,"best":645.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Marquies Sampa","state":"TX","wc":"M-93","cat":"Raw","div":"M2","total":0.0,"best":570.0,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Rodney Elm","state":"AZ","wc":"M-93","cat":"Raw","div":"M2","total":0.0,"best":605.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Layne Norton","state":"FL","wc":"M-93","cat":"Raw","div":"M1","total":788.0,"best":788.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":"biolayne"},
{"name":"Michael Reed","state":"OH","wc":"M-93","cat":"Raw","div":"M1","total":682.5,"best":712.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":"crazysocks.powerlifter"},
{"name":"Nathan Kulas","state":"ME","wc":"M-93","cat":"Raw","div":"M1","total":75.0,"best":805.0,"bestWc":"100","diffWc":true,"bestFed":"USAPL","ig":"omrsafetyo"},
{"name":"Courtney Leffall","state":"TX","wc":"M-93","cat":"Raw","div":"M1","total":0.0,"best":555.0,"bestWc":"100","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Roy Jackson","state":"AL","wc":"M-93","cat":"Raw","div":"M1","total":0.0,"best":825.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Sam Maiewski","state":"MA","wc":"M-93","cat":"Raw","div":"SJ","total":550.0,"best":670.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Eric Jin","state":"IN","wc":"M-93","cat":"Raw","div":"SJ","total":545.0,"best":610.0,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Noel Kurtin","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":415.0,"best":672.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Xander Lane","state":"OR","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":367.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Ethan Cohen","state":"GA","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":717.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Selwyn Logan","state":"ME","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":577.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Liam Goldich","state":"PA","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":652.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Dylan Moyal","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":632.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Justin Corle","state":"MI","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":690.0,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":"justcorle"},
{"name":"Paul Mourain","state":"LA","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":587.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Jack Cox","state":"NJ","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":652.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Jet Jones","state":"WI","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Tyler Plumley","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Manar Albeirakdar","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0.0,"best":515.0,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Kyle White","state":"--","wc":"M-93","cat":"Raw","div":"J","total":807.5,"best":820.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jack Reynolds","state":"MA","wc":"M-93","cat":"Raw","div":"J","total":795.0,"best":825.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":"jack_reynolds333"},
{"name":"Dylan Albert","state":"LA","wc":"M-93","cat":"Raw","div":"J","total":725.0,"best":780.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Nahuel Peralta","state":"--","wc":"M-93","cat":"Raw","div":"J","total":707.5,"best":707.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Brendan Mackin","state":"--","wc":"M-93","cat":"Raw","div":"J","total":680.0,"best":717.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Demitri Ayala","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":680.0,"best":837.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":"dtree707"},
{"name":"Alex Vastey","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":637.5,"best":662.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Nick Walker","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":635.0,"best":647.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Victor Herrera","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":635.0,"best":687.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Laakea Faurot","state":"HI","wc":"M-93","cat":"Raw","div":"J","total":602.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Aaron Estocin","state":"NM","wc":"M-93","cat":"Raw","div":"J","total":562.5,"best":597.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Riley Morgan","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":657.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Davis Wenger","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":555.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Waylon Vidler","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":682.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Adam Greer","state":"CA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":617.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Cameron Thayer","state":"--","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":592.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Miles Hartway","state":"NY","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":737.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Devin Mervau","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":865.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":"devinmervau"},
{"name":"Jake Lewis","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":697.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ben Mckinney","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":695.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Evan Ross","state":"VA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":832.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":"minihulk_lifts"},
{"name":"Adam Bretsch","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":620.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jacob Danielson","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":690.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jonathan Eppler","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":652.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Simon Powell","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":477.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kane Smith","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":720.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":"kanererer"},
{"name":"Nick Sanchelli","state":"SC","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":685.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Peyton Morgan","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":587.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Jonatan Hernandez","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":575.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jayvon Irwin","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Justin Blechinger","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":682.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Luke Mitchell","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":"lifterluke"},
{"name":"Samuel Lopez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":602.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Eric Pinon","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":645.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Arnol Rosales","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":535.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Aryan Nautiyal","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":667.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Emanol Gonzalez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0.0,"best":557.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Jovanni Ontiveros","state":"TX","wc":"M-93","cat":"Raw","div":"O","total":0.0,"best":512.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Thomas Cencich","state":"CO","wc":"M-93","cat":"Equipped","div":"M3","total":606.0,"best":602.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"James Brown","state":"PA","wc":"M-93","cat":"Equipped","div":"M3","total":587.5,"best":690.0,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Gerard Dally","state":"--","wc":"M-93","cat":"Equipped","div":"M3","total":530.0,"best":522.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Steven Carpenter","state":"FL","wc":"M-93","cat":"Equipped","div":"M3","total":490.0,"best":457.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Marcos Sanchez","state":"--","wc":"M-93","cat":"Equipped","div":"M2","total":642.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"William Kahapea","state":"--","wc":"M-93","cat":"Equipped","div":"M2","total":585.0,"best":615.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Rick Fowler","state":"IL","wc":"M-93","cat":"Equipped","div":"M2","total":75.0,"best":555.0,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Matt Rodock","state":"WI","wc":"M-93","cat":"Equipped","div":"M1","total":847.5,"best":862.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jerry Contreras","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Brennan Jarrell","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":0.0,"best":542.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Caleb Frnka","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":0.0,"best":607.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Thomas Killam","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Rocky Dufort","state":"LA","wc":"M-93","cat":"Equipped","div":"J","total":637.5,"best":732.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ronnie Guerra","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":75.0,"best":662.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Encarnacion Lugo Jr.","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"John Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"SO","total":527.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Dion Thomas","state":"GA","wc":"M-105","cat":"Raw","div":"SO","total":452.5,"best":462.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Dave Schneider","state":"OH","wc":"M-105","cat":"Raw","div":"M4","total":490.0,"best":500.0,"bestWc":"120","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Michael Lobb","state":"OR","wc":"M-105","cat":"Raw","div":"M4","total":440.0,"best":450.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"John Wetter","state":"--","wc":"M-105","cat":"Raw","div":"M3","total":545.0,"best":552.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Peter Severenuk","state":"NJ","wc":"M-105","cat":"Raw","div":"M3","total":427.5,"best":455.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jeffrey Fellows","state":"OR","wc":"M-105","cat":"Raw","div":"M3","total":417.5,"best":437.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jeff Olsen","state":"WA","wc":"M-105","cat":"Raw","div":"M3","total":0.0,"best":600.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Egan Walker","state":"NV","wc":"M-105","cat":"Raw","div":"M3","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"David Koch","state":"MN","wc":"M-105","cat":"Raw","div":"M2","total":700.0,"best":712.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Chris Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"M2","total":75.0,"best":682.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"David Nix","state":"OR","wc":"M-105","cat":"Raw","div":"M2","total":0.0,"best":530.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Matthew Naegel","state":"SC","wc":"M-105","cat":"Raw","div":"M2","total":0.0,"best":622.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Bob Eucker","state":"OH","wc":"M-105","cat":"Raw","div":"M2","total":0.0,"best":742.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","ig":"bobeucker"},
{"name":"Carlos Santoliquido","state":"--","wc":"M-105","cat":"Raw","div":"M1","total":832.5,"best":832.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ls Mcclain","state":"--","wc":"M-105","cat":"Raw","div":"M1","total":812.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":"lsmcclain"},
{"name":"Ryan Donnelly","state":"NJ","wc":"M-105","cat":"Raw","div":"M1","total":742.5,"best":752.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","ig":"dukeknobbz"},
{"name":"Jermaine Williams","state":"MD","wc":"M-105","cat":"Raw","div":"M1","total":575.0,"best":575.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Gerald Ratulowski","state":"TX","wc":"M-105","cat":"Raw","div":"M1","total":75.0,"best":705.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alpha Dumbuya","state":"GA","wc":"M-105","cat":"Raw","div":"M1","total":0.0,"best":655.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Nikhil Karulkar","state":"WA","wc":"M-105","cat":"Raw","div":"M1","total":0.0,"best":607.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jason Coble","state":"CA","wc":"M-105","cat":"Raw","div":"M1","total":0.0,"best":735.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Jacob Tumminello","state":"MS","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":702.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Aaron Quail","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":675.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Vedant Remella","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":542.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Matheo Nave","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":452.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Michael Cruz","state":"OK","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":732.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Brenden Ross","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":760.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Sawyer Reinart","state":"WI","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":517.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Matthew Teal","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Austin Wilson","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0.0,"best":788.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Hunter Olsen","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":770.0,"best":797.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Evan Gonsorcik","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":730.0,"best":730.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ej Chikando","state":"--","wc":"M-105","cat":"Raw","div":"J","total":692.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Erick Severino","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":692.5,"best":725.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Cash Zumhingst","state":"IN","wc":"M-105","cat":"Raw","div":"J","total":660.0,"best":750.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ashton Smith","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":650.0,"best":687.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Angelo Carpino","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":630.0,"best":642.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Gil Romero Lopez","state":"AZ","wc":"M-105","cat":"Raw","div":"J","total":627.5,"best":675.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kaiden Funderburk","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":617.5,"best":677.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Steven Aderhold","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":572.5,"best":622.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Josue Aguilera","state":"--","wc":"M-105","cat":"Raw","div":"J","total":75.0,"best":775.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Luke Wymer","state":"OH","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":802.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"George Acosta","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":695.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Joshua Lawson","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":607.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Kaden Mullins","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":700.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Austin Mckinney","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":440.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Mark Hoffman","state":"ID","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":702.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Lawrence Jones","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":910.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Alex Paige","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":637.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Charles Porter","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":722.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Zachary Olsen","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":737.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Thomas Boyd","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":785.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Nico Meisser","state":"CA","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":655.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Dallas Romanowski","state":"NC","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":790.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Fernando Rivera","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":625.0,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Noah Schmidtberger","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":547.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Austin Hamilton","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":0.0,"best":637.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Bryan Prado","state":"CA","wc":"M-105","cat":"Raw","div":"O","total":0.0,"best":782.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Keith Taylor","state":"--","wc":"M-105","cat":"Equipped","div":"M4","total":547.5,"best":535.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Richard Johnson","state":"MA","wc":"M-105","cat":"Equipped","div":"M3","total":587.5,"best":590.0,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Ron Falcone Jr","state":"NJ","wc":"M-105","cat":"Equipped","div":"M3","total":500.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Dana Rosenzweig","state":"IL","wc":"M-105","cat":"Equipped","div":"M3","total":475.0,"best":557.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Dale Mclaren","state":"GA","wc":"M-105","cat":"Equipped","div":"M2","total":912.5,"best":935.0,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ryan Donnelly","state":"NJ","wc":"M-105","cat":"Equipped","div":"M1","total":805.0,"best":850.0,"bestWc":"120","diffWc":true,"bestFed":"AMP","ig":"dukeknobbz"},
{"name":"Pete Nees","state":"--","wc":"M-105","cat":"Equipped","div":"M1","total":0.0,"best":802.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Cooper Trosclair","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":532.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Hutsen Roberts","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":512.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Brody Young","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Tristian Luna","state":"TX","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":657.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","ig":""},
{"name":"Mason Matrone","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0.0,"best":577.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Jose Bellon","state":"FL","wc":"M-105","cat":"Equipped","div":"J","total":75.0,"best":700.0,"bestWc":"120","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Matthew Hammond","state":"LA","wc":"M-120","cat":"Raw","div":"SO","total":0.0,"best":322.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Erik Madsen","state":"WA","wc":"M-120","cat":"Raw","div":"M4","total":485.0,"best":498.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Rory Mccoy","state":"PA","wc":"M-120","cat":"Raw","div":"M4","total":465.0,"best":497.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Michael Bitting","state":"FL","wc":"M-120","cat":"Raw","div":"M4","total":0.0,"best":437.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Wilson Martinez","state":"--","wc":"M-120","cat":"Raw","div":"M3","total":707.5,"best":707.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Austin Keanu","state":"HI","wc":"M-120","cat":"Raw","div":"M3","total":75.0,"best":652.5,"bestWc":"120+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Michael Mcqueen","state":"TX","wc":"M-120","cat":"Raw","div":"M2","total":717.5,"best":717.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Esteban Rubens","state":"NH","wc":"M-120","cat":"Raw","div":"M2","total":680.0,"best":692.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Michael Mcqueen","state":"--","wc":"M-120","cat":"Raw","div":"M2","total":122.5,"best":717.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Raw","div":"M2","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Daniel Gomez","state":"CA","wc":"M-120","cat":"Raw","div":"M2","total":0.0,"best":592.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Craig Hickman","state":"ID","wc":"M-120","cat":"Raw","div":"M2","total":0.0,"best":580.0,"bestWc":"125","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Thomas Crist","state":"NC","wc":"M-120","cat":"Raw","div":"M2","total":0.0,"best":580.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Michael Tuchscherer","state":"AK","wc":"M-120","cat":"Raw","div":"M1","total":900.0,"best":902.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":"miketuchscherer"},
{"name":"Jonathan Jurewicz","state":"MD","wc":"M-120","cat":"Raw","div":"M1","total":75.0,"best":407.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Cordell Estrada","state":"--","wc":"M-120","cat":"Raw","div":"M1","total":0.0,"best":710.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Nathan Alexander","state":"WA","wc":"M-120","cat":"Raw","div":"M1","total":0.0,"best":790.0,"bestWc":"140","diffWc":true,"bestFed":"USAPL","ig":"alexandernathan"},
{"name":"Aaron Mizushima","state":"HI","wc":"M-120","cat":"Raw","div":"M1","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Desmond Jordan","state":"NC","wc":"M-120","cat":"Raw","div":"M1","total":0.0,"best":900.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":"desmond.jordan.94"},
{"name":"Austin Oakley","state":"IN","wc":"M-120","cat":"Raw","div":"SJ","total":0.0,"best":750.0,"bestWc":"125","diffWc":true,"bestFed":"USAPL","ig":"austinistiny"},
{"name":"Cesar Garcia","state":"OR","wc":"M-120","cat":"Raw","div":"SJ","total":0.0,"best":687.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Dante Deleon","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":898.5,"best":898.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Cain Lopez","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":817.5,"best":822.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jacob Breckinridge","state":"PA","wc":"M-120","cat":"Raw","div":"J","total":807.5,"best":810.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Tanner Newman","state":"OK","wc":"M-120","cat":"Raw","div":"J","total":780.0,"best":810.0,"bestWc":"140","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Gilberto Villarreal","state":"CA","wc":"M-120","cat":"Raw","div":"J","total":740.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Leonardo Tarango","state":"NM","wc":"M-120","cat":"Raw","div":"J","total":592.5,"best":600.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Connor Long","state":"KY","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":682.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":"connor.long99"},
{"name":"Nicolas Hawke","state":"--","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":765.0,"bestWc":"120+","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Reagan Belvin","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":657.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Lincoln Mickelsen","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":690.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Daniel Navarrete","state":"--","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":740.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Chancellor Buford","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":900.5,"bestWc":"125","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Brayden Naus","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":875.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Alex Paige","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":637.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Bennett Montplaisir","state":"OR","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":617.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ty Morawski","state":"OH","wc":"M-120","cat":"Raw","div":"J","total":0.0,"best":770.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Brad Salter","state":"TX","wc":"M-120","cat":"Equipped","div":"M4","total":447.5,"best":460.0,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Wilson Martinez","state":"--","wc":"M-120","cat":"Equipped","div":"M3","total":762.5,"best":762.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Anthony Harris","state":"HI","wc":"M-120","cat":"Equipped","div":"M3","total":245.0,"best":727.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":"tharris220"},
{"name":"Travis Koehn","state":"WY","wc":"M-120","cat":"Equipped","div":"M2","total":822.5,"best":820.0,"bestWc":"125","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Michael Kalter","state":"ME","wc":"M-120","cat":"Equipped","div":"M2","total":807.5,"best":807.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Equipped","div":"M2","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Adam Moore","state":"MD","wc":"M-120","cat":"Equipped","div":"M1","total":460.0,"best":692.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Carson Frnka","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":0.0,"best":707.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Israel Soliz","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":0.0,"best":325.0,"bestWc":"110","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Dar'Reyus Scott","state":"LA","wc":"M-120","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Tyler Halpert","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":0.0,"best":417.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Louis Maxwell","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":0.0,"best":542.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Luke Bergeron","state":"LA","wc":"M-120+","cat":"Raw","div":"SO","total":0.0,"best":287.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Mark Branham","state":"IN","wc":"M-120+","cat":"Raw","div":"M4","total":0.0,"best":435.0,"bestWc":"140","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Domenick Fonio","state":"--","wc":"M-120+","cat":"Raw","div":"M3","total":0.0,"best":625.0,"bestWc":"140","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Kenneth Cameron","state":"NV","wc":"M-120+","cat":"Raw","div":"M2","total":722.5,"best":760.0,"bestWc":"120","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Christopher Ptacek","state":"OR","wc":"M-120+","cat":"Raw","div":"M2","total":0.0,"best":740.0,"bestWc":"140+","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Patrick Northcutt","state":"IL","wc":"M-120+","cat":"Raw","div":"M2","total":0.0,"best":712.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Robert Ward","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":830.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"James Farrior","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":817.5,"best":827.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Nathan Gorham","state":"MD","wc":"M-120+","cat":"Raw","div":"M1","total":805.0,"best":848.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","ig":"nathangorham"},
{"name":"Khourey Royal","state":"NC","wc":"M-120+","cat":"Raw","div":"M1","total":745.0,"best":745.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Henry Coates","state":"OR","wc":"M-120+","cat":"Raw","div":"M1","total":0.0,"best":632.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Valente Inniss-Thompson","state":"TX","wc":"M-120+","cat":"Raw","div":"M1","total":0.0,"best":757.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Perry Ellis","state":"GA","wc":"M-120+","cat":"Raw","div":"M1","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Andrew Gonzalez","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":0.0,"best":675.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Omar Kalo","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":0.0,"best":630.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jack Bartlett","state":"ID","wc":"M-120+","cat":"Raw","div":"J","total":830.0,"best":830.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":"_jackbartlett"},
{"name":"Uriel Perez","state":"--","wc":"M-120+","cat":"Raw","div":"J","total":725.0,"best":780.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jordan Blincoe","state":"NY","wc":"M-120+","cat":"Raw","div":"J","total":705.0,"best":762.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Carlos Olivares","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":660.0,"best":660.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jason Escobar Jr","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":642.5,"best":642.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Carson Crawford","state":"--","wc":"M-120+","cat":"Raw","div":"J","total":250.0,"best":730.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Jose Lugo","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":0.0,"best":817.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Kevin Garza","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":0.0,"best":707.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Corey Jackson","state":"MD","wc":"M-120+","cat":"Raw","div":"O","total":687.5,"best":700.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Robert Keller","state":"FL","wc":"M-120+","cat":"Equipped","div":"M3","total":162.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Steve Davenport","state":"NE","wc":"M-120+","cat":"Equipped","div":"M2","total":710.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Douglas Rawson","state":"NV","wc":"M-120+","cat":"Equipped","div":"M2","total":450.0,"best":617.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Tim Brockett","state":"OH","wc":"M-120+","cat":"Equipped","div":"M1","total":645.0,"best":715.0,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Andrew Cargill","state":"--","wc":"M-120+","cat":"Equipped","div":"M1","total":292.5,"best":907.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":"odin_reachvalhalla"},
{"name":"Michael Jean Sr.","state":"--","wc":"M-120+","cat":"Equipped","div":"M1","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Cameron Ross","state":"LA","wc":"M-120+","cat":"Equipped","div":"SJ","total":0.0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Ryan Rubio","state":"--","wc":"M-120+","cat":"Equipped","div":"SJ","total":0.0,"best":497.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":"ryanrubiocp"},
{"name":"Alfonso Gutierrez","state":"--","wc":"M-120+","cat":"Equipped","div":"J","total":0.0,"best":672.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","ig":""},
{"name":"Katherine Evert","state":"MO","wc":"Out","cat":"Raw","div":"M4","total":0.0,"best":262.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Jim Kathios","state":"NH","wc":"Out","cat":"Raw","div":"M3","total":605.0,"best":617.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Ron Falcone Jr","state":"NJ","wc":"Out","cat":"Raw","div":"M3","total":442.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Melissa Forbis","state":"--","wc":"Out","cat":"Raw","div":"M3","total":282.5,"best":282.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Sheila Hoover","state":"OR","wc":"Out","cat":"Raw","div":"M3","total":0.0,"best":342.5,"bestWc":"84","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"John Demchak","state":"SC","wc":"Out","cat":"Raw","div":"M2","total":527.5,"best":530.0,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Stephanie Carpenter","state":"ID","wc":"Out","cat":"Raw","div":"M2","total":427.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","ig":""},
{"name":"Cynthia Browning","state":"IN","wc":"Out","cat":"Raw","div":"M2","total":410.0,"best":420.0,"bestWc":"76","diffWc":true,"bestFed":"AMP","ig":"cindi_lifts"},
{"name":"Christopher Ptacek","state":"OR","wc":"Out","cat":"Raw","div":"M2","total":0.0,"best":740.0,"bestWc":"140+","diffWc":true,"bestFed":"USAPL","ig":""},
{"name":"Eli O'Keefe","state":"OH","wc":"Out","cat":"Raw","div":"J","total":0.0,"best":517.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","ig":""},
{"name":"Marina Tran","state":"LA","wc":"Out","cat":"Raw","div":"J","total":0.0,"best":242.5,"bestWc":"84+","diffWc":true,"bestFed":"AMP","ig":""}
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
                    {r.ig ? (
                      <a href={`https://www.instagram.com/${r.ig}`} target="_blank" rel="noopener noreferrer"
                        style={{color:"#fff", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:5}}>
                        {r.name}
                        <span style={{fontSize:12, color:"#E1306C", opacity:0.7}}>&#9673;</span>
                      </a>
                    ) : r.name}
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
                      {r.diffWc && <span style={{color:"#e63946", fontSize:11, verticalAlign:"super", fontFamily:"sans-serif"}}>*</span>}
                      {r.bestFed && <span style={{
                        fontSize:8, fontWeight:600, letterSpacing:0.5,
                        color: r.bestFed === "USAPL" ? "#82b1ff" : "#4ecdc4",
                        marginLeft:4, fontFamily:"sans-serif",
                        verticalAlign:"super",
                      }}>{r.bestFed}</span>}
                    </>) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop:10, fontSize:11, color:"#444", textAlign:"center"}}>
          QT = Qualifying Total · Best = Best AMP/USAPL total (Jan 2023–present) · <span style={{color:"#e63946"}}>*</span> = Best was in a different weight class · <span style={{color:"#E1306C"}}>&#9673;</span> = Instagram linked · Sort by clicking column headers
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
