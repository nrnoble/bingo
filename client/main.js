// Neal Noble
// Sergio Ramirez
// Meteor Team project: Bingo Time
// May 2016


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { getNextBingoNumberPicked } from './globalHelpers.js';
import { sleep } from './globalHelpers.js';

import './main.html';

Template.bingoSquare.onCreated(function bingoSquareOnCreated()
{

});

// Button used to start a new bingo game
Template.startGame.onCreated(function startGameOnCreated()
{
    // counter starts at 0
    this.pickedBingoNumber = new ReactiveVar(0);
    this.counter = new ReactiveVar(0);
});

Template.pickedBingoBall.onCreated(function pickedBingoBallOnCreated()
{
    // counter starts at 0
    this.pickedBingoNumber = new ReactiveVar(0);
    this.counter = new ReactiveVar(0);
});



Template.startGame.helpers({
    pickedBingoNumber() {
        return Template.instance().pickedBingoNumber.get();
    }
});

Template.pickedBingoBall.helpers({
    pickedBingoNumber() {
        return Template.instance().pickedBingoNumber.get();
    },
});


var runStatus = false;
var buttonInstance = null;
var PICK_TIMER = 5000;
Template.startGame.events({
    
    'click button'(event, instance) 
    {
        console.log("Entering Template.startGame.events");
        // increment the counter when button is clicked
        // instance.counter.set(instance.counter.get() + 1);
        //var pickedNumber = getNextBingoNumberPicked(true);
        //var  id = pickedNumber;
        buttonInstance = instance;
        runStatus = !runStatus;
        //$('#startButton').disabled = true;
        //gameLoop (pause, instance);

        //document.getElementById("startButton").disabled = false;

        //var bingoNumber = $('#bingo'+ pickedNumber).css( "filter", "invert(100%)");
        //$('#bingo'+pickedNumber).css( "border", "3px solid red" );
        //$('#bingo'+pickedNumber).css( "background-color", "yellow" );
        //$('#bingo'+id).css( "background-color", "yellow" );
        //console.log("bingoNumber: " + '#bingo'+ pickedNumber);
        //instance.pickedBingoNumber.set(pickedNumber);

        // document.getElementById("startButton").disabled = true;
        // sleep(3000);

        //var myVar = setInterval(myTimer ,1000);
        var gameInstance = null;
        if (runStatus)
        {
            gameInstance = setInterval(gameLoop, PICK_TIMER);
            document.getElementById("startButton").innerHTML = "Running. Click to Pause";
        }
        else
        {
            clearInterval(gameInstance);
            document.getElementById("startButton").innerHTML = "Paused. Click to resume";
        }


        console.log("Exiting Template.startGame.events");

    }
});



function myTimer() {
    var d = new Date();
   // document.getElementById("jumbotron").innerHTML = d.toLocaleTimeString();
    document.getElementById("startButton").innerHTML = d.toLocaleTimeString();
}


function gameLoop(pause, instance )
{
    console.log("entering function gameLoop");
    var pickedNumber = getNextBingoNumberPicked(true);
    var id = pickedNumber;


        $('#bingo' + id).css("background-color", "yellow");
        $('#pickedBingoBall').html(pickedNumber);


    console.log("exiting function gameLoop");
}






