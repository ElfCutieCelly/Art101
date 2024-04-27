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

  document.writeln(" My main Ride: ",myMainRide,"</br?>");