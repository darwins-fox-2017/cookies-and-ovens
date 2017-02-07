class Cookies{
  constructor(){
    this.status = 'raw'
  }
}

class Oven{
  constructor(){
    this._tray = [];
  }

  addCookies(cookies) {
    this._tray.push(cookies)
  }

  bake(time){
    console.log(time);

    for(let i=0; i<=time; i+=2){
      for(let j=0; j<this._tray.length; j++){
        if(i < this._tray[j].cooked_time/2+5){
          this._tray[j].status = this._tray[j].status
        }else if(i< this._tray[j].cooked_time-5){
          this._tray[j].status = "almost done"
        }else if(i == this._tray[j].cooked_time){
          this._tray[j].status = "done"
        }else {
          this._tray[j].status = "burned"
        }
        console.log(`minute ${i} : your ${this._tray[j].name} cookies is ${this._tray[j].status}`);
      }
      console.log('=========================================================');
    }
  }
}


class PeanutButterCookies extends Cookies{
  constructor(){
    super()
    this.name = "Peanut Butter"
    this.cooked_time = 60
  }
}

class ChocolateCookies extends Cookies{
  constructor(){
    super()
    this.name = "Chocolate Chips"
    this.cooked_time = 40
  }
}

class PlainCookies extends Cookies{
  constructor(){
    super()
    this.name = "Plain"
    this.cooked_time = 30
  }
}

let pbCookies = new PeanutButterCookies()
let chocoCookies = new ChocolateCookies()
let plaincookies = new PlainCookies()

let oven = new Oven(pbCookies)

oven.addCookies(pbCookies)
oven.addCookies(chocoCookies)
oven.addCookies(plaincookies)
oven.bake(60)
