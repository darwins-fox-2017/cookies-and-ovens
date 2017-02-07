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
  constructor() {
    this.status = 'Mentah'
  }
}

class PeanutButter extends Cookies{
  constructor() {
    super()
    this.cookieName = "Peanut Butter"
    this.cookedTime = 45
  }
}

class ChocolateChip extends Cookies{
  constructor() {
    super()
    this.cookieName = "Chocolate Chip"
    this.cookedTime = 20
  }
}

class Oven {
  constructor() {
    this._tray = []
  }

  addCookies(cookie) {
    this._tray.push(cookie)
  }

  startBake(cookingTime) {
    for (let i = 0; i <= cookingTime; i++) {
      for (let j = 0; j < this._tray.length; j++) {
        if (i > Math.round(this._tray[j].cookedTime)) {
          console.log(`Status Cookies dalam menit ke-${i} menit, ${this._tray[j].cookieName} gosong`)
        } else if (i === this._tray[j].cookedTime) {
          console.log(`Status Cookies dalam menit ke-${i} menit, ${this._tray[j].cookieName} matang`)
        } else if (i >= this._tray[j].cookedTime/2) {
          console.log(`Status Cookies dalam menit ke-${i} menit, ${this._tray[j].cookieName} hampir matang`)
        } else if (i <= this._tray[j].cookedTime/4){
          console.log(`Status Cookies dalam menit ke-${i} menit, ${this._tray[j].cookieName} mentah`)
        }
      }
      console.log('----------------------------------------------------------------------');
    }
  }
}

let peanutButter = new PeanutButter()
let chocolateChip = new ChocolateChip()
let oven = new Oven()

oven.addCookies(peanutButter)
oven.addCookies(chocolateChip)
oven.startBake(45)
