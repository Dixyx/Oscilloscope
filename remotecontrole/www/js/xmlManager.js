// Array of questions object
// On stockera ici toute l'architecture du XML (chaque élement = 1 question)
var questions = new Array();

// Console.log : permet une sorte de feedback lors des test
console.log("XmlManager : Load xml data.");

// Generate questions array
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() { if (this.readyState == 4 && this.status == 200) generateXml(this);};
xhttp.open("GET", "data.xml", true);
xhttp.send();

// Function used to generate questions array into question variable.              
function generateXml(xml) {
    var xmlDoc = xml.responseXML; //Requete au fichier - Variable qui contient tout le contenu du XML, qu'on traite par la suite

    // Get attributes from xml file into variables
	var idArray = 			xmlDoc.getElementsByTagName("id"); 			//1 tableau avec tout les ID
	var intituleArray = 	xmlDoc.getElementsByTagName("Intitule");	//1 tableau avec tout les intitules
	var categorieArray = 	xmlDoc.getElementsByTagName("Categorie");	//1 tableau avec tout les categories
	var niveauArray = 		xmlDoc.getElementsByTagName("Niveau");		//1 tableau avec tout les niveaux
	var imageArray = 		xmlDoc.getElementsByTagName("Image");		//1 tableau avec tout les images
	var reponseArray = 		xmlDoc.getElementsByTagName("Reponse");		//1 tableau avec tout les ID

	for (var i = 0; i < idArray.length; i++) { //Parcours des tableaux, et liaisons des differents elements pour en faire une question

		var id = 		idArray[i].childNodes[0].nodeValue;
		var intitule = 	intituleArray[i].childNodes[0].nodeValue;
		var categorie = categorieArray[i].childNodes[0].nodeValue;
		var niveau = 	niveauArray[i].childNodes[0].nodeValue;
		var image =		imageArray[i].childNodes[0].nodeValue;
		var reponse =   reponseArray[i].childNodes[0].nodeValue;

		// Put values of current iteration into question object.
		//Création d'un nouvel élement sur le tableau question
		questions.push({id: id, intitule: intitule, categorie: categorie, niveau: niveau, image: image, reponse: reponse});
		//premier argument: son nom, deuxieume valeur : valeur au dessus)

		if (questions[i] === undefined || questions[i].length == 0) {
    		console.log("XmlManager : Error during row[" + i +"] loading!");
		}
		else{
			console.log("XmlManager : Load row[" + i +"] success : " + questions[i].intitule);
		}
		
	}


	console.log("XmlManager : End of generation.");
}


function onLoadXmlJs(niveau){ 
	setCategories(niveau);
}


// Set list of categorie into local storage
function setCategories(niveau){
	var categories = new Array();

	// Browse questions table and push categorie without duplicate items
	for (var i = 0; i<questions.length; i++){
		if (!in_array(categories, questions[i].categorie) && (questions[i].niveau == niveau)){
			categories.push(questions[i].categorie)
		}
	}
	// Set categorie table into local storage
	window.localStorage.setItem("Categories", categories);

	// Method used to get a categorie from local storage (Here value in first position 0)
	// window.localStorage.getItem("Categories").split(",")[0];

}

// Check if id exists into array
function in_array(array, id) {
    for (var j=0; j<array.length; j++) {
    	
    	if (array[j] == id){
    		return true;
    	}
    }
    return false;
}

// Set random questions 
function setQuestionSerie(){
	var questionArray = new Array();
	var reponseArray = 	new Array();
	var imgArray =		new Array();

    var niveau = 	window.localStorage.getItem("Niveau");
    var categorie = window.localStorage.getItem("En cours");

	for (var i = 0; i<questions.length; i++){
	    if ((questions[i].categorie == categorie) && (questions[i].niveau == niveau)){
	        questionArray.push(questions[i].intitule);
	        reponseArray.push(questions[i].reponse);
	        imgArray.push(questions[i].image);
	    }
	}

	window.localStorage.setItem("Questions", questionArray);
	window.localStorage.setItem("Responses", reponseArray);
	window.localStorage.setItem("Images", imgArray);

	// Random position
	// Création et remplissage d'un tableau vide (voir via phonegap sur navigateur)
	var nums = [], numsLen = 20, maxNum = questionArray.length-1, num;
	while (nums.length < numsLen) {
	    num = Math.round(Math.random() * maxNum);
	    if (nums.indexOf(num) === -1) {
	        nums.push(num);
	    }
	}
	window.localStorage.setItem("Random", nums);

	//FAIRE UN COUP AVEC PHONEGAP ET LA CONSOLE A COTER POUR COMPRENDRE LA VIE
}