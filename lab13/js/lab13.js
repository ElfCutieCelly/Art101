// given a number and an object that looks like this:
// {3:"Fizz", 5:"Buzz", 7:"Boom"}
// loops over the number and outputs the number and teh matching text
//for factors

//Author:Celeste Hernandez
//Created:May 25, 204
for (let i = 1; i <=200; i++){
    let str ="";
    if (i % 3 == 0){
        str += "Fizz";
    }
    if (i % 5 == 0){
        str += "Buzz";
    }
    if (i % 7 == 0){
        str += "Boom";
    }
    
    if (str == ""){
        console.log(i);
        $("#output").append("<p class ='num'>" + i);
    } else{
        console.log(str + '!');
        $("#output").append("<p class= 'text'>" + str + '!');
    }
    
}



function fizzBuzzBoom(maxNums,factorObj){
    //iterate over all of out numbers
    for (let num=0; num<maxNums; num++){
        //reset output string
        let outputStr = "";
        // iterate over the factors we got from the html
        for (let factor in factorObj){
            //check to see if this mum is a multple of factor
            if (num % factor == 0){
                // if yes, than add the text to output string
                outputStr += factorObj[factor];
            }
        }
        // no if we hace words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr);
    }
}

function reportError (str){
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById ("submit").addEventListener ("click", function(){
    let max = document.getElementById ("max").value;
    console.log("max:", max)
    if (! max ) {
        reportError("You must provide a maximum");
        return;
    }
})