


Template.bingoColumn_1.onCreated(function bingoColumn_1_OnCreated()
{
    this.toggle_1 = new ReactiveVar("notSelected");
    this.cardButtonId = new ReactiveVar(null);
    // used for testing
    this.test = new ReactiveVar(true);
    this.rows = new ReactiveVar([5]);
    this.counter = new ReactiveVar(0);

});



// Toggle the bingo style. This will switch css styles
Template.bingoColumn_1.helpers(
    {
        toggle()
        {

            if (this.toggle_1 == true)
            {
                return Template.instance().toggle_1.get();
            }

            return Template.instance().toggle_1.get();
        },

        buttonId()
        {
            if (this.buttonId() == null)
            {
                Template.instance().cardButtonId.set( bingoCardButtonCounter);
            }
            return  Template.instance().cardButtonId.get();
        }



    });




Template.bingoColumn_1.events(
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



