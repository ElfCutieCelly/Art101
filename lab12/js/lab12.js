// AUthor: Celeste Hernandez
// Created: May 23, 2024
// License: Public Domain


//Return Gryffindor, RevenClas, Slytherin, and Hufflepuff
//depending on legth mod 4
function sortingHat(str){
    len = str.length;
    mod = len % 4;
    if (mod == 0){
        return "Ravenclaw"
    }
    else if(mod == 1){
        return "Hufflepuff"
    }
    else if(mod == 2){
        return "Slytherin"
    }
    else if(mod == 3){
        return "Gryffindor"
    }
}

var myButton = document.getElementById ("button");
myButton.addEventListener("click", function(){
    var name = document.getElementById ("input").value;
    var house = sortingHat(name);
    newText = "<p>Congradulation!! The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})