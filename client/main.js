import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated()
{
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.toggle = new ReactiveVar("bingo");
  this.test = new ReactiveVar(true);
});


// test III from neal
// test II from neal
// Test comment
// Test comment to Neal
// test III from sergio
// one more test sergio



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
