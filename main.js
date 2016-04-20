
// Challenge #1

// 1 Create an HTML page that contains a text area and a button labeled Create.

// 2 When the user enters in text into the text area and then clicks the create button,
//   create a new card element in the DOM - similar to the quiz and group project.

// 3 You decide the height/width of the card.

// 4 Above the text on each card, there must be two input controls of type color.

// 5 Above the text on each card, there must be a button element labeled Delete.

// 6 When the user selects a color from the first input, then the background color of that card,
//   and no other cards, should change to the color chosen.

// 7 When the user selects a color from the second input, then the font color of that card,
//   and no other cards, should change to the color chosen.

// 8 When the user clicks the Delete button, the containing card,
//   and no other cards, should then be removed from the DOM. Not just made invisible,
//   actually removed from the DOM.




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
    counter ++;

    eventListenerDelete();
}

var colorAdder = function (count,Id) {
		var inputNum = ("input"+counter);
		var content = (
			'<input type="color" id="bgColor'+inputNum+'"></input>'+
    		'<input type="color" id="txtColor"'+inputNum+'"></div>'
    		);
		content += Id.innerHTML;
		console.log(content);
		Id.innerHTML = content;
	}
};

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




var createButton = document.getElementById("createButton");
createButton.addEventListener("click", createCard);

