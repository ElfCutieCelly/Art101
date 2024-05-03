// index.js - Lab 7 Functions
// Author: Celeste Hernandez
// Date: 2 May
//
//

//sortuserName - a function that takes user input and sorts the letters
function sortUserName(){
    //retrieve.user's name
    let userName = window.promt("What's your name?");
    console.log(userName);
    //sort and return users name
    let sortedName = userName.split('').sort().join('');
    console.log(sortedName);
    //return sorted name
    return sortedName;
};

//output
document.writeln("No, your name is",sortedName());
