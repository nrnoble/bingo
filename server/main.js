import { Meteor } from 'meteor/meteor';
import{ mongo } from  "meteor/mongo";

import { bingoNumbers } from '../data/bingodata.js';
import { randomCardNumbers } from '../data/bingodata.js';
import { bingoCardColumn_1 } from '../data/bingodata.js';
import { bingoCardColumn_2 } from '../data/bingodata.js';
import { bingoCardColumn_3 } from '../data/bingodata.js';
import { bingoCardColumn_4 } from '../data/bingodata.js';
import { bingoCardColumn_5 } from '../data/bingodata.js';
//import { bookmarksDummyData } from '../collections.js/collections.js.js';


export var gbingoCardNumbers =[];



Meteor.startup(() =>
{


    // remove any database values that are present
    //randomCardNumbers.remove({}); // works only on serverside

     // randomCardNumbers.insert(1);
     // randomCardNumbers.insert(2);
     // randomCardNumbers.insert(3);
     // randomCardNumbers.insert(4);
     // randomCardNumbers.insert(5);
     // randomCardNumbers.insert(5);
     // randomCardNumbers.insert(bingoCardColumn_1[1]);
     // var test0 = bingoCardColumn_2[0];
     // var test1 = bingoCardColumn_2[1];
     // var test2 = bingoCardColumn_2[2];
     // var test3 = bingoCardColumn_2[3];
     // var test4 = bingoCardColumn_2[4];

// add column data
    for (var i = 0; i < 5; i++)
    {

        gbingoCardNumbers[bingoCardColumn_1[i]];
        gbingoCardNumbers[bingoCardColumn_2[i]];
        gbingoCardNumbers[bingoCardColumn_3[i]];
        gbingoCardNumbers[bingoCardColumn_4[i]];


        // randomCardNumbers.insert(bingoCardColumn_2[i]);
        // randomCardNumbers.insert(bingoCardColumn_3[i]);
        // randomCardNumbers.insert(bingoCardColumn_4[i]);
        // randomCardNumbers.insert(bingoCardColumn_5[i]);
    }
});
