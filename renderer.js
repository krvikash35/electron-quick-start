// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var myaddon = require('mynativeaddon');
const { createJabraApplication } = require('jabra-dev');

const jabra = createJabraApplication('YhufvN4CVGhrs2A8NbgXGyDQ1bjCkXsqrcVNuXimm2c=');

jabra.on('attach', (device) =>{
    console.log('device attached');
    device.lock();
    device.getSettingAsync()
        .then((settings) => {
            console.log('got settings..', settings)
        })
        .catch((err) => {
            console.log('error while getting settings', err);
        })
        setInterval(() => {
            console.log('keep going... at every 1sec');
        }, 1000)
})

jabra.on('detach', () => {
    console.log('device detached');
})

window.addSuccess =  function addSuccess(){
    const result = myaddon.add(3, 7);
    console.log('result of add:', result);
}

window.addCrash = function addCrash(){
    const result = myaddon.add(3);
    console.log('result of add:', result);
}
