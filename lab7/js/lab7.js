// index.js - Lab 7 Functions
// Author: Celeste Hernandez
// Date: 2 May
    //
//

//sortuserName - a function that takes user input and sorts the letters
function sortUserName(){
    let userName = window.promt("What's your name?");
    console.log(userName);
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    let sortedName = userName.split('').sort().join('');
    console.log(sortedName);
    //return sorted name
    return nameSorted;
};

//output
document.writeln ("Oh hey, I've fixed your name:",sortedName());
