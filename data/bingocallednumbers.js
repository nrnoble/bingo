/**
 * Created by sergio on 5/13/2016.
 */
import{ mongo } from  "meteor/mongo";

export var numberColumn_1 = numberDrawn(1,15);
export var numberColumn_2 = numberDrawn(16,30);
export var numberColumn_3 = numberDrawn(31,45);
export var numberColumn_4 = numberDrawn(46,60);
export var numberColumn_5 = numberDrawn(61,75);


export function totalBingoNumbers()
{
    var drawn = [];
    var index = 0;
    for (var i = 0; i < 15; i++)
    {
        drawn[index++] = numberColumn_1[i];// console.log(index + " column-1: " + numberColumn_1[i]);
        drawn[index++] = numberColumn_2[i];// console.log(index + " column-2: " + numberColumn_2[i]);
        drawn[index++] = numberColumn_3[i];// console.log(index + " column-3: " + numberColumn_3[i]);
        drawn[index++] = numberColumn_4[i];// console.log(index + " column-4: " + numberColumn_4[i]);
        drawn[index++] = numberColumn_5[i];// console.log(index + " column-5: " + numberColumn_5[i]);
    }

    //console.log("number drawn: " + drawn);
    return drawn;
}


function numberDrawn(low,high)
{
    var listOfNumbers = [];
    var index = 0;
    for(var i = low; i <= high; i++)
    {
        listOfNumbers[index++]= i;
    }
   // console.log("listOfNumbers: " + listOfNumbers);
    return listOfNumbers

}
