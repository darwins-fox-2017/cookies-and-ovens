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

let fs = require('fs')

class Cookies{
  constructor(cookiesProperties){
    this.type = cookiesProperties.type
    this.state = 'mentah'
    this.nowState = 0
    this.interval = 5
    this.overCookingAt = cookiesProperties.overCookingAt // in minute
  }

  bake(time){
    let count = 0
    let ingredient = new Ingredient('cookies_ingredients.txt')
    ingredient.parseIngredientFile()
    do {
      this.cook()
      console.log('----------------------------------------');
      console.log(`Menit ke : ${count}`);
      let postFix = ''
      switch (this.state) {
        case 'hangus':
          postFix = 'Yah, telat Sis ): ' + ' Udah gosong ' + (count - this.overCookingAt) + ' Menit yang lalu'
          break;
        case 'selesai':
          postFix = 'Buruan Angkat, Sis!'
          break;
        case 'hampir matang':
          postFix = 'Sabar atuh, Sis!'
          break;
        default:
      }
      console.log(`${this.type} : ${this.state} -->  ${ this.nowState >= this.overCookingAt ? postFix : (this.overCookingAt - count) + ' Menit lagi, Sis!'}`);
      count += 5
    } while (count <= time);
  }

  cook(){
    this.nowState += this.interval
    if (this.nowState > this.overCookingAt) {
      this.state = 'hangus'
    } else if (this.nowState == this.overCookingAt) {
      this.state = 'selesai'
    } else if(this.nowState < this.overCookingAt && this.nowState > 0){
      this.state = 'hampir matang'
    }
  }
}
// Read write file
class Ingredient{
  constructor(ingredientFile){
    this.ingredientFile = ingredientFile
    this.ingredients = []
  }

  parseIngredientFile(){
    let dataFromFile = fs.readFileSync(this.ingredientFile).toString().split('\n');
    let result = []
    for (var i = 0; i < dataFromFile.length; i++) {
      if (!dataFromFile[i] == '') {
        result.push(dataFromFile[i].replace(/\r?\n|\r/g, " "))
      }
    }
    // console.log(result);
    return result
  }
}

class PeanutCookies extends Cookies{
  constructor(peanutCookiesProperties) {
    super(peanutCookiesProperties)
    this.type = peanutCookiesProperties.type
  }
}

class ChocoChip extends Cookies{
  constructor(chocoChipProperties) {
    super(chocoChipProperties)
    this.type = chocoChipProperties.type
  }
}

let peanutCookiesProperties = {
  type: 'peanut butter',
  overCookingAt: 25
}

let chocoChipProperties = {
  type: 'Choco Chip',
  overCookingAt: 15
}


let letsCookPeanutCookies = new PeanutCookies(peanutCookiesProperties)
let letsCookChocoChip = new ChocoChip(chocoChipProperties)
letsCookPeanutCookies.bake(20)
console.log('============== ================ ===================');
letsCookChocoChip.bake(30)
