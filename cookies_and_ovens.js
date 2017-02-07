// Answer These Questions:
//
// - What are essential classes? wee need class named cookies
// - What attributes will each class have? cookies name, cooking time
// - What interface will each class provide?
// - How will the classes interact with each other? we will have cookies variation which child from cookies class
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Cookies{
    constructor(cookiesProperties){
      this.kind = cookiesProperties.kind;
      this.interval=5
      //this.State=0;
      this.cokiesFinis = cookiesProperties.cokiesFinis||20;
    }

    set cookingTime(time){
      this.cookingTime = time;
    }
    get cookingTime(){
      return this.cookingTime;
    }

    cook(time){
      let cookTimer=0;
      do {
        cookTimer+=this.interval;
        console.log(`menit ke ${cookTimer} ${this.kind} dalam kondisi ${this.bakedStatus(cookTimer)}`);
        console.log('-------------------------------------------');

      } while (cookTimer<time);
    }

    bakedStatus(timer){
      let bakeStatus =[{'time' : this.cokiesFinis/4, 'status' : 'Mentah' },
                       {'time' : this.cokiesFinis*(2/4), 'status' : 'Hampir matang' },
                       {'time' : this.cokiesFinis*(3/4), 'status' : 'Matang' },
                       {'time' : this.cokiesFinis, 'status' : 'Hangus' }]
       for (var i = 0 ; i < bakeStatus.length-1; i++) {
         if (timer>=bakeStatus[i].time && timer<bakeStatus[i+1].time ) {
           return bakeStatus[i].status
         }
       }
       return bakeStatus[3].status
    }

}

class bolu extends Cookies{
  constructor(cookiesProperties){
    super(cookiesProperties)
    this.kind='bolu';
  }
}

class crakers extends Cookies{
  constructor(cookiesProperties){
   super(cookiesProperties)
    this.kind='crakers';
  }
}

let bolukukus= new bolu({'kind':'bolu kukus' ,'cokiesFinis':20})

bolukukus.cook(30)
