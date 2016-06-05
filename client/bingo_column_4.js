Template.bingoColumn_4.onCreated(function bingoColumn_4_OnCreated()
{

   
    this.toggle_1 = new ReactiveVar("notSelected");
    this.cardButtonId = new ReactiveVar(null);
    // used for testing
    this.test = new ReactiveVar(true);
    this.rows = new ReactiveVar([5]);
    this.counter = new ReactiveVar(0);

});



// Toggle the bingo style. This will switch css styles...
Template.bingoColumn_4.helpers(
    {
        toggle()
        {

            if (this.toggle_1 == true)
            {
                return Template.instance().toggle_1.get();
            }

            return Template.instance().toggle_1.get();
        }
    });




Template.bingoColumn_4.events(
    {
        'click button'(event, instance)
        {

            if (instance.toggle_1.get() == "notSelected")
            {
                instance.toggle_1.set("selected");
            }
            else
            {
                instance.toggle_1.set("notSelected");
            }

        }
    });


