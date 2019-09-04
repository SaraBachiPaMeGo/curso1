function algoAsinc() {
    return new Promise((resolve, reject) => {/* Siempre le pasamos una función. Es la función que me va a pasar el sistema. Tiene dos parámetros esta función, cuando va bien (resolve )y cuando va mal (reject)  */
        setTimeout(() => {
            let n = Math.random().toFixed(2) /* Ponemos el timeout para que la promesa no se devuelva inmediatamente. */
            if (n < 0.8) { /*Si tardas menos de 0.8 ok  */
                //ok
                //Ejecutamos el resolve
                resolve(n) /* Nos permite devolver el número  */
            } else {
                //error
                reject(n)
            }
        }, 1000)
    })
}

/* Cómo usamos una promesa

1º - La invoco
2º poner el then u el catch para decirle lo que tiene que hacer a través de una función*/

//algoAsinc()
//.then(datos => console.log('Acierto '+ datos))   /* Los parámetros de then se los va a pasar nuestra función resolve(). Datos en éste caso es n */ /* Se pone de esta forma porque llamamos a una función anónima. Lo tienes que hacer en otra función a parte dentro de then. A then le puedes pasar una función siempre que se haga esa promesa y además le va a pasar los datos el resolve(). N se pasa como parámetro para que lo devuelvas a then */
//.catch(error => console.log('Error '+ error))    /* Lo mismo que lo de arriba pero el parámetro se llama error */

/* Reescribimos con un async Away en vez de lo de arriba. Tenemos que envolver la llamada en otra función */

/* async function main() {
     try {
        let datos = await algoAsinc() /* con await, hace una espera hasta que se resuelva, y cuando lo haga guarda lo de resolve en datos. No ponemos el then. Es lo mismo que la parte de arriba */
        //console.log('Acierto ' + datos)
    //} catch (error) {
      //  console.log('Error ' + error))
   // }
//}

/* main()  */

(async () => {

    try {
        let datos = await algoAsinc() /* con await, hace una espera hasta que se resuelva, y cuando lo haga guarda lo de resolve en datos. No ponemos el then. Es lo mismo que la parte de arriba */
        console.log('Acierto ' + datos)
    } catch (error) {
        console.log('Error ' + error)
    }

})() /* Tengo una función anónima y quiero que esa función se ejecute (x()) envolvemos todo en un paréntesis para que se ejecute todo eso. async es una palabra reservada que nos permite definir funciones para que tenga un comportamiento asincrono y dentro meter funsiones síncronas   */