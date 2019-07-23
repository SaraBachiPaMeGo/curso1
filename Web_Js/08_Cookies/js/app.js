export class App {
    constructor() {
        this.aBtn = document.querySelectorAll('.btn')
        this.out = document.querySelector('out')
        this.cookie = document.cookie
        this.cname = ''
        this.cvalue = ''
        this.expires = ''
        this.exdays = ''

        /* Manejador */

        this.aBtn.forEach(btn => {
            btn.addEventListener('click', this.onClickBtn.bind(this))

        });
    }

    onClickBnt(ev) {
        switch (ev.target.id) { /* id para ver los botones. Cuando ponesmos .textContent lo que escribes en html o el innerHTML */
            case `btn-iniciar`:
                iniciar()
                break;
            case `btn-borrar`:
                borrar()
                break;
            case `btn-mostrar`:
                mostrar()
                break;
            case `btn-recargar`:
                recargar()
                break;
        }
    }

    setCookie(cname, cvalue, exdays) { /* Establece una cookie */
        var d = new Date();
        d.setTime(d.getTime() + (this.exdays * 24 * 60 * 60 * 1000)); /* Tirmpo de expiración */
        this.expires = "expires=" + d.toUTCString(); /* Convierte el String formato utc en date */
        this.cookie = this.cname + "=" + this.cvalue + ";" + this.expires + ";path=/";
    }

    getCookie(cname) { /* Obtenemos una cookie */
        var name = this.cname + "=";
        var decodedCookie = decodeURIComponent(this.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    checkCookie() { /* comprobar si una cookie existe */
        this.cookie = getCookie(cname)
        if (this.cookie) {
            
        } else {
          username = prompt("Please enter your name:", "");
          if (username != "" && username != null) {
            setCookie("username", username, 365);
          }
        }
      }

    iniciar() { /* Variable  */
        this.setCookie()

    }

    borrar() {

    }

    mostrar() {

    }

    recargar() {
        location.reload() /* Recarga */
    }

}
