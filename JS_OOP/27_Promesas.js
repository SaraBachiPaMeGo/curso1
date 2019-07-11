/* No sabemos lo que vale algo hasta dentro de un tiempo. Pueden tener dos caminos:
    - Positivo: que se cumpla
    - Negativa: que no se cumple
*/

function asincrona() { /* Factory: función que devuelve objetos que no son de su tipo. Se apoya en un constructor */
    return new Promise( (resolve,reject)=> {/* la 1ª se cumple la 2ª no */
        let i = Math.random()
        setTimeout(() => {
            if(i<0.7){ //Ok
                resolve('Éxito, número: '+i) /* Funcion que ya está hecha. Avisa a then de que tiene que enviarle unos datos. No es necesario que sea 'resolve', puede tener otro nombre y hacer esa ejecución con ese nombre. */
            }else { //Error
                reject(new Error('Error número: '+i))
            }
        }, 2000);
    } ) 
}

asincrona()
.then((response)=>{/* Devuelve la misma promesa positiva. El response le llega lo que le ha devuelto resolve */
    console.log(response)
}) 
.catch((error)=>{/* Captura errores */
    console.log(error.message)
}) 








