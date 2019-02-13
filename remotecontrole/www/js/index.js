var mac = "00:06:66:FA:B2:E2";


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
        document.addEventListener("deviceready", onDeviceReady, alert('Merci de bien vouloir activer votre Bluetooth'));
        bluetoothSerial.connect(mac,alert('Connexion Bluetooth bien effectuée'),alert('Connexion Bluetooth NON effectuée'));
}

function envoiBluetooth(){
        //LANCER CETTE FONCTION LORSQUE L'ON CLIQUE SUR LE BOUTON "START"
        //(Besoin d'un délai afin de s'assurer qu'il se lance bien?)

        //STOCKER LA VALEURS PRISE PAR LES DONNEES ALEATOIRES POUR POUVOIR S'EN SERVIR COMME ELEMENT DE REPONSE
        // var forme = ;
        // var frequence = ;
        // var offset = ;
        // var generation = ;
        //LA CONVERSION EN CHAINE DE CARACTERE SE FAIT A L'AIDE SUR '+'


        //Essayer de remplacer "" par '' si non concluant?

        //Définition forme du signal
        bluetoothSerial.write("WAS",alert('Commande 1 - Envoi bien effectué'),alert('Commande 1 - Envoi non effectué'));


        //Définition fréquence du signal
        bluetoothSerial.write("FA5",alert('Commande 2 - Envoi bien effectué'),alert('Commande 2 - Envoi non effectué'));
        //Reste à faire ci dessus: randomiser la valeur en Hertz, entre 1 et 50

        //Reglage de l'offset
        bluetoothSerial.write("OA0",alert('Commande 3 - Envoi bien effectué'),alert('Commande 3 - Envoi non effectué'));
        //Reste à faire ci dessus: randomiser la valeur en Volt, entre 1 et ..?

        //Génération du signal
        bluetoothSerial.write("GAR",alert('Commande 4 - Envoi bien effectué'),alert('Commande 4 - Envoi non effectué'));
        //Reste à faire ci dessus: randomiser la dernière lettre: R (répetitive), S (unitaire), E (arrêt)


        // Si attente nécessaire, essayer avec ce code:
        
        // setTimeout(bluetoothSerial.write("WAS",alert('Commande 1 - Envoi bien effectué'),alert('Commande 1 - Envoi non effectué')), 2500);
        // setTimeout(bluetoothSerial.write("FA5",alert('Commande 2 - Envoi bien effectué'),alert('Commande 2 - Envoi non effectué')), 2500);
        // setTimeout(bluetoothSerial.write("OA0",alert('Commande 3 - Envoi bien effectué'),alert('Commande 3 - Envoi non effectué')), 2500);
        // setTimeout(function() {bluetoothSerial.write("GAR",alert('Commande 4 - Envoi bien effectué'),alert('Commande 4 - Envoi non effectué')), 2500);




        // BROUILLON A COPIER COLLER SI BESOIN:
        // //Définition forme du signal
        // bluetoothSerial.write("WA" + forme,alert('Commande 1 - Envoi bien effectué'),alert('Commande 1 - Envoi non effectué'));
        // //Reste à faire ci dessus: randomiser la dernière lettre après WA entre: S,P,T

        // //Définition fréquence du signal
        // bluetoothSerial.write("FA" + frequence,alert('Commande 2 - Envoi bien effectué'),alert('Commande 2 - Envoi non effectué'));
        // //Reste à faire ci dessus: randomiser la valeur en Hertz, entre 1 et 50

        // //Reglage de l'offset
        // bluetoothSerial.write("OA" + offset,alert('Commande 3 - Envoi bien effectué'),alert('Commande 3 - Envoi non effectué'));
        // //Reste à faire ci dessus: randomiser la valeur en Volt, entre 1 et ..?

        // //Génération du signal
        // bluetoothSerial.write("GA" + generation,alert('Commande 4 - Envoi bien effectué'),alert('Commande 4 - Envoi non effectué'));
        // //Reste à faire ci dessus: randomiser la dernière lettre: R (répetitive), S (unitaire), E (arrêt)


}

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