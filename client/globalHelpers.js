/**
 * Created by Neal on 5/27/2016.
 */

import { randomCardNumbers } from '../data/bingodata.js';
import { cardGridNumbers   } from '../data/bingodata.js';
import { gameInstance   } from '../client/main.js';
import { runStatus   } from '../client/main.js';
import { totalBingoNumbers } from '../data/bingocallednumbers.js';
import * as main  from '../client/main.js';

/****************************************************************************************************
 create a virtual bingo card of 25 bingo numbers  randomly picked from 5 colums of numbers
 Column-1: 01-15
 Column-2: 16-30
 Column-5: 61-75
 Column-3: 31-45
 Column-4: 46-60

 Each card is a 5x5 grid with each column containing a specific range of random numbers

 ****************************************************************************************************/



// for creating a bingo card. During the creation of the bingo card a number is pulled from
// the array of numbers, "bingoSquareCounter" is the index of next bingo number to be used
var bingoCardButtonCounter = 0;


// used for creating the bingo display list of all bingo numbers. During the creation the a number is pulled from
// the array of numbers, "bingoListCounter" is the index of next bingo number to be used
var bingoListCounter = 0;


// used for creating bingo card ID number within a HTML DIV element
var bingoCardID = 0;



// returns a random number between low and high
Template.registerHelper('randomBingoNumberByColumn', function(low, high)
{
    return pad2 (Math.floor (Math.random() * (high - low) + low));
});


// used for creating bingo card HTML ID tag
Template.bingocard.helpers({
    newBingoCardID()
    {
        bingoCardID++;
        return "bingoCardID-" + bingoCardID;
    }
});



// each time this helper is called it will return the next value in the array of bingo numbers
// from an array that is order specifically to have the bingo numbers displayed in 5 columns
// by 5 rows.
// Column-1: 01-15
// Column-2: 16-30
// Column-3: 31-45
// Column-4: 46-60
// Column-5: 61-75
Template.registerHelper('getBingoCardNumbersInOrder', function()
{
    if (bingoCardButtonCounter >=25)
    {
        bingoCardButtonCounter = 0;
    }
    var num = cardGridNumbers()[bingoCardButtonCounter++];
    //console.log("cardGridNumbers()[" + bingoCardButtonCounter  +"]" + num);
    return pad2(num);
});



//returns the current bing card button counter which is used to create the HTML button ID
Template.registerHelper('getBingoCardButtonCounter', function()
{
    return bingoCardButtonCounter;
});


// returns an array of 5 unique random numbers between low and high parameters
// used to create bingo cards of 5 columns with unique random bingo numbers within
// a specific range of values
// Column-1: 01-15
// Column-2: 16-30
// Column-3: 31-45
// Column-4: 46-60
// Column-5: 61-75
export function columnNumbers(low,high)
{
    var column = [5];
    var numberCount = 1;
    column[0] =  getRandomBingoNumber (low, high);
    while (numberCount < 5)
    {
        var randomNumber = getRandomBingoNumber (low, high);
        for (i = 0; i < 5; i++)
        {
            if(column[i] ==  undefined)
            {
                column[i] = randomNumber;
                numberCount++;
                break;
            }

            if (column[i] !=  randomNumber)
            {
                continue;
            }


            if (column[i] ==  randomNumber)
            {
                break;
            }

        }

        return column
    }

}



// returns the next bingo number the list of all 75 bingo numbers.
// the list is in the order of 1-75
Template.registerHelper('bingolistHelper', function()
{
    if (bingoListCounter >=75)
    {
        bingoListCounter = 0;
    }

    var num =  totalBingoNumbers()[bingoListCounter++];
    var paddednum =  pad2(num);
    return "<SPAN id='bingoNumberCalledID-" + num + "' class='bingoNumberNotCalled'>" + paddednum + "</SPAN>";
    //return pad2(totalBingoNumbers()[bingoListCounter++]);
});



// pad numbers under 10 with a leading zero
export function pad2(number)
{
    return (number < 10 ? '0' : '') + number
}


// returns an array of all bingo numbers 1-75 in order
export function allBingoNumbers()
{
    var bingoNumbers = [];
    for (var i = 1; i <=75;i++)
    {
        bingoNumbers[i] = i;
    }

    return bingoNumbers;

}




// returns an array all 75 bingo numbers in a randomizes order
export function randomizeBingoNumbers()
{
    var bingoNumbers = allBingoNumbers();

    for (var idx = 1; idx<=75; idx++)
    {
        var swap =  Math.floor (Math.random() * (75 - 1) + 1);
        var placeholder = bingoNumbers[idx];
        bingoNumbers[idx] = bingoNumbers[swap];
        bingoNumbers[swap] = placeholder;
    }

    return bingoNumbers;
}




/* **********************************************************************
 create a virtual bingo jar of 1-75 bingo numbers
 ************************************************************************/

// A virtual jar of 75 bingo balls.
export var jarOfRandomBingoNumbers = randomizeBingoNumbers();
//console.log("Random Bingo Numbers: " + jarOfRandomBingoNumbers)
//console.log("jarOfRandomBingoNumbers[0]: " + jarOfRandomBingoNumbers[0])


// Each time a bingo bingo ball is picked from the virtual jar 'jarOfRandomBingoNumbers',
// the var "bingoBallPickedFromJar' is  incremented by one. 'bingoBallPickedFromJar; is used as index pointer
// to the next ball to be picked from the array of randomized bingo numbers
export var bingoBallPickedFromJar = 1;



// returns a random bingo number from a virtual jar of 75 bingo numbers
export function getNextBingoNumberPicked(increment)
{
    if (increment)
    {
        bingoBallPickedFromJar++;
    }

    return jarOfRandomBingoNumbers[bingoBallPickedFromJar];
}



// returns a random number between low and high paramenters
export function getRandomBingoNumber (low, high)
{
    return Math.floor (Math.random() * (high - low) + low)
}


export function getBingoNumberbyID(id)
{
    $('#bingo1').css( "border", "3px solid red" );
}


// causes the the current execution thread to sleep for a period of time in milliseconds
// 1000 = 1 second
export function sleep(delay)
{
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


export function resetBingoCard()
{
  //bingoNumberCalledID
    $('[id^=cardButtonId]').removeClass("selected");
    $('[id^=cardButtonId]').addClass("notSelected");
}



export function resetBingoNumbersCalled()
{
    $('[id^=bingoNumberCalledID]').removeClass("bingoNumberCalled");
    $('[id^=bingoNumberCalledID]').addClass("bingoNumberNotCalled");
}

export function resetGame()
{
    clearInterval(main.gameInstance);
    bingoBallPickedFromJar = 0;
    resetBingoCard();
    resetBingoNumbersCalled();
    document.getElementById("startButton").click();
    document.getElementById("startButton").innerHTML ="Start Button";
    document.getElementById("pickedBingoBallID").innerHTML ="00";
    document.getElementById("resetButtonID").disabled = true;

}

Template.registerHelper('isLoggedIn', function()
{
    // console.log("Meteor.user(): " + Meteor.user());
    return Meteor.user() == null;
});




// Code below is for testing purposes and can be removed when the project is finished
// Code below is for testing purposes and can be removed when the project is finished
// Code below is for testing purposes and can be removed when the project is finished
// Code below is for testing purposes and can be removed when the project is finished
// Code below is for testing purposes and can be removed when the project is finished
// Code below is for testing purposes and can be removed when the project is finished



// experimental code
// Toggle the bingo style. This will switch css styles...
Template.registerHelper('xxtoggle', function(currentObject)
{

    //bingoCardID-1

    //return "notSelected";
    //console.log("currentObject.toggle: " this);
    //console.log("this: " + this);
    if (this.toggle == true)
    {
        return Template.instance().toggle.get();
    }

    return Template.instance().toggle.get();

});




// for testing purposes
Template.registerHelper('echo', function(str)
{
    return str;
});



// for testing purposes
Template.registerHelper("foo",function ()
{
    return "foo";
})


