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
class Cookies{
  constructor(name, flavour, cooking_time, sugar, flour, egg){
  	this.name = name
    this.flavour = flavour ;
    this.cooking_time = cooking_time;
    this.sugar = sugar || 0
    this.flour = flour || 1
    this.egg = egg || 0
  }
}

class GingerCookies extends Cookies{
  constructor(){
    super("Kue Jahe", "sweet spicy", 20, 2, 3, 1);
  }
}

class Baking{
  constructor(cookies){
    this.time = 0;
    this.cookies = cookies;
    this.cooked = "raw";
    console.log(`memasak ${this.cookies.name}. kue akan matang dalam ${this.cookies.cooking_time} menit`);
  }
  cook(){
    this.time += 5
    if (this.time >= this.cookies.cooking_time + 10){
        console.log(`${this.cookies.name} Hangus`);
        this.cooked = "overcooked"
    } else if (this.time < this.cookies.cooking_time){
    	var cooking = this.cookies.cooking_time - this.time
        console.log(`${this.cookies.name} Belum Matang. Angkat kue ${cooking} menit lagi`);
        this.kondisi = "raw"
    } else {
        return console.log(`${this.cookies.name} Matang, Yeah!!`);
        this.kondisi = "cooked"
    }
  }
}


var cookies = new GingerCookies()
var baking = new Baking(cookies)
baking.cook()
baking.cook()
baking.cook()
baking.cook()
baking.cook()
baking.cook()
baking.cook()
baking.cook()
