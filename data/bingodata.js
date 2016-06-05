import{ mongo } from  "meteor/mongo";
//export access to my collections
export  const bookmarksCollection = new Mongo.Collection("bookmarks");
export  const bingoNumbers        = new Mongo.Collection("bingoBalls");
export  const randomCardNumbers    = new Mongo.Collection("bingoCardNumbers");

// create 5 arrays with a specific range of random numbers
// each array represents each of the 5 bingo columns on a bingocard
export var bingoCardColumn_1 = (columnNumbers(1,16));
export var bingoCardColumn_2 = (columnNumbers(16,31));
export var bingoCardColumn_3 = (columnNumbers(31,46));
export var bingoCardColumn_4 = (columnNumbers(46,61));
export var bingoCardColumn_5 = (columnNumbers(61,76));

// Combine the 5 arrays so that it creates a single array where the columns are correctly placed
// to create a 5x5 bingo card
export function cardGridNumbers()
{
    var columnNumbers = [];
    var index = 0;
    for (var i = 0; i < 5; i++)
    {

        columnNumbers[index++] = bingoCardColumn_1[i]; //console.log(index + " column-1: " + bingoCardColumn_1[i]);
        columnNumbers[index++] = bingoCardColumn_2[i]; //console.log(index + " column-2: " + bingoCardColumn_2[i]);
        columnNumbers[index++] = bingoCardColumn_3[i]; //console.log(index + " column-3: " + bingoCardColumn_3[i]);
        columnNumbers[index++] = bingoCardColumn_4[i]; //console.log(index + " column-4: " + bingoCardColumn_4[i]);
        columnNumbers[index++] = bingoCardColumn_5[i]; //console.log(index + " column-5: " + bingoCardColumn_5[i]);


    }

   // console.log("Column Numbers: " +columnNumbers);
    return columnNumbers;
}



function getRandomBingoNumber (low, high)
{
    return Math.floor (Math.random() * (high - low) + low)
}

// get 5 unique random numbers
function columnNumbers(low,high)
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


    }
    return column
}





