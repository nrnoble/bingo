import{ mongo } from  "meteor/mongo";
//export access to my collections
export  const bookmarksCollection = new Mongo.Collection("bookmarks");
export  const xbingoNumbers        = new Mongo.Collection("bingoBalls");
export  const randomCardNumbers    = new Mongo.Collection("bingoCardNumbers");



export var getRandomNumberColumn_1 = (columnNumbers(1,16));
export var getRandomNumberColumn_2 = (columnNumbers(16,31));
export var getRandomNumberColumn_3 = (columnNumbers(31,46));
export var getRandomNumberColumn_4 = (columnNumbers(46,61));
export var getRandomNumberColumn_5 = (columnNumbers(61,76));





// pad numbers under 10 with a leading zero
function pad2(number)
{
    return (number < 10 ? '0' : '') + number
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





