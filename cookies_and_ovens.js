/*
Answer These Questions:

- What are essential classes?
- What attributes will each class have?
- What interface will each class provide?
- How will the classes interact with each other?
- Which classes will inherit from others, if any?
*/

"use strict"

class Cake {
  constructor(args={}) {
    this.cakeName = args['cakeName'];
    this.ingridients = args['ingridients'];
    this.cookingTime = args['cookingTime'];
  }
}

class Chef extends Cake{
  constructor(cakeName, ingridients, cookingTime) {
    super(cakeName, ingridients, cookingTime)
  }

  getRecipe() {
    console.log( " # " + this.cakeName +" # ");
    console.log("=== Ingridients ===");
    for (var i = 0; i < this.ingridients.length; i++) {
      console.log("*" + this.ingridients[i]);
    }
    console.log("Cooking time : " + this.cookingTime + " menit");
  }

  makeBatter() {
    console.log("Chef is making the mixture of " + this.ingridients);
  }
}

class Oven extends Cake{
  constructor(cakeName, ingridients, cookingTime, milliseconds) {
    super(cakeName, ingridients, cookingTime);
    this.bakeTime = Math.ceil(Math.random()*60);
    this.milliseconds = 500;
  }

  bake() {
    console.log("\n Kue " + this.cakeName + " akan dimasak selama " + this.bakeTime + " menit");
    for (var i = 0; i <= this.bakeTime; i++) {
      console.log(" - Menit ke-" + i + " ");

      if (i < (Math.floor(this.cookingTime * 0.70)) && i !== this.bakeTime) {
        console.log("[INFO] Kue masih mentah");
        this.sleep(this.milliseconds);
      }
      else if (i  < (this.cookingTime - 5) && i !== this.bakeTime) {
        console.log("[WARNING] Kue hampir masak");
        this.sleep(this.milliseconds);
      }
      else if (i <= (this.cookingTime + 5) && i !== this.bakeTime) {
        console.log("[DONE] Kue telah matang");
        this.sleep(this.milliseconds);
      }
      else if (i > (this.cookingTime + 5) && i !== this.bakeTime){
        console.log("[DANGER] Kue Gosong. hahahah :sad:");
        this.sleep(this.milliseconds);
      }
      else if( i === this.bakeTime){
        this.serve()
        this.sleep(this.milliseconds);
      }
    }
  }

  serve() {
    console.log("\n *** Kue diangkat dari oven ***");
    if (this.bakeTime < (Math.floor(this.cookingTime * 0.70))) {
      console.log("Sayang sekali, kue " + this.cakeName + " kita masih mentah.");
      console.log("Coba lanjutkan lagi");
    }
    else if (this.bakeTime < (this.cookingTime - 5)) {
      console.log("Kue hampir masak");
      console.log("Butuh dipanaskan lagi");
    }
    else if (this.bakeTime < (this.cookingTime + 5)) {
      console.log("Selamat! Kue " + this.cakeName + " kita sudah matang!");
    }
    else if (this.bakeTime > (this.cookingTime + 5)){
      console.log("Sayang sekali, kue " + this.cakeName + " kita gosong.");
      console.log("Coba buat lagi");
    }
  }

  sleep() {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > this.milliseconds) {
        break;
      }
    }
  }
}

let PeanutButter = {
  cakeName : 'Peanut Butter',
  ingridients : ['1 cup : flour', '2 cups (gluten) : sugar', '2 cups : peanut butter', '1 cup : cinnamon', '2 tsp : butter'],
  cookingTime : 40
}

let Cakes = new Chef(PeanutButter);
let CakesMatang = new Oven(PeanutButter);

Cakes.getRecipe();
console.log("+++++ Process +++++");
Cakes.makeBatter();
CakesMatang.bake()
