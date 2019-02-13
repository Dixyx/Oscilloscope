document.addEventListener("deviceready", onDeviceReady, false);

var mac = "00:0B:CE:0B:84:F6";
/* klaxon 0 = OFF // 5 = BIP BIP */
var x;
var y;
var z;
var data1 = "#x="
var data2 = "#y="

/* trame = data1+x+data2+y */

function onDeviceReady() {

    if (window.localStorage.getItem("Mac") == null){
        window.localStorage.setItem("Mac",mac);
    }
    else{
        mac = window.localStorage.getItem("Mac");
    }

    var options = { frequency: 50 };
    /* La ligne du dessous est peut-être optionnelle ??? */
    navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    /* connection(); */
    bluetoothSerial.connect(mac);
}

function onSuccess(acceleration) {
    /*  document.getElementById('x').innerHTML = "x : " + (acceleration.x.toFixed(2)) / 2;
        document.getElementById('y').innerHTML = "y : " + (acceleration.y.toFixed(2)) / 2;
        document.getElementById('z').innerHTML = "z : " + (acceleration.z.toFixed(2)) / 2; */
    x = acceleration.x.toFixed(1);
    y = acceleration.y.toFixed(1);
    z = acceleration.z.toFixed(1);

    /* Affichage des données dans l'HTML */
    document.getElementById('bluetooth').innerHTML = "Bluetooth OK";
    document.getElementById('bluetooth').value = "Bluetooth OK";

    //bluetoothSerial.write(data1 + x + data2 + y)
}

function onError() {
    document.getElementById('bluetooth').innerHTML = "Bluetooth KO";
    document.getElementById('bluetooth').value = "Bluetooth KO";
}

function init(){
    // on récupère l'élément
    var elmt = document.getElementById("aside");
    // on modifie son style  
}

function openMac(){
    const elem = document.getElementById('modalMac');
    const instance = M.Modal.init(elem, {dismissible: false});
    document.getElementById("macValue").value = mac;
    instance.open();
}

function setMac(){

    mac = document.getElementById("macValue").value;
    window.localStorage.setItem("Mac",mac);
    closeMac();
    onDeviceReady();
}

function closeMac(){
    const elem = document.getElementById('modalMac');
    const instance = M.Modal.init(elem, {dismissible: false});
    instance.close();
}