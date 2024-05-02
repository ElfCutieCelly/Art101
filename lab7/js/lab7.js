// index.js - Lab 7 Functions
// Author: Celeste Hernandez
// Date: 2 May
    //
//

//sortuserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
    var userName = window.promt("Hi. Please tell me your name so I can fix it");
    console.log("userName=",userName);
    //split string array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArrySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("namSorted =", nameSorted);
    //Note that I could have done the above lines a single line:
    //  userName.toLower().split("").join("")
    return nameSorted;
}

//output
document.writeln ("Oh hey, I've fixed your name:",
    sortUserName(CelesteHernandez), "</br>")