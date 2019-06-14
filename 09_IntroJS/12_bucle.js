let limite =10;
let suma =0;

for (let i = 0; i < limite; i++) {
    let cuadrado =i*i;    
    console.log(i,cuadrado)

    suma = suma + cuadrado;
    console.log(suma);
}

const aDatos = [
    "perro","gato","conejo","ardilla"
]

for (let i = 0; i < aDatos.length; i++) {
    let element = aDatos[i];
    if(i>0){
        element = element+'s';
    }
    console.log(`Tengo ${i+1} ${element}`);
}





