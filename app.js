const { cyan } = require('colors');
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pause, leerInput, listadoTareasBorrar, confirmar, listadoTareasCheckBox } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
//const { mostrarMenu, pausa } = require("./helpers/mostrarMenu")


const main = async() => {

    let opc = '';

    // recopilador de tareas
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){
        tareas.cargarTareasArr(tareasDB);
    }


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
                tareas.listadoCompleto();
                break;
            
            case '3':
                tareas.listarPendientesCompletadas();
                break;
            
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;

            case '5':
                const ids = await listadoTareasCheckBox(tareas.toString())
                tareas.toggleCompletadas(ids);
                break;

            case '6':
                const id = await listadoTareasBorrar(tareas.toString());
                if (id !== '0'){
                    const ok = await confirmar('¿Está seguro?');
                    if (ok){
                        tareas.borrarTarea(id);
                        console.log(cyan('Tarea borrada.'));
                    }
                }               
                break;
         

        }

        // al guardar las tareas se almacenan en forma de arreglo de objetos
        guardarDB(tareas.toString());
             
        await pause();

    } while (opc !== '0');

}


main();