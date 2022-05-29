const { guardarDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pause, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
//const { mostrarMenu, pausa } = require("./helpers/mostrarMenu")


const main = async() => {

    let opc = '';

    // recopilador de tareas
    const tareas = new Tareas();

    do {
        // esperar a que se resuelva la promesa (el usuario elige una opcion)
        opc = await inquirerMenu();
    
        switch(opc){
            case '1':
                // esperar a que se resuelva la promesa del prompt (input de descripcion)
                const descripcion = await leerInput('Descripcion: ');
                tareas.crearTarea(descripcion);
                break;

            case '2':
                console.log(tareas.toString());
                break;
            

        }

        guardarDB(tareas.toString());
        
        
        await pause();

    } while (opc !== '0');

}


main();