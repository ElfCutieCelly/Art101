// 

//locationbar.js- This simple JavaScript/jQuery  uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
//Author:celeste Hernandez
// Date:2024 May 12


$("#challenge").append("<button id='button-challenge'>Press Me</button>");
//add a click listner to the problems button
$("#button-challenge").click(function(){
    //now add (or subtract) the 'special" class to the section
    $("#challenge").toggleClass("special");
})

$("#problems").append("<button id='button-problems'>Click Me!</button>");
//add a click listner to the problems button
$("#button-problems").click(function(){
    //now add (or subtract) the 'special" class to the section
    $("#problems").toggleClass("special2");
})


$("#results").append("<button id='button-results'>I Wont Explode</button>");
//add a click listner to the problems button
$("#button-results").click(function(){
    //now add (or subtract) the 'special" class to the section
    $("#results").toggleClass("special3");
})
