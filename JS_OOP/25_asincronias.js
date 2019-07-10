/**
 * Asincronía
 * Proceso que consume tiempo:
 *        -  bloqueante
 *        -  no bloqueante
 * 
 * 
 * Cola/bucle de eventos (El procesador hace una cosa. Colocarlo en la cola de eventos para dar prioridad a los procesos que no están siendo asiínconos)
 *  */ 

// Proceso bloqueante de 1 seg (se hace cuando haya tiempo de hacer x cosa)
//siguiente proceso

// Proceso no bloqueante de 1 seg
//siguientes procesos (no bloquenates hace dos cosas o más a la vez)

setTimeout(() => console.log('Mensaje 1'), 0); /* Se va a ejecutar después del 5 porque está en la cola de eventos */

console.log('Mensaje 2')

console.log('Mensaje 3')

setTimeout(() => console.log('Mensaje 4'), 2000);

console.log('Mensaje 5')

setTimeout(() => console.log('Mensaje 6'), 1000);



