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
    constructor(taste, bakedTime) {
        this.taste      = taste
        this.status     = 'Mentah'
        this.bakedTime  = bakedTime
        this.statusList = {
            'mentah'      : [Math.round(this.bakedTime*(1/4)), 'Mentah'], 
            'hampirMatang': [Math.round(this.bakedTime*(3/4)), 'Hampir Matang'],
            'matang'      : [this.bakedTime, 'Matang'],
            'hangus'      : [this.bakedTime+2, 'Hangus']
        }
    }

    bake() {
        console.log(`|||||||||||||||| Sedang memanggang cookies ${this.taste} ||||||||||||`)
        for (let i = 0; i <= this.bakedTime+5; i++) {
            if (i < this.statusList.mentah[0]) {

                console.log(`Cookies ${this.taste} masih ${this.status} di menit ${i}`)

            } else if (i >= this.statusList.hampirMatang[0] && i < this.statusList.matang[0]) {

                this.status = this.statusList.hampirMatang[1]
                console.log(`Cookies ${this.taste} ${this.status} di menit ${i}`)

            } else if (i >= this.statusList.matang[0] && i < this.statusList.hangus[0]) {
                
                this.status = this.statusList.matang[1]
                console.log(`Cookies ${this.taste} telah ${this.status} di menit ${i}`)

            } else if (i >= this.statusList.hangus[0]) {
                this.status = this.statusList.hangus[1]
                console.log(`OMG!! Cookies ${this.taste} sudah ${this.status} di menit ${i}`)

            }
        }
        console.log(`\n\n\n\n\n`)
    }

}

class ChocolateCookie extends Cookies {
    constructor(taste, bakedTime) {
        super(taste, bakedTime)
    }
}

class CheeseCookie extends Cookies {
    constructor(taste, bakedTime) {
       super(taste, bakedTime) 
    }
}


let chocolate = new ChocolateCookie('Coklat', 25)
let cheese = new CheeseCookie('Cheese', 40)
chocolate.bake()
cheese.bake()



