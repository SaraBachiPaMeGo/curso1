/* Asincronía */

/* Hacer una cosa programada en el tiempo */

/**
 * En otros lenguajes es multihilo - multithread
 * Un hilo está en el procesador, y es el que gestiona el bucle de eventos (permite parecer concurrente cuando en realidad no lo es)
 * Dándose concurrencia real
 * En JavaScript hay un sólo hilo.
 */

setTimeout(() => { /* Se miden siempre en milisegundos(2º parámetro (0)) */
    console.log(`Mensaje 1`)/* 1 y 4 son asincrono por lo que se coloca después del 5 */
}, 0)
console.log("Mensaje 2")
console.log("Mensaje 3")

setTimeout(() => {
    console.log("Mensaje 4")
}, 2000);



console.log("Mensaje 5")