const respuestas = [
    '',
    ['Esto es un mensaje', 3],
    ,
    ['construido a cachitos', 7],
    ,
    ,
    ,
    ['mediante la lectura secuencial', 8],
    ['de varios items de un array',]
]

/* Encadenando promesas */

function leerDatosAsinc(i, timer = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (i) { /*  I ES THRULY porque siemrpre es 1, en el caso de que sea 0 en los arrays dará un error: ['Esto es un mensaje', 0] */
                console.log(`lectura de datos número ${i}`)
                resolve(respuestas[i])
            } else {
                reject(new Error('Error de lectura'))
            }

        }, timer)
    })

}

let i = 1
leerDatosAsinc(i, 2000)
    .then((aDatos) => {
        console.log(aDatos[0]) /* ---> ADATOS ES EL RESOLVE <--- */
        i = aDatos[1]
        return leerDatosAsinc(i, 3000) /* Creas una promesa nueva. Cada vez que invoco a una promesa y quiero que me devuelva una promesa RETURN. El return de la función o vale, ese devuelve si la función es resolve o reject */
    }).then((aDatos) => {
        console.log(aDatos[0])
        i = aDatos[1]
        return leerDatosAsinc(i, 1000)
    }).then((aDatos) => {
        console.log(aDatos[0])

    }).catch((error) => {
        console.log(error.message)

    })

/* function leerDatosAsinc(i, timer = 1000, callback) {    
}  */

/* let i = 1
leerDatosAsinc(i, 2000, (aDatos) => {
    console.log(aDatos[0])
    i = aDatos[1]
    leerDatosAsinc(i, 3000, (aDatos) => {
        console.log(aDatos[0])
        i = aDatos[1]
        leerDatosAsinc(i, 2000, (aDatos) => {
            console.log(aDatos[0])
            i = aDatos[1]
            leerDatosAsinc(i, 1000, (aDatos) => {
                console.log(aDatos[0])    
            })
        })
    }) 
})
 */

console.log('Leyendo los datos')










