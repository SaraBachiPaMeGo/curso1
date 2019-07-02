/**
 * @description Tenemos una lista d nombres y deseamos determinar si un nombre en concreto está en la lista, y si es así en qué posición se encuentra. Si el nombre no está en la lista la función debe devolver un valor booleano false
 * @param
 * @returns 
 * 
 */

/* function lista(nombre='') {    
    let aNombre =['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos']
    for (let i = 0; i < aNombre.length; i++) {
        const element = aNombre[i];
        if(element==nombre){
           return aNombre[i]
        }else {
            return false;
        }
    }
} */

/* console.log(lista('Carlos')) */

function lista2(nombre='') {    
    const aNombre =['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos']
    for (let i = 0; i < aNombre.length; i++) {
        const element = aNombre[i];
        if(nombre.toLocaleUpperCase() == element.toUpperCase()){          
            return [true,i];
        }
    }
    return [false,-1];
}

function mostrar(nombre) {
    let [lista,posicion]= lista2(nombre)   /* Deconstrucción de una función */
    let mensajes = [
        `El nombre ${nombre} no ha sido usado por ningún rey`,
        `El nombre ${nombre} sí ha sido usado por algún rey y es el número ${++posicion} de la lista`
    ]
    console.log(mensajes[+lista]) /* Hace casting a number */
}

mostrar('Fernando')
mostrar('Sara')
console.log('.....................')
console.log(lista2.indexOf('Fernando'))

/* En myscript 2016 (ES7) 
La función includes es una funcion booleana que ya existe que te devuelve true o fale depende de lo que encuentre en el array
console.log(lista2.includes('Fernando'))
*/