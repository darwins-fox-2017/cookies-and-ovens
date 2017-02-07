// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Cookies {
  constructor(name, cookingTime) {
    this.name = name
    this.cookingTime = cookingTime
    this.time = 0
    this.status = 'uncooked'
  }

  cook () {
    this.time += 15
    if (this.cookingTime > this.time) {
      this.status = 'Almost Done'
      console.log(`${this.name} Cookies has cooked ${this.time} min and it's still ${this.status}`);
    } else if ( this.cookingTime == this.time) {
      this.status = 'Well Done'
      console.log(`${this.name} Cookies has cooked ${this.time} min and now is ${this.status} \nlet's enjoy the ${this.name} Cookies`);
    } else if ( this.cookingTime < this.time) {
      this.status = 'Overcooked'
      console.log(`${this.name} Cookies has cooked ${this.time} min and now.. Oh Nooooo it's ${this.status}!`);
    }
  }

  startCook() {
    console.log(`let's start cook a ${this.name} Cookies from ${this.status}`);
  }
}


class Peanut extends Cookies {
  constructor() {
    super('Peanut', 75)
  }
}

class Chocolate extends Cookies {
  constructor() {
    super('Chocolate', 60)
  }
}

let cookies1 = new Peanut()
let cookies2 = new Chocolate()

cookies1.startCook()
for (var i = 0; i < 5; i++) {
  cookies1.cook()
}


cookies2.startCook()
for (var i = 0; i < 5; i++) {
  cookies2.cook()
}
