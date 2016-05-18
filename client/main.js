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
    }
});


var runStatus = false;
var buttonInstance = null;
var PICK_TIMER = 5000;

Template.startGame.events({
    
    'click button'(event, instance) 
    {
        console.log("Entering Template.startGame.events");
        var gameInstance = null;

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
        var timerDelay = document.getElementById("pickTimerDelay").value;
        console.log("timerDelay: " + timerDelay);
        // document.getElementById("startButton").disabled = true;

        // sleep(3000);

        //var myVar = setInterval(myTimer ,1000);
        if (runStatus)
        {
            //gameInstance = setInterval(gameLoop, PICK_TIMER);
            gameInstance = setInterval(gameLoop, timerDelay);
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


// Used for testing purposes. Not part of game
function myTimer()
{
    var d = new Date();
   // document.getElementById("jumbotron").innerHTML = d.toLocaleTimeString();
    document.getElementById("startButton").innerHTML = d.toLocaleTimeString();
}

// main game loop. This is where bingo numbers are picked during game play.
function gameLoop(pause, instance )
{
    console.log("entering function gameLoop");
    var pickedNumber = getNextBingoNumberPicked(true);
    var id = pickedNumber;


        $('#bingo' + id).css("background-color", "yellow");
        $('#pickedBingoBall').html(pickedNumber);

    console.log("exiting function gameLoop");
}


// Returns 12 arrays of representing possible winning rows, columns, and diagonals.
// 5 columns
// 5 rows
// 2 diagonals
export function verifyBingo()
{
    var bingo = [12];
    bingo[0] = [01, 02, 03, 04, 05];
    bingo[1] = [06, 07, 8, 9, 10];
    bingo[2] = [11, 12, 13, 14, 15];
    bingo[3] = [16, 17, 18, 19, 20];
    bingo[4] = [21, 22, 23, 24, 25];

    bingo[5] = [01, 06, 11, 16, 21];
    bingo[6] = [02, 07, 12, 17, 22];
    bingo[7] = [03, 8, 13, 18, 23];
    bingo[8] = [04, 9, 14, 19, 24];
    bingo[9] = [05, 10, 15, 20, 25];

    bingo[10] = [05, 9, 13, 17, 21];
    bingo[11] = [01, 07, 13, 19, 25];

    return bingo;
}



