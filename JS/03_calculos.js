function suma(a=0 ,b=0) {
    /* if (typeof a ==  ) {
        
    } */
    let c= +a+b;    
    return +c;
}

function resta(a=0 ,b=0) {
    let c= a-b;    
    return c;
}

function multi(a=0 ,b=0){
    return a*b;
}
function division(a=0 ,b=1){
   return 'La división de a y b es ' + a/b;

}


module.exports = {};
module.exports.suma = suma;
module.exports.resta = resta;
module.exports.division = division;
module.exports.multi = multi;