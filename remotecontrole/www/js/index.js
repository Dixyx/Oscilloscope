var mac = "00:06:66:DA:B2:E2";

var forme = "S";
var frequence = "500";
var offset = "0";
var generation = "R";


function onDeviceReady() {


    if (window.localStorage.getItem("Mac") == null){
        window.localStorage.setItem("Mac",mac);
    }
    else{
        mac = window.localStorage.getItem("Mac");
    }
}

//Clique sur le bouton "Bluetooth"
function openBluetooth(){ 

        document.addEventListener("deviceready", onDeviceReady, false);
        bluetoothSerial.connect(mac,alert('Bien reçu, merci de vérifier le Bluetooth manuellement via la diode bleu'),false);
}

function envoiBluetooth(){
        //LANCER CETTE FONCTION LORSQUE L'ON CLIQUE SUR LE BOUTON "START"

        //STOCKER LA VALEURS PRISE PAR LES DONNEES ALEATOIRES POUR POUVOIR S'EN SERVIR COMME ELEMENT DE REPONSE
        //LA CONVERSION EN CHAINE DE CARACTERE SE FAIT A L'AIDE SUR '+'


        //Définition forme du signal
        bluetoothSerial.write("WAS\n\r");
        //Reste à faire ci dessus: randomiser la dernière lettre après WA entre: S,P,T

        bluetoothSerial.clear(alert('Génération du signal en cours'));

        //Définition fréquence du signal
        bluetoothSerial.write("FA500\n\r");
        //Reste à faire ci dessus: randomiser la valeur en Hertz, entre 1 et 50

        bluetoothSerial.clear(alert('Génération du signal en cours'));

        //Reglage de l'offset
        bluetoothSerial.write("OA0\n\r");
        //Reste à faire ci dessus: randomiser la valeur en Volt, entre 1 et ..?

        bluetoothSerial.clear(alert('Génération du signal en cours'));

        //Génération du signal
        bluetoothSerial.write("GAR\n\r");
        //Reste à faire ci dessus: randomiser la dernière lettre: R (répetitive), S (unitaire), E (arrêt)

        bluetoothSerial.clear(alert('Fin de génération du signal'));


        //
        // //Définition forme du signal
        // bluetoothSerial.write("WA"+forme+"\n\r",alert('Commande 1 - Envoi bien effectué'),false);
        // //Reste à faire ci dessus: randomiser la dernière lettre après WA entre: S,P,T

        // bluetoothSerial.clear(alert('Génération du signal en cours'));

        // //Définition fréquence du signal
        // bluetoothSerial.write("FA"+frequence+"\n\r",alert('Commande 2 - Envoi bien effectué'),false);
        // //Reste à faire ci dessus: randomiser la valeur en Hertz, entre 1 et 50

        // bluetoothSerial.clear(alert('Génération du signal en cours'));

        // //Reglage de l'offset
        // bluetoothSerial.write("OA"+offset+"\n\r",alert('Commande 3 - Envoi bien effectué'),false);
        // //Reste à faire ci dessus: randomiser la valeur en Volt, entre 1 et ..?

        // bluetoothSerial.clear(alert('Génération du signal en cours'));

        // //Génération du signal
        // bluetoothSerial.write("GA"+generation+"\n\r",alert('Commande 4 - Envoi bien effectué'),false);
        // //Reste à faire ci dessus: randomiser la dernière lettre: R (répetitive), S (unitaire), E (arrêt)

        // bluetoothSerial.clear(alert('Fin de génération du signal'));


        // var chaine1 = "WA";
        // var chaine2 = "S";
        // var chaire3 = "\n\r";
        // var chaine4 = chaine1+chaine2+chaine3;

        // var chaine5 = "FA";
        // var chaine6 = "5";
        // var chaire7 = "\n\r";
        // var chaine8 = chaine5+chaine6+chaine7;

        // var chaine9 = "WA";
        // var chaine10 = "S";
        // var chaire11 = "\n\r";
        // var chaine12 = chaine9+chaine10+chaine11; 

        // var chaine13 = "WA";
        // var chaine14 = "S";
        // var chaire15 = "\n\r";
        // var chaine16 = chaine13+chaine14+chaine15;


        // //Définition forme du signal
        // bluetoothSerial.write(chaine4,alert('Commande 1 - Envoi bien effectué'));
        // //Reste à faire ci dessus: randomiser la dernière lettre après WA entre: S,P,T

        // bluetoothSerial.clear(alert('Génération du signal en cours'));

        // //Définition fréquence du signal
        // bluetoothSerial.write(chaine8,alert('Commande 2 - Envoi bien effectué'));
        // //Reste à faire ci dessus: randomiser la valeur en Hertz, entre 1 et 50

        // bluetoothSerial.clear(alert('Génération du signal en cours'));

        // //Reglage de l'offset
        // bluetoothSerial.write(chaine12,alert('Commande 3 - Envoi bien effectué'));
        // //Reste à faire ci dessus: randomiser la valeur en Volt, entre 1 et ..?

        // bluetoothSerial.clear(alert('Génération du signal en cours'));

        // //Génération du signal
        // bluetoothSerial.write(chaine16,alert('Commande 4 - Envoi bien effectué'));
        // //Reste à faire ci dessus: randomiser la dernière lettre: R (répetitive), S (unitaire), E (arrêt)

        // bluetoothSerial.clear(alert('Fin de génération du signal'));


}

//TENTER D'ENLEVER LE FALSE

//Clique sur le bouton "MAC"
function openMac(){ 

    //Récupération de la popUp
    const elem = document.getElementById('modalMac'); 

    //Récupération d'une instance de cette fenêtre
    const instance = M.Modal.init(elem, {dismissible: false}); 

    //Le textField du popUp prend la valeur de la variable 'mac'
    document.getElementById("macValue").value = mac; 

    //On ouvre une instance de la popup
    instance.open(); 
}

//Paramétrage
function setMac(){ 

    //Récuperation de la popUp dans la variable mac
    mac = document.getElementById("macValue").value; 

    //Stockage local, renseignement de son ID et de sa valeur
    window.localStorage.setItem("Mac",mac); 

    //Appel à la fonction closeMac
    closeMac(); 

    //Appel à la fonction onDeviceReady pour réaffecter l'adresse MAC
    onDeviceReady(); 
}

//Fermeture du bouton "MAC"
function closeMac(){ 

    //Récuperation de la popUp
    const elem = document.getElementById('modalMac'); 

    //Récuperation d'une instance de la fenêtre
    const instance = M.Modal.init(elem, {dismissible: false}); 

    //On ferme une instance de la popup
    instance.close(); 
}