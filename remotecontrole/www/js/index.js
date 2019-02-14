var mac = "00:06:66:DA:B2:E2";



function generationGrandeursRandom(){
var frequence = Math.floor((Math.random() * 100) + 1); //Return a random number between 1 and 100
var amp = Math.floor((Math.random() * 10) + 1); //Return a random number between 1 and 10

//Randomisation de la variable generation
var generationArray = ["R","S","E"];
var posGeneration = Math.floor((Math.random() * generationArray.length) + 0);
var generation = generationArray[posGeneration];

//Randomisation de la variage forme
var formeArray = ["S","P","T"];
var posForme = Math.floor((Math.random() * formeArray.length) + 0);
var forme = formeArray[posForme];



//Stockage local des différents variables pour la réutilisation dans le XML (?), renseignement de son ID et de sa valeur
window.localStorage.setItem("Forme",forme); 
window.localStorage.setItem("Frequence",frequence);
window.localStorage.setItem("Amplitude",amp);
window.localStorage.setItem("Generation",generation);

}


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
        bluetoothSerial.connect(mac,alert('OK. Merci de vérifier le Bluetooth manuellement via la diode bleu'),false);
}

function envoiBluetooth(){
        //LANCER CETTE FONCTION LORSQUE L'ON CLIQUE SUR LE BOUTON "Envoi"

        //STOCKER LA VALEURS PRISE PAR LES DONNEES ALEATOIRES POUR POUVOIR S'EN SERVIR COMME ELEMENT DE REPONSE
        //LA CONVERSION EN CHAINE DE CARACTERE SE FAIT A L'AIDE SUR '+'

        generationGrandeursRandom();

        //Définition forme du signal
        bluetoothSerial.write("WA"+forme+"\n\r");
        //Reste à faire ci dessus: randomiser la dernière lettre après WA entre: S,P,T

        bluetoothSerial.clear(alert('Génération du signal en cours'));

        //Définition fréquence du signal
        bluetoothSerial.write("FA"+frequence+"\n\r");
        //Reste à faire ci dessus: randomiser la valeur en Hertz, entre 1 et 50

        bluetoothSerial.clear(alert('Génération du signal en cours'));

        //Reglage de l'amplitude
        bluetoothSerial.write("AA"+amp+"\n\r");
        //Reste à faire ci dessus: randomiser la valeur en XX, entre 1 et ..?

        bluetoothSerial.clear(alert('Génération du signal en cours'));

        //Génération du signal
        bluetoothSerial.write("GA"+generation+"\n\r");
        //Reste à faire ci dessus: randomiser la dernière lettre: R (répetitive), S (unitaire), E (arrêt)

        bluetoothSerial.clear(alert('Fin de génération du signal')); //



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