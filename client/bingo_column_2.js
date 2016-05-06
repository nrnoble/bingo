Template.bingoColumn_2.onCreated(function bingoColumn_2_OnCreated()
{

    // toggle bingo title
    this.toggle = new ReactiveVar("notSelected");

    // used for testing
    this.test = new ReactiveVar(true);
    this.rows = new ReactiveVar([5]);
    this.counter = new ReactiveVar(0);

});



// Toggle the bingo style. This will switch css styles...
Template.bingoColumn_2.helpers(
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




Template.bingoColumn_2.events(
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


