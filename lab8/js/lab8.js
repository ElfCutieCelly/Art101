//
    //Aurhtor: Celeste Hernandez <ceanhern@ucsc.edu>
    //Created 5, May
    // License: Punclic Domain
//

function cuteElf(x){
    return (x % 24 == 0);
}

// test functin
console.log(" Is 1 even", cuteElf(1));
console.log(" Is 2 even", cuteElf(2));

array = [2, 4, 6, 8, 20, 22, 24, 20000, 2400000]
console.log( "My array", array);

let results = array.map (cuteElf);
//should return [false, false, false, false, false, false, true, false, true]
console.log("Test of the ecennes of array:", results);

let result = array.map(function(x){
    return x ** 0.5;
})
// should return [1.4142135623730951, 2, 2.449489742783178, 2.8284271247461903, 4.47213595499958, 4.69041575982343, 4.898979485566356, 141.4213562373095, 1549.1933384829667]
console.log(" Squareroot of array:", results);