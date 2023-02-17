const fs = require('fs');
var colors = require('colors/safe');

const multiplicar = async( base, l, h ) => {

    
    let salida, consola = ''

    try {

        for(x = 1; x <= h; x++){
            salida += (`${ base } x ${x} = ${base*x}\n`);
            consola += (`${ base } x ${x} = ${ colors.brightGreen(base*x)}\n`);
        }
    
        if ( l === true ) {
            console.log('==============================');
            console.log(`\tTabla del ${ colors.green (base) }:`);
            console.log('==============================');
            console.log(consola);
           
        }
        fs.writeFileSync( `./salida/tabla${ base }.txt`, salida)
        return `tabla${ base }.tx`
    } catch ( err ) {
        throw err 
    }

    
}

module.exports = { multiplicar }