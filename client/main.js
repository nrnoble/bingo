import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated()
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


Template.hello.helpers
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

Template.hello.helpers
({
    bingoNumber: function()
    {
        return  pad2 (Math.floor (Math.random() * (75 - 1) + 1));
    }

});



Template.hello.helpers(
  {
      counter()
  {
    return Template.instance().counter.get();
  }


});


Template.hello.helpers(
    {
      toggle()
      {

        if (this.toggle == true)
        {
          //Template.instance().toggle.set(false);
          return Template.instance().toggle.get();
        }

        // this.toggle = this.toggle + " 1";
        // this.test = "foo";
        // return this.toggle;
        // Template.instance().toggle.set(!instance.toggle.set);
        // return Template.instance().toggle.get();
         return Template.instance().toggle.get();
      }


    });




Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    //instance.toggle.set(!instance.counter.get());
    if (instance.toggle.get() == "bingo")
    {
      instance.toggle.set("bingoClick");
    }
    else
    {
      instance.toggle.set("bingo");
    }


    //instance.toggle.set(!instance.toggle.get());

  },
});



Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(!instance.counter.get());
  },
});
