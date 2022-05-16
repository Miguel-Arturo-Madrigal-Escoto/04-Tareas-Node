const { cyan, red, magenta } = require('colors');

const mostrarMenu = () => {

    return new Promise((resolve, reject) => {

        console.clear();

        console.log(cyan(' ============================= '));
        console.log('     SELECCIONE UNA OPCIÓN ');
        console.log(cyan(' ============================= '));


        console.log(cyan(`${ magenta('1') }. Crear tarea`));
        console.log(cyan(`${ magenta('2') }. Listar tareas`));
        console.log(cyan(`${ magenta('3') }. Listar tareas completadas`));
        console.log(cyan(`${ magenta('4') }. Listar tareas pendientes`));
        console.log(cyan(`${ magenta('5') }. Completar tarea(s)`));
        console.log(cyan(`${ magenta('6') }. Borrar tarea`));
        console.log(cyan(`${ magenta('7') }. Salir`));


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`${ red('>') } Elige una opción: `, resp => {
            readLine.close();
            resolve(resp);
        })


    });


}


const pausa = () => {

    return new Promise((resolve, reject) => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`Presiona ENTER para continuar`, resp => {
            readLine.close();
            resolve(resp);
        })

    });


} 


module.exports = { mostrarMenu, pausa };


