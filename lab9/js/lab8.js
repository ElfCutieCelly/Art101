// 

//locationbar.js- This simple JavaScript/jQuery  uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
//Author:celeste Hernandez
// Date:2024 May 12

//
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Click Me</button>");
// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});