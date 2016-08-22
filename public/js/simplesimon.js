$(document).ready(function(){
    'use strict';



    // This variable represents divs clicked

    var numberClicked='';

    // Sequence of tiles to be animated
    var sequence=[];

    // Base index
    var i=0;

    // Index for animation sequence

    var lightI=0;

    // Counter to control if the divs can be pressed before round begins

    var startCounter=0;

    // Round tracking variable

    var roundCounter=0;

    // Round tracking function

    var roundChange=function(){
        roundCounter++;
        $('#round').text('Round '+roundCounter);
    };




    // Plays audio when tiles are clicked

    var water = $("#water")[0];
    $("#one").click(function() {
        water.play();
    });

    var earth = $("#earth")[0];
    $("#two").click(function() {
        earth.play();
    });

    var fire = $("#fire")[0];
    $("#three").click(function() {
        fire.play();
    });

    var air = $("#air")[0];
    $("#four").click(function() {
        air.play();
    });

    // Function to reenable click events when I'm done deactivating them

    var enableTileClick=function(){
        $('#one').click(record);
        $('#two').click(record);
        $('#three').click(record);
        $('#four').click(record);
        var water = $("#water")[0];
    $("#one").click(function() {
        water.play();
    })

    earth = $("#earth")[0];
    $("#two").click(function() {
        earth.play();
    })

    fire = $("#fire")[0];
    $("#three").click(function() {
        fire.play();
    })

    air = $("#air")[0];
    $("#four").click(function() {
        air.play();
    })
    };

    // Clear function clears out sequence and counters

    var clear=function(){
        sequence=[];
        roundCounter=0;
        startCounter=0;
        i=0;
    };

    // These functions convert numbers to strings and vice versa

    var numConverter=function(number){
        if (number==1){
            number='one';
        }else if (number==2){
            number='two';
        }else if (number==3){
            number='three';
        }else if (number==4){
            number='four';
        }return number
    };

    var reverseNumConverter=function(string){
        if (string=='one'){
            string=1;
        }else if (string=='two'){
            string=2;
        }else if (string=='three'){
            string=3;
        }else if (string=='four'){
            string=4;
        }return string;
    }

    // These variables are for turning tiles into numbers to be used in functions then turning them into strings to be used as ID's

    var tileNumber=numConverter(sequence[0]);

    var $tile=$('#'+tileNumber);

    // Animates tiles


    var animate=function(tile){
        if (tile==('#one')){
            water.play();
        }
        if (tile==('#two')){
            earth.play();
        }
        if (tile==('#three')){
            fire.play();
        }
        if (tile==('#four')){
            air.play();
        }
        $(tile).fadeTo(500,.3);
        $(tile).fadeTo(500,1);
    };

    //Animates tiles according to sequence during new round

    var lightUp=function(){
        $('.blocks').off("click");
    for (lightI = 0; lightI<(sequence.length); lightI++) {
            setTimeout(function(lightI){
                tileNumber=numConverter(sequence[lightI]);
                var tile=('#'+tileNumber);
                animate(tile);
            },1000*lightI,lightI);
        };
        setTimeout(function () {
            enableTileClick();
        },1000*lightI,lightI);
    };

    //Random number generator

    var randomNumber=function(){
        var number=Math.floor((Math.random() * 4) + 1);
        return number;
    }




    //Start button function, it includes the clear function so it clears out sequence and all comments, it also starts new round


    var start=function(){
        clear();
        roundChange();
        if (startCounter==0) {
        sequence.push(randomNumber());
        lightUp();
        startCounter++;
        }
    }

    // Initiates functions when tiles are clicked

    var record=function(){
        if (startCounter!==0) {
            var $div=$(this).attr('id');
            $div=reverseNumConverter($div);
            numberClicked=$div;
            gameRunning();
                if(startCounter!==0) {
                    animate(this);
                };
        };
    }

    // Function for starting new round

    var newRound=function(){
        i=0;
        sequence.push(randomNumber());
        lightUp();
        roundChange();
    }

    //Core game logic tracks tiles clicked and compares them to sequence, if player gets it wrong, they'll get an alert saying they lost and it will performs clear function
    // Animations won't start until new round begins after pressing start button'

    var gameRunning=function(){
    if (numberClicked==sequence[i]) {
        ++i;
        if (i==sequence.length) {
            setTimeout(function(){
            newRound();
        },1500)
        };
    }else if(numberClicked!=sequence[i]){
        alert("You Lose!");
        clear();
        $('#round').text('Round '+roundCounter);
    };
    };





    // Event listeners

    $('#start').click(start);
    $('#one').click(record);
    $('#two').click(record);
    $('#three').click(record);
    $('#four').click(record);

});













