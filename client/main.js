// Neal Noble
// Sergio Ramirez
// Meteor Team project: Bingo Time
// May 2016


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { getNextBingoNumberPicked } from './globalHelpers.js';
import { Meteor } from 'meteor/meteor';
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



// runStatus toggles the game between run and pause.
var runStatus = false;

var buttonInstance = null;

// PICK_TIMER is the delay for between picking bingo ball numbers. 1000 = 1 second
var PICK_TIMER = 5000;

// gameInstance holds value for the interval timer
var gameInstance = null;

Template.startGame.events({
    
    'click button'(event, instance) 
    {
        console.log("Entering Template.startGame.events");
        // var serverTestVar = Meteor.call('serverVarTest');
        // console.log("serverTestVar: " + serverTestVar);
        //
        // var myMethodTest =  Meteor.call('serverVarTest');
        // console.log("myMethodTest: " + myMethodTest);

        Meteor.call('serverVarTest',function(error,result)
        {
            console.log("result: " + result);
        });




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


        //var myVar = setInterval(myTimer ,1000);
        if (runStatus)
        {

            // console.log("BEFORE gameInstance = setInterval(gameLoop, timerDelay): " + gameInstance);
            gameInstance = setInterval(gameLoop, timerDelay);
            // console.log("AFTER gameInstance = setInterval(gameLoop, timerDelay): " + gameInstance);

            document.getElementById("startButton").innerHTML = "Running. Click to Pause";
        }
        else
        {
            // console.log("BEFORE clearInterval(gameInstance): " + gameInstance);
            clearInterval(gameInstance);
            // console.log("AFTER clearInterval(gameInstance): " + gameInstance);
            document.getElementById("startButton").innerHTML = "Paused. Click to resume";
        }


        console.log("Exiting Template.startGame.events. gameInstance=" + gameInstance);

    }
});



// gameLoop is main game loop. This is where bingo numbers are picked during game play.
// gameLoop is called by setInterval which then executes every X seconds
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




function myTimer()
{
    var d = new Date();
    document.getElementById("startButton").innerHTML = d.toLocaleTimeString();
}



// Used for testing purposes. Not part of game
function myCallBack(error, result)
{
    console.log("result: " + result);
}