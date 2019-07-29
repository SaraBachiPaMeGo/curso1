export function app() {
    console.log('Holi. Todo ok');

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', calcularOffset) // Detecta cuando cambias el tamaño de la pantalla y vuelve a calcular calcularOffSet

    let header = document.querySelector('body>header')
    let divTop = document.querySelector('div.top')
    let aSctions = document.querySelectorAll('section')
    let aOffersets = []
    /* aSctions.map(item => item.offsetTop) */
    let inSticky = false
    calcularOffset()

    let aEnlaces = document.querySelectorAll('nav a')

    aEnlaces.forEach((enlace, i) => 
        enlace.addEventListener('click', (ev) => {onClickMenu(ev, i)}
        ))

    function calcularOffset() {
        aOffersets = []
        aSctions.forEach(item => 
            aOffersets.push(item.offsetTop) // offsetTop distintos valores del scroll cuando hacemos desplY, la distancia que tiene cada elemento del dom desde el origen
        );
    }

    //Some es igual que un bucle for que incluye breaks, los item son los offset en su posición

    function spyScroll(scrollElement) {
        setActive(aOffersets.length-1)
        for (let i = 0; i < aOffersets.length; i++) {
            if (scrollElement< aOffersets[i]+30) {// +x sirve para quitar la banda (para que no la cuente)
                setActive(i-1)
                break
            }            
        }
    }

    function spyScrollBad(scrollElement) { //Funcion no válida, tienes que meter las posiciones a mano
        aOffersets[0]
        if (scrollElement < aOffersets[1] - 90) {
            //0 
            setActive(0)
        } else if (scrollElement < aOffersets[2] - 90) {
            //1
            setActive(1)
        } else if (scrollElement < aOffersets[3] - 90) {
            //2
            setActive(2)
        } else {
            setActive(3)
        }
    }

    function onScroll(ev) {
        let desplY = ev.target.scrollingElement.scrollTop
        if (desplY >= 40 && !inSticky) {
            console.log('Aplicando la clase')
            //Crear una clase, poner en sticky
            header.classList.add('sticky')
            header.firstChild.firstChild //llamamos al i (logo) "El primero del primero"
            divTop.classList.add('top')
            inSticky = !inSticky //Lo contrario a como estaba
            calcularOffset()
        } else if (desplY < 40 && inSticky) {
            header.classList.remove('sticky')
            divTop.classList.remove('top')
            calcularOffset()
            inSticky = !inSticky
        }

        spyScroll(desplY)
    }
    
    function onClickMenu(ev, i) { // i es la posicion del array de los enlaces, le pasas el enlace en donde se ha hecho click
        ev.preventDefault()
        console.log(aOffersets[i])
        window.scrollTo(0, aOffersets[i]-90) // Responsable del movimiento entre los menús y las secciones, recibe la coordenada x e y a donde quieres ir, x siempre va a ser 0, y va a ser la posición en el array (-90px lo ponemos para corregir y que se vea mejor)
        setActive(i)
    }

    function setActive(i) {
        aEnlaces.forEach((enlace) => enlace.classList.remove('active'))// Quitamos la clase a todos para ponérle el color más claro al elemento en dode está en scroll        
        aEnlaces[i].classList.add('active') // y se le pone a la clase
    }
}
