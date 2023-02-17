const { multiplicar } = require('./src/multiplicar');
const argv = require('./config/yargs.js')

console.clear();

console.log(argv);


/* const [, , arg3 = 'base=5'] = process.argv
const [, base] = arg3.split('=') */


// const base = 5



multiplicar(argv.b, argv.l, argv.h)
    .then( nombre => console.log(nombre, 'creado' ))
    .catch((err => console.log( err )))


