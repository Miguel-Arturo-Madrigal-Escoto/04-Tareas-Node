
const { nanoid } = require('nanoid');

class Tarea {

    constructor(desc){
        this.id = nanoid();
        this.desc = desc;
        this.completadoEn = null;
    }

}


module.exports = Tarea;