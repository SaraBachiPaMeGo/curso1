/* Objetos de varios tipos:*/

        const x = {}
             new Object()
        const a = []
             new Array()
        const c = 'pepe'
        c.toUpperCase()
             new String(c)// implicitamente se ejecuta
        const n = 2
        n.toFixed(2)
             new Number(n)// implicitamente se ejecuta
        function algo() {}
             new Function()     

/* Otros objetos */

        const d = new Date();
        const e = new Error(); /* Parámetro mensaje */
        const r = new RegExp(); /* expresiones regulares */
        const r1 = / / /* / / crear así un objeto o un array, es lo mismo que lo de arriba */

// Objetos no instanciables: crear un objeto dentro de una familia de objetos (new Array() por ejemplo). Con estos no puedes nunca hacer new Math() o json(), porque siempre son los mismos. Como las constantes como pi, e

Math.random()
Math.PI 
/*JSON  Agrupador de propiedades */

/* JSON.stringify() */
/*JSON.parse()   */

const fecha = new Date(1987,6,7) /* TE DEVUELVE LA FECHA Y LA HORA EXACTA DE CUANDO SE EJECUTE. Le puedes pasar números como fechas ó númros grande spara que te diga la fecha y hora exacta  */
const fecha2 = new Date(552607200000)


console.log(fecha.valueOf())
console.log(fecha2)

/*Mostrar fechas  */

//Convertir la fecha en distintos formatos de estring para que salga

console.log(fecha.toString()) /* Formato ISO completo : Tue Jul 07 1987 00:00:00 GMT+0200 (GMT+02:00)  */
console.log(fecha.toUTCString()) // Mon, 06 Jul 1987 22:00:00 GMT
console.log(fecha.toJSON()) // 1987-07-06T22:00:00.000Z, formato que se lo podríamos mandar a cualquier servidor para que lo entendiera

console.log(fecha.toLocaleDateString()) // Sólo te devuelve la fecha: 1987-7-7
console.log(fecha.toDateString()) // Tue Jul 07 1987

/* Operaciones con las fechas */

//GET: leer un dato. Extraer la fecha.

console.log(fecha.getTime()) /* Nos devuelve el toString de arriba */
fecha.getTimezoneOffset() /* Nos dice cuántos minutos más o menos nos desviamos del meridiano */
console.log(fecha.getMonth()) /* Las posiciones de los meses y los días(pero el domingo es el 0) los cuenta desde 0 */
fecha.g
//SET: coger un dato 

fecha.setDate()/* Establece el valor del día del objeto date que la está invocando, SON MUTABLES TODOS LOS MÉTODOS DE SET */

/**
 * @description sacar una fecha en español
 * @param {date} date 
 * @returns {date} dateEsp
 */

/* function fechaEspañola(date=[]) {
    let semana = ['Domingo','Lunes','Martes','Miércoles', 'Jueves','Viernes','Sábado']
    let meses = ['Enero','Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

    return date.getMonth(date[i+1])
} */

/* AAAA/MM/DD */

/* console.log(fechaEspañola('2019,07,04')) */

const capitalize = cadena => cadena [0].toUpperCase() + cadena.slice(1)

/**
 * @description sacar una fecha en español
 * @param {date} fecha 
 * @returns {string} dateEsp
 */

function fechaEsp(fecha = new Date()) {
    let aDias = ['Domingo','Lunes','Martes','Miércoles', 'Jueves','Viernes','Sábado']
    let aMeses = ['Enero','Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

    const nombreDia = capitalize(aDias[fecha.getDay()])
    const dia = fecha.getDate()
    const mes = capitalize(aMeses[fecha.getMonth()])
    const año = fecha.getFullYear();
    return `${nombreDia}, ${dia}, de ${mes} del ${año}`
}

let f = new Date(1965,7,31)
console.log(fechaEsp(f))

const fechaEspShort = (fecha = new Date() ) => {
     fecha = (typeof fecha === 'string') ? new Date(fecha) : fecha
     return aDias[fecha.getDay()] + ', ' 
         + fecha.getDate() + ' de ' 
         + aMeses[fecha.getMonth()] + ' del ' 
         + fecha.getFullYear() }
 
 let f = new Date(1965,7,31)
 f = '1965-8-31'
 console.log(fechaEsp(f))
 console.log(fechaEspShort(f))


















