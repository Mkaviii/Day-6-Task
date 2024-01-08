//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getrating() {
      return `the rating is  ${this.rating}`
    }
  }

  var movie1 = new movie("x", "y", "z");

  console.log(movie1.getrating());

  //output
  //the rating is  z
  
  
//b) The constructor for the class Movie will set the class property 
//rating to "PG" as default when no rating is provided.  

class movie{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
  }
  var movie1 = new movie("x", "y", "PG");
  console.log(movie.rating);

  //d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
  // the studio “Eon Productions”, and the rating “PG­13”
  
  class movie{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
  }
  var CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13"); 
  
  console.log(CasinoRoyale.title);
  console.log(CasinoRoyale.studio);
  console.log(CasinoRoyale.rating);

  //output
  //Casino Royal
  // Eon Productions
  //PG13
