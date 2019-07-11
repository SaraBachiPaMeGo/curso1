/**
 * ES2017 (ES8)
 * Aeait --> sistema de reescribir las promesas. Tenemos que envolver el then y el catch en una funcion
 */

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

const main = async () => { /* Main utiliza las promesas. Utilizamos async para  */
    let i = 1
    try {
        aDatos = await leerDatosAsinc(i, 2000) /* Los await se recogen en aDatos. Es como un then en formato de línea. El resolve lo mete en await y a su vez await a aDatos */
        console.log(aDatos[0]) /* ---> ADATOS ES EL RESOLVE <--- */
        i = aDatos[1]
        aDatos = await leerDatosAsinc(i, 2000) /* Los await se recogen en aDatos */
        console.log(aDatos[0]) /* ---> ADATOS ES EL RESOLVE <--- */
        i = aDatos[1]
        aDatos = await leerDatosAsinc(i, 2000) /* Los await se recogen en aDatos */
        console.log(aDatos[0]) /* ---> ADATOS ES EL RESOLVE <--- */
        i = aDatos[1]
        aDatos = await leerDatosAsinc(i, 2000) /* Los await se recogen en aDatos */
        console.log(aDatos[0]) /* ---> ADATOS ES EL RESOLVE <--- */
        i = aDatos[1]

        console.log('Leyendo los datos')

    } catch (error) {
        console.log(error.message)
    }
}



main()