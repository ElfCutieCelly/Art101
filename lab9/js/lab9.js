// 

//locationbar.js- This simple JavaScript/jQuery  uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
//Author:celeste Hernandez
// Date:2024 May 12

//
//add button to challenge section
$("#results").append("<button id='button-challenge'>Click Here!</button>");
//add a click listener to the challenge button
$("#button-results").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});

$("#problems").append("<button id='button-challenges'>Click Me!</button>");
//
$("#button-problems").click(function(){
    //
    $("#problems").toggleClass("special2)");
})