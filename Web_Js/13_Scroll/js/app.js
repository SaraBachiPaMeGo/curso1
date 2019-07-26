export function app() {
    console.log('Holi. Todo ok');

    window.addEventListener('scroll', onScroll)
    let header = document.querySelector('body>header')
    let divTop = document.querySelector('.top')
    let aSctions = document.querySelectorAll('section')
    let aOffersets = []
    /* aSctions.map(item => item.offsetTop) */
    let inSticky = false
    let aEnlaces = document.querySelector('nav a')
    aEnlaces.forEach(enlace,i => {
        enlace.addEventListener('click', () =>{onClickMenu(i)})
    });

    calcularOffset()

    function calcularOffset() {
        aSctions.forEach(item => {
            aOffersets.push(item.offsetTop)

        });
    }

    function onClickMenu(i) {
        window.scrollingElement.offsetTop = aOffersets[i]
    }



    function onScroll(ev) {
        let desplY = ev.target.scrollingElement.scrollTop
        if (desplY >= 40 && !inSticky) {
            console.log('Aplicando la clase')
            //Crear una clase, poner en sticky
            header.classList.add('sticky')
           divTop.classList.add('top')
            inSticky = !inSticky //Lo contrario a como estaba
            calcularOffset()
        } else if(desplY<40 && inSticky){
            header.classList.remove('sticky')
            calcularOffset()
        }else {

        }
    }
}