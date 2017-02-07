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
    this.timeCook   = setTime
    this.timeMature = 0
    this.status     = "Mentah"
  }

  cookCondition(){
    this.timeCook++
    if (this.timeCook <= 5) {return this.status }
    if (this.timeCook <= 10) {return this.status = "Hampir matang!"}
    if (this.timeCook == this.timeMature) {return this.status = "Matang!"}
    if (this.timeCook > this.timeMature) {return this.status = "Gosong!"}
  }
}

class PeanutCake extends Cookies {
  constructor(setTime, timeMature) {
    super(setTime)
    this.timeMature = 13
  }
}

class ChocolateCake extends Cookies {
  constructor(setTime, timeMature) {
    super(setTime)
    this.timeMature = 12
  }
}

let cookiesResult = new PeanutCake(3)
    cookiesResult.cookCondition()

console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
cookiesResult.cookCondition()
console.log(cookiesResult);
