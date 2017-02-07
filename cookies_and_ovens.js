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

class Cookie {
  constructor(name,timeCook) {
    this.name = name
    this.timeCook = timeCook
    this.status = 'mentah'
    this.time = 0
  }

  cooking(minutes) {
    this.time += minutes
    if (this.timeCook > this.time  ) {
      this.status = 'setengah matang'
    } else if (this.timeCook == this.time) {
      this.status = 'sudah matang'
    } else if (this.timeCook < this.time) {
      this.status = 'sudah gosong'
    }
  }

  printStatus() {
    console.log(`${this.name} sudah dimasak selama ${this.time} menit, dan hasil nya adalah ${this.status}` );
  }
}

class peanutCookies extends Cookie {
  constructor(name, timeCook) {
    super(name, timeCook)
  }
}

class chochoCookies extends Cookie {
  constructor(name, timeCook) {
    super(name, timeCook)
  }
}

class Oven {
  constructor() {
    this.cookie = []
  }

  addCookies(name, timeCook) {
    if (name == peanutCookies) {
      this.cookie.push( new peanutCookies(name, timeCook) )
    } else if (name == chochoCookies) {
      this.cookie.push( new chochoCookies(name, timeCook) )
    }
  }
}

let kue = new Oven()
kue.addCookies(peanutCookies,20)
kue.addCookies(chochoCookies, 15)
kue.cookie[0].cooking(5)
kue.cookie[0].printStatus()

kue.cookie[1].cooking(5)
kue.cookie[1].printStatus()

kue.cookie[0].cooking(5)
kue.cookie[0].printStatus()

kue.cookie[1].cooking(5)
kue.cookie[1].printStatus()

kue.cookie[0].cooking(5)
kue.cookie[0].printStatus()

kue.cookie[1].cooking(5)
kue.cookie[1].printStatus()

kue.cookie[0].cooking(5)
kue.cookie[0].printStatus()

kue.cookie[1].cooking(5)
kue.cookie[1].printStatus()
