// Lab 11- JavaScript Events and Forms
//Taking a value from and input fiel, sorting it, and then putting it on the page
//Author: Celeste Herandez
// Date: May 17 2024



//Degining a function that retrieve user's name & sort the leeter
function sortName(){
    //retrieve users name
    let userName = $("#input-here").val()
    //sort and return users name
    let sortedName = userName.split('').sort().join('');
    //return sorted name
    $("#output-name").html("Nah, Your name is:" + sortedName+"!");
};

//when button is clicked, it will run function & output sorted name
$("#my-button").click(sortName);