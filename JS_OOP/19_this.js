/* This es una características de las funciones en js epende de como se invoque significa una cosa u otra. */
// Hay 4 formas de ejecutar una función. Patrones de invocación, cambian el significado de this:

function algo() {
    console.log(this) /* This siempre existe dentro de una función */
}

//Función

algo() /* this es el objeto de más alto nivel. Es process(en node, proceso principal del sistema, que residen propiedades) o window (navegador o browser, es la ventana de estos navegadores F12 copias y pegas eso en console para grabar esa función en ese entorno) */

//Método

const obj= {nombre:'Sara',edad:21}
obj.algo = algo /* No debería de tener paréntesis ya que la función está arriba y cuando hacemos unmétodo lo igualamos a una función. */
obj.algo(this) // Ejecutamos la función.  this depende del patron de ejecución.Va a salir todo el objeto cuando pongamos --> this: { nombre: 'Sara', edad: 21, algo: [Function: algo] }

//Constructor (new)

const nuevo = new algo(this) /* Se crea un objeto nuevo vacío, (está sin parámetros). Nos va a enseñar un objeto vacío --> algo {} . this es el nuevo objeto construído*/

// Indirectamente (Apply i Call)

const objetoNuevo = {
    especie: 'Pelicaniminus',
    nombre:'Pepi'
}

algo.apply(objetoNuevo) /* Esperan una función u objeto --> { especie: 'Pelicaniminus', nombre: 'Pepi' } . This el objeto que 'toma prestada' la función */

console.log('.............................................')
/* En las funciones arrow this es consistente:
SIEMPRE es la propia función */

const persona = {nombre: ' Sara',ojos:'verdes', pelo:'rubio'}

/* persona.saludar= function() {
    
} */

persona.saludarArrow() = () => {
    console.log(`Hola soy ${this.nombre}`)  /* this es el obejto al que pertenece el método */
}
//Función callback, le pasa el nombre de la función, no va a ser invocada por mi sino como callback, 5º modo de invoación, cuando la función no la invocas tu sino a otra función, en este caso a TimeOut
/* process. */global.setTimeout(persona.saludar, 2000) /* No se suelen poner process, porque el sistema lo encuentra por defecto, pero lo que nos proporciona esa capacidad para darle tiempo a las cosas es process. Hay que poner global para que salga. Nos sale --> Hola soy  Sara
                                    Hola soy undefined (después de dos segundos). Nos sale indefined porque 
                                    bing nos permite decirle quién queremos que use está función
                                    global.setTimeout(persona.saludar.bing(this), 2000) para que nos saque el nombre y pueda entrar en las propiedades del objeto. Estamos haciendo indirectamente un Apply */
  











