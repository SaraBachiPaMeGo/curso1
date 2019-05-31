
let a=34; //Global



function prueba() {
    let a = 12; // Local a la función
    if (true) {
        let a= 9; // Local al bloque

        //Var no puede tener ámbito de bloque, Sólo se ejecuta una vez, en caso de tener dos var iguales sólo ejecutará la última
    }
}

prueba();

/* hoistintg (levantamiento) de funciones declaradas y variables var, el procesador las lee de una primera pasada y las coloca las primeras en la app. Se trata de la posición de las funciones y ejecuciones en el código (sólo la declaración en el caso de las var)*/


izar();

function izar() { /*Saca 7 ya que es var gracias al hoisting*/
    console.log('Izado')
    console.log('Z VALE', z)
    var z=7;
}


/* 
LO QUE PASA REALMENTE

function izar() { /*
    var z;
    console.log('Izado')
    console.log('Z VALE', z)
    z=7;
} */

/**Constantes referenciales = es constante la referencia */

const IVA = 1.26;
IVA = 1.34//ERROR

const user = {nombre:'Pepe', edad:34}

user.name='Juan'
user.edad =85

console.log(user) //No va a dar error, lo has modificado internamente


/*En cambio, así cambias el objeto entero*/

user={nombre:'Juan', edad:85}//ERROR

/*Lo que tiene que ser constante es la referencia, si creas otra nueva con el mismo nombre dará un ERROR*/


















