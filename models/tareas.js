
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
            console.log(`${ green((index + 1) + '.') } ${ tarea.desc } :: ${ (tarea.completadoEn)? green(tarea.completadoEn) : red('Pendiente') }`);
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

    borrarTarea(id = ''){
        if (this.listado[id]){
            delete this.listado[id];
        }
    }

    toggleCompletadas(ids = []){
        ids.forEach(id => {
            const tarea = this.listado[id];
            if (!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        });

        Object.values(this.listado).forEach(tarea => {
            if (!ids.includes(tarea.id)){
                this.listado[tarea.id].completadoEn = null;
            }
        });
    }

}


module.exports = Tareas;