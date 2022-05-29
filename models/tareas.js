
const Tarea = require('./tarea');

class Tareas {

    constructor(){
        this.listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    }

    toString(){
        return Object.values(this.listado);
    }

}


module.exports = Tareas;