
const array = [1,2,3,4,5,6]
/* Tosas utilizan SIEMPRE una funcion callback que utiliza 3 parámetros (el valor del item, index y opcionalmente el array), En cada vuelta sabes los 3 parámetros */

/* array.map((item,i, array) => {})el que ejecuta el callback lo hace .map,.filter... 
array.filter((item,i, array) => {})
array.some((item,i, array) => {})
array.every((item,i, array) => {})
array.forEach((item,i, array) => {})
array.reduce((item,i, array) => {})
array.reduceRight((item,i, array) => {})
*/

array.forEach((item,i, array) => {}) 

array.forEach( /* Hace lo mismo que un bucle for, tenemos una función anónima que define lo que queremos que pase ene cada vuelta del bucle. Recorrido o procesado del array*/
    item => {console.log(item)}
)
/* El for of. hace lo mismo que el de arriba 
EQUIVALE AL for in DE ES6
for (const iterator of object) {
    console.log(item)
}
*/

/*Proyectar o mapear un array 
CREAR UN ARRAY NUEVO DE LAS MISMAS POSICIONES DONDE CADA ELEMENTO SE CONTRUYE A TRAVES DE UNA FUNCIÓN DETERMINADAAL ELEMENTO CORRESPONDIENTE DEL ARRAY ANTERIOR */

function cuadrado(array=[]) {
    return array.map(item=> item*item) /* Te devuelve un array. Importante de que map tenga un return para que no te saque un array de objetos vacíos. */
}

/*const cuadrado = array=>  array.map(item=> item*item)  Otra forma de escribirlo */

console.log(cuadrado(array))

let usuarios = ['sara','pepe','maria']

console.log(usuarios.map(item=> item.toUpperCase())) /* Ponemos todos los nombres es mayúsculas.Proyecciones de arrays */


/* Filtros de array. Cuando lo que necesito es que me devuelva un array pero no de la misma longitud, porque sólo algunos elementos pasarán */

function pares(array=[]) {
    return array.filter( item => !(item%2)) /* Te devuelve un boolean gracias al not. Filter espera una función booleana, si es true pasa si no no */
}

/* const pares = array => array.filter( item => !(item%2)) */

console.log(pares(array))

/* Reducciones: reducir un array */ 

function sumaTotal(array=[]) { /* El primer parámetro es el previus, y el segundo es el  */
    return array.reduce((previo,item)=> {return previo + item}) /* Aplican parejas de valores y se guardan el valor. En previo se guarda primero 0 y actual 1 y así. previo coge la suma. reduce siempre te devuelve un valor.  */
}

console.log (sumaTotal(array))

function media(array=[]) { 
    let i = 0;
    let sumaTotal= array.reduce((previo,item, index)=> {
        i=index /* Sacas el index hacia fuera */
        return previo + item
    })
    return sumaTotal/++i /* i cuenta las vueltas. ++i incrementa el valor de i antes de la división, i++ esperar a que se haga la división y luego le incrementaría el valor a i(no va a ahcer nada porque i ya haabrá hecho la división, no vas a hacer nada más con i después) */
}

function media2(array=[]) { 
    let i = 0;
    return array.reduce((previo,item, index)=> {
        i=index 
        return previo + item
    })/++i /* Haz todo y me lo divides por i */
    
}

console.log(media(array))
console.log(media2(array))

/* Every se parece a un bucle for, some sirve para */

const aNombre =['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos']

/* function lista2(nombre='') {    
    const aNombre =['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos']
    for (let i = 0; i < aNombre.length; i++) {
        const element = aNombre[i];
        if(nombre.toLocaleUpperCase() == element.toUpperCase()){          
            return [true,i];
        }
    }
    return [false,-1];
}
 */

function isNombreRey(nombre) {/* Devuelve un boolean. Es un comprobador */   
    return aNombre.some( item => (nombre.toLocaleUpperCase() === item.toUpperCase())) 
}

console.log('.................................')
console.log(isNombreRey('maria'))

