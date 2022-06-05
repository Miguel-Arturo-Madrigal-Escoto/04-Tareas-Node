
const Tarea = require('./tarea');
const { green, red }    = require('colors');

class Tareas {

    constructor(){
        this.listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    }

    cargarTareasArr(tareas = []){
        tareas.forEach(tarea => {
            this.listado[tarea.id] = tarea;
        });
    }

    toString(){
        return Object.values(this.listado);
    }

    mostrarTareas(tareas = []){
        console.log();
        tareas.forEach((tarea, index) => {
            console.log(`${ green((index + 1) + '.') } ${ tarea.desc } :: ${ (tarea.completadoEn)? green('Completada') : red('Pendiente') }`);
        });
    }

    listadoCompleto(){
        const tareas = Object.values(this.listado);
        this.mostrarTareas(tareas);
    }

    listarPendientesCompletadas(completadas = true){
        const tareas = (!completadas) 
                      ? Object.values(this.listado).filter(
                          tarea => !tarea.completadoEn
                      )
                      : Object.values(this.listado).filter(
                          tarea => tarea.completadoEn
                      );
        this.mostrarTareas(tareas);
    }

}


module.exports = Tareas;