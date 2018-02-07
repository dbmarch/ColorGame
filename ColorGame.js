// You need the spaces after the comma's or the check below won't work

var numSquares      = 6;
var colors          = [];
var squares         = document.querySelectorAll('.square');
var pickedColor     = pickColor();
var colorDiplay     = document.getElementById ('colorDisplay');
var resetButton     = document.querySelector('#newColorButton');
var h1              = document.querySelector ('h1');
var messageDisplay  = document.querySelector ('#message');
var modeButtons     = document.querySelectorAll ('.mode');
var game = {}

// Call the init function
game.init = function () {
    setupModeButtons();
    setupSquares();
    reset();

    // Setup the reset button
    resetButton.addEventListener ('click', function(){
        reset();
    })
}

game.init();

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    resetButton.textContent = 'New Colors'     
    messageDisplay.textContent = "";
    h1.style.backgroundColor = 'steelblue';        

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor =colors[i];
            squares[i].style.display = 'block';
        } else {
            squares[i].style.display = 'none';
        }
    }
}


// color the squares a single color
function changeColors (color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// Picks a color from our color array.  
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    console.log ('pick color: ' + random);
    return (colors[random]);
}

// fill in the color array.
function generateRandomColors (num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push (randomColor());
    }
    console.log ('generateRandomColors: ' + num);
    return arr;
}

//create a random rgb entry
function randomColor () {
    // Generate a random number between  1 and 255.
    var red   = Math.floor(Math.random() * 255 + 1 ),
        green = Math.floor(Math.random() * 255 + 1 ),
        blue  = Math.floor(Math.random() * 255 + 1 ); 
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}


function setupModeButtons() {
    // Mode button event listener
    for (var i  = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent == 'Easy' ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
     // setup the squares
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
                h1.style.backgroundColor = pickedColor;   
                resetButton.textContent = 'Play Again?'     
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
   
}