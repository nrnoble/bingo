import { Meteor } from 'meteor/meteor';
import{ mongo } from  "meteor/mongo";

import { bingoNumbers } from '../data/bingodata.js';
import { randomCardNumbers } from '../data/bingodata.js';
import { bingoCardColumn_1 } from '../data/bingodata.js';
import { bingoCardColumn_2 } from '../data/bingodata.js';
import { bingoCardColumn_3 } from '../data/bingodata.js';
import { bingoCardColumn_4 } from '../data/bingodata.js';
import { bingoCardColumn_5 } from '../data/bingodata.js';
import { jarOfRandomBingoNumbers } from '../data/bingocallednumbers.js';
//import { bookmarksDummyData } from '../collections.js/collections.js.js';


var bingoNumberCounter = 0;

export var gbingoCardNumbers =[];
export var myFooTest_1 = "Test";
//hook to respond to user account creation!
Accounts.onCreateUser(function(option, user) {
    //options are sent from your login provider...

    //assign your profile
    user.profile = option.profile;

    //we can add our own data here...
    user.profile.userType = 'basic_user'; //admin, guest, basic_user, ...
    user.profile.address =
    {
        'street': "",
        'city': "",
        'state': "",
        'zip': ""
    };

    user.profile.siteVisits = 1;

    return user;
});






// Meteor.publish('pfoo', function tasksPublication()
// {
//     return myFooTest_1;
// });

Meteor.startup(() =>
{
 // var intervalID =  setInterval(pickBingoNumber_test, 5000);

    var myFooTest_2 = "Test123";



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
//     for (var i = 0; i < 5; i++)
//     {
//
//         gbingoCardNumbers[bingoCardColumn_1[i]];
//         gbingoCardNumbers[bingoCardColumn_2[i]];
//         gbingoCardNumbers[bingoCardColumn_3[i]];
//         gbingoCardNumbers[bingoCardColumn_4[i]];
//
//
//         // randomCardNumbers.insert(bingoCardColumn_2[i]);
//         // randomCardNumbers.insert(bingoCardColumn_3[i]);
//         // randomCardNumbers.insert(bingoCardColumn_4[i]);
//         // randomCardNumbers.insert(bingoCardColumn_5[i]);
//     }
});



// This used for testing only. 
Meteor.methods({

   serverVarTest: function(){

       console.log("Server test1");
       return "test1234";
   }

})


function pickBingoNumber_test()
{
    // console.log("Entering: pickBingoNumber_test()");
    bingoNumberCounter++;
    //console.log("bingoNumberCounter++: " + jarOfRandomBingoNumbers [bingoNumberCounter++]);
    console.log("jarOfRandomBingoNumbers[" + bingoNumberCounter + "]: " + jarOfRandomBingoNumbers [bingoNumberCounter]);
    // console.log("Exiting: pickBingoNumber_test()");
}