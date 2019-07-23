export class Cronometro {

/* this.handler --> Se necesita que una función arranque el cronómetro y otra lo pare, tiene que ser el mismo cronómetro. El handler es el identificador, el manejador del contador de tiempo. Es un número de referencia del contador, si no lo tienes nunca lo podrás parar. Setinterval te devuelve el identificador del cronómetro para si necesitas pararlo puedas. Maneja el puntero
this.time --> cuenta el tiempo cada x, miliseg incremente +100. Manualmente lo sumascada 10 miliseg cuente 10 cseg.
this.ison --> Variable de estado ¿Cómo sabemos si mi cronómetro está parado o no? a través de esta variable. Lo inicializamos en false (Tenemos que darle a play para que cambie). 

Diferencia entre setTimeOut y setInterval

    -setTimeOut: hace una cosa dentro de x. Tiempo programado, temporizador (Estila Bomba)

    -setInterval: hacer x cosas durante x tiempo. 

            dlgTime.value = 5
            handlerInterval = setInterval(() => {
                dlgTime.value -= 1  ---> Resta 1 al valor de dlgTime (5)
            }, 1000); ---> Cada segundo resta 1 

*/

    constructor() {
        console.log('Holi. Todo ok');
        this.min = document.querySelector('#out-min')
        this.seg = document.querySelector('#out-seg')
        this.cseg = document.querySelector('#out-cseg')
        this.aBtn = document.querySelectorAll('.btn')
        /* this.time = '' */

        /* Manejador */

        this.aBtn.forEach((btn) => {
            btn.addEventListener('click', this.onBtnClick.bind(this))
        });
    }

    onBtnClick(event) {
        switch (event.target.id) {
            case 'btn-play':
                onClickPlay()
                break;

            case 'btn-cancel':
                onClickCancel()
                break;
        }
    }

    onClickPlay() {
        clearTimeout(handlerSalir)
        clearInterval(handlerInterval)
    }

    onClickCancel() {
        clearTimeout()
        clearTimeout(handlerSalir)
        clearInterval(handlerInterval) /* Reinicia el contador cuando lo cierras, evita sobrecargas en el procesador */
        /* out.innerHTML = '' */
    }

   /*  setTimeout(() => {
        location.assign(url)
    }, 10000); */
}


handlerSalir = setTimeout(() => {
    /* Navegación programática */
}, 4500); /* Para que no se vea el 0, hacemos que acabe antes la cuenta atrás */
dlgCancel.showModal() /* te enseña el modal lo 'emergente'  */

dlgTime.value = 5
handlerInterval = setInterval(() => {
    dlgTime.value -= 1 /* Se crea una cuenta atrás, restando 1 */
}, 1000);

function onClickCancel() {
    clearTimeout(handlerSalir)
    clearInterval(handlerInterval) /* Reinicia el contador cuando lo cierras, evita sobrecargas en el procesador */
    /* out.innerHTML = '' */
}



















