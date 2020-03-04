const drivelist = require('drivelist');

getDrives();

async function getDrives () {
    const drives = await drivelist.list();
    drives.forEach((drive) => {
        console.log(drive);
      });
}