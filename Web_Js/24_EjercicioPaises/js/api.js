export {url}
export {aDatos}
export {resultadoFilter}

let url = 'https://restcountries.eu/rest/v2/region'
let aDatos = []
let resultadoFilter = []



/* {"name":"Afghanistan",
"topLevelDomain":[".af"],
"alpha2Code":"AF",
"alpha3Code":"AFG",
"callingCodes":["93"],
"capital":"Kabul",
"altSpellings":
["AF",
"Afġānistān"],
"region":"Asia",
"subregion":"Southern Asia",
"population":27657145,
"latlng":[33.0,65.0],"demonym":"Afghan","area":652230.0,"gini":27.8,"timezones":["UTC+04:30"],"borders":["IRN","PAK","TKM","UZB","TJK","CHN"],"nativeName":"افغانستان","numericCode":"004","currencies":[{"code":"AFN","name":"Afghan afghani","symbol":"؋"}],"languages":[{"iso639_1":"ps","iso639_2":"pus","name":"Pashto","nativeName":"پښتو"} */


/* Todos los paises cuy region sea el value del slcContinent.value */

/* var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result); */
// expected output: Array ["exuberant", "destruction", "present"]

/* Añadir el nombre del valor a la url  */