const { inquirerMenu, pause } = require("./helpers/inquirer");
//const { mostrarMenu, pausa } = require("./helpers/mostrarMenu")


const main = async() => {

    let opc = '';

    do {

        opc = await inquirerMenu();
        console.log({ opc });
        await pause();
        

    } while (opc !== '0');

}


main();