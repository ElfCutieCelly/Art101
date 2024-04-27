// index.js - Lab 6 Jacvascript Programing
// Author: Celeste Hernandez
// Date: 27 April

//Define Variables
myTransport = ["Walking", "Bike", "Walking", "Running", "Car"];

//create an object for my main ride
myMainRide = {
  make: "Kia",
  model: "Soul",
  color: "Rose Gold",
  year: "1995",
  //we can define a funtion withing our object (called a method)
  //that uses the value of yea above (usuing this.year)
  age: function() {
    return 2022- this.year;
  }
}

//output
document.writeln("Kinds of Transportations I use: ",myTransport,"</br>");
//this little trick allows use to write ab objecrt to the document
document.writeln(" My main Ride: <pre>,"
    .stringify(myMainRide, null, '\t'),"</pre>")