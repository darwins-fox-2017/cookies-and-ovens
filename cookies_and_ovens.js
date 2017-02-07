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
  constructor(time_cook){
    this.time_cook = time_cook
    this.time = 0
    this.status = "mentah"
  }

  cook(){
    this.time_cook++

    if (this.time_cook < 5){
      this.status = "mentah"
    }
    if (this.time_cook > 5 && this.time_cook < this.time){
      this.status =  "hampir masak"
    }
    if (this.time_cook === this.time){
      this.status = "selesai"
    }
    if (this.time_cook > this.time){
      this.status = "Gosong"
    }
  }
}

class CoklatKue extends Cookies{
  constructor(time_cook, time){
    super(time_cook)
    this.time = 10
  }
}

class KacangKue extends Cookies{
  constructor(time_cook, time){
    super(time_cook)
    this.time = 12
  }
}

console.log();
console.log("============================================================");
console.log();

//CoklatKue
let masak1 = new CoklatKue(0)
for(var i = 0; i<15; i++){
  masak1.cook()
  console.log(masak1);
}

console.log();
console.log("============================================================");
console.log();

// KacangKue
let masak2 = new KacangKue(0)

for(var i = 0; i<15; i++){
  masak2.cook()
  console.log(masak2);
}
