
export var getRandomNumberColumn_1 = (getRandomBingoNumber(16,31));
export var getRandomNumberColumn_2 = (getRandomBingoNumber(16,31));
export var getRandomNumberColumn_3 = (getRandomBingoNumber(31,46));
export var getRandomNumberColumn_4 = (getRandomBingoNumber(46,61));
export var getRandomNumberColumn_5 = (getRandomBingoNumber(61,76));

//import {gbingoCardNumbers} from '../server/main.js';

import { randomCardNumbers } from '../data/bingodata.js';
import { xNumbers } from '../data/bingodata.js';
var bingoSquareCounter = 0;
var bingoListCounter = 0;


var mongoCardNumbers = randomCardNumbers.find();
// var item = mongoCardNumbers.hasNext();
// console.log(bingoSquareCounter);
// console.log("xNumbers(): " + xNumbers());
// console.log("xNumbers().length: " + xNumbers().length);

Template.registerHelper('echo', function(str)
{
    return str;
});



Template.registerHelper("foo",function ()
{
    return "foo";
})


Template.registerHelper('randomBingoNumberByColumn', function(low, high)
{
    return pad2 (Math.floor (Math.random() * (high - low) + low));
});




Template.registerHelper('myRandomBingoNumber', function()
{
   // bingoSquareCounter++;
    //return gbingoCardNumbers[i];
    if (bingoSquareCounter >=25)
    {
        bingoSquareCounter = 0;
    }

    return pad2(xNumbers()[bingoSquareCounter++]);
    
    //counter++;
    //return pad2 (1);
    //return pad2 (Math.floor (Math.random() * (75 - 1) + 1));
});

Template.registerHelper('bingolistHelper', function()
{
   // bingoSquareCounter++;
    //return gbingoCardNumbers[i];
    if (bingoListCounter >=75)
    {
        bingoListCounter = 0;
    }

    return pad2(totalBingoNumbers()[bingoListCounter++]);
    
    //counter++;
    //return pad2 (1);
    //return pad2 (Math.floor (Math.random() * (75 - 1) + 1));
});




// pad numbers under 10 with a leading zero
export function pad2(number)
{
    return (number < 10 ? '0' : '') + number
}


export function allBingoNumbers()
{
    var bingoNumbers = [];
    for (var i = 1; i <=75;i++)
    {
        bingoNumbers[i] = i;
    }

    return bingoNumbers;

}


export function getRandomBingoNumber (low, high)
{
    return Math.floor (Math.random() * (high - low) + low)
}

// get 5 unique random numbers
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









Template.registerHelper('xToggle', function()
{
    if (instance.toggle.get() == "notSelected")
    {
        instance.toggle.set("selected");
        console.log("selected");
        return "selected";
    }
    else
    {
        instance.toggle.set("notSelected");
        console.log("notSelected");
        return "notSelected";
    }
});



