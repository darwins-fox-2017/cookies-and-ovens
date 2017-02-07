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
"use strict"
class Cookies {
  constructor(setTime) {
    this.timeCook   = 0
    this.cooked     = setTime
    this.status     = "Mentah"
  }

  cookCondition(){
    this.timeCook++
    if (this.timeCook <= 5) {return this.status }
    if (this.timeCook <= 10) {return this.status = "Hampir matang!"}
    if (this.timeCook == this.cooked) {return this.status = "Matang!"}
    if (this.timeCook > this.cooked) {return this.status = "Gosong!"}
  }

}

class PeanutCake extends Cookies {
  constructor(setTime) {
    super(setTime)
    this.cooked = 13
  }
}

class ChocolateCake extends Cookies {
  constructor(setTime) {
    super(setTime)
    this.cooked = 12
  }
}

let cookiesResult = new PeanutCake()
    cookiesResult.cookCondition()
let cookiesResult2 = new ChocolateCake()
    cookiesResult2.cookCondition()

for (var i = 0; i < 15; i++) {
  cookiesResult.cookCondition()
  console.log(cookiesResult);
}

console.log('===================================================================');
console.log('===================================================================');
for (var i = 0; i < 15; i++) {
  cookiesResult2.cookCondition()
  console.log(cookiesResult2);
}
