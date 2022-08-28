 const argv  = require('./config/yargs');
const yargs = require('yargs');
const { option } = require('yargs');
const  { crearArchivo } = require('./helpers/multiplicar');

console.clear();    






// const base= 3;


crearArchivo(argv.b, argv.l, argv.h)
 .then (nombreArchivo => console.log(nombreArchivo,'creado'))
 .catch(err => console.log(err));