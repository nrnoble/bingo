import { Meteor } from 'meteor/meteor';
import{ mongo } from  "meteor/mongo";

import { xbingoNumbers } from '../collections/collections.js';
import { randomCardNumbers } from '../collections/collections.js';
import { getRandomNumberColumn_1 } from '../collections/collections.js';
import { getRandomNumberColumn_2 } from '../collections/collections.js';
import { getRandomNumberColumn_3 } from '../collections/collections.js';
import { getRandomNumberColumn_4 } from '../collections/collections.js';
import { getRandomNumberColumn_5 } from '../collections/collections.js';
//import { bookmarksDummyData } from '../collections.js/collections.js.js';
import  { foo12 } from '../data/bingodata.js';




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
     // randomCardNumbers.insert(getRandomNumberColumn_1[1]);
     // var test0 = getRandomNumberColumn_2[0];
     // var test1 = getRandomNumberColumn_2[1];
     // var test2 = getRandomNumberColumn_2[2];
     // var test3 = getRandomNumberColumn_2[3];
     // var test4 = getRandomNumberColumn_2[4];

// add column data
    for (var i = 0; i < 5; i++)
    {
        // randomCardNumbers.insert(getRandomNumberColumn_1[i]);
        // randomCardNumbers.insert(getRandomNumberColumn_2[i]);
        // randomCardNumbers.insert(getRandomNumberColumn_3[i]);
        // randomCardNumbers.insert(getRandomNumberColumn_4[i]);
        // randomCardNumbers.insert(getRandomNumberColumn_5[i]);
    }
});
