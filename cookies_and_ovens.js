
// Answer These Questions:
//
// - What are essential classes?
// class of cookies, and ovens

// - What attributes will each class have?
// class of cookies: type, time_start, time_finish, status (matang or hangus)
// class of oven: same with cookies (array cookies)

// - What interface will each class provide?
// output interfaces of cookies will provide in object array

// - How will the classes interact with each other?
// the classes will interact with other using composition method

// - Which classes will inherit from others, if any?
// class of cookies inherit to other cookies
//
// Your code here

class Cookies {
  constructor (name, status, start_time, bake_time) {
    this.name         = name
    this.status       = "Mentah"
    this.start_time   = 0
    this.bake_time    = 30
  }
}

class Chocolate extends Cookies {
  constructor (status) {
    super (status)
    this.name         = "Chocolate cookies"
    this.bake_time    = 60
  }
}

class Kastangel extends Cookies {
  constructor (status) {
    super (status)
    this.name         = "Kastangel cookies"
    this.bake_time    = 40
  }
}

class Oven {
  constructor (kue) {
    this.cookie       = kue
  }

  cooking (x) {
		for (let i = 0; i <= x; i++) {
      cookies.status()
      console.log('\n:: Progress Status in ' +i*10+ ' minutes ::\n');
      for (let j = 0; j < this.cookie.length; j++) {
  			this.cookie[j].start_time += 10
  			if (this.cookie[j].start_time > this.cookie[j].bake_time) {
  				this.cookie[j].status = "Hangus"
  			} else if (this.cookie[j].start_time == this.cookie[j].bake_time) {
  				this.cookie[j].status = "Matang"
  			} else if (this.cookie[j].start_time < this.cookie[j].bake_time) {
  				this.cookie[j].status = "Mentah"
  			}
		  }
    }
  }

  status () {
    for (let i = 0; i < this.cookie.length; i++) {
      console.log(`${this.cookie[i].name}: ${this.cookie[i].status}`);
    }
  }
}

let firstCookie   = new Chocolate()
let secondCookie  = new Kastangel()
let cookies       = new Oven([firstCookie, secondCookie])

cookies.cooking(5)
cookies.status()
