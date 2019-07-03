{
    let aDatos=[]
    aDatos.length /* Longitud del array. Si no hay nada es 0 */
    aDatos.concat() /* Concatena arrays. 
    
    Hay dos tipos de arrays:

                - Implementadas como inmutables:

                    let aDatos=['perro','gato']
                    aDatos.concat(['leon','tigre']) no afecta al array que ha modificado 
                    console.log(aDatos) -->Saldrá perro y gato

                - Implementadas como mutables:*/

                    aDatos.sort() /* --> Ordena un array alfabéticamente  */  
                    console.log(aDatos) /* --> Te da los datos ordenados */
                /*  una vez ordenado un array no hay otra función que lo vuelva a desordenar, no se puede deshacer el orden. 
                    
               !!  los números también los ordena pero alfabéticamente (en grupos):
                        let aNumber =[32,3,2,21,56,5,9]
                        aNumber.sort()
                    Resultado:
                         [2,21,3,32,5,56,9]

                        aNumber.sort((a,b) => a-b)   
                    

     */
    aDatos.slice(0) /* clona un array y le tienes que pasar desde dónde (). Podemos sacar cachitos del array (2,5) sacará las posiciones que está entre medias. FUNCIÓN INMUTABLE */
    aDatos.reverse()/* Ordena el array al revés, los ultimos son los primeros y los primeros son los últimos. FUNCIÓN MUTABLE */
   
/* Métodos que permiten fraccionar Arrays :
        - De forma inmutable*/

let aNombres= ['Sara','Sergio','Yoli','Pepe','Sebas'];
aNombres.slice(1,3)/*Debes pasarla las posisiones para que te saque el trozo de array que quieras. OJO: La última posición no te la da, te la la anterior a la última. Si no le das ninguna posición a slice, te dará un clon del array.*/

       /* - De forma mutable*/

aNombres.splice(1,3) /* Coge un trozo del array , te devuelve el array con ese trozo pero al array del principio le quita verdaderamente ese trozo */
    /* Con un 3er parámetro le decimos qué queremos meter en el array (sustituímos lo que hemos quitado) */
    
aNombres.splice(1,3,'pedro','Paula') 
console.log(aNombres)
/* También podemos añadir elementos en una posición concreta */

let aPaises = ['Francia', 'Italia','Hungria','Grecia']
aPaises.splice(2,0,'ESPAÑA') /* Ponemos el 0 porque no queremos eliminar ningún elemento del array */
console.log(aPaises)
}

/* CLONAR */

/*let clon = aPaises.slice()  En el caso de que no le demos ningún valor si hace clon */

/* Pilas y colas */
console.log('............................................') 
aPaises = ['Francia', 'Italia','Hungria','Grecia']
aPaises.push('Portugal','Alemania') /* Añade en la última posición */
aPaises.pop()/* Quita el último elemento del array */
console.log(aPaises)
/*PILA  -> stack FILO (el primero en entrar es el último en salir) */

/* COLAS -> heap FIFO (First in, First out)*/
console.log('............................................')
aPaises.unshift('Croacia') /* como push. Inserta un nuevo elemento pero al principio */
console.log(aPaises)
aPaises.shift('Croacia') /* Eleminas el primer elemento */
console.log(aPaises)