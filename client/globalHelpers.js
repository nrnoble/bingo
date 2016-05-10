
export var getRandomNumberColumn_2 = (getRandomBingoNumber(16,31));
export var getRandomNumberColumn_3 = (getRandomBingoNumber(31,46));
export var getRandomNumberColumn_4 = (getRandomBingoNumber(46,61));
export var getRandomNumberColumn_5 = (getRandomBingoNumber(61,76));

Template.registerHelper('gt', function(array, n)
{
    return array && array.length > n;
});


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



// For testing purposes only
Template.registerHelper('myRandomBingoNumber', function()
{
    return pad2 (Math.floor (Math.random() * (75 - 1) + 1));
});




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



