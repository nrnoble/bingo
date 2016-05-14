
import { randomCardNumbers } from '../data/bingodata.js';
import { cardGridNumbers }   from '../data/bingodata.js';
import { totalBingoNumbers } from '../data/bingocallednumbers.js';


// for creating a bingo card. During the creation of the bingo card a number is pulled from
// the array of numbers, "bingoSquareCounter" is the index of next number to be used
var bingoSquareCounter = 0;


// used for creating the bingo display list of all bingo numbers. During the creation of the a number is pulled from
// the array of numbers, "bingoListCounter" is the index of next number to be used
var bingoListCounter = 0;



// returns a random number between low and high
Template.registerHelper('randomBingoNumberByColumn', function(low, high)
{
    return pad2 (Math.floor (Math.random() * (high - low) + low));
});



// each time this helper is called it will return the next value in the array of bingo numbers
// from an array that is order specifically to have the bingo numbers displayed in 5 cloumns
// by 5 rows.
// Column-1: 01-15
// Column-2: 16-30
// Column-3: 31-45
// Column-4: 46-60
// Column-5: 61-75
Template.registerHelper('myRandomBingoNumber', function()
{
 
    if (bingoSquareCounter >=25)
    {
        bingoSquareCounter = 0;
    }

    return pad2(cardGridNumbers()[bingoSquareCounter++]);
 
});

// returns the next bingo number the list of all 75 bingo numbers.
// the list is in the order of 1-75
Template.registerHelper('bingolistHelper', function()
{
    if (bingoListCounter >=75)
    {
        bingoListCounter = 0;
    }
    return pad2(totalBingoNumbers()[bingoListCounter++]);
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


// returns a random number between low and high paramenters
export function getRandomBingoNumber (low, high)
{
    return Math.floor (Math.random() * (high - low) + low)
}


// returns an array of 5 unique random numbers betwee low and high parameters
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


