const { ipcMain } = require('electron');

export class Comms {
    constructor () {
        ipcMain.on('echo', (event, args) => {
            console.log(`comms main = ${args[0]}`);
            event.sender.send('echo',args[0]);
        });
    }
  }