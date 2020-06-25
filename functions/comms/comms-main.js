"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ipcMain = require('electron').ipcMain;
var Comms = /** @class */ (function () {
    function Comms() {
        ipcMain.on('echo', function (event, args) {
            console.log("comms main = " + args[0]);
            event.sender.send('echo', args[0]);
        });
    }
    return Comms;
}());
exports.Comms = Comms;
//# sourceMappingURL=comms-main.js.map