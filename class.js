//Write a “person” class to hold all the details.



class person{
    constructor(name, age, gender, batch){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.batch = batch;
    }
  }
  
  // An Object can have multiple references
  var person1 = new person("kavitha", 30, "female", "b55wd2");
  
  console.log(person1.name);
  console.log(person1.age);
  console.log(person1.gender);
  console.log(person1.batch);