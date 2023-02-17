const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: "The base of the table of multiply"
                })
                .check( ( argv, options ) => {
                    if( isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    demandOption: true,
                    describe: "Shows table per console"
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'El número al que llega'
                })
                .check( ( argv, options ) => {
                    if( isNaN(argv.b)){
                        throw ' "h" Tiene que ser un número '
                    }
                    return true
                })
                .argv;


module.exports = argv 