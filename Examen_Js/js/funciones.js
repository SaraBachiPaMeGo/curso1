export function app() {
    console.log('Holi. Todo ok');

    let btn = document.querySelector('#btn')
    let btnCerrar = document.querySelector('#btn-cerrar')

    let letra = document.querySelector('#out-letra')
    let palabras = document.querySelector('#out-palabras')
    let longitud = document.querySelector('#out-longitud')
    let veces = document.querySelector('#out-veces')
    let frecuencia = document.querySelector('#out-frecuencia')
    let frase1 = document.querySelector('#in-frase')

    frase = frase1.value

    /* Manejador */

    btn.addEventListener('click', render)
    btnCancel.addEventListener('click', onClickCancel)


    function nLetras(frase) {
        frase2 = frase.split(' ').join('')
        return `FUNCION NLETRAS ---> El número de letras de : ${frase} es de ${frase2.length}`
    }
    
    function nPalabras(frase) {
        frase2 = frase.split(' ')
    
        let element
        for (let i = 0; i < frase2.length + 1; i++) {
            element = [i];
            element += ''
        }
        return `FUNCION NPALABRAS -----> El número de Palabras de '${frase}' es de : ${element}`
    }
        
    function longitud(frase) {
    
        frase2 = frase.split(' ')
        frase3 = frase.split(' ').join('') 
        frase4 = frase3.split('')
    
        return `FUNCION LONGITUD -----> La longitud media de ${frase} es de ${frase4.length/frase2.length} `    
    }
    
    function vecesLetra() {
        
    }
    
    function frecuenciaLetras(frase) {
        frase2 = frase.split(' ') 
        frase3 = frase.split(' ').join('')
        frase4 = frase3.split('')
        let letra
        for (let i = 0; i < frase4.length; i++) {
            const element = frase4[i];
            letra = element.charAt([i])
            if (letra === letra) {
                return 'FUNCION FRECUENCIALETRAS --------->' + letra
            }
            
        }
    
    }

    function render() {
        
        letras.value = nLetras(frase)
        palabras.value = nPalabras(frase)
        longitud.value = longitud(frase)
    }

    function onClickCancel() {
        btnCerrar.close()
    }

}