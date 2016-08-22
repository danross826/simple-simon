'use strict';

// This variable will be the divs clicked

var numberClicked='';

// I need a variable for my sequence of numbers representing tiles to animate
var sequence=[];


// This is my index variable which I will use throughout
var i=0;

// I need a separate index for my animations

var lightI=0;

// I'm creating a counter to keep the game from starting multiple times

var startCounter=0;

// I need a variable to count rounds, and I need it in a function that will increase it under certain circumstances and display it

var roundCounter=0;

var roundChange=function(){
roundCounter++;
$('#round').text('Round '+roundCounter);
};

// This is my clear function which I will use in multiple ways

var clear=function(){
	sequence=[];
	roundCounter=0;
	startCounter=0;
	i=0;
}

// I need a function to convert numbers to strings of words representing numbers so I can grab with Jquery
// And another one that turns strings into numbers

var numConverter=function(number){
	if (number==1){
		number='one'
	}else if (number==2){
		number='two'
	}else if (number==3){
		number='three'
	}else if (number==4){
		number='four'
	}return number
}

var reverseNumConverter=function(string){
	if (string=='one'){
		string=1
	}else if (string=='two'){
		string=2
	}else if (string=='three'){
		string=3
	}else if (string=='four'){
		string=4
	}return string
}


var tileNumber=numConverter(sequence[0]);

var $tile=$('#'+tileNumber);

// I'll need two animate functions, one to animate it first then another to change it back

// var animate=function(tile){
// 	$(tile).fadeTo(500,.3);
// 	$(tile).fadeTo(500,1);
// };

var animate=function(tile){
	if (tile==(#one)){
		water.play()
	}
	if (tile==(#two)){
		earth.play()
	}
	if (tile==(#three)){
		fire.play()
	}
	if (tile==(#four)){
		air.play()
	}
	$(tile).fadeTo(500,.3);
	$(tile).fadeTo(500,1);
};


var lightUp=function(){
for (lightI = 0; lightI<(sequence.length); lightI++) {
		setTimeout(function(lightI){
		tileNumber=numConverter(sequence[lightI]);
		var tile=('#'+tileNumber);
		animate(tile);
		},1000*lightI,lightI);
	};
};


var randomNumber=function(){
	var number=Math.floor((Math.random() * 4) + 1);
	return number
}




// At some point, I'll need a loop to animate the things in the sequence
// I'll also need to encapsulate this in a function linked to the start button



var start=function(){
	clear();
	if (startCounter==0) {
	sequence.push(randomNumber());
	lightUp();
	startCounter++;
	}
}

// This is to play sounds when tiles are clicked

var water = $("#water")[0];
$("#one").click(function() {
    water.play();
})

var earth = $("#earth")[0];
$("#two").click(function() {
    earth.play();
})

var fire = $("#fire")[0];
$("#three").click(function() {
    fire.play();
})

var air = $("#air")[0];
$("#four").click(function() {
    air.play();
})


// Record id's of divs clicked they will become the numberClicked variable

var record=function(){
	if (startCounter!==0) {
	var $div=$(this).attr('id');
	$div=reverseNumConverter($div);
	numberClicked=$div;
	gameRunning();
	animate(this);
	};
}

// These functions will be the body of the game

var newRound=function(){
	i=0;
	sequence.push(randomNumber());
	lightUp();
	roundChange();
}


var gameRunning=function(){
if (numberClicked==sequence[i]) {
	++i
	if (i==sequence.length) {
		setTimeout(function(){
		newRound();
	},1500)
	};
}else if(numberClicked!=sequence[i]){
	alert("You Lose!")
	clear();
};
};





// I'll need event listeners for all the buttons and divs

$('#start').click(start);
$('#one').click(record);
$('#two').click(record);
$('#three').click(record);
$('#four').click(record);










