let datos

function leerDatosAsinc(i,time=1){
    return setTimeout(() => {
        console.log(`Lectura de datos nº ${i}`)
        datos ={
            data: 'Muchos datos'
        }
    }, time);    
}

const handler = leerDatosAsinc(1,1000)

console.log(`Leyendo los datos...`)

clearTimeout(handler) /* Para el TimeOut */

console.log(datos)















