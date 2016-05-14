Template.bingoColumn_3.onCreated(function bingoColumn_3_OnCreated()
{


    this.toggle = new ReactiveVar("notSelected");

    // used for testing
    this.test = new ReactiveVar(true);
    this.rows = new ReactiveVar([5]);
    this.counter = new ReactiveVar(0);

});



// Toggle the bingo style. This will switch css styles...
Template.bingoColumn_3.helpers(
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




Template.bingoColumn_3.events(
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


