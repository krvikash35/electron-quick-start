// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var myaddon = require('mynativeaddon');
const { createJabraApplication } = require('jabra-dev');

const jabra = createJabraApplication('YhufvN4CVGhrs2A8NbgXGyDQ1bjCkXsqrcVNuXimm2c=');

jabra.on('attach', () =>{
    console.log('device attached');
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
