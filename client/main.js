// Neal Noble
// Sergio Ramirez
// Meteor Team project: Popcorn Bingo
// May 2016


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { getNextBingoNumberPicked } from './globalHelpers.js';
import { Meteor } from 'meteor/meteor';
import { sleep } from './globalHelpers.js';
import './main.html';
import * as helper from './globalHelpers.js';

// continuely check if user us logged in
// var loginCheckloopID = setInterval(loginCheck,1000);

// userIsLoggedIn is a global variable that returns true if a user is logged in.
var userIsLoggedIn = false;

//pull down some published data from the server
Meteor.subscribe('userData');
userData = new Mongo.Collection('userData');




// function loginCheck()
// {
//
//     if (Meteor.user() != null)
//     {
//         userIsLoggedIn = true;
//         //console.log("user is logged in");
//     }
//     else
//     {
//         userIsLoggedIn = false;
//         //console.log("user is not logged in");
//     }
//
// }

Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
});


Template.gameReset.events({


    'click button'(event, instance)
    {
        helper.resetGame();
    }

});


Template.startGame.helpers({
    "isAdmin": function() {
        return Meteor.user() != null && Meteor.user().profile.userType == "admin";
    },
    "isLoggedIn": function()
    {
        return Meteor.user() != null;
        //console.log("Meteor.user(): " + Meteor.user());
    }
});


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



Template.startGame.helpers(
    {
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
export var runStatus = false;

//
var startButtonInstance = null;


// PICK_TIMER is the delay for between picking bingo ball numbers. 1000 = 1 second
var PICK_TIMER = 5000;

// gameInstance holds value for the interval timer
export var gameInstance = null;

Template.startGame.events({
    
    'click button'(event, instance) 
    {
        startButton(instance);
    }
});



var autoSelect = true;
var autoValidateJackpot = true;

function startButton(instance)
{
    console.log("Entering Template.startGame.events");
    // var serverTestVar = Meteor.call('serverVarTest');
    // console.log("serverTestVar: " + serverTestVar);
    //
    // var myMethodTest =  Meteor.call('serverVarTest');
    // console.log("myMethodTest: " + myMethodTest);

    Meteor.call('serverVarTest',function(error,result)
    {
        console.log("serverVarTest: " + result);
    });




    startButtonInstance = instance;
    runStatus = !runStatus;
    // $('#startButton').disabled = true;
    // gameLoop (pause, instance);

    // document.getElementById("startButton").disabled = false;

    // var bingoNumber = $('#bingo'+ pickedNumber).css( "filter", "invert(100%)");
    // $('#bingo'+pickedNumber).css( "border", "3px solid red" );
    // $('#bingo'+pickedNumber).css( "background-color", "yellow" );
    // $('#bingo'+id).css( "background-color", "yellow" );
    // console.log("bingoNumber: " + '#bingo'+ pickedNumber);
    // instance.pickedBingoNumber.set(pickedNumber);
    var timerDelay = document.getElementById("pickTimerDelay").value;

    // console.log("timerDelay: " + timerDelay);
    // document.getElementById("startButton").disabled = true;
    document.getElementById("resetButtonID").disabled = false;


    //var myVar = setInterval(myTimer ,1000);
    if (runStatus)
    {

        // console.log("BEFORE gameInstance = setInterval(gameLoop, timerDelay): " + gameInstance);
        gameInstance = setInterval(gameLoop, timerDelay);
        // console.log("AFTER gameInstance = setInterval(gameLoop, timerDelay): " + gameInstance);
        //$("#winningNumbersId").innerHTML =  "00 00 00 00 00";
        document.getElementById("winningNumbersId").innerHTML =  "00 00 00 00 00";
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




// gameLoop is main game loop. This is where bingo numbers are picked during game play.
// gameLoop is called by setInterval which then executes every X seconds
function gameLoop(pause, instance )
{
    console.log("Entering: function gameLoop");


    autoSelect = $("#autoSelectId").is(':checked');
    autoValidateJackpot = $("#autoValidateBingoID").is(':checked');

    var pickedNumber = getNextBingoNumberPicked(true);
    var id = pickedNumber;

       // $('#bingoNumberCalledID-' + id).css("background-color", "yellow");
        $('#bingoNumberCalledID-' + id).removeClass("bingoNumberNotCalled");
        $('#bingoNumberCalledID-' + id).addClass("bingoNumberCalled");
        $('#pickedBingoBallID').html(pickedNumber);

        if (autoSelect == true)
        {
            clickNumberOnBingoCard(pickedNumber);
        }

        if(autoValidateJackpot)
        {
            verifyBingo();
            bingoWinner = false;
            //console.log("About to enter verifyBingo()");
            bingoWinner = verifyBingo();
            console.log("Exited from: verifyBingo()");
            if(bingoWinner)
            {
                console.log("bingo!!!!");
                clearInterval(gameInstance);
                // alert("Bingo!!!");
            }
        }

    console.log("Exiting: function gameLoop()");
}


// used for automated testing. Click the current bingo number called if
// it is on the current card
function clickNumberOnBingoCard(currentBingoNumber)
{


     for (var idx = 0; idx < 25; idx++)
    {
         var element = $("#cardButtonId-" +idx);
         var html = element.html();
        if (html == currentBingoNumber)
        {
            element.removeClass("bingoNumberNotCalled");
            element.addClass("bingoNumberCalled");
            // bingoWinner = false;
            // //console.log("About to enter verifyBingo()");
            // bingoWinner = verifyBingo();
            // console.log("Exited from: verifyBingo()");
            // if(bingoWinner)
            // {
            //     console.log("bingo!!!!");
            //     clearInterval(gameInstance);
            //    // alert("Bingo!!!");
            // }

            return;
        }
    }
}




// Returns 12 arrays of representing possible winning rows, columns, and diagonals.
// 5 columns
// 5 rows
// 2 diagonals
export function winningCombos()
{
    console.log("Entering: function winningCombos()");
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
    console.log("Exiting: function winningCombos()");
    return bingo;
}


// Verify a winning bingo sequence. The bingo card must contain 5 called numbers
// in a winning bingo sequence;
export function verifyBingo()
{
    console.log("Entering: function verifyBingo()");
    // An array of 12 winning combination of 5 possible numbers
    var bingo = winningCombos();


    // loop throw the 12 combinations
    for (var idx = 0; idx < 12; idx++)
    {
        var log = "idx: " + idx;
        console.log(log);
        //loop through the 5 numbers verifying that they been called and selected on the card.
        var success = true;
        var winningNumbers = [5];
        var winningNumberIdx = 0;
        for (var idx_2 = 0; idx_2 < 5; idx_2++)
        {

            console.log("idx_2: " + idx_2);
            var cardButtonId = bingo[idx][idx_2]-1;
            console.log("["+ idx +"][" + idx_2 + "] cardButtonId: " + cardButtonId);
            var element = $("#cardButtonId-" + cardButtonId);
            var cardBingoNumber  = element.html();
           // console.log("cardButtonId: " + cardButtonId);
           // console.log("cardBingoNumber: " + cardBingoNumber);
            // TODO: verify that bingoNumberButton has been selected, if not selected, then exit.
            //var buttonSelected = isBingoButtonSelected(cardBingoNumber);
            //var buttonSelected = true;

            if (hasNumberBeenCalled(cardBingoNumber) == false)
            {
                //console.log("hasNumberBeenCalled(" + cardBingoNumber + ") == false, Break inner loop");
                success = false;
                break;
            }
            else
            {
                winningNumbers[winningNumberIdx++] = cardBingoNumber;
                //console.log("hasNumberBeenCalled(" + cardBingoNumber + ") == true, continue inner loop");
            }
        }
            // Bingo Jackpot!!!
            // found a sequence of 5 bingo numbers in a row\column\diagonal
            if (success)
            {
                console.log("returning true. Valid sequence");
                console.log("winningNumbers: " + winningNumbers);
                $("#winningNumbersId").innerHTML = winningNumbers;
                document.getElementById("winningNumbersId").innerHTML =  winningNumbers;
                return true;
            }
    }

    console.log("Exiting: function verifyBingo()");
    // when reaching this point, no sequence of 5 called numbers has been found and\or
    // player missed selecting a valid number on the bingo card
    return false;
}


// compare number to the list of bingo numbers that have already been called.
// return true if number has been called.
export function hasNumberBeenCalled(bingoNumber)
{
    //console.log("Entering: function hasNumberBeenCalled(bingoNumber)");
    // get the list of bingo numbers that have been called, ignore the numbers
    // that have not yet been called.
    var currentBingoNumbersCalled =  helper.jarOfRandomBingoNumbers;
    var length = currentBingoNumbersCalled.length;

    //console.log("bingoBallPickedFromJar: " + helper.bingoBallPickedFromJar);
    for (var idx = 0; idx < helper.bingoBallPickedFromJar; idx++)
    {
        var bingNumberCalled = helper.jarOfRandomBingoNumbers[idx];
        //console.log("bingoNumber(" + bingoNumber + ") == bingNumberCalled(" + bingNumberCalled + ")");
        if (bingoNumber == bingNumberCalled)
        {
            //console.log("hasNumberBeenCalled(): return true");
            //console.log("Exiting: function hasNumberBeenCalled(bingoNumber)");
            return true;
        }
    }

    //console.log("hasNumberBeenCalled(): return false");
    //console.log("Exiting: function hasNumberBeenCalled(bingoNumber)");
    return false;
}


export function isBingoButtonSelected(bingoButtonIdNumber)
{
    var element = $("#cardButtonId-" + bingoButtonIdNumber).hasClass("selected");
    console.log("bingoButtonIdNumber: " + bingoButtonIdNumber);
    console.log("element.hasClass('selected'): " + element.hasClass("selected"));


    //return element.hasClass("selected");
    return result;
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


