const inquirer = require('inquirer');
const  { cyan } = require('colors');
const { stdin } = require('process');


const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const pauseQst = [
    {
        type: 'confirm',
        name: 'confirmacion',
        message: `Presiona ENTER para continuar`
    }
]

const inquirerMenu = async() => {

    console.clear();

    console.log(cyan(' ============================= '));
    console.log('     SELECCIONE UNA OPCIÓN ');
    console.log(cyan(' ============================= '));

    // espera a resolver la promesa con el await, es la respuesta del input
   
    const { opcion } = await inquirer.prompt(questions);

    return opcion;
}

const pause = () => ( inquirer.prompt(pauseQst) );

const leerInput = async ( message ) => {

    const question = [
        {
            type: 'input',
            name: 'descripcion',
            message,
            validate(value) {
                if (value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { descripcion } = await inquirer.prompt(question);

    return descripcion;

}



module.exports = {
    inquirerMenu, pause, leerInput
}