
module = {}
const {Empresa,Direccion} = require('./23_modelos.js') /* El orden no influye. Hemos deconstruído el objeto */
module.exports.empresa = new Empresa( 'IBM', new Direccion('c/Joaquin','3','Madrid','España'), '648957489', '25547884R');
module.exports.frutas = new Empresa( 'Frutas', new Direccion('c/Salvador Dalí','9','Albacete','España'), '648976489', '25596884L') ;
module.exports.ordenadores = new Empresa( 'Ordenadores', new Direccion('c/Gregorio Marañón','86','Madrid','España'), '648948989', '2559645E') ;