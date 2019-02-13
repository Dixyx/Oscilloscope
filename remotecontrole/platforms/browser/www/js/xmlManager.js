// Array of questions object
var questions = new Array();

console.log("XmlManager : Load xml data.");
// Generate questions array
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() { if (this.readyState == 4 && this.status == 200) generateXml(this);};
xhttp.open("GET", "data.xml", true);
xhttp.send();

// Function used to generate questions array into question variable.              
function generateXml(xml) {
    var xmlDoc = xml.responseXML;

    // Get attributes from xml file into variables
	var idArray = 			xmlDoc.getElementsByTagName("id");
	var intituleArray = 	xmlDoc.getElementsByTagName("Intitule");
	var categorieArray = 	xmlDoc.getElementsByTagName("Categorie");
	var niveauArray = 		xmlDoc.getElementsByTagName("Niveau");
	var imageArray = 		xmlDoc.getElementsByTagName("Image");

	for (var i = 0; i < idArray.length; i++) {

		var id = 		idArray[i].childNodes[0].nodeValue;
		var intitule = 	intituleArray[i].childNodes[0].nodeValue;
		var categorie = categorieArray[i].childNodes[0].nodeValue;
		var niveau = 	niveauArray[i].childNodes[0].nodeValue;
		var image =		imageArray[i].childNodes[0].nodeValue;

		// Put values of current iteration into question object.
		questions.push({id: id, intitule: intitule, categorie: categorie, niveau: niveau, image: image});

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
	var nums = [], numsLen = 20, maxNum = questionArray.length-1, num;
	while (nums.length < numsLen) {
	    num = Math.round(Math.random() * maxNum);
	    if (nums.indexOf(num) === -1) {
	        nums.push(num);
	    }
	}
	window.localStorage.setItem("Random", nums);
}