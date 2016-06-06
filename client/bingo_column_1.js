 import * as helper from './globalHelpers.js';

Template.bingoColumn_1.onCreated(function bingoColumn_1_OnCreated()
{
    this.toggle =       new ReactiveVar("notSelected");
    this.cardButtonId = new ReactiveVar(null);
    // used for testing
    this.test = new ReactiveVar(0);
    this.rows = new ReactiveVar([5]);
    this.counter = new ReactiveVar(0);

});



// Toggle the bingo style. This will switch css styles
 Template.bingoColumn_1.helpers(
     {
         toggle()
         {

             if (this.toggle == true)
             {
                 return Template.instance().toggle.get();
             }

             return Template.instance().toggle.get();
         },

         buttonId()
         {
             return helper.getThisButtonID(Template);
         }
     });






 Template.bingoColumn_1.events(
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



