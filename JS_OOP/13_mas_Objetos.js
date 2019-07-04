/* Un elemento hable de sí mismo =THIS. Según que lenguaje se puede llamar de diferentes formas como 'auto' */


/* Serialización: proceso que manda los datos en serie (la unica forma de mandarlo en un string)
JSON.stringify() 
JSON.parse()   
*/

const aDatos = {
    user:'pepe',
    edad: 23,
    curso:'Front',
    nacim : new Date
}

console.log(aDatos)
/* console.log(
    JSON.stringify(aDatos) /* Proceso inmutable. Formato de datos JSON se utiliza para el intercambio de info. 
    )
 */

    let cadena = JSON.stringify(aDatos) // de un objeto a una cadena
    console.log(aDatos)
    console.log(
        cadena /* Proceso inmutable. Formato de datos JSON se utiliza para el intercambio de info. */
        )


let nuevosDatos = JSON.parse(cadena) /* coger algo que te llega como objeto y reorganizarlo. Lo convierto en cadena. HEMOS CLONADO UN OBJETO */

/* nuevosDatos= new Date(nacim) */

console.log(nuevosDatos)

console.log(typeof nuevosDatos)

const clone = JSON.parse(JSON.stringify(aDatos)) /* Clonado dip, clonado profundo */

aDatos.ciudad = 'Huelva'

clone.ciudad = 'Málaga' /* Sólo añado la propiedad al clonado, no al array original  */
clone.nacim = new Date(clone.nacim) /* Hacemos que el date sea de tipo date y no string */
console.log('........................................')
console.log(aDatos)
console.log(clone)

/* CLONADO  */

const objAlum = {
    user:'sara',
    edad: 21,
    curso:'Front',
    nacim : new Date,
    direccion: {
        ciudad: 'ambite'
    }
}
console.clear()
const objAlum2 = Object.assign({},objAlum) /* Nos devuelve los valores de un objeto copiado en un nuevo objeto */

objAlum2.direccion= Object.assign({},objAlum.direccion)
objAlum2.user ='lola'
objAlum2.direccion.ciudad = 'Madrid'

console.log(objAlum)
console.log(objAlum2)

const a  =  [1, 3, [4, 6, 7], 5, 6]
const b = JSON.parse(JSON.stringify(a))

const d = a.slice()

const c = Object.assign([], a)
c[2].push(123)

console.log(a)
console.log(b)
console.log(c)

console.log(d)