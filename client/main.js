// Neal Noble
// Sergio Ramirez
// Meteor Team project: Bingo Time
// May 2016


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { getNextBingoNumberPicked } from './globalHelpers.js';

import './main.html';

Template.bingoSquare.onCreated(function bingoSquareOnCreated()
{

});

// Button used to start a new bingo game
Template.startGame.onCreated(function startGameOnCreated()
{
    // counter starts at 0
    this.pickedBingoNumber = new ReactiveVar(0);
    this.counter = new ReactiveVar(0);
});



Template.startGame.helpers({
    pickedBingoNumber() {
        return Template.instance().pickedBingoNumber.get();
    },
});


Template.startGame.events({
    
    'click button'(event, instance) 
    {
        // increment the counter when button is clicked
        // instance.counter.set(instance.counter.get() + 1);
        var pickedNumber = getNextBingoNumberPicked(true);
        var  id = pickedNumber;



        //var bingoNumber = $('#bingo'+ pickedNumber).css( "filter", "invert(100%)");
        //$('#bingo'+pickedNumber).css( "border", "3px solid red" );
        //$('#bingo'+pickedNumber).css( "background-color", "yellow" );
        $('#bingo'+id).css( "background-color", "yellow" );
        //console.log("bingoNumber: " + '#bingo'+ pickedNumber);
        instance.pickedBingoNumber.set(pickedNumber);
        
    }
});








