import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated()
{
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});


//test III from neal
//test II from neal
//Test comment
// Test comment to Neal
//test III from sergio
//one more test sergio
// one more just for fun
//ldksjflaksdjf
//??????


Template.hello.helpers(
    {
      counter()
  {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
