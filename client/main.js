import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.bingoCard.onCreated(function helloOnCreated()
{
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.toggle = new ReactiveVar("bingo");
  this.test = new ReactiveVar(true);
  this.rows = new ReactiveVar([5]);

  this.rows[0]="foo";
  this.rows[1]="foo";
  this.rows[2]="foo";
  this.rows[3]="foo";
  this.rows[4]="foo";
});

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


Template.bingoCard.helpers
({
    row: function()
    {
        return cardRow;
    }

});


function pad2(number)
{
    return (number < 10 ? '0' : '') + number
}

Template.bingoCard.helpers
({
    bingoNumber: function()
    {
        return  pad2 (Math.floor (Math.random() * (75 - 1) + 1));
    }

});



Template.bingoCard.helpers(
  {
      counter()
  {
    return Template.instance().counter.get();
  }


});


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




Template.bingoCard.events({
  'click button'(event, instance) {

    if (instance.toggle.get() == "bingo")
    {
      instance.toggle.set("bingoClick");
    }
    else
    {
      instance.toggle.set("bingo");
    }

  }
});

