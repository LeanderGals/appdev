  //this part of code is the factory called factorymethod with three properties in the function, namely the name, age and hobby.
  function factorymethod({ fname, age, hobby }) {
    return {
      fname,
      age,
      hobby,
      //is this line of codes this is where the string that will be displayed in the console
      display: function () {
        return console.log(
          `Wazzup yo, my name is ${this.fname}, and I'm ${this.age} years old and my hobby is ${this.hobby}.`
        );
      },
      //in here we set our properties to be changeable anytime by just calling the method.
      setfname(newName){
        this.fname = newName;
      },
      setAge(newAge) {
        this.age = newAge;
      },
      sethobby(newHobby){
        this.hobby = newHobby
      }
      
    };
  }
  // in here we set the values of fname to May then, age to 21, and lastly the hobby into play rubiks cube
  const person = factorymethod({
    fname: "May",
    age: 21,
    hobby: "play rubik's cube",
  });
  //in this part we declare a new set of values in fname, age and hobby and then displaying it again.
  person.display();
  person.setfname("Belle");
  person.setAge(28);
  person.sethobby("play guitar");
  person.display();