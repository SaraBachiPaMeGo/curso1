export function app() {
    console.log('Arrancando la app')

    let item = document.querySelector('#item') 
    let btn = document.querySelector('#btn')
    let out = document.querySelector('#out')

    /* Manjeadores */

    btn.addEventListener('click', onClick)

    function onClick() {
        let array = []  

        let local = localStorage.setItem('item',item) 
        
        =array.push(item.value)

        out.value =
    }






}