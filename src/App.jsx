import { useState, useMemo } from "react";


const ROSTER = [
{"name":"Abigail Le","state":"PA","wc":"F-43","cat":"Raw","div":"J","total":247.5,"best":247.5,"bestWc":"43","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"abigaille"},
{"name":"Thaovy Tran","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":242.5,"best":250,"bestWc":"47","diffWc":true,"bestFed":"AMP","bestDate":"Nov '24","ig":"","opl":"thaovytran"},
{"name":"Brennan Fallon","state":"LA","wc":"F-43","cat":"Raw","div":"J","total":0,"best":310,"bestWc":"44","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '24","ig":"","opl":"brennanfallon"},
{"name":"Abygail Guzman","state":"TX","wc":"F-43","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Molly Hutchinson","state":"LA","wc":"F-43","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Leanna Schnell","state":"AZ","wc":"F-47","cat":"Raw","div":"SO","total":125,"best":125,"bestWc":"47","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"leannaschnell"},
{"name":"Chiaki Takada","state":"TX","wc":"F-47","cat":"Raw","div":"M3","total":295,"best":295,"bestWc":"47","diffWc":false,"bestFed":"AMP","bestDate":"Oct '24","ig":"","opl":"chiakitakada"},
{"name":"Suzie Johnson","state":"WA","wc":"F-47","cat":"Raw","div":"M3","total":0,"best":212.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '24","ig":"","opl":"suziejohnson"},
{"name":"Andrea Nolting","state":"IN","wc":"F-47","cat":"Raw","div":"M2","total":270,"best":257.5,"bestWc":"48","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"","opl":"andreanolting2"},
{"name":"Kelley Sherwin","state":"WI","wc":"F-47","cat":"Raw","div":"M2","total":255,"best":292.5,"bestWc":"52","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"","opl":"kelleysherwin"},
{"name":"Emma Horn - Mem. Error","state":"--","wc":"F-47","cat":"Raw","div":"J","total":296,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Addisyn Lege","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":175,"best":200,"bestWc":"44","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '23","ig":"","opl":"addisynlege"},
{"name":"Joanie Cannon","state":"LA","wc":"F-47","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jazlene Rios","state":"TX","wc":"F-47","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jlynn Fernandez - Mem. Error","state":"--","wc":"F-47","cat":"Equipped","div":"J","total":325,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gabriella Garza - Mem. Error","state":"--","wc":"F-47","cat":"Equipped","div":"J","total":317.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lisa Weiss","state":"OH","wc":"F-52","cat":"Raw","div":"M3","total":287.5,"best":287.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"lisaweiss1"},
{"name":"Claire Keel","state":"AL","wc":"F-52","cat":"Raw","div":"M3","total":157.5,"best":157.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"clairekeel"},
{"name":"Lesley Scott","state":"OR","wc":"F-52","cat":"Raw","div":"M3","total":0,"best":210,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"lesleyscott"},
{"name":"Suzanne Hartwig-Gary","state":"MT","wc":"F-52","cat":"Raw","div":"M2","total":75,"best":357.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"siouxz52kg","opl":"suzannehartwiggary"},
{"name":"Claudia Romero","state":"TX","wc":"F-52","cat":"Raw","div":"M1","total":317.5,"best":317.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"claudiaromero"},
{"name":"Cynthia Smith","state":"NC","wc":"F-52","cat":"Raw","div":"M1","total":222.5,"best":222.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"cynthiasmith"},
{"name":"Ruhi Patel","state":"TX","wc":"F-52","cat":"Raw","div":"SJ","total":185,"best":185,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"ruhipatel"},
{"name":"Marina Maxwell","state":"NC","wc":"F-52","cat":"Raw","div":"J","total":420,"best":410.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"marina52kg","opl":"marinamaxwell"},
{"name":"Trinity Infante","state":"CA","wc":"F-52","cat":"Raw","div":"J","total":337.5,"best":337.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"trinityinfante"},
{"name":"Abcde Mata","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":297.5,"best":297.5,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"abcdemata"},
{"name":"Ava Dean","state":"LA","wc":"F-52","cat":"Equipped","div":"SJ","total":201.9,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nyeli Arispe","state":"TX","wc":"F-52","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Noemi Blancarte","state":"LA","wc":"F-52","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Autumn Gilday","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":327.5,"best":325,"bestWc":"52","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"autumngilday"},
{"name":"Katelynn Billiot","state":"LA","wc":"F-52","cat":"Equipped","div":"J","total":295,"best":295,"bestWc":"47","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"katelynnbilliot"},
{"name":"Itzel Loreto","state":"TX","wc":"F-52","cat":"Equipped","div":"J","total":235,"best":277.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"itzelloreto"},
{"name":"Dora Justice","state":"--","wc":"F-57","cat":"Raw","div":"M3","total":273.5,"best":273.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"dorajustice"},
{"name":"Kathleen Casper","state":"MN","wc":"F-57","cat":"Raw","div":"M3","total":222.5,"best":220,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"kathleencasper"},
{"name":"Janice Woerner","state":"NY","wc":"F-57","cat":"Raw","div":"M3","total":75,"best":292.5,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"","opl":"janicewoerner"},
{"name":"Loraine Efron","state":"TX","wc":"F-57","cat":"Raw","div":"M3","total":75,"best":232.5,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"loraineefron"},
{"name":"Alana Mcgolrick","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":335,"best":337.5,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"alanamcgolrick"},
{"name":"Jo Aita","state":"CA","wc":"F-57","cat":"Raw","div":"M2","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Patria Jimenez","state":"MA","wc":"F-57","cat":"Raw","div":"M1","total":387.5,"best":387.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"quadsofthegodzilla","opl":"patriajimenez"},
{"name":"Lindsay Rubel","state":"NY","wc":"F-57","cat":"Raw","div":"M1","total":350,"best":400,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"lindsayrubel"},
{"name":"Paige Gunkel","state":"WI","wc":"F-57","cat":"Raw","div":"SJ","total":75,"best":307.5,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"paigegunkel"},
{"name":"Luka Paskell","state":"MA","wc":"F-57","cat":"Raw","div":"SJ","total":75,"best":345,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"lukap.26","opl":"lukapaskell"},
{"name":"Ellie Weinstein","state":"MN","wc":"F-57","cat":"Raw","div":"J","total":452.5,"best":452.5,"bestWc":"","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"ellieweinsteinlfts","opl":"ellieweinstein"},
{"name":"Eleni Guerrera","state":"VA","wc":"F-57","cat":"Raw","div":"J","total":440,"best":440,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"elenilifts57","opl":"eleniguerrera"},
{"name":"Kathleen Carroll","state":"IL","wc":"F-57","cat":"Raw","div":"J","total":397.5,"best":400,"bestWc":"60","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '24","ig":"","opl":"kathleencarroll"},
{"name":"Keira Segura","state":"LA","wc":"F-57","cat":"Raw","div":"J","total":395,"best":412.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"keirasegura"},
{"name":"Lauren Jansen","state":"WI","wc":"F-57","cat":"Raw","div":"J","total":327.5,"best":390,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"laurenjansen"},
{"name":"Lexi Gonsalves","state":"CA","wc":"F-57","cat":"Raw","div":"J","total":285,"best":285,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"lexigonsalves"},
{"name":"Claire Thomas","state":"PA","wc":"F-57","cat":"Raw","div":"J","total":75,"best":425,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"clairethomas"},
{"name":"Julia Ty - Mem. Error","state":"--","wc":"F-57","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Abigail Yandrich","state":"OH","wc":"F-57","cat":"Raw","div":"J","total":0,"best":397.5,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"abigailyandrich"},
{"name":"Lindalee Urquieta","state":"TX","wc":"F-57","cat":"Raw","div":"J","total":0,"best":340,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"lindaleeurquieta"},
{"name":"Charleen Balcer Rowekamp","state":"MN","wc":"F-57","cat":"Equipped","div":"M1","total":320,"best":320,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Apr '24","ig":"","opl":"charleenbalcerrowekamp"},
{"name":"Jasmine Nguyen - Mem. Error","state":"--","wc":"F-57","cat":"Equipped","div":"SJ","total":307.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ava Dean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":201.9,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Paloma Calderon","state":"TX","wc":"F-57","cat":"Equipped","div":"SJ","total":75,"best":360,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"palomacalderon"},
{"name":"Lyla Felean","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lylah Jones","state":"LA","wc":"F-57","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Octavia Hill","state":"OK","wc":"F-57","cat":"Equipped","div":"J","total":480,"best":437.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"avi._.hill","opl":"octaviahill"},
{"name":"Macayla Cano","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":360,"best":360,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"macaylacano"},
{"name":"Elizabeth Pizarro","state":"TX","wc":"F-57","cat":"Equipped","div":"J","total":342.5,"best":392.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"elizabethpizarro"},
{"name":"Madaline Kennemer","state":"LA","wc":"F-57","cat":"Equipped","div":"J","total":242.5,"best":242.5,"bestWc":"57","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"madalinekennemer"},
{"name":"Shelly Stettner","state":"MI","wc":"F-63","cat":"Raw","div":"M4","total":342.5,"best":342.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"shelly_ann_28","opl":"shellystettner"},
{"name":"Jessica Marshall","state":"--","wc":"F-63","cat":"Raw","div":"M3","total":356,"best":356,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jessicamarshall1"},
{"name":"Lynn Pietig","state":"--","wc":"F-63","cat":"Raw","div":"M3","total":342.5,"best":345,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '24","ig":"","opl":"lynnpietig"},
{"name":"Tiffany Dean","state":"NV","wc":"F-63","cat":"Raw","div":"M3","total":265,"best":265,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"tiffanydean"},
{"name":"Isabelle Iliev","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":377.5,"best":377.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Sep '24","ig":"","opl":"isabelleiliev"},
{"name":"Leah Cruciani","state":"PA","wc":"F-63","cat":"Raw","div":"M2","total":347.5,"best":347.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"leahcruciani"},
{"name":"Heather Campbell","state":"OR","wc":"F-63","cat":"Raw","div":"M2","total":330,"best":330,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"heathercampbell"},
{"name":"Lisa Shen","state":"TX","wc":"F-63","cat":"Raw","div":"M2","total":330,"best":330,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"lisashen"},
{"name":"Stacie Taylor","state":"WA","wc":"F-63","cat":"Raw","div":"M2","total":292.5,"best":295,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Sep '24","ig":"","opl":"stacietaylor"},
{"name":"Yvy Llambes","state":"TX","wc":"F-63","cat":"Raw","div":"M1","total":482.5,"best":500,"bestWc":"65","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '25","ig":"funsize.powerlifter","opl":"yvyllambes"},
{"name":"Molly Jones","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":420,"best":422.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"mollyjones"},
{"name":"Ashley Hickert","state":"MT","wc":"F-63","cat":"Raw","div":"M1","total":352.5,"best":365,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"mamaswoleasaurus","opl":"ashleyhickert"},
{"name":"Katie Achille","state":"NJ","wc":"F-63","cat":"Raw","div":"M1","total":340,"best":345,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"katieachille"},
{"name":"Rina Shapiro","state":"OR","wc":"F-63","cat":"Raw","div":"M1","total":322.5,"best":322.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"rinashapiro"},
{"name":"Eleanor Gease","state":"DC","wc":"F-63","cat":"Raw","div":"M1","total":307.5,"best":317.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Dec '23","ig":"","opl":"eleanorgease"},
{"name":"Arden Hyatt","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":407.5,"best":380,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"ardenhyatt"},
{"name":"Mariele Arthur","state":"TX","wc":"F-63","cat":"Raw","div":"SJ","total":395,"best":425,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"marielearthur"},
{"name":"Kylie Gunkel","state":"WI","wc":"F-63","cat":"Raw","div":"SJ","total":302.5,"best":302.5,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"kylie.gunkel.lifts","opl":"kyliegunkel"},
{"name":"Sophia Fortin","state":"MA","wc":"F-63","cat":"Raw","div":"J","total":477.5,"best":485,"bestWc":"60","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"sophiarose.03","opl":"sophiafortin"},
{"name":"Lindsey Jade Ligsay","state":"HI","wc":"F-63","cat":"Raw","div":"J","total":422.5,"best":422.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"lindseyjadeligsay"},
{"name":"Aile Banuelos","state":"CA","wc":"F-63","cat":"Raw","div":"J","total":415,"best":430,"bestWc":"65","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '25","ig":"ailelifts","opl":"ailebanuelos"},
{"name":"Hannah Smith","state":"IL","wc":"F-63","cat":"Raw","div":"J","total":402.5,"best":392.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"hannahsmith4"},
{"name":"Kennedy Azzatori","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":400,"best":385,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"kennedyazzatori"},
{"name":"Kaylee Beltran","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":357.5,"best":357.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kayleebeltran"},
{"name":"Christine Cranford","state":"MI","wc":"F-63","cat":"Raw","div":"J","total":352.5,"best":365,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"christinecranford"},
{"name":"Farida-Farrah Marreez","state":"KY","wc":"F-63","cat":"Raw","div":"J","total":325,"best":347.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"farrahmarreez","opl":"faridafarrahmarreez"},
{"name":"Katarina Herrera","state":"TX","wc":"F-63","cat":"Raw","div":"J","total":322.5,"best":322.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"katarinaherrera"},
{"name":"Laynie Buli","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":310,"best":310,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"layniebuli"},
{"name":"Elizabeth Sanchez","state":"FL","wc":"F-63","cat":"Raw","div":"J","total":295,"best":295,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"elizabethsanchez2"},
{"name":"Victoria Imes","state":"PA","wc":"F-63","cat":"Raw","div":"J","total":0,"best":305,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"victoriaimes"},
{"name":"Nataleigh Hunter","state":"DE","wc":"F-63","cat":"Raw","div":"O","total":518,"best":500,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"nat.hunter","opl":"nataleighhunter"},
{"name":"Sidney Konig Brock","state":"LA","wc":"F-63","cat":"Raw","div":"O","total":380,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Maura Shuttleworth","state":"NM","wc":"F-63","cat":"Equipped","div":"M2","total":120,"best":242.5,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"maurashuttleworth"},
{"name":"Nora Keller","state":"FL","wc":"F-63","cat":"Equipped","div":"M1","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sophia Villarreal","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":335,"best":335,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"sophiavillarreal"},
{"name":"Nevaeh Suarez","state":"TX","wc":"F-63","cat":"Equipped","div":"SJ","total":320,"best":320,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"nevaehsuarez"},
{"name":"Ava Finley","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":275,"best":275,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"avafinley"},
{"name":"Cadence Audler","state":"LA","wc":"F-63","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gracie Cassidy","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":425,"best":410,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"graciecassidy"},
{"name":"Mackenzie Cunningham","state":"KS","wc":"F-63","cat":"Equipped","div":"J","total":355,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ayden Lege","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":347.5,"best":347.5,"bestWc":"63","diffWc":false,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"aydenlege"},
{"name":"Shelby Fischer","state":"LA","wc":"F-63","cat":"Equipped","div":"J","total":300,"best":300,"bestWc":"57","diffWc":true,"bestFed":"AMP","bestDate":"Apr '24","ig":"","opl":"shelbyfischer"},
{"name":"Julie Donaho","state":"TX","wc":"F-69","cat":"Raw","div":"","total":75,"best":190,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"juliedonaho"},
{"name":"Alma Kimura","state":"WA","wc":"F-69","cat":"Raw","div":"M4","total":310.5,"best":322.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"May '23","ig":"","opl":"almakimura"},
{"name":"Gale Williams","state":"GA","wc":"F-69","cat":"Raw","div":"M4","total":292.5,"best":292.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"galewilliams"},
{"name":"Denise Ragozzino","state":"NV","wc":"F-69","cat":"Raw","div":"M4","total":75,"best":172.5,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"deniseragozzino"},
{"name":"Roberta Carlson","state":"WA","wc":"F-69","cat":"Raw","div":"M3","total":400,"best":396,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"rcarlsini","opl":"robertacarlson1"},
{"name":"Susan Gibson","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":290,"best":290,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"susangibson"},
{"name":"Jackie Barone - Mem. Error","state":"--","wc":"F-69","cat":"Raw","div":"M3","total":227.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cathy Avery - Mem. Error","state":"--","wc":"F-69","cat":"Raw","div":"M2","total":377.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Claudia Beatty","state":"NC","wc":"F-69","cat":"Raw","div":"M2","total":370,"best":390,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"claudiabeatty"},
{"name":"Kari Cashen","state":"NV","wc":"F-69","cat":"Raw","div":"M2","total":245,"best":245,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"karicashen"},
{"name":"Angela Compilli","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":463,"best":463,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"angelacompilli"},
{"name":"Becky Enright","state":"WA","wc":"F-69","cat":"Raw","div":"M1","total":440.5,"best":445.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"becky.enright","opl":"beckyenright"},
{"name":"Kisha Fields","state":"NC","wc":"F-69","cat":"Raw","div":"M1","total":422.5,"best":422.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"kishafields"},
{"name":"Kollet Wharton","state":"TX","wc":"F-69","cat":"Raw","div":"M1","total":317.5,"best":317.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"kolletwharton"},
{"name":"Elena Gutierrez","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":310,"best":335,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"elenagutierrez"},
{"name":"Stephanie Bazan","state":"CA","wc":"F-69","cat":"Raw","div":"M1","total":285,"best":317.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"stephaniebazan"},
{"name":"Clair Crawford - Mem. Error","state":"--","wc":"F-69","cat":"Raw","div":"M1","total":280,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gianna Ancona","state":"CT","wc":"F-69","cat":"Raw","div":"SJ","total":424,"best":424,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"giannaancona"},
{"name":"Hayley Csepella","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":395,"best":397.5,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"hayleycsepella"},
{"name":"Kaleia Knothe","state":"WI","wc":"F-69","cat":"Raw","div":"SJ","total":392.5,"best":392.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"kaleiaknothe"},
{"name":"Emma Millana","state":"FL","wc":"F-69","cat":"Raw","div":"SJ","total":372.5,"best":372.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"emmamillana"},
{"name":"Maia Forsyth","state":"CO","wc":"F-69","cat":"Raw","div":"J","total":480,"best":480,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"maiaforsyth"},
{"name":"Brooke Naegel","state":"SC","wc":"F-69","cat":"Raw","div":"J","total":438,"best":427.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Jul '25","ig":"","opl":"brookenaegel"},
{"name":"Greta Aberle","state":"WI","wc":"F-69","cat":"Raw","div":"J","total":427.5,"best":427.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"gretaaberle"},
{"name":"Maggy Weymiller","state":"IA","wc":"F-69","cat":"Raw","div":"J","total":410,"best":410,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"maggyweymiller"},
{"name":"Anne Augustin","state":"NY","wc":"F-69","cat":"Raw","div":"J","total":400,"best":400,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"anneaugustin"},
{"name":"Annika Minotti","state":"CT","wc":"F-69","cat":"Raw","div":"J","total":390,"best":390,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"annikaminotti"},
{"name":"Mallory Salinas","state":"TX","wc":"F-69","cat":"Raw","div":"J","total":360,"best":392.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"mallorysalinas"},
{"name":"Abigail Breiner","state":"TN","wc":"F-69","cat":"Raw","div":"J","total":0,"best":367.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"abigailbreiner"},
{"name":"Juliette Brewer","state":"LA","wc":"F-69","cat":"Equipped","div":"#N/A","total":0,"best":370,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Apr '24","ig":"","opl":"juliettebrewer"},
{"name":"Donna Marts","state":"WY","wc":"F-69","cat":"Equipped","div":"M3","total":255,"best":430.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"donnamarts"},
{"name":"Celeste Godinez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":432.5,"best":440,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"celestegodinez"},
{"name":"Jesaeh Suarez","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":345,"best":345,"bestWc":"63","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jesaehsuarez"},
{"name":"Jewlee Recio","state":"TX","wc":"F-69","cat":"Equipped","div":"SJ","total":330,"best":330,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jewleerecio"},
{"name":"Amanda Cougle","state":"LA","wc":"F-69","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Aeryn Anderson","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":395,"best":375,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"aerynanderson1"},
{"name":"Beth Whitney","state":"KS","wc":"F-69","cat":"Equipped","div":"J","total":312.5,"best":312.5,"bestWc":"69","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"bethwhitney"},
{"name":"Pipper Lemaire","state":"LA","wc":"F-69","cat":"Equipped","div":"J","total":75,"best":345,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"pipperlemaire"},
{"name":"Linda Franklin","state":"OR","wc":"F-76","cat":"Raw","div":"M4","total":377.5,"best":377.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"linda.gets.strong","opl":"lindafranklin"},
{"name":"Suzanne D'Avalon","state":"NM","wc":"F-76","cat":"Raw","div":"M4","total":0,"best":180,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"suzannedavalon"},
{"name":"Cheryl Ventola","state":"MA","wc":"F-76","cat":"Raw","div":"M3","total":305,"best":305,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Feb '24","ig":"","opl":"cherylventola"},
{"name":"Beth Macauley","state":"MI","wc":"F-76","cat":"Raw","div":"M3","total":267.5,"best":292.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '23","ig":"","opl":"bethmacauley"},
{"name":"Barbara Beaudin","state":"NH","wc":"F-76","cat":"Raw","div":"M3","total":75,"best":335,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"Mar '23","ig":"","opl":"barbarabeaudin"},
{"name":"Joah Iannotta","state":"PA","wc":"F-76","cat":"Raw","div":"M2","total":462.5,"best":462.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"iron__empress","opl":"joahiannotta"},
{"name":"Leah Lutz","state":"CA","wc":"F-76","cat":"Raw","div":"M2","total":407.5,"best":412.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '23","ig":"leah_barbellmedicine","opl":"leahlutz"},
{"name":"Cheryl Iseri","state":"ID","wc":"F-76","cat":"Raw","div":"M2","total":367.5,"best":392.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"cheryliseri"},
{"name":"Pamela Riley","state":"TX","wc":"F-76","cat":"Raw","div":"M2","total":355,"best":355,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"pamelariley"},
{"name":"Siri Hoogen","state":"OR","wc":"F-76","cat":"Raw","div":"M2","total":75,"best":435,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"sirihoogen"},
{"name":"Hannah Sowd - Mem. Error","state":"--","wc":"F-76","cat":"Raw","div":"M2","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Melissa Dixon","state":"WA","wc":"F-76","cat":"Raw","div":"M2","total":0,"best":297.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"melissadixon"},
{"name":"Dayna Mcneal","state":"ND","wc":"F-76","cat":"Raw","div":"M1","total":560,"best":560,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"versus_myself","opl":"daynamcneal"},
{"name":"Linette Bogdan","state":"NJ","wc":"F-76","cat":"Raw","div":"M1","total":445,"best":445,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"outdoorsport3","opl":"linettebogdan"},
{"name":"Jennifer Sauter","state":"NY","wc":"F-76","cat":"Raw","div":"M1","total":437.5,"best":437.5,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Mar '25","ig":"jennifer_sauter_lifts","opl":"jennifersauter"},
{"name":"Amberly Kuhlmann - Mem. Error","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":420,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Helen Lewis-Rzeszutek","state":"WI","wc":"F-76","cat":"Raw","div":"M1","total":420,"best":420,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"helenlewisrzeszutek"},
{"name":"Amanda Koldjeski - Mem. Error","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":352.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kim Inoshita","state":"--","wc":"F-76","cat":"Raw","div":"M1","total":242.5,"best":242.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"kiminoshita"},
{"name":"Taylor Boykins","state":"OH","wc":"F-76","cat":"Raw","div":"SJ","total":342.5,"best":387.5,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"taylorboykins"},
{"name":"Alice Gardner","state":"WI","wc":"F-76","cat":"Raw","div":"SJ","total":340,"best":340,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"alicegardner"},
{"name":"Sarah Kleinman","state":"MD","wc":"F-76","cat":"Raw","div":"SJ","total":0,"best":297.5,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"sarahkleinman"},
{"name":"Sonia Espitia","state":"NY","wc":"F-76","cat":"Raw","div":"SJ","total":0,"best":390,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"soniaespitia"},
{"name":"Dakota Courtright","state":"NE","wc":"F-76","cat":"Raw","div":"SJ","total":0,"best":402.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '25","ig":"","opl":"dakotacourtright"},
{"name":"Esperanza Delgado","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":528.5,"best":505.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"esperanzalifts","opl":"esperanzadelgado2"},
{"name":"Ekaterina Sapoznikova","state":"FL","wc":"F-76","cat":"Raw","div":"J","total":457.5,"best":473.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"ekaterinasapoznikova"},
{"name":"Zsofia Toth","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":442.5,"best":442.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"zsofiatoth"},
{"name":"Dayna Bland","state":"NC","wc":"F-76","cat":"Raw","div":"J","total":395,"best":395,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"daynabland"},
{"name":"Daisey Fields","state":"GA","wc":"F-76","cat":"Raw","div":"J","total":387.5,"best":387.5,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"daiseyfields"},
{"name":"Abigail Dietz","state":"NJ","wc":"F-76","cat":"Raw","div":"J","total":360,"best":360,"bestWc":"69","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"abigaildietz"},
{"name":"Sneha Sureshkumar","state":"MN","wc":"F-76","cat":"Raw","div":"J","total":75,"best":370,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"snehasureshkumar"},
{"name":"Amber Gomez","state":"TX","wc":"F-76","cat":"Equipped","div":"M1","total":460,"best":460,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"ortizlee","opl":"ambergomez"},
{"name":"Summer Brittain","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":305,"best":305,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"summerbrittain"},
{"name":"Gia Garlington","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gavigail Martinez","state":"TX","wc":"F-76","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gabby Haire","state":"LA","wc":"F-76","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kaylee Robin","state":"LA","wc":"F-76","cat":"Equipped","div":"J","total":490,"best":490,"bestWc":"76","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"kayleerobin"},
{"name":"Marcia Homer - Mem. Error","state":"--","wc":"F-84","cat":"Raw","div":"M3","total":320,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Margie Schnell","state":"AZ","wc":"F-84","cat":"Raw","div":"M3","total":200,"best":200,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"margieschnell"},
{"name":"Michelle Kane","state":"OH","wc":"F-84","cat":"Raw","div":"M2","total":445.5,"best":433.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"michelle_being_michelle","opl":"michellekane"},
{"name":"Allison Snead","state":"NC","wc":"F-84","cat":"Raw","div":"M2","total":0,"best":482.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '23","ig":"","opl":"allisonsnead"},
{"name":"Alexis Goldstein","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":512.5,"best":512.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Sep '24","ig":"","opl":"alexisgoldstein"},
{"name":"Rosanna Orosco","state":"CA","wc":"F-84","cat":"Raw","div":"M1","total":422.5,"best":422.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"rosannaorosco"},
{"name":"Bethany Blankespoor","state":"DC","wc":"F-84","cat":"Raw","div":"M1","total":302.5,"best":302.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"bethanyblankespoor"},
{"name":"Lauren Kolb","state":"OR","wc":"F-84","cat":"Raw","div":"M1","total":297.5,"best":297.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Feb '25","ig":"","opl":"laurenkolb"},
{"name":"Rebekah Givan","state":"NY","wc":"F-84","cat":"Raw","div":"SJ","total":352.5,"best":352.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"rebekahgivan"},
{"name":"Madilyn Cantu","state":"TX","wc":"F-84","cat":"Raw","div":"SJ","total":322.5,"best":322.5,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"madilyncantu"},
{"name":"Saige Back","state":"NY","wc":"F-84","cat":"Raw","div":"SJ","total":75,"best":290,"bestWc":"84+","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"saigeback"},
{"name":"Zoe Soleil Goykhman","state":"PA","wc":"F-84","cat":"Raw","div":"J","total":470,"best":477.5,"bestWc":"84+","diffWc":true,"bestFed":"AMP","bestDate":"Mar '25","ig":"","opl":"zoesoleilgoykhman"},
{"name":"Kristen Palmer","state":"GA","wc":"F-84","cat":"Raw","div":"J","total":440,"best":440,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kristenpalmer"},
{"name":"Emma Hagen","state":"AZ","wc":"F-84","cat":"Raw","div":"J","total":362.5,"best":370,"bestWc":"84+","diffWc":true,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"emmahagen"},
{"name":"Tytiyana Flott","state":"MI","wc":"F-84","cat":"Raw","div":"J","total":0,"best":455,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"tytiyanaflott"},
{"name":"Brooke Ruland","state":"WI","wc":"F-84","cat":"Raw","div":"J","total":0,"best":480,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '26","ig":"","opl":"brookeruland"},
{"name":"Sara Rodock","state":"WI","wc":"F-84","cat":"Equipped","div":"M1","total":530,"best":530,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"sararodock"},
{"name":"Kaitlyn Huff","state":"TX","wc":"F-84","cat":"Equipped","div":"SJ","total":400,"best":400,"bestWc":"84","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"kaitlynhuff"},
{"name":"Elaina Canales","state":"TX","wc":"F-84","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mena Reeves","state":"KS","wc":"F-84","cat":"Equipped","div":"J","total":492.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cristina Angelloz - Mem. Error","state":"--","wc":"F-84","cat":"Equipped","div":"J","total":327.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Patrice Lockhart","state":"GA","wc":"F-84+","cat":"Raw","div":"SO","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Linda Gorham","state":"MD","wc":"F-84+","cat":"Raw","div":"M4","total":312.5,"best":310,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"lindagorham"},
{"name":"Vicki Brackett","state":"GA","wc":"F-84+","cat":"Raw","div":"M3","total":387.5,"best":387.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"vickibrackett"},
{"name":"Heidi Meeley","state":"WA","wc":"F-84+","cat":"Raw","div":"M3","total":367.5,"best":367.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"heidimeeley"},
{"name":"Patricia Johnson","state":"CA","wc":"F-84+","cat":"Raw","div":"M2","total":547.5,"best":557.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Mar '23","ig":"drpatjohnsonifbbpro","opl":"patriciajohnson"},
{"name":"Lilyan Jackson","state":"TX","wc":"F-84+","cat":"Raw","div":"M2","total":492.5,"best":482.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"botgurl","opl":"lilyanjackson"},
{"name":"Lori Sousa","state":"FL","wc":"F-84+","cat":"Raw","div":"M2","total":327.5,"best":337.5,"bestWc":"100+","diffWc":true,"bestFed":"USAPL","bestDate":"Mar '23","ig":"","opl":"lorisousa"},
{"name":"Lori Sousa","state":"FL","wc":"F-84+","cat":"Raw","div":"M2","total":327.5,"best":337.5,"bestWc":"100+","diffWc":true,"bestFed":"USAPL","bestDate":"Mar '23","ig":"","opl":"lorisousa"},
{"name":"Shanti Murphy - Mem. Error","state":"--","wc":"F-84+","cat":"Raw","div":"M2","total":315,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Melissa Copeland","state":"--","wc":"F-84+","cat":"Raw","div":"M1","total":575.5,"best":575.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"melarmy","opl":"melissacopeland"},
{"name":"Emily Douglas","state":"MD","wc":"F-84+","cat":"Raw","div":"M1","total":490,"best":517.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"emilydouglas2"},
{"name":"Tiffany Miranda","state":"NC","wc":"F-84+","cat":"Raw","div":"M1","total":367.5,"best":367.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"tiffanymiranda"},
{"name":"Allison White - Mem. Error","state":"--","wc":"F-84+","cat":"Raw","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cora Osei-Adjei","state":"TX","wc":"F-84+","cat":"Raw","div":"SJ","total":75,"best":520,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"coraoseiadjei"},
{"name":"Kathryn Tranum","state":"IN","wc":"F-84+","cat":"Raw","div":"J","total":540,"best":540,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kathryntranum"},
{"name":"Emma Jones","state":"MA","wc":"F-84+","cat":"Raw","div":"J","total":452.5,"best":452.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"emmajones4"},
{"name":"Emily Bombardier","state":"NY","wc":"F-84+","cat":"Raw","div":"J","total":437.5,"best":437.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"emilybombardier"},
{"name":"Maya Moise","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":420,"best":450,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"mayamoise"},
{"name":"Izabela Ramirez","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":375,"best":375,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"izabelaramirez"},
{"name":"Sarah Jerry","state":"AL","wc":"F-84+","cat":"Raw","div":"J","total":0,"best":420,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"sarahjerry"},
{"name":"Jacqueline Fly","state":"TX","wc":"F-84+","cat":"Raw","div":"J","total":0,"best":505,"bestWc":"100+","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"","opl":"jacquelinefly"},
{"name":"Kamilah Todd","state":"LA","wc":"F-84+","cat":"Equipped","div":"M1","total":602.5,"best":590,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"kntodd","opl":"kamilahtodd"},
{"name":"Gabriella Adrian - Mem. Error","state":"--","wc":"F-84+","cat":"Equipped","div":"SJ","total":432.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Emelia Dauterive","state":"LA","wc":"F-84+","cat":"Equipped","div":"SJ","total":427.5,"best":427.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"emeliadauterive"},
{"name":"Emmerson Mokuiki","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":412.5,"best":412.5,"bestWc":"84+","diffWc":false,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"emmersonmokuiki"},
{"name":"Addyson Perez","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Olivia Cardenas","state":"TX","wc":"F-84+","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Abigail Lee","state":"KS","wc":"F-84+","cat":"Equipped","div":"J","total":677.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gianna Trevino","state":"TX","wc":"F-84+","cat":"Equipped","div":"J","total":292.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ahmed Al Fatli","state":"IA","wc":"M-53","cat":"Raw","div":"SJ","total":75,"best":457.5,"bestWc":"59","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"ahmedalfatli"},
{"name":"Long Chau","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":382.5,"bestWc":"53","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"longchau"},
{"name":"Nicholas Zambrano","state":"SC","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":297.5,"bestWc":"53","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"nicholaszambrano"},
{"name":"Alec Weinstein","state":"PA","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":277.5,"bestWc":"53","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"alecweinstein"},
{"name":"Alejandro Garcia","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Daniel Saenz","state":"TX","wc":"M-53","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"James Medrano","state":"TX","wc":"M-53","cat":"Raw","div":"J","total":0,"best":520,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"jamesmedrano"},
{"name":"Trey Nguyen","state":"LA","wc":"M-53","cat":"Equipped","div":"SJ","total":350,"best":350,"bestWc":"53","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"treynguyen"},
{"name":"Brayden Hollier - Mem. Error","state":"--","wc":"M-53","cat":"Equipped","div":"J","total":397.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jonathan Nico","state":"AZ","wc":"M-59","cat":"Raw","div":"SO","total":212.5,"best":195,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jonathannico"},
{"name":"David Berube - Mem. Error","state":"--","wc":"M-59","cat":"Raw","div":"SA","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eric Kupperstein","state":"MA","wc":"M-59","cat":"Raw","div":"M3","total":465,"best":465,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"erickupperstein"},
{"name":"Alexander Kim","state":"IL","wc":"M-59","cat":"Raw","div":"M3","total":0,"best":347.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"alexanderkim5"},
{"name":"Kaleb Mcdowell","state":"MD","wc":"M-59","cat":"Raw","div":"M2","total":75,"best":305,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Jan '25","ig":"","opl":"kalebmcdowell"},
{"name":"Newton Cheng","state":"CA","wc":"M-59","cat":"Raw","div":"M1","total":315,"best":528,"bestWc":"56","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"newtoncheng","opl":"newtoncheng"},
{"name":"Huaiyu Tan","state":"FL","wc":"M-59","cat":"Raw","div":"M1","total":75,"best":500,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"huaiyutan"},
{"name":"William Tenerelli","state":"NJ","wc":"M-59","cat":"Raw","div":"M1","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"William Tenerelli","state":"NJ","wc":"M-59","cat":"Raw","div":"M1","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Justin Nguyen","state":"CA","wc":"M-59","cat":"Raw","div":"SJ","total":585.5,"best":595,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '23","ig":"","opl":"justinnguyen"},
{"name":"Alex Martinez","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":502.5,"best":665,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '24","ig":"","opl":"alexmartinez14"},
{"name":"Masato Gentle","state":"NV","wc":"M-59","cat":"Raw","div":"SJ","total":482.5,"best":502.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"masatogentle"},
{"name":"Tyler Friedman","state":"PA","wc":"M-59","cat":"Raw","div":"SJ","total":460,"best":460,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"tylerfriedman"},
{"name":"Grayson Manning","state":"IA","wc":"M-59","cat":"Raw","div":"SJ","total":0,"best":489.5,"bestWc":"60","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"graysonmanning"},
{"name":"Daniel Elliott","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0,"best":465,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"May '25","ig":"","opl":"danielelliott2"},
{"name":"Zaiden Olvera","state":"TX","wc":"M-59","cat":"Raw","div":"SJ","total":0,"best":487.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"zaidenolvera"},
{"name":"Tyler Morrow","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":590,"best":585,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"tylermorrow1"},
{"name":"Timmy Truong","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":580,"best":607.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"timmytruong"},
{"name":"Deondre Moody","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":535,"best":535,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"deondremoody"},
{"name":"Cesar Perez","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":517.5,"best":585,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '23","ig":"","opl":"cesarperez1"},
{"name":"Fabian Viernes","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":502.5,"best":502.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"fabianviernes"},
{"name":"Patrick Devine","state":"NJ","wc":"M-59","cat":"Raw","div":"J","total":500,"best":510,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"patrickdevine"},
{"name":"Cardin Do","state":"MA","wc":"M-59","cat":"Raw","div":"J","total":75,"best":645,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"cardindo"},
{"name":"Brady Price","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":75,"best":595,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"thatboyprice","opl":"bradyprice"},
{"name":"A Phi Le","state":"TX","wc":"M-59","cat":"Raw","div":"J","total":0,"best":557.5,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"aphile"},
{"name":"Ryan Sturgis - Mem. Error","state":"--","wc":"M-59","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ethan Andrews - Mem. Error","state":"--","wc":"M-59","cat":"Equipped","div":"SJ","total":455,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ethen Bui","state":"LA","wc":"M-59","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ethen Bui","state":"LA","wc":"M-59","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rafael Arredondo","state":"TX","wc":"M-59","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bodie Lacoe","state":"PA","wc":"M-59","cat":"Equipped","div":"J","total":623,"best":640,"bestWc":"59","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"bodielacoe04","opl":"bodielacoe"},
{"name":"Jesus Martinez","state":"TX","wc":"M-59","cat":"Equipped","div":"J","total":412.5,"best":417.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jesusmartinez10"},
{"name":"Adrian Mcghee","state":"GA","wc":"M-66","cat":"Raw","div":"SO","total":372.5,"best":372.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"adrianmcghee"},
{"name":"Ben Boehm","state":"IN","wc":"M-66","cat":"Raw","div":"SO","total":265,"best":265,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"benboehm"},
{"name":"Elliot Guinn - Mem. Error","state":"--","wc":"M-66","cat":"Raw","div":"SO","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Manuel Rodriguez","state":"FL","wc":"M-66","cat":"Raw","div":"M4","total":440,"best":615,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"May '25","ig":"","opl":"manuelrodriguez7"},
{"name":"Richard Flaum","state":"TX","wc":"M-66","cat":"Raw","div":"M4","total":257.5,"best":257.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"richardflaum"},
{"name":"Eric Verbel","state":"NJ","wc":"M-66","cat":"Raw","div":"M3","total":442.5,"best":457.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '23","ig":"","opl":"ericverbel"},
{"name":"Michael Feldhaus","state":"OH","wc":"M-66","cat":"Raw","div":"M3","total":0,"best":540,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"michaelfeldhaus"},
{"name":"Jay Thompson","state":"NC","wc":"M-66","cat":"Raw","div":"M3","total":0,"best":510,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '24","ig":"","opl":"jaythompson"},
{"name":"Rick Brink","state":"CO","wc":"M-66","cat":"Raw","div":"M2","total":522.5,"best":522.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Mar '23","ig":"","opl":"rickbrink"},
{"name":"Ron Brinker","state":"OH","wc":"M-66","cat":"Raw","div":"M2","total":497.5,"best":510,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Feb '24","ig":"","opl":"ronbrinker"},
{"name":"An Nguyen","state":"CA","wc":"M-66","cat":"Raw","div":"M1","total":580,"best":580,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"an_lifts","opl":"annguyen4"},
{"name":"Tuan Nguyen","state":"PA","wc":"M-66","cat":"Raw","div":"M1","total":570,"best":637.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"tuannguyen5"},
{"name":"Shawn Frasquillo","state":"TX","wc":"M-66","cat":"Raw","div":"M1","total":0,"best":590,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '23","ig":"","opl":"shawnfrasquillo"},
{"name":"Denzil Smith","state":"AR","wc":"M-66","cat":"Raw","div":"SJ","total":565,"best":565,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"denzilsmith"},
{"name":"Martin Alvarez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":562.5,"best":562.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"martinalvarez"},
{"name":"Brody Wyatt","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":542.5,"best":542.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"brodywyatt"},
{"name":"Kyren Howard","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":507.5,"best":507.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"kyrenhoward"},
{"name":"Suhan Hajela","state":"CA","wc":"M-66","cat":"Raw","div":"SJ","total":492.5,"best":492.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"suhanhajela"},
{"name":"Levi Jansen","state":"WI","wc":"M-66","cat":"Raw","div":"SJ","total":490,"best":490,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"levijansen"},
{"name":"Anthony Acampora - Mem. Error","state":"--","wc":"M-66","cat":"Raw","div":"SJ","total":487.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Wyatt Dodson","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":427.5,"best":460,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"wyattdodson"},
{"name":"Berkeley Britt","state":"GA","wc":"M-66","cat":"Raw","div":"SJ","total":420,"best":420,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"berkeleybritt"},
{"name":"Sammy Sobie - Mem. Error","state":"--","wc":"M-66","cat":"Raw","div":"SJ","total":397.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Benjamin Yang","state":"NY","wc":"M-66","cat":"Raw","div":"SJ","total":75,"best":560,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"benjaminyang"},
{"name":"Bryan Lara","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0,"best":425,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"bryanlara"},
{"name":"Damien Sanchez","state":"TX","wc":"M-66","cat":"Raw","div":"SJ","total":0,"best":425,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '23","ig":"","opl":"damiensanchez"},
{"name":"Tristian Davila","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":677.5,"best":677.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"tristiandavila"},
{"name":"Evan Hawk","state":"FL","wc":"M-66","cat":"Raw","div":"J","total":670,"best":713.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"evanhawk"},
{"name":"Tucker Abbott","state":"TX","wc":"M-66","cat":"Raw","div":"J","total":590,"best":620,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"tuckerabbott"},
{"name":"Enzo Vickroy","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":555,"best":555,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"enzovickroy"},
{"name":"Pierce Woodworth","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":535,"best":535,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"piercewoodworth"},
{"name":"Austin Harris","state":"NC","wc":"M-66","cat":"Raw","div":"J","total":460,"best":557.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '24","ig":"","opl":"austinharris5"},
{"name":"Nathan Lovemore","state":"LA","wc":"M-66","cat":"Raw","div":"J","total":75,"best":610,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"nathanlovemore"},
{"name":"Timothy Ochoa","state":"CA","wc":"M-66","cat":"Raw","div":"J","total":0,"best":662.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"timothyochoa"},
{"name":"Hayden Wolf","state":"WI","wc":"M-66","cat":"Raw","div":"J","total":0,"best":435,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Dec '25","ig":"","opl":"haydenwolf"},
{"name":"Tanner Jacobi","state":"MO","wc":"M-66","cat":"Raw","div":"J","total":0,"best":405,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"tannerjacobi"},
{"name":"Hassan Coleman","state":"GA","wc":"M-66","cat":"Raw","div":"J","total":0,"best":670,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"hassancoleman"},
{"name":"Xavier Zambrano","state":"SC","wc":"M-66","cat":"Raw","div":"J","total":0,"best":527.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"xavierzambrano"},
{"name":"Vedant Ray","state":"OH","wc":"M-66","cat":"Raw","div":"J","total":0,"best":537.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '24","ig":"","opl":"vedantray"},
{"name":"Nicholas Lagen","state":"AL","wc":"M-66","cat":"Raw","div":"J","total":0,"best":577.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"nicholaslagen"},
{"name":"Alex Galant","state":"CO","wc":"M-66","cat":"Equipped","div":"M4","total":0,"best":205,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"alexgalant"},
{"name":"Eric Verbel","state":"NJ","wc":"M-66","cat":"Equipped","div":"M3","total":460,"best":410,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"ericverbel"},
{"name":"Hennis Washington Iii - Mem. Error","state":"--","wc":"M-66","cat":"Equipped","div":"M2","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kamil Iwasiow","state":"FL","wc":"M-66","cat":"Equipped","div":"M1","total":675,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"George Cunningham Iv","state":"NC","wc":"M-66","cat":"Equipped","div":"SJ","total":565,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bryand Mao","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":502.5,"best":502.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"bryandmao"},
{"name":"Jace Duchesne","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":490,"best":490,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"jaceduchesne"},
{"name":"Robert Godinez - Mem. Error","state":"--","wc":"M-66","cat":"Equipped","div":"SJ","total":340,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew J Pena","state":"TX","wc":"M-66","cat":"Equipped","div":"SJ","total":75,"best":417.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"andrewjpena"},
{"name":"Charles Battaglia","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alex Folmar","state":"LA","wc":"M-66","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gahel Griner","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":557.5,"best":572.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Nov '24","ig":"","opl":"gahelgriner"},
{"name":"Marcelo Chanaba","state":"--","wc":"M-66","cat":"Equipped","div":"J","total":527.5,"best":527.5,"bestWc":"66","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"marcelochanaba"},
{"name":"Joseph Marceaux","state":"LA","wc":"M-66","cat":"Equipped","div":"J","total":75,"best":435,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"josephmarceaux"},
{"name":"Isaiah Glasgow","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Juventino Zapata Iv","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew Gonzalez","state":"TX","wc":"M-66","cat":"Equipped","div":"J","total":0,"best":675,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"andrewgonzalez10"},
{"name":"David Floyd","state":"GA","wc":"M-74","cat":"Raw","div":"SO","total":317.5,"best":392.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"davidfloyd"},
{"name":"Joseph Songco","state":"TX","wc":"M-74","cat":"Raw","div":"SA","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Laflamme","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":450.5,"best":526.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"johnlaflamme83kg","opl":"johnlaflamme"},
{"name":"Louis Caruana","state":"FL","wc":"M-74","cat":"Raw","div":"M4","total":300,"best":300,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"louiscaruana"},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Raw","div":"M3","total":588.5,"best":867.5,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"michaelrodriguez1"},
{"name":"Thomas Ashbrook","state":"CA","wc":"M-74","cat":"Raw","div":"M3","total":485,"best":485,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"thomasashbrook"},
{"name":"Robert Lane","state":"WA","wc":"M-74","cat":"Raw","div":"M2","total":602.5,"best":602.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"lane.robert.s","opl":"robertlane1"},
{"name":"Patrick Foster","state":"PA","wc":"M-74","cat":"Raw","div":"M2","total":480,"best":525,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"","opl":"patrickfoster"},
{"name":"Matthew Chapman","state":"VA","wc":"M-74","cat":"Raw","div":"M2","total":400,"best":400,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '24","ig":"","opl":"matthewchapman1"},
{"name":"Donald Bigham","state":"SC","wc":"M-74","cat":"Raw","div":"M2","total":75,"best":647.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"onetimepowerlifting","opl":"donaldbigham"},
{"name":"Carlos Mata","state":"--","wc":"M-74","cat":"Raw","div":"M1","total":655,"best":682.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"carlosmata1"},
{"name":"Michael Haran","state":"MD","wc":"M-74","cat":"Raw","div":"M1","total":642.5,"best":637.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '23","ig":"","opl":"michaelharan"},
{"name":"Lee Rogers","state":"NH","wc":"M-74","cat":"Raw","div":"M1","total":510,"best":510,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"leerogers"},
{"name":"Due Nguyen","state":"NY","wc":"M-74","cat":"Raw","div":"M1","total":0,"best":457.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"duenguyen2"},
{"name":"Ben Tran","state":"MA","wc":"M-74","cat":"Raw","div":"SJ","total":680,"best":680,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"bentran"},
{"name":"Orlando Torres","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":617.5,"best":617.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"orlandotorres"},
{"name":"Weston Lisemby","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":610,"best":610,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"westonlisemby"},
{"name":"Graham Steel","state":"FL","wc":"M-74","cat":"Raw","div":"SJ","total":600,"best":600,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"grahamsteel"},
{"name":"Xzavier Aguilar - Mem. Error","state":"--","wc":"M-74","cat":"Raw","div":"SJ","total":597.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joshua Ambrose","state":"--","wc":"M-74","cat":"Raw","div":"SJ","total":575,"best":582.5,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"","opl":"joshuaambrose"},
{"name":"Jamie Huh","state":"CA","wc":"M-74","cat":"Raw","div":"SJ","total":442.5,"best":442.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jamiehuh"},
{"name":"Damon Llamas","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":440,"best":440,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"damonllamas"},
{"name":"Javier Gonzalez","state":"WI","wc":"M-74","cat":"Raw","div":"SJ","total":432.5,"best":432.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"javiergonzalez4"},
{"name":"Parker Golden","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":480,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"parkergolden"},
{"name":"Evan Machik","state":"PA","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":565,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"May '25","ig":"","opl":"evanmachik"},
{"name":"Vihaan Barar","state":"NJ","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":537.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Aug '25","ig":"","opl":"vihaanbarar"},
{"name":"Jaxon Backus","state":"AR","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":520,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"jaxonbackus"},
{"name":"Kane West","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Connor Townsend","state":"TX","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Mays","state":"OH","wc":"M-74","cat":"Raw","div":"SJ","total":0,"best":210,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"davidmays"},
{"name":"Everardo Crispin","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":730,"best":730,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"_.crispin03","opl":"everardocrispin"},
{"name":"Jeremy Rodriguez","state":"MA","wc":"M-74","cat":"Raw","div":"J","total":715,"best":715,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"jrodbigquad","opl":"jeremyrodriguez5"},
{"name":"Caleb Chan","state":"CA","wc":"M-74","cat":"Raw","div":"J","total":700,"best":700,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"calebchan"},
{"name":"Nicolas Gaines","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":685,"best":685,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Mar '25","ig":"nickgaines74","opl":"nicolasgaines"},
{"name":"Asante Gordon","state":"IA","wc":"M-74","cat":"Raw","div":"J","total":685,"best":685,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"asantegordon"},
{"name":"Ivan Liu","state":"GA","wc":"M-74","cat":"Raw","div":"J","total":680,"best":680,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"ivanliu1"},
{"name":"Garrett Rogers","state":"DE","wc":"M-74","cat":"Raw","div":"J","total":667.5,"best":667.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"gmoneystrong","opl":"garrettrogers"},
{"name":"Byron Moore","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":665.5,"best":670,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"byronmoore"},
{"name":"Cameron Kennedy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":640,"best":640,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"cameronkennedy1"},
{"name":"Gabriel Garza - Mem. Error","state":"--","wc":"M-74","cat":"Raw","div":"J","total":622.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Joshua Lawson","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":607.5,"best":607.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"joshualawson"},
{"name":"Braden Mertz","state":"PA","wc":"M-74","cat":"Raw","div":"J","total":607.5,"best":607.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"bradenmertz"},
{"name":"Edgar Duran","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":595,"best":595,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"edgarduran"},
{"name":"Rito Flores","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":590.5,"best":657.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"rito75kg","opl":"ritoflores"},
{"name":"Jacob Anucilla","state":"CA","wc":"M-74","cat":"Raw","div":"J","total":590,"best":590,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jacobanucilla"},
{"name":"Gavin Gill","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":572.5,"best":572.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"gavingill"},
{"name":"Alexander Lucero","state":"NM","wc":"M-74","cat":"Raw","div":"J","total":560,"best":560,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"alexanderlucero"},
{"name":"Harrison Lamy","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":552.5,"best":552.5,"bestWc":"66","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"harrisonlamy"},
{"name":"James Beard","state":"MS","wc":"M-74","cat":"Raw","div":"J","total":507.5,"best":507.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jamesbeard"},
{"name":"Wyatt Abbott","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":497.5,"best":497.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"wyattabbott"},
{"name":"Santiago Lara","state":"LA","wc":"M-74","cat":"Raw","div":"J","total":437.5,"best":437.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"santiagolara"},
{"name":"Kyle Cones","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":410,"best":410,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kylecones"},
{"name":"Brayden Molinyawe","state":"OH","wc":"M-74","cat":"Raw","div":"J","total":75,"best":735,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"braydenmolinyawe"},
{"name":"Alexander Hunt","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":75,"best":582.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"alexanderhunt"},
{"name":"Luke Christopherson","state":"MN","wc":"M-74","cat":"Raw","div":"J","total":0,"best":655,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"lukechristopherson"},
{"name":"Kai Vasquez","state":"FL","wc":"M-74","cat":"Raw","div":"J","total":0,"best":660,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"kaivasquez"},
{"name":"Alejandro Mccormick","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0,"best":512.5,"bestWc":"67.5","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"alejandromccormick"},
{"name":"Emiliano Fraga","state":"TX","wc":"M-74","cat":"Raw","div":"J","total":0,"best":610,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Oct '25","ig":"","opl":"emilianofraga"},
{"name":"Durwin Ho","state":"NJ","wc":"M-74","cat":"Raw","div":"O","total":585,"best":585,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"durwinho"},
{"name":"Michael Rodriguez","state":"TX","wc":"M-74","cat":"Equipped","div":"M3","total":643,"best":643,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"michaelrodriguez13"},
{"name":"Gavin Desalvo","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":545,"best":545,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"gavindesalvo"},
{"name":"Liam Kincanon","state":"LA","wc":"M-74","cat":"Equipped","div":"SJ","total":542.5,"best":542.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"liamkincanon"},
{"name":"Lawson Lillo","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":787.5,"best":760.5,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"lawsonlillo"},
{"name":"Logan Edmonds","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":730,"best":730,"bestWc":"74","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"loganedmonds"},
{"name":"Will Eckford","state":"TX","wc":"M-74","cat":"Equipped","div":"J","total":0,"best":821,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '26","ig":"","opl":"willeckford"},
{"name":"Cole Goudeau","state":"LA","wc":"M-74","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Noah Duplichan","state":"LA","wc":"M-83","cat":"Raw","div":"SO","total":377.5,"best":385,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"noahduplichan"},
{"name":"Russ Marr","state":"NM","wc":"M-83","cat":"Raw","div":"M4","total":471,"best":477.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '23","ig":"","opl":"russmarr"},
{"name":"Ken Levine","state":"PA","wc":"M-83","cat":"Raw","div":"M4","total":462.5,"best":462.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"kenlevine"},
{"name":"Laddie Gibson","state":"NY","wc":"M-83","cat":"Raw","div":"M3","total":575,"best":575,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"laddiegibson"},
{"name":"Carlos Lewis","state":"TX","wc":"M-83","cat":"Raw","div":"M3","total":555,"best":555,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '25","ig":"","opl":"carloslewis"},
{"name":"Willie Wong","state":"CA","wc":"M-83","cat":"Raw","div":"M3","total":552.5,"best":555.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"willie_wong83kg","opl":"williewong1"},
{"name":"Steve Destephen","state":"OH","wc":"M-83","cat":"Raw","div":"M3","total":437.5,"best":455,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"stevedestephen"},
{"name":"Jesus Fragoso","state":"--","wc":"M-83","cat":"Raw","div":"M2","total":647.5,"best":647.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"deadliftingjesus","opl":"jesusfragoso"},
{"name":"Thaddeus Say","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":560,"best":560,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"thaddeussay"},
{"name":"Garrin Clark","state":"MI","wc":"M-83","cat":"Raw","div":"M2","total":545,"best":552.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"gmanf3","opl":"garrinclark"},
{"name":"Sikander Aasim","state":"MD","wc":"M-83","cat":"Raw","div":"M2","total":480,"best":480,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"sikanderaasim"},
{"name":"Mfon Akpan","state":"OK","wc":"M-83","cat":"Raw","div":"M2","total":462.5,"best":462.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"mfonakpan"},
{"name":"Ross Leppala","state":"GA","wc":"M-83","cat":"Raw","div":"M1","total":747.5,"best":747,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"ross.leppala","opl":"rossleppala"},
{"name":"Ben Dresher - Mem. Error","state":"--","wc":"M-83","cat":"Raw","div":"M1","total":667.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Anthony Perkins","state":"TX","wc":"M-83","cat":"Raw","div":"M1","total":642.5,"best":642.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"anthonyperkins1"},
{"name":"Julien Comte","state":"PA","wc":"M-83","cat":"Raw","div":"M1","total":625,"best":647.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"","opl":"juliencomte"},
{"name":"Ryan Kuhlmann","state":"AL","wc":"M-83","cat":"Raw","div":"M1","total":590,"best":590,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"robo_rhino42","opl":"ryankuhlmann"},
{"name":"Lionel Stoxstell Ii","state":"NV","wc":"M-83","cat":"Raw","div":"M1","total":585,"best":585,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"lionelstoxstellii"},
{"name":"Jaime Velasquez","state":"MD","wc":"M-83","cat":"Raw","div":"M1","total":505,"best":505,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jaimevelasquez"},
{"name":"Robert Rodriguez","state":"LA","wc":"M-83","cat":"Raw","div":"M1","total":430,"best":437.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"robertrodriguez10"},
{"name":"Lauren Cohen","state":"MA","wc":"M-83","cat":"Raw","div":"M1","total":75,"best":702.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Jul '25","ig":"","opl":"laurencohen"},
{"name":"Tate Van Essen","state":"IA","wc":"M-83","cat":"Raw","div":"SJ","total":640,"best":640,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"tatevanessen"},
{"name":"Eli Sobie","state":"MI","wc":"M-83","cat":"Raw","div":"SJ","total":540,"best":540,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"elisobie"},
{"name":"Advaith Goud Sirisanagandla","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":537.5,"best":537.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"advaithgoudsirisanagandla"},
{"name":"Aidan Bauer","state":"AZ","wc":"M-83","cat":"Raw","div":"SJ","total":535,"best":535,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"aidanbauer"},
{"name":"Brody Williamson","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":505,"best":505,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"brodywilliamson"},
{"name":"Joshua Tang","state":"MD","wc":"M-83","cat":"Raw","div":"SJ","total":455,"best":455,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"anabolic_goldfish","opl":"joshuatang"},
{"name":"Kayden Curtiss","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":432.5,"best":432.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"kaydencurtiss"},
{"name":"Mason Madji","state":"NC","wc":"M-83","cat":"Raw","div":"SJ","total":75,"best":465,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"masonmadji"},
{"name":"Ogden Horowitz Shea","state":"NY","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":635,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"ogdenhorowitzshea"},
{"name":"Valentin Caballero Rivera","state":"CA","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Longano","state":"OH","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":587.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"johnlongano"},
{"name":"Oscar Rivas","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":627.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"oscarrivas"},
{"name":"Timothy Coleman","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":592.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Jul '25","ig":"","opl":"timothycoleman"},
{"name":"Matthew Lim","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":697.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"matthewlim"},
{"name":"Jairo Ordonez Jr","state":"TX","wc":"M-83","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Max Wright","state":"KY","wc":"M-83","cat":"Raw","div":"J","total":787.5,"best":787.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '25","ig":"maxcristwright","opl":"maxwright"},
{"name":"Dillon Johnson","state":"--","wc":"M-83","cat":"Raw","div":"J","total":784,"best":835,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"_.dillonjohnson","opl":"dillonjohnson1"},
{"name":"Aaron Welch","state":"CO","wc":"M-83","cat":"Raw","div":"J","total":780,"best":780,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"aaronwelch"},
{"name":"Ryan Bautista","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":760,"best":760,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"ryanbautista"},
{"name":"Eric Gonzalez-Tunon","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":745,"best":745,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"the.war.on.gravity","opl":"ericgonzaleztunon"},
{"name":"Xavier Mccarty","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":735,"best":735,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"xaviermccarty"},
{"name":"Luke Medina","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":730,"best":730,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"lukemedina"},
{"name":"Calvin Trapp","state":"--","wc":"M-83","cat":"Raw","div":"J","total":705,"best":705,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"calvintrapp"},
{"name":"Justin Ng","state":"IL","wc":"M-83","cat":"Raw","div":"J","total":690,"best":692.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"ng82.5kg","opl":"justinng1"},
{"name":"Brendon Vineyard","state":"NY","wc":"M-83","cat":"Raw","div":"J","total":687.5,"best":687.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"brendonvineyard"},
{"name":"Dylan Stefan","state":"OH","wc":"M-83","cat":"Raw","div":"J","total":682.5,"best":690,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"dylanstefan"},
{"name":"Aron Atakuzi","state":"OK","wc":"M-83","cat":"Raw","div":"J","total":667.5,"best":667.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"aronatakuzi"},
{"name":"Sean Fitzgerald","state":"PA","wc":"M-83","cat":"Raw","div":"J","total":640,"best":677.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"seanfitzpl","opl":"seanfitzgerald"},
{"name":"Noah Raulston","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":637.5,"best":637.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"noahraulston"},
{"name":"Daniel Castaneda - Mem. Error","state":"--","wc":"M-83","cat":"Raw","div":"J","total":635,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Kacey Morgan","state":"AL","wc":"M-83","cat":"Raw","div":"J","total":635,"best":635,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"kaceymorgan2"},
{"name":"Jackson Voss","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":585,"best":660,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"jacksonvoss"},
{"name":"Raphael Rivera","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":575,"best":605,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"raphaelrivera1"},
{"name":"Juan Renderos","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":572.5,"best":572.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Feb '25","ig":"","opl":"juanrenderos"},
{"name":"Jonathan Vasquez","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":560,"best":560,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jonathanvasquez"},
{"name":"Jordan Zavala","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":545,"best":545,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"jordanzavala"},
{"name":"Wilson Guo","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":530,"best":530,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"wilsonguo"},
{"name":"Rayce Pennartz","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":527.5,"best":527.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"raycepennartz"},
{"name":"Talon Pippin","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":495,"best":495,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"talonpippin"},
{"name":"Patrick Broussard","state":"--","wc":"M-83","cat":"Raw","div":"J","total":382.5,"best":382.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"patrickbroussard"},
{"name":"Wayne Anderson","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":275,"best":512.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"wayneanderson3"},
{"name":"Ryan Samadi - Mem. Error","state":"--","wc":"M-83","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Samuel Johnson","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":75,"best":712.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"samueljohnson4"},
{"name":"Ibrahiem Hamed","state":"LA","wc":"M-83","cat":"Raw","div":"J","total":75,"best":582.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Nov '24","ig":"","opl":"ibrahiemhamed"},
{"name":"Aiolya Zhang","state":"MI","wc":"M-83","cat":"Raw","div":"J","total":0,"best":610,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Aug '25","ig":"","opl":"aiolyazhang"},
{"name":"Joshua Ham","state":"CA","wc":"M-83","cat":"Raw","div":"J","total":0,"best":555,"bestWc":"75","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '26","ig":"","opl":"joshuaham"},
{"name":"Danny Lawrence","state":"FL","wc":"M-83","cat":"Raw","div":"J","total":0,"best":725,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"dannylawrence"},
{"name":"Jack Schultz","state":"IA","wc":"M-83","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Fisher Chung","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luis Alvarado","state":"TX","wc":"M-83","cat":"Raw","div":"J","total":0,"best":520,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"luisalvarado"},
{"name":"Will Mankhey","state":"NE","wc":"M-83","cat":"Raw","div":"O","total":685,"best":685,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"willmankhey"},
{"name":"Thomas Fagiano","state":"NH","wc":"M-83","cat":"Raw","div":"O","total":670,"best":670,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"thomasfagiano"},
{"name":"Gabriel Pongchit","state":"MD","wc":"M-83","cat":"Raw","div":"O","total":585,"best":585,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '24","ig":"","opl":"gabrielpongchit"},
{"name":"Joshua Rafael Ramos","state":"CA","wc":"M-83","cat":"Raw","div":"O","total":527.5,"best":527.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Mar '25","ig":"","opl":"joshuarafaelramos"},
{"name":"William Clayton","state":"NJ","wc":"M-83","cat":"Equipped","div":"M4","total":387.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Keith Nautel","state":"NY","wc":"M-83","cat":"Equipped","div":"M3","total":705,"best":705,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"keithnautel"},
{"name":"Chris Boillot","state":"AZ","wc":"M-83","cat":"Equipped","div":"M3","total":607.5,"best":607.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"chrisboillot"},
{"name":"Travis Pardue","state":"NC","wc":"M-83","cat":"Equipped","div":"M2","total":590,"best":570,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"travispardue"},
{"name":"Nate Crowder","state":"GA","wc":"M-83","cat":"Equipped","div":"M1","total":610,"best":610,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"natecrowder"},
{"name":"Jose Munoz","state":"NM","wc":"M-83","cat":"Equipped","div":"M1","total":435,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Wyatt Gremillion","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":610,"best":610,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"wyattgremillion"},
{"name":"Juan David Aguirre Iii","state":"TX","wc":"M-83","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Paxton Audler","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Delaney","state":"LA","wc":"M-83","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Carter Lewis","state":"LA","wc":"M-83","cat":"Equipped","div":"J","total":797.5,"best":797.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"carterlewis"},
{"name":"Ty Felle","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":595,"best":592.5,"bestWc":"83","diffWc":false,"bestFed":"AMP","bestDate":"Apr '24","ig":"","opl":"tyfelle"},
{"name":"Troy Nguyen","state":"WI","wc":"M-83","cat":"Equipped","div":"J","total":582.5,"best":582.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"troynguyen"},
{"name":"Stephen Simpson","state":"IN","wc":"M-93","cat":"Raw","div":"SO","total":0,"best":335,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"stephensimpson2"},
{"name":"Robert Moore","state":"MD","wc":"M-93","cat":"Raw","div":"M4","total":505,"best":727.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Nov '24","ig":"","opl":"robertmoore11"},
{"name":"Phillip Rosenstern","state":"PA","wc":"M-93","cat":"Raw","div":"M4","total":487.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Phillip Rosenstern","state":"PA","wc":"M-93","cat":"Raw","div":"M4","total":487.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Bruce Bullock","state":"NC","wc":"M-93","cat":"Raw","div":"M4","total":0,"best":295,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"brucebullock"},
{"name":"Darrell Gaspard","state":"LA","wc":"M-93","cat":"Raw","div":"M3","total":537.5,"best":537.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"darrellgaspard"},
{"name":"Peter Tressel","state":"MN","wc":"M-93","cat":"Raw","div":"M3","total":517.5,"best":517.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"petertressel"},
{"name":"Steven Carpenter","state":"FL","wc":"M-93","cat":"Raw","div":"M3","total":490,"best":580,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Mar '24","ig":"","opl":"stevencarpenter1"},
{"name":"Todd Peterson","state":"NV","wc":"M-93","cat":"Raw","div":"M3","total":472.5,"best":472.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Sep '24","ig":"","opl":"toddpeterson"},
{"name":"Troy Gibson","state":"NY","wc":"M-93","cat":"Raw","div":"M3","total":400,"best":400,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"troygibson"},
{"name":"David Ricks","state":"FL","wc":"M-93","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"ricks.david","opl":""},
{"name":"Edward Ruland","state":"FL","wc":"M-93","cat":"Raw","div":"M2","total":645,"best":645,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"edwardruland"},
{"name":"Rodney Elm","state":"AZ","wc":"M-93","cat":"Raw","div":"M2","total":605,"best":605,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"rodneyelm"},
{"name":"Marquies Sampa","state":"TX","wc":"M-93","cat":"Raw","div":"M2","total":75,"best":570,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"marquiessampa"},
{"name":"Roy Jackson","state":"AL","wc":"M-93","cat":"Raw","div":"M1","total":825,"best":825,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"royjackson"},
{"name":"Nathan Kulas","state":"ME","wc":"M-93","cat":"Raw","div":"M1","total":813,"best":805,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"omrsafetyo","opl":"nathankulas"},
{"name":"Layne Norton","state":"FL","wc":"M-93","cat":"Raw","div":"M1","total":788,"best":788,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"biolayne","opl":"laynenorton"},
{"name":"Michael Reed","state":"OH","wc":"M-93","cat":"Raw","div":"M1","total":712.5,"best":712.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Feb '24","ig":"crazysocks.powerlifter","opl":"michaelreed4"},
{"name":"Courtney Leffall","state":"TX","wc":"M-93","cat":"Raw","div":"M1","total":0,"best":555,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '25","ig":"","opl":"courtneyleffall"},
{"name":"Ethan Cohen","state":"GA","wc":"M-93","cat":"Raw","div":"SJ","total":717.5,"best":717.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"ethancohen2"},
{"name":"Noel Kurtin","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":672.5,"best":672.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"noelkurtin"},
{"name":"Sam Maiewski","state":"MA","wc":"M-93","cat":"Raw","div":"SJ","total":670,"best":670,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"sammaiewski"},
{"name":"Liam Goldich","state":"PA","wc":"M-93","cat":"Raw","div":"SJ","total":652.5,"best":652.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"liamgoldich"},
{"name":"Jack Cox","state":"NJ","wc":"M-93","cat":"Raw","div":"SJ","total":652.5,"best":652.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"jackcox"},
{"name":"Paul Mourain","state":"LA","wc":"M-93","cat":"Raw","div":"SJ","total":587.5,"best":587.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"paulmourain"},
{"name":"Selwyn Logan","state":"ME","wc":"M-93","cat":"Raw","div":"SJ","total":577.5,"best":577.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"selwynlogan"},
{"name":"Eric Jin","state":"IN","wc":"M-93","cat":"Raw","div":"SJ","total":572.5,"best":610,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"ericjin2"},
{"name":"Xander Lane","state":"OR","wc":"M-93","cat":"Raw","div":"SJ","total":367.5,"best":367.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"xanderlane"},
{"name":"Dylan Moyal","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":632.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"dylanmoyal"},
{"name":"Justin Corle","state":"MI","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":690,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Feb '26","ig":"justcorle","opl":"justincorle"},
{"name":"Jet Jones","state":"WI","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tyler Plumley","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Manar Albeirakdar","state":"TX","wc":"M-93","cat":"Raw","div":"SJ","total":0,"best":515,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Jul '25","ig":"","opl":"manaralbeirakdar"},
{"name":"Devin Mervau","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":865,"best":865,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"devinmervau","opl":"devinmervau"},
{"name":"Demitri Ayala","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":863,"best":837.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"dtree707","opl":"demitriayala"},
{"name":"Jack Reynolds","state":"MA","wc":"M-93","cat":"Raw","div":"J","total":861,"best":825,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"jack_reynolds333","opl":"jackreynolds"},
{"name":"Evan Ross","state":"VA","wc":"M-93","cat":"Raw","div":"J","total":832.5,"best":832.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"minihulk_lifts","opl":"evanross"},
{"name":"Kyle White - Mem. Error","state":"--","wc":"M-93","cat":"Raw","div":"J","total":820,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dylan Albert","state":"LA","wc":"M-93","cat":"Raw","div":"J","total":780,"best":780,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"dylanalbert"},
{"name":"Miles Hartway","state":"NY","wc":"M-93","cat":"Raw","div":"J","total":737.5,"best":737.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"mileshartway"},
{"name":"Kane Smith","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":720,"best":720,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"kanererer","opl":"kanesmith"},
{"name":"Brendan Mackin - Mem. Error","state":"--","wc":"M-93","cat":"Raw","div":"J","total":717.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nahuel Peralta - Mem. Error","state":"--","wc":"M-93","cat":"Raw","div":"J","total":707.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jake Lewis","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":697.5,"best":697.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jakelewis4"},
{"name":"Victor Herrera","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":687.5,"best":687.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"victorherrera1"},
{"name":"Waylon Vidler","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":682.5,"best":682.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"waylonvidler"},
{"name":"Aryan Nautiyal","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":667.5,"best":667.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"aryannautiyal"},
{"name":"Alex Vastey","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":665,"best":662.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"alexvastey"},
{"name":"Riley Morgan","state":"MI","wc":"M-93","cat":"Raw","div":"J","total":642.5,"best":657.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '24","ig":"","opl":"rileymorgan1"},
{"name":"Laakea Faurot","state":"HI","wc":"M-93","cat":"Raw","div":"J","total":637.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Nick Walker","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":635,"best":647.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"nickwalker2"},
{"name":"Adam Greer","state":"CA","wc":"M-93","cat":"Raw","div":"J","total":617.5,"best":617.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"adamgreer"},
{"name":"Adam Bretsch","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":597.5,"best":620,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"adambretsch"},
{"name":"Aaron Estocin","state":"NM","wc":"M-93","cat":"Raw","div":"J","total":597.5,"best":597.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jul '25","ig":"","opl":"aaronestocin"},
{"name":"Cameron Thayer","state":"--","wc":"M-93","cat":"Raw","div":"J","total":592.5,"best":592.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"cameronthayer"},
{"name":"Jonatan Hernandez","state":"IA","wc":"M-93","cat":"Raw","div":"J","total":575,"best":575,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jonatanhernandez"},
{"name":"Davis Wenger","state":"PA","wc":"M-93","cat":"Raw","div":"J","total":555,"best":555,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"daviswenger"},
{"name":"Ben Mckinney","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0,"best":695,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"benmckinney"},
{"name":"Jacob Danielson","state":"MN","wc":"M-93","cat":"Raw","div":"J","total":0,"best":690,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"jacobdanielson"},
{"name":"Jonathan Eppler","state":"GA","wc":"M-93","cat":"Raw","div":"J","total":0,"best":652.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"jonathaneppler"},
{"name":"Simon Powell","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0,"best":477.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"simonpowell2"},
{"name":"Nick Sanchelli","state":"SC","wc":"M-93","cat":"Raw","div":"J","total":0,"best":685,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"nicksanchelli"},
{"name":"Peyton Morgan","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":587.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"peytonmorgan"},
{"name":"Jayvon Irwin","state":"IL","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Justin Blechinger","state":"WI","wc":"M-93","cat":"Raw","div":"J","total":0,"best":682.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '24","ig":"","opl":"justinblechinger"},
{"name":"Luke Mitchell","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"lifterluke","opl":""},
{"name":"Samuel Lopez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":602.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '25","ig":"","opl":"samuellopez"},
{"name":"Eric Pinon","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":645,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"ericpinon"},
{"name":"Arnol Rosales","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":535,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"arnolrosales"},
{"name":"Emanol Gonzalez","state":"TX","wc":"M-93","cat":"Raw","div":"J","total":0,"best":557.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Jul '25","ig":"","opl":"emanolgonzalez"},
{"name":"Jovanni Ontiveros","state":"TX","wc":"M-93","cat":"Raw","div":"O","total":512.5,"best":512.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jovanniontiveros"},
{"name":"James Brown","state":"PA","wc":"M-93","cat":"Equipped","div":"M3","total":703,"best":690,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jamesbrown3"},
{"name":"Thomas Cencich","state":"CO","wc":"M-93","cat":"Equipped","div":"M3","total":606,"best":602.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"thomascencich"},
{"name":"Gerard Dally - Mem. Error","state":"--","wc":"M-93","cat":"Equipped","div":"M3","total":530,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Steven Carpenter","state":"FL","wc":"M-93","cat":"Equipped","div":"M3","total":490,"best":457.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jul '25","ig":"","opl":"stevencarpenter2"},
{"name":"Marcos Sanchez - Mem. Error","state":"--","wc":"M-93","cat":"Equipped","div":"M2","total":642.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"William Kahapea - Mem. Error","state":"--","wc":"M-93","cat":"Equipped","div":"M2","total":585,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rick Fowler","state":"IL","wc":"M-93","cat":"Equipped","div":"M2","total":537.5,"best":555,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"Jul '24","ig":"","opl":"rickfowler"},
{"name":"Matt Rodock","state":"WI","wc":"M-93","cat":"Equipped","div":"M1","total":847.5,"best":862.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"mattrodock"},
{"name":"Caleb Frnka","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":607.5,"best":607.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"calebfrnka"},
{"name":"Brennan Jarrell","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":542.5,"best":542.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"brennanjarrell"},
{"name":"Jerry Contreras","state":"TX","wc":"M-93","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Thomas Killam","state":"LA","wc":"M-93","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Rocky Dufort","state":"LA","wc":"M-93","cat":"Equipped","div":"J","total":732.5,"best":732.5,"bestWc":"93","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"rockydufort"},
{"name":"Ronnie Guerra","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":540,"best":662.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '24","ig":"","opl":"ronnieguerra"},
{"name":"Encarnacion Lugo Jr.","state":"TX","wc":"M-93","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"John Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"SO","total":605,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dion Thomas","state":"GA","wc":"M-105","cat":"Raw","div":"SO","total":462.5,"best":462.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Mar '25","ig":"","opl":"dionthomas"},
{"name":"Dave Schneider","state":"OH","wc":"M-105","cat":"Raw","div":"M4","total":490,"best":500,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"daveschneider1"},
{"name":"Michael Lobb","state":"OR","wc":"M-105","cat":"Raw","div":"M4","total":480,"best":450,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"michaellobb"},
{"name":"Jeff Olsen","state":"WA","wc":"M-105","cat":"Raw","div":"M3","total":600,"best":600,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jeffolsen"},
{"name":"John Wetter","state":"--","wc":"M-105","cat":"Raw","div":"M3","total":545,"best":552.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"May '24","ig":"","opl":"johnwetter"},
{"name":"Peter Severenuk","state":"NJ","wc":"M-105","cat":"Raw","div":"M3","total":455,"best":455,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"peterseverenuk"},
{"name":"Jeffrey Fellows","state":"OR","wc":"M-105","cat":"Raw","div":"M3","total":437.5,"best":437.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"jeffreyfellows"},
{"name":"Egan Walker","state":"NV","wc":"M-105","cat":"Raw","div":"M3","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"David Koch","state":"MN","wc":"M-105","cat":"Raw","div":"M2","total":715,"best":712.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"davidkoch1"},
{"name":"Matthew Naegel","state":"SC","wc":"M-105","cat":"Raw","div":"M2","total":605,"best":622.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"matthewnaegel"},
{"name":"Chris Engebretson","state":"MA","wc":"M-105","cat":"Raw","div":"M2","total":75,"best":682.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"chrisengebretson"},
{"name":"David Nix","state":"OR","wc":"M-105","cat":"Raw","div":"M2","total":0,"best":530,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"davidnix"},
{"name":"Bob Eucker","state":"OH","wc":"M-105","cat":"Raw","div":"M2","total":0,"best":742.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '23","ig":"bobeucker","opl":"bobeucker"},
{"name":"Carlos Santoliquido - Mem. Error","state":"--","wc":"M-105","cat":"Raw","div":"M1","total":832.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ls Mcclain - Mem. Error","state":"--","wc":"M-105","cat":"Raw","div":"M1","total":812.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Donnelly","state":"NJ","wc":"M-105","cat":"Raw","div":"M1","total":742.5,"best":752.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"Nov '23","ig":"dukeknobbz","opl":"ryandonnelly"},
{"name":"Jason Coble","state":"CA","wc":"M-105","cat":"Raw","div":"M1","total":735,"best":735,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jasoncoble"},
{"name":"Gerald Ratulowski","state":"TX","wc":"M-105","cat":"Raw","div":"M1","total":705,"best":705,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"geraldratulowski"},
{"name":"Alpha Dumbuya","state":"GA","wc":"M-105","cat":"Raw","div":"M1","total":655,"best":655,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"alphadumbuya"},
{"name":"Nikhil Karulkar","state":"WA","wc":"M-105","cat":"Raw","div":"M1","total":607.5,"best":607.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"nikhilkarulkar"},
{"name":"Jermaine Williams","state":"MD","wc":"M-105","cat":"Raw","div":"M1","total":575,"best":575,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"jermainewilliams"},
{"name":"Austin Wilson","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":816,"best":788,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"austinwilson8"},
{"name":"Jacob Tumminello","state":"MS","wc":"M-105","cat":"Raw","div":"SJ","total":702.5,"best":702.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"jacobtumminello"},
{"name":"Matheo Nave","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":452.5,"best":452.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"matheonave"},
{"name":"Brenden Ross","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":75,"best":760,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Jun '25","ig":"","opl":"brendenross"},
{"name":"Aaron Quail","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":675,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"aaronquail"},
{"name":"Vedant Remella","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":542.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"vedantremella"},
{"name":"Michael Cruz","state":"OK","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":732.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '26","ig":"","opl":"michaelcruz8"},
{"name":"Sawyer Reinart","state":"WI","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":517.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Mar '24","ig":"","opl":"sawyerreinart"},
{"name":"Matthew Teal","state":"TX","wc":"M-105","cat":"Raw","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Luke Wymer","state":"OH","wc":"M-105","cat":"Raw","div":"J","total":802.5,"best":802.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"lukewymer1"},
{"name":"Hunter Olsen","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":797.5,"best":797.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"hunterolsen"},
{"name":"Dallas Romanowski","state":"NC","wc":"M-105","cat":"Raw","div":"J","total":790,"best":790,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"dallasromanowski"},
{"name":"Thomas Boyd","state":"VA","wc":"M-105","cat":"Raw","div":"J","total":785,"best":785,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"thomasboyd"},
{"name":"Kaden Mullins","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":736,"best":700,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"kadenmullins"},
{"name":"Evan Gonsorcik","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":730,"best":730,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"evangonsorcik"},
{"name":"Erick Severino","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":725,"best":725,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"erickseverino"},
{"name":"Charles Porter","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":722.5,"best":722.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"charlesporter"},
{"name":"Ej Chikando - Mem. Error","state":"--","wc":"M-105","cat":"Raw","div":"J","total":710,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Mark Hoffman","state":"ID","wc":"M-105","cat":"Raw","div":"J","total":702.5,"best":702.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"markhoffman3"},
{"name":"George Acosta","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":695,"best":695,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"georgeacosta"},
{"name":"George Acosta","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":695,"best":695,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"georgeacosta"},
{"name":"Ashton Smith","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":687.5,"best":687.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"ashtonsmith4"},
{"name":"Gil Romero Lopez","state":"AZ","wc":"M-105","cat":"Raw","div":"J","total":675,"best":675,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"gilromerolopez"},
{"name":"Kaiden Funderburk","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":662.5,"best":677.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"kaidenfunderburk"},
{"name":"Cash Zumhingst","state":"IN","wc":"M-105","cat":"Raw","div":"J","total":660,"best":750,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"cashzumhingst"},
{"name":"Nico Meisser","state":"CA","wc":"M-105","cat":"Raw","div":"J","total":655,"best":655,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"nicomeisser"},
{"name":"Angelo Carpino","state":"FL","wc":"M-105","cat":"Raw","div":"J","total":642.5,"best":642.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"angelocarpino"},
{"name":"Austin Hamilton","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":637.5,"best":637.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"austinhamilton2"},
{"name":"Fernando Rivera","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":617.5,"best":625,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"May '25","ig":"","opl":"fernandorivera2"},
{"name":"Joshua Lawson","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":607.5,"best":607.5,"bestWc":"74","diffWc":true,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"joshualawson"},
{"name":"Steven Aderhold","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":572.5,"best":622.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"stevenaderhold"},
{"name":"Austin Mckinney","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":440,"best":440,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Aug '25","ig":"","opl":"austinmckinney"},
{"name":"Josue Aguilera - Mem. Error","state":"--","wc":"M-105","cat":"Raw","div":"J","total":75,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alex Paige","state":"GA","wc":"M-105","cat":"Raw","div":"J","total":75,"best":637.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"alexpaige"},
{"name":"Lawrence Jones","state":"MS","wc":"M-105","cat":"Raw","div":"J","total":0,"best":910,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"lawrencejones"},
{"name":"Zachary Olsen","state":"MA","wc":"M-105","cat":"Raw","div":"J","total":0,"best":737.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"zacharyolsen"},
{"name":"Noah Schmidtberger","state":"TX","wc":"M-105","cat":"Raw","div":"J","total":0,"best":547.5,"bestWc":"90","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '25","ig":"","opl":"noahschmidtberger"},
{"name":"Bryan Prado","state":"CA","wc":"M-105","cat":"Raw","div":"O","total":782.5,"best":782.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"bryanprado"},
{"name":"Keith Taylor","state":"--","wc":"M-105","cat":"Equipped","div":"M4","total":547.5,"best":535,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"keithtaylor2"},
{"name":"Richard Johnson","state":"MA","wc":"M-105","cat":"Equipped","div":"M3","total":587.5,"best":590,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"richardjohnson2"},
{"name":"Dana Rosenzweig","state":"IL","wc":"M-105","cat":"Equipped","div":"M3","total":557.5,"best":557.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Apr '25","ig":"","opl":"danarosenzweig"},
{"name":"Ron Falcone Jr","state":"NJ","wc":"M-105","cat":"Equipped","div":"M3","total":500,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dale Mclaren","state":"GA","wc":"M-105","cat":"Equipped","div":"M2","total":935,"best":935,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"dalemclaren"},
{"name":"Ryan Donnelly","state":"NJ","wc":"M-105","cat":"Equipped","div":"M1","total":805,"best":850,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"dukeknobbz","opl":"ryandonnelly"},
{"name":"Pete Nees - Mem. Error","state":"--","wc":"M-105","cat":"Equipped","div":"M1","total":797.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cooper Trosclair","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":532.5,"best":532.5,"bestWc":"105","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"coopertrosclair"},
{"name":"Hutsen Roberts","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":512.5,"best":512.5,"bestWc":"93","diffWc":true,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"hutsenroberts"},
{"name":"Brody Young","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tristian Luna","state":"TX","wc":"M-105","cat":"Equipped","div":"SJ","total":0,"best":657.5,"bestWc":"","diffWc":false,"bestFed":"USAPL","bestDate":"Feb '25","ig":"","opl":"tristianluna"},
{"name":"Mason Matrone","state":"LA","wc":"M-105","cat":"Equipped","div":"SJ","total":0,"best":577.5,"bestWc":"100","diffWc":true,"bestFed":"USAPL","bestDate":"Nov '25","ig":"","opl":"masonmatrone"},
{"name":"Ashton Fischer","state":"WI","wc":"M-105","cat":"Equipped","div":"J","total":862.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jose Bellon","state":"FL","wc":"M-105","cat":"Equipped","div":"J","total":675,"best":700,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"josebellon"},
{"name":"Matthew Hammond","state":"LA","wc":"M-120","cat":"Raw","div":"SO","total":322.5,"best":322.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"matthewhammond"},
{"name":"Rory Mccoy","state":"PA","wc":"M-120","cat":"Raw","div":"M4","total":522.5,"best":497.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"rorymccoy"},
{"name":"Erik Madsen","state":"WA","wc":"M-120","cat":"Raw","div":"M4","total":502.5,"best":498,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"erikmadsen"},
{"name":"Michael Bitting","state":"FL","wc":"M-120","cat":"Raw","div":"M4","total":400,"best":437.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Apr '23","ig":"","opl":"michaelbitting"},
{"name":"Wilson Martinez","state":"--","wc":"M-120","cat":"Raw","div":"M3","total":707.5,"best":707.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"wilsonmartinez"},
{"name":"Austin Keanu","state":"HI","wc":"M-120","cat":"Raw","div":"M3","total":577.5,"best":652.5,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"austinkeanu"},
{"name":"Michael Mcqueen","state":"TX","wc":"M-120","cat":"Raw","div":"M2","total":717.5,"best":717.5,"bestWc":"105","diffWc":true,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"michaelmcqueen"},
{"name":"Esteban Rubens","state":"NH","wc":"M-120","cat":"Raw","div":"M2","total":695,"best":692.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"estebanrubens"},
{"name":"Daniel Gomez","state":"CA","wc":"M-120","cat":"Raw","div":"M2","total":580,"best":592.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"danielgomez"},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Raw","div":"M2","total":450,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Michael Mcqueen - Mem. Error","state":"--","wc":"M-120","cat":"Raw","div":"M2","total":122.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Craig Hickman","state":"ID","wc":"M-120","cat":"Raw","div":"M2","total":0,"best":580,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"","opl":"craighickman"},
{"name":"Thomas Crist","state":"NC","wc":"M-120","cat":"Raw","div":"M2","total":0,"best":580,"bestWc":"120+","diffWc":true,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"thomascrist"},
{"name":"Michael Tuchscherer","state":"AK","wc":"M-120","cat":"Raw","div":"M1","total":902.5,"best":902.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Apr '25","ig":"miketuchscherer","opl":"michaeltuchscherer"},
{"name":"Desmond Jordan","state":"NC","wc":"M-120","cat":"Raw","div":"M1","total":900,"best":900,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"desmond.jordan.94","opl":"desmondjordan"},
{"name":"Cordell Estrada","state":"--","wc":"M-120","cat":"Raw","div":"M1","total":690,"best":710,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Jun '23","ig":"","opl":"cordellestrada"},
{"name":"Nathan Alexander","state":"WA","wc":"M-120","cat":"Raw","div":"M1","total":610,"best":790,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Oct '24","ig":"alexandernathan","opl":"nathanalexander1"},
{"name":"Jonathan Jurewicz","state":"MD","wc":"M-120","cat":"Raw","div":"M1","total":407.5,"best":407.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jonathanjurewicz"},
{"name":"Aaron Mizushima","state":"HI","wc":"M-120","cat":"Raw","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Austin Oakley","state":"IN","wc":"M-120","cat":"Raw","div":"SJ","total":730,"best":750,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '25","ig":"austinistiny","opl":"austinoakley"},
{"name":"Cesar Garcia","state":"OR","wc":"M-120","cat":"Raw","div":"SJ","total":687.5,"best":687.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"cesargarcia7"},
{"name":"Dante Deleon","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":898.5,"best":898.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"dantedeleon"},
{"name":"Brayden Naus","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":875,"best":875,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"braydennaus"},
{"name":"Cain Lopez","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":822.5,"best":822.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"cainlopez"},
{"name":"Jacob Breckinridge","state":"PA","wc":"M-120","cat":"Raw","div":"J","total":810,"best":810,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"jacobbreckinridge"},
{"name":"Tanner Newman","state":"OK","wc":"M-120","cat":"Raw","div":"J","total":807.5,"best":810,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Feb '24","ig":"","opl":"tannernewman"},
{"name":"Ty Morawski","state":"OH","wc":"M-120","cat":"Raw","div":"J","total":770,"best":770,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"tymorawski"},
{"name":"Nicolas Hawke - Mem. Error","state":"--","wc":"M-120","cat":"Raw","div":"J","total":760,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Gilberto Villarreal","state":"CA","wc":"M-120","cat":"Raw","div":"J","total":750,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Lincoln Mickelsen","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":690,"best":690,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"lincolnmickelsen"},
{"name":"Connor Long","state":"KY","wc":"M-120","cat":"Raw","div":"J","total":672.5,"best":682.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"connor.long99","opl":"connorlong3"},
{"name":"Daniel Navarrete - Mem. Error","state":"--","wc":"M-120","cat":"Raw","div":"J","total":662.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Reagan Belvin","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":657.5,"best":657.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"reaganbelvin"},
{"name":"Alex Paige","state":"GA","wc":"M-120","cat":"Raw","div":"J","total":637.5,"best":637.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"alexpaige"},
{"name":"Leonardo Tarango","state":"NM","wc":"M-120","cat":"Raw","div":"J","total":600,"best":600,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Sep '25","ig":"","opl":"leonardotarango"},
{"name":"Chancellor Buford","state":"TX","wc":"M-120","cat":"Raw","div":"J","total":0,"best":900.5,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '25","ig":"","opl":"chancellorbuford"},
{"name":"Bennett Montplaisir","state":"OR","wc":"M-120","cat":"Raw","div":"J","total":0,"best":617.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Jan '26","ig":"","opl":"bennettmontplaisir"},
{"name":"Brad Salter","state":"TX","wc":"M-120","cat":"Equipped","div":"M4","total":447.5,"best":460,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"bradsalter"},
{"name":"Wilson Martinez","state":"--","wc":"M-120","cat":"Equipped","div":"M3","total":762.5,"best":762.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"wilsonmartinez"},
{"name":"Anthony Harris","state":"HI","wc":"M-120","cat":"Equipped","div":"M3","total":727.5,"best":727.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"tharris220","opl":"anthonyharris1"},
{"name":"Travis Koehn","state":"WY","wc":"M-120","cat":"Equipped","div":"M2","total":822.5,"best":820,"bestWc":"125","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '24","ig":"","opl":"traviskoehn"},
{"name":"Michael Kalter","state":"ME","wc":"M-120","cat":"Equipped","div":"M2","total":807.5,"best":807.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"michaelkalter"},
{"name":"Ryan Stills","state":"OR","wc":"M-120","cat":"Equipped","div":"M2","total":450,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Adam Moore","state":"MD","wc":"M-120","cat":"Equipped","div":"M1","total":692.5,"best":692.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"adammoore"},
{"name":"Carson Frnka","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":735,"best":707.5,"bestWc":"120","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"carsonfrnka"},
{"name":"Israel Soliz","state":"TX","wc":"M-120","cat":"Equipped","div":"SJ","total":407.5,"best":325,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '24","ig":"","opl":"israelsoliz"},
{"name":"Dar’Reyus Scott","state":"LA","wc":"M-120","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Creasy","state":"KS","wc":"M-120","cat":"Equipped","div":"J","total":900,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tyler Halpert","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":412.5,"best":417.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"tylerhalpert"},
{"name":"Luke Bergeron","state":"LA","wc":"M-120+","cat":"Raw","div":"SO","total":287.5,"best":287.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"lukebergeron"},
{"name":"Louis Maxwell","state":"GA","wc":"M-120+","cat":"Raw","div":"SO","total":0,"best":542.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Feb '26","ig":"","opl":"louismaxwell"},
{"name":"Mark Branham","state":"IN","wc":"M-120+","cat":"Raw","div":"M4","total":0,"best":435,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Apr '24","ig":"","opl":"markbranham"},
{"name":"Domenick Fonio","state":"--","wc":"M-120+","cat":"Raw","div":"M3","total":0,"best":625,"bestWc":"140","diffWc":true,"bestFed":"USAPL","bestDate":"Dec '23","ig":"","opl":"domenickfonio"},
{"name":"Kenneth Cameron","state":"NV","wc":"M-120+","cat":"Raw","div":"M2","total":730,"best":760,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"Jun '23","ig":"","opl":"kennethcameron"},
{"name":"Christopher Ptacek","state":"OR","wc":"M-120+","cat":"Raw","div":"M2","total":725,"best":740,"bestWc":"140+","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"","opl":"christopherptacek"},
{"name":"Patrick Northcutt","state":"IL","wc":"M-120+","cat":"Raw","div":"M2","total":712.5,"best":712.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"patricknorthcutt"},
{"name":"Nathan Gorham","state":"MD","wc":"M-120+","cat":"Raw","div":"M1","total":860,"best":848.5,"bestWc":"120","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"nathangorham","opl":"nathangorham"},
{"name":"Robert Ward","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":830,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"James Farrior","state":"NY","wc":"M-120+","cat":"Raw","div":"M1","total":827.5,"best":827.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"jamesfarrior"},
{"name":"Khourey Royal","state":"NC","wc":"M-120+","cat":"Raw","div":"M1","total":745,"best":745,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '24","ig":"","opl":"khoureyroyal"},
{"name":"Henry Coates","state":"OR","wc":"M-120+","cat":"Raw","div":"M1","total":632.5,"best":632.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"henrycoates"},
{"name":"Valente Inniss-Thompson","state":"TX","wc":"M-120+","cat":"Raw","div":"M1","total":0,"best":757.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Oct '23","ig":"","opl":"valenteinnissthompson"},
{"name":"Perry Ellis","state":"GA","wc":"M-120+","cat":"Raw","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Andrew Gonzalez","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":675,"best":675,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"andrewgonzalez10"},
{"name":"Omar Kalo","state":"CA","wc":"M-120+","cat":"Raw","div":"SJ","total":630,"best":630,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"omarkalo"},
{"name":"Jack Bartlett","state":"ID","wc":"M-120+","cat":"Raw","div":"J","total":830,"best":830,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Sep '24","ig":"_jackbartlett","opl":"jackbartlett1"},
{"name":"Jose Lugo","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":817.5,"best":817.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '25","ig":"","opl":"joselugo4"},
{"name":"Uriel Perez - Mem. Error","state":"--","wc":"M-120+","cat":"Raw","div":"J","total":780,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Jordan Blincoe","state":"NY","wc":"M-120+","cat":"Raw","div":"J","total":762.5,"best":762.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Oct '25","ig":"","opl":"jordanblincoe"},
{"name":"Jason Escobar Jr","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":737.5,"best":642.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Dec '24","ig":"","opl":"jasonescobarjr"},
{"name":"Kevin Garza","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":707.5,"best":707.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"kevingarza3"},
{"name":"Carlos Olivares","state":"TX","wc":"M-120+","cat":"Raw","div":"J","total":660,"best":660,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Jul '24","ig":"","opl":"carlosolivares"},
{"name":"Carson Crawford - Mem. Error","state":"--","wc":"M-120+","cat":"Raw","div":"J","total":250,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Corey Jackson","state":"MD","wc":"M-120+","cat":"Raw","div":"O","total":700,"best":700,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"coreyjackson"},
{"name":"Robert Keller","state":"FL","wc":"M-120+","cat":"Equipped","div":"M3","total":162.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Steve Davenport","state":"NE","wc":"M-120+","cat":"Equipped","div":"M2","total":710,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Douglas Rawson","state":"NV","wc":"M-120+","cat":"Equipped","div":"M2","total":527.5,"best":617.5,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"douglasrawson"},
{"name":"Andrew Cargill - Mem. Error","state":"--","wc":"M-120+","cat":"Equipped","div":"M1","total":907.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Tim Brockett","state":"OH","wc":"M-120+","cat":"Equipped","div":"M1","total":645,"best":715,"bestWc":"120+","diffWc":false,"bestFed":"AMP","bestDate":"Mar '26","ig":"","opl":"timbrockett"},
{"name":"Michael Jean Sr. - Mem. Error","state":"--","wc":"M-120+","cat":"Equipped","div":"M1","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Ryan Rubio - Mem. Error","state":"--","wc":"M-120+","cat":"Equipped","div":"SJ","total":497.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Cameron Ross","state":"LA","wc":"M-120+","cat":"Equipped","div":"SJ","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Dwayne Coleman","state":"KS","wc":"M-120+","cat":"Equipped","div":"J","total":995,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Alfonso Gutierrez - Mem. Error","state":"--","wc":"M-120+","cat":"Equipped","div":"J","total":0,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Katherine Evert","state":"MO","wc":"Out","cat":"Raw","div":"M4","total":260,"best":262.5,"bestWc":"82.5","diffWc":true,"bestFed":"USAPL","bestDate":"Mar '23","ig":"","opl":"katherineevert"},
{"name":"Jim Kathios","state":"NH","wc":"Out","cat":"Raw","div":"M3","total":612.5,"best":617.5,"bestWc":"110","diffWc":true,"bestFed":"USAPL","bestDate":"Jan '23","ig":"","opl":"jimkathios"},
{"name":"Ron Falcone Jr","state":"NJ","wc":"Out","cat":"Raw","div":"M3","total":442.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Sheila Hoover","state":"OR","wc":"Out","cat":"Raw","div":"M3","total":342.5,"best":342.5,"bestWc":"84","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"sheilahoover"},
{"name":"Melissa Forbis - Mem. Error","state":"--","wc":"Out","cat":"Raw","div":"M3","total":282.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Christopher Ptacek","state":"OR","wc":"Out","cat":"Raw","div":"M2","total":725,"best":740,"bestWc":"140+","diffWc":true,"bestFed":"USAPL","bestDate":"Sep '23","ig":"","opl":"christopherptacek"},
{"name":"John Demchak","state":"SC","wc":"Out","cat":"Raw","div":"M2","total":530,"best":530,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"johndemchak"},
{"name":"Cynthia Browning","state":"IN","wc":"Out","cat":"Raw","div":"M2","total":439.5,"best":420,"bestWc":"76","diffWc":true,"bestFed":"AMP","bestDate":"Feb '25","ig":"cindi_lifts","opl":"cynthiabrowning"},
{"name":"Stephanie Carpenter","state":"ID","wc":"Out","cat":"Raw","div":"M2","total":427.5,"best":0,"bestWc":"","diffWc":false,"bestFed":"","bestDate":"","ig":"","opl":""},
{"name":"Eli O'Keefe","state":"OH","wc":"Out","cat":"Raw","div":"J","total":517.5,"best":517.5,"bestWc":"83","diffWc":true,"bestFed":"AMP","bestDate":"May '25","ig":"","opl":"eliokeefe"},
{"name":"Marina Tran","state":"LA","wc":"Out","cat":"Raw","div":"J","total":242.5,"best":242.5,"bestWc":"84+","diffWc":true,"bestFed":"AMP","bestDate":"Nov '25","ig":"","opl":"marinatran"}
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
            Roster data was pulled on <strong style={{color:"#fff"}}>April 25, 2026 at 7:07 PM UTC</strong> and may not reflect updates made after that time.
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
