'use strict';

// This variable will be the divs clicked

var numberClicked='';

// I need a variable for my sequence of numbers representing tiles to animate
var sequence=[]

// I also need a sequence created by the user when they click

var userSequence=[]

// I also want a function to clear both sequences

// This is my index variable which I will use throughout
var i=0

// I need a separate index for my animations

var lightI=0

// This is my clear function which I will use in multiple ways

var clear=function(){
	sequence=[];
	userSequence=[];
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

var animate=function($tile){
	$tile.fadeTo(1500,.3)
	return $tile;
};

var animateTwo=function($tile){
	$tile.fadeTo(2000,1)
	return $tile;
}

var lightUp=function(){
for (lightI = 0; lightI<= (sequence.length-1); lightI++) {
		tileNumber=numConverter(sequence[i]);
		$tile=$('#'+tileNumber);
		animate($tile);
		animateTwo($tile);

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
	sequence.push(randomNumber());
	lightUp();
}

// Record id's of divs clicked they will become the numberClicked variable

var record=function(){
	var $div=$(this).attr('id');
	$div=reverseNumConverter($div);
	numberClicked=$div;
	gameRunning();
}

// These functions will be the body of the game

var newRound=function(){
	i=0;
	console.log('got to new round');
	sequence.push(randomNumber());
	lightUp();
}


var gameRunning=function(){
	console.log(numberClicked);
if (numberClicked==sequence[i]) {
	i++
	if (i==sequence.length) {
		newRound();
		console.log('in the if statement')
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










