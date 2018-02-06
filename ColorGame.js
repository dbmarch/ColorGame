// You need the spaces after the comma's or the check below won't work

var colors = generateRandomColors(6);

var squares =document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDiplay = document.getElementById ('colorDisplay');

colorDisplay.textContent = pickedColor.toUpperCase();
var messageDisplay = document.querySelector ("#message");

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor =colors[i];
    // add click listeners to squares
    squares[i].addEventListener('click', function(){
        clickedColor = this.style.backgroundColor;
        // console.log(clickedColor)
        // console.log (pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "You Guessed correctly!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = "Try Again!";
        }
    });
}


function changeColors (color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return (colors[random]);
}

function generateRandomColors (num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push (randomColor());
    }
    return arr;
}

function randomColor () {
    var red   = Math.floor(Math.random() * 255 + 1 ),
        green = Math.floor(Math.random() * 255 + 1 ),
        blue  = Math.floor(Math.random() * 255 + 1 ); 
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}