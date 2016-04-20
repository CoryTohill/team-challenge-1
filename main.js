<<<<<<< HEAD
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


// function that inserts user text into a new card after all previous cards created
var createCard = function () {

    var text = document.getElementById("userText").value;
    var cardDiv = document.getElementById('cardsDiv');

    cardDiv.innerHTML += "<article><p>" + text + "</p></article>";
}


var createButton = document.getElementById("createButton");
createButton.addEventListener("click", createCard);
=======
alert("test");
>>>>>>> master
