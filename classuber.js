//write a class to calculate the Uber price.

class uber{
    constructor(name, basicrate, operatingfee, busytimes)
    {
        this.name = name;
        this.basicrate = basicrate;
        this.operatingfee = operatingfee;
        this.busytimes =busytimes
    }
}

// An Object can have multiple references
var auto = new uber("uberauto", 50, 120, 30);
//var auto1 = auto2;
console.log(auto);

//out put

//uber {
   // name: 'uberauto',
    //basicrate: 50,
    //operatingfee: 120,
    //busytimes: 30
  //}