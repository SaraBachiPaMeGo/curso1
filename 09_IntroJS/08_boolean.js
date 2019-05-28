
let x=34;//Pos
x=-5;//Neg

if(x>=0){
    console.log('Positivo')
}else{
    console.log('Negativo')
}

//Todos los valores que devuelven falso

let w=false;
w=0;
w='';
w=null;
w=undefined;
if(w) {
/* if(Boolean (w)) { */    //Es lo mismo que lo de arriba, ya que los if siempre son booleanos
    console.log('verdadero')
}else{
    console.log('falso')
}

//Valores que dan true
w=true;
w=23;
w=-25;
w=' ';
w='Pepe';
w=[];
w={};

let q

if(q!=0){ //Se puede hacer con (q) sólo ya que el casting lo hace automáticamente
    console.log('q tiene valor')
}else {
    console.log('q es 0')
}

// cuando es q===x los tres iguales quiere decir que q es exactamente igual que x






