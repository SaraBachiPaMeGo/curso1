/**
 * @description función que devuelve la media de los números independientes dados 
 * @param  {...[]number} rest estamos haciendo un rest de los datos para convertirlo en array
 * @returns {number}
 */

function media(...rest) { /* ... Sirve para meter parámetros independientes y convertirlos en un array */
    let media = 0;
    for (let i = 0; i < rest.length; i++) {
        const element = rest[i];
        media += element
    }
    return media / rest.length;
}/* Para llamar a esta función */

console.log(media(1, 2, 3, 4))
console.log('.................')

/* [2,5,8,7] ES UN ARRAY */
/* (2,5,8,7) SON PARÁMETROS */

function media2(rest = []) { /* Es la misma función que la de arriba */
    let media = 0;
    for (let i = 0; i < rest.length; i++) {
        const element = rest[i];
        media += element
        /* x = media/ rest.length  ---- Haces varias operaciones por lo que poner divisiones dentro e un for realentiza el proceso */
    }
    return media / rest.length;
}

console.log(media2([1, 2, 3, 4])) /* Tienes que utilizar los corchetes para llamar a esta función */

/* function mediaArray(rest=0) {
    let r ;
    return r;
}

mediaArray([5,2,8,4]) */

/* NO ES VÁLIDA ESTA FUNCIÓN */

function mediaTotal(...rest) { /* rest operator */
    let media = 0;
    for (let i = 0; i < rest.length; i++) {
        const element = rest[i];
        if (Array.isArray(element)) { /* Recursividad. Llamamos a la función de nuevo para que compruebe si hay un array dentro de rest */
            media += mediaTotal(...element) /* no se divide dentro del if por que sino devidiríamos otra vez. Ademas que llamamos a la función, por lo que gracias al return hacemos directamente la media. El item que hay dentro de la funcion recursiva es el mismo item que el de arriba, ya que es una constante */
            /* De esta manera se desconstruye el array, los numeros que haya dentro se convertirán en independientes, spread operator */
        } else {
            media += element
        }
    }
    return media / rest.length /* Haces una sola vez la división, eres más eficiente */
}

console.log(mediaTotal(7, 1, 0, [2, 2, [8, 9]]))
console.clear;

/* ESTA ES LA FUNCIÓN  */

function mediaTotal1(...rest) { /* rest operator */
    let r = 0;
    let n = 0;
    r += sumaTotal(...rest)

    function sumaTotal(...rest) {
        let s = 0;
        for (let i = 0; i < rest.length; i++) {
            const element = rest[i];
            if (Array.isArray(element)) {
                s += sumaTotal(...element)
            } else {
                s += element
                n++
            }
        }
        return s
    }
}

console.log(mediaTotal1(7, 1, 0, [2, 2, [8, 9]]))

