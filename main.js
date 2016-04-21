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

    cardDiv.innerHTML += "<article class=\"cards\" id=\""+ cardId + "\">"
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
			'<input type="color" class="bgColor" title="Background Color"></input>'+
    		'<input type="color" class="txtColor" title="Text Color"></div>'
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
  var rgbValue = hexToRgb(this.value);
  var compColor = complementaryColor(rgbValue);
  var compColorHolder = "2px solid rgb(" + compColor.r + ", " + compColor.g + ", " + compColor.b + ")";
  this.parentNode.style.border = compColorHolder;
  this.parentNode.querySelector('.deleteButtons').style.border = compColorHolder;
  this.parentNode.querySelector('.bgColor').style.border = compColorHolder;
  this.parentNode.querySelector('.txtColor').style.border = compColorHolder;

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





// function that computes the complementary color

function complementaryColor (thisrgb) {

  temprgb=thisrgb;
  temphsv=RGB2HSV(temprgb);
  temphsv.hue=HueShift(temphsv.hue,180.0);
  temprgb=HSV2RGB(temphsv);

  function RGB2HSV(rgb) {
      hsv = new Object();
      max=max3(rgb.r,rgb.g,rgb.b);
      dif=max-min3(rgb.r,rgb.g,rgb.b);
      hsv.saturation=(max==0.0)?0:(100*dif/max);
      if (hsv.saturation==0) hsv.hue=0;
      else if (rgb.r==max) hsv.hue=60.0*(rgb.g-rgb.b)/dif;
      else if (rgb.g==max) hsv.hue=120.0+60.0*(rgb.b-rgb.r)/dif;
      else if (rgb.b==max) hsv.hue=240.0+60.0*(rgb.r-rgb.g)/dif;
      if (hsv.hue<0.0) hsv.hue+=360.0;
      hsv.value=Math.round(max*100/255);
      hsv.hue=Math.round(hsv.hue);
      hsv.saturation=Math.round(hsv.saturation);
      return hsv;
  }

  // RGB2HSV and HSV2RGB are based on Color Match Remix [http://color.twysted.net/]
  // which is based on or copied from ColorMatch 5K [http://colormatch.dk/]
  function HSV2RGB(hsv) {
      var rgb=new Object();
      if (hsv.saturation==0) {
          rgb.r=rgb.g=rgb.b=Math.round(hsv.value*2.55);
      } else {
          hsv.hue/=60;
          hsv.saturation/=100;
          hsv.value/=100;
          i=Math.floor(hsv.hue);
          f=hsv.hue-i;
          p=hsv.value*(1-hsv.saturation);
          q=hsv.value*(1-hsv.saturation*f);
          t=hsv.value*(1-hsv.saturation*(1-f));
          switch(i) {
          case 0: rgb.r=hsv.value; rgb.g=t; rgb.b=p; break;
          case 1: rgb.r=q; rgb.g=hsv.value; rgb.b=p; break;
          case 2: rgb.r=p; rgb.g=hsv.value; rgb.b=t; break;
          case 3: rgb.r=p; rgb.g=q; rgb.b=hsv.value; break;
          case 4: rgb.r=t; rgb.g=p; rgb.b=hsv.value; break;
          default: rgb.r=hsv.value; rgb.g=p; rgb.b=q;
          }
          rgb.r=Math.round(rgb.r*255);
          rgb.g=Math.round(rgb.g*255);
          rgb.b=Math.round(rgb.b*255);
      }
      return rgb;
  }

  //Adding HueShift via Jacob (see comments)
  function HueShift(h,s) {
      h+=s; while (h>=360.0) h-=360.0; while (h<0.0) h+=360.0; return h;
  }

  //min max via Hairgami_Master (see comments)
  function min3(a,b,c) {
      return (a<b)?((a<c)?a:c):((b<c)?b:c);
  }
  function max3(a,b,c) {
      return (a>b)?((a>c)?a:c):((b>c)?b:c);
  }
  return temprgb;
}

// function that converts hex colors to rgb values
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
