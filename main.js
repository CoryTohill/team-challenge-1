//***************//Team Challenge No. 1//***************//

//Variable Definitions
var txtColor = document.getElementsByClassName('txtColor');
var bgColor = document.getElementsByClassName('bgColor');
var counter = 0;

// function that inserts user text into a new card after all previous cards created
var createCard = function () {
    var cardDiv = document.getElementById('cardsDiv');

    var cardId = "card" + counter;

    var text = "<p>" + document.getElementById("userText").value + "</p>";

    var deleteButtonHTML = "<input type=\"button\" value=\"Delete\" class=\"deleteButtons\"></input>";

    cardDiv.innerHTML += "<article id=\""+ cardId + "\">"
                      + text
                      + deleteButtonHTML
                      + "</article>";
    colorAdder(counter, cardId)
    eventListenerDelete();
    counter ++;
}

//Adds two color inputs to each new card created
var colorAdder = function (count,Id) {
		var inputNum = ("input"+counter);
		var cardId = document.getElementById(Id)
		var content = (
			'<input type="color" class="bgColor"></input>'+
    		'<input type="color" class="txtColor"></div>'
    		);
		content += cardId.innerHTML;
		cardId.innerHTML = content;
		bgColor = document.getElementsByClassName('bgColor');
		txtColor = document.getElementsByClassName('txtColor');
		colorChanger();
	}

//Adds event listeners to color inputs
var colorChanger = function () {
	for(i = 0; i < bgColor.length; i++) {
		txtColor = document.getElementsByClassName('txtColor')
		bgColor = document.getElementsByClassName("bgColor");
	    bgColor[i].addEventListener("change", backgroundChange);
		txtColor[i].addEventListener("change", textChange);
	}
};

//Changes background color of a given card
var backgroundChange = function() {	
	this.parentNode.style.backgroundColor = this.value;
}

//Changes text color of a given card
var textChange = function() {	
	this.parentNode.style.color = this.value;
}

// function that adds event listeners to delete buttons
function eventListenerDelete () {
  var deleteButton = document.getElementsByClassName("deleteButtons");
  var deleteLoopLength = deleteButton.length;

  for(i = 0; i < deleteLoopLength; i++) {
    deleteButton[i].addEventListener("click", deleteCard);
  }
}

// function that deletes the parent node of the selected element
function deleteCard () {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

// Creates event listener for create button
var createButton = document.getElementById("createButton");
createButton.addEventListener("click", createCard);
