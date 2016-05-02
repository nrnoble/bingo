// Neal Noble
// Sergio Remirez
// Meteor Team project: Bingo Time
// May 2016


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.bingoCard.onCreated(function helloOnCreated()
{

    // toggle bingo title
    this.toggle = new ReactiveVar("notSelected");

    // used for testing
    this.test = new ReactiveVar(true);
    this.rows = new ReactiveVar([5]);
    this.counter = new ReactiveVar(0);

});



// pad numbers under 10 with a leading zero
function pad2(number)
{
    return (number < 10 ? '0' : '') + number
}


// generate random bingo numbers between 1-75
Template.bingoCard.helpers
({
    bingoNumber: function()
    {
        return  pad2 (Math.floor (Math.random() * (75 - 1) + 1));
    }

});



// Toggle the bingo style. This will switch css styles 
Template.bingoCard.helpers(
{
      toggle()
      {

        if (this.toggle == true)
        {
          return Template.instance().toggle.get();
        }

         return Template.instance().toggle.get();
      }
});



// Switch between css styles of selected, not selected.
Template.bingoCard.events(
{
  'click button'(event, instance)
  {

    if (instance.toggle.get() == "notSelected")
    {
      instance.toggle.set("selected");
    }
    else
    {
      instance.toggle.set("notSelected");
    }

}
});


// below is code for future milestones.



// used for testing
Template.bingoCard.helpers(
    {
        counter()
        {
            return Template.instance().counter.get();
        }


    });




// placeholder for future use
var cardRow =
    [
        {
            rowID:1,
        },
        {
            rowID:2
        },
        {
            rowID:3
        },
        {
            rowID:4
        },
        {
            rowID:5
        }
    ]

// placeholder template for future use
Template.bingoCard.helpers
({
    row: function()
    {
        return cardRow;
    }

});