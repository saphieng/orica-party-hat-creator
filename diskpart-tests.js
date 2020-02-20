const { exec } = require("child_process");
const path = require('path')
console.log(path.join(__dirname, 'diskpart-scripts/list-disks.txt'));


exec(`wmic logicaldisk get deviceid, volumename, description`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`${stdout}`);
  });