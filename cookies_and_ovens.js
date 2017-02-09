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

class cokkies {
	constructor(waktu_mulai, waktu_matang) {
		this.waktu_mulai = 0
		this.status_kue = 'mentah'
	}

	cook() {
		this.waktu_mulai += 10

		if(this.waktu_mulai < 30) {
			return this.status_kue = `${this.nama} = Mentah`
		} else if(this.waktu_mulai == 30) {
			return this.status_kue = `${this.nama} = Setengah Matang`
		} else if(this.waktu_mulai == this.waktu_matang) {
			return this.status_kue = `${this.nama} = Matang`
		} else if(this.waktu_mulai > this.waktu_matang) {
			return this.status_kue = `${this.nama} = Hangus`
		}

	}
}

class kueKacang extends cokkies {
	constructor(nama, waktu_mulai, waktu_matang) {
		super(waktu_mulai)
	this.waktu_matang = 50
	}

}

class kueCoklat extends cokkies {
	constructor(nama, waktu_mulai, waktu_matang) {
		super(waktu_mulai)
		this.waktu_matang = 70
		this.nama = "Kue Coklat"
	}
}

let coba_kue = new kueCoklat()
let i = 0
while(i < 10) {
	coba_kue.cook()
	console.log(coba_kue)
	i++
}
// for(let i = 0; i < 10; i++) {
// 	coba_kue.cook()
// 	console.log(coba_kue)
// }