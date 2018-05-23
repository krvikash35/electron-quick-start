// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

process.env.DEBUG="";
var myaddon = require('mynativeaddon');
const { createJabraApplication } = require('jabra-dev');
const {ipcRenderer} = require('electron')

const jabra = createJabraApplication('YhufvN4CVGhrs2A8NbgXGyDQ1bjCkXsqrcVNuXimm2c=');

let device;
jabra.on('attach', (d) =>{
    console.log('device attached');
    d.lock();
    device = d;
})

jabra.on('detach', () => {
    console.log('device detached');
})


window.getSettingAsyncWithSync = function getSettingAsyncWithSync(){
    console.log('getImagePathSync entered');
    const imgPath = device.getImagePath();
    console.log('getImagePath returned');

    console.log('getSettingAsync entered');
    let startTime = Date.now();
    device.getSettingAsync()
        .then((settings) => {
            console.log('getSetting returned success..', Date.now()-startTime);
        })
        .catch((err) => {
            console.log('getSetting returned error', Date.now()-startTime);
        })
}


window.getSettingAsyncWithAsync = function getSettingAsyncWithAsync(){
    console.log('getImagePathAsync entered');
    device.getImagePathAsync()
        .then((path) => {
            console.log('getImagePathAsync returned success' )
        })
        .catch((err) => {
            console.log('getImagePathAsync returned error' )
        })

    console.log('getSettingAsync entered');
    let startTime = Date.now();
    device.getSettingAsync()
        .then((settings) => {
            console.log('getSetting returned success..', Date.now()-startTime);
        })
        .catch((err) => {
            console.log('getSetting returned error', Date.now()-startTime);
        })
}

window.getSettingAsync = function getSetting(){
    console.log('getSettingAsync entered');
    let startTime = Date.now();
    device.getSettingAsync()
        .then((settings) => {
            console.log('getSetting returned success..', Date.now()-startTime);
        })
        .catch((err) => {
            console.log('getSetting returned error', Date.now()-startTime);
        })
}

window.getImagePathAsync = function getImageAsync(){
    console.log('getImagePathAsync entered');
    device.getImagePathAsync()
        .then((path) => {
            console.log('getImagePathAsync returned success' )
        })
        .catch((err) => {
            console.log('getImagePathAsync returned error' )
        })
}

window.getImagePathSync = function getImageAsync(){
    console.log('getImagePathSync entered');
    device.getImagePath()
    console.log('getImagePathSync returned')
}

window.getLockAsync = function getLockAsync(){
    console.log('getLockAsync entered');
    device.lockAsync()
        .then(() => {
            console.log('getLockAsync returned success' )
        })
        .catch((err) => {
            console.log('getLockAsync returned error' )
        })
}

const labelEle = document.getElementById("myText");
let i =0;
setInterval(() => {
    i = i + 1;
    labelEle.value = i;
}, 500)


window.getSettingSync= function getSettingSync(){
    console.log('getImagePathSync entered');
    const imgPath = device.getImagePath();
    console.log('getImagePath returned');


    let startTime = Date.now();
    console.log('getSettingSync entered')
    const ret = device.getSetting();
    console.log('getSettingSync returned', Date.now()-startTime);
}





window.getSettingThroughMain = function getSettingThroughMain(){
    console.log('getSetting sent to main');
    setTimeout(() => {
        ipcRenderer.send('getSetting')
    }, 1000);
    // ipcRenderer.send('getSetting')
}



ipcRenderer.on('gotSetting', (event, data) => {
    console.log('got setting from main', data)
})





window.addSuccess =  function addSuccess(){
    const result = myaddon.add(3, 7);
    console.log('result of add:', result);
}

window.addCrash = function addCrash(){
    const result = myaddon.add(3);
    console.log('result of add:', result);
}