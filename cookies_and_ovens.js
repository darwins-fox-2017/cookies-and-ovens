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
    this.status = "MENTAH"
    this.time = 0
    this.MATANG_TIME = 30
  }
}

class ChoclateCookies extends Cookies {
  constructor(status) {
    super(status)
    this.name = "Kue Coklat"
    this.MATANG_TIME = 30
  }
}

class PeanutCookies extends Cookies {
  constructor(status) {
    super(status)
    this.name = "Kue Kacang"
    this.MATANG_TIME = 40
  }
}

class Ovens {
  constructor(isiOven) {
    this.isiOven = isiOven
  }
  bake(n) {
    for(let j=1; j<=n; j++) {
      batch1.status()
      console.log("-------- STATUS MASAK MENIT KE-" + j*10 + "---------")
      for(let i=0; i<this.isiOven.length; i++) {
        this.isiOven[i].time += 10

        if(this.isiOven[i].time > this.isiOven[i].MATANG_TIME)
          this.isiOven[i].status = "GOSONG"
        else if(this.isiOven[i].time == this.isiOven[i].MATANG_TIME)
          this.isiOven[i].status = "MATANG"
        else
          this.isiOven[i].status = "MENTAH"
      }
    }
  }
  status() {
    for(let i=0; i<this.isiOven.length; i++) {
      console.log(`${this.isiOven[i].name}, Sudah : ${this.isiOven[i].status}`)
    }
  }
}


let a = new PeanutCookies()
let b = new PeanutCookies()
let c = new ChoclateCookies()

let batch1 = new Ovens([a, b, c])

batch1.bake(4)

batch1.status()
