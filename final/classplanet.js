class CP {
    constructor(planet, month) {
      this.planet = planet;
      this.month = month;
      this.day = `${this.fpDay()} - ${this.pDay()}`;
      this.timeDay = this.tof();

      this.pDay();
      this.mainFun();
    }

    fpDay() {
        let fmDay = 1;
        if (this.planet === "Mercury") {
        console.log('In Mercury if statement')
          switch (this.month) {
            case "March":
              fmDay = 10;
              break;
            case "July":
              fmDay = 8;
              break;
            case "November":
            case "May":
              fmDay = 2;
              break;
            case "January":
              fmDay = 5;
              break;
            case "August":
              fmDay = 30;
              break;
            case "September":
              fmDay = 1;
              break;
            case "December":
              fmDay = 18;
              break;
            default:
              throw new Error(`Invalid month ${this.month} for planet Mercury`)
          }
        }
        if(this.planet === "Venus") {
          console.log("In Venus if statement")
          switch (this.month) {
            case "January":
            case "Feburary":
            case "March":
              fmDay = 1;
              break;
            case "April":
              fmDay = 8;
              break;
            case "July":
              fmDay = 30;
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
              fmDay = 1;
              default:
                throw new Error(`Invalid month ${this.month} for planet Venus`)
          }
        }
        if(this.planet === "Mars") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
              fmDay = 1;
              break;
            case "April":
              fmDay = 1;
              break;
            case "July":
              fmDay = 1;
              break;
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        if(this.planet === "Jupiter") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
            case "Febuary":
            case "March":
            case "April":
            case "July":
            case "August":
              fmDay = 1;
              break;
            case "June":
              fmDay = 8;
              break;
            case "September":
            case "October":
            case "November":
              fmDay = 1;
              break;
            case "December":
              fmDay = 7;
              break;
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        if(this.planet === "Saturn") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
            case "Febuary":
            case "March":
            case "April":
            case "July":
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        if(this.planet === "Uranus") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
            case "Febuary":
            case "March":
            case "April":
            case "July":
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        if(this.planet === "Neptune") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
            case "Febuary":
            case "March":
            case "April":
            case "July":
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        return fmDay;
    }
      //Another function switch statement to get the last day of the months of each plaet
      pDay() { 
        let lmDay = 0;
        if(this.planet === "Mercury"){
          switch (this.month) {
            case "July":
              lmDay = 29;
              break;
            case "January":
              lmDay = 26;
              break;
            case "May":
              lmDay = 23;
              break;
            case "March":
            case "December":
            case "October":
              lmDay = 31;
              break;
            case "November":
              lmDay = 23;
              break;
            case "September":
              lmDay = 19;
              break;
            case "August":
              lmDay = 30;
              break;
            default:
              console.log("Invalid Month input.");
              break;
          }
        }
        if(this.planet === "Venus") {
          switch(this.month) {
            case "January":
              lmDay = 31;
              break;
            case "Febuary":
              lmDay = 11;
              break;
            case "March":
              lmDay = 21;
              break
            case "April":
              lmDay = 8;
              break;
            case "July":
              lmDay = 30;
              break;
            case "October":
              lmDay = 31;
              break;
            case "November":
              lmDay = 30;
              break;
            case "December":
              lmDay = 30;
              break;
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        if(this.planet === "Mars") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
              lmDay = 10;
              break
            case "April":
              lmDay = 1;
              break
            case "July":
              lmDay = 1;
              break
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        if(this.planet === "Jupiter") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
            case "Febuary":
            case "March":
              lmDay = 31;
              break;
            case "April":
              lmDay = 26;
              break;
            case "June":
            case "September":
              lmDay = 30;
              break;
            case "July":
            case "August":
            case "October":
            case "November":
              lmDay = 31;
              break;
            case "December":
              lmDay = 31;
              break;
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        if(this.planet === "Saturn") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
            case "Febuary":
            case "March":
            case "April":
            case "July":
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        if(this.planet === "Uranus") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
            case "Febuary":
            case "March":
            case "April":
            case "July":
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        if(this.planet === "Neptune") {
          console.log("In Mars if statement")
          switch(this.month) {
            case "January":
            case "Febuary":
            case "March":
            case "April":
            case "July":
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
              default:
                throw new Error(`Invalid month ${this.month} for planet`)
          }
        }
        return lmDay;
      }
      //New function that is a switch statement that will determine the month and planet and will 
      //return true = morning and false = evening, depending on the planet
      tof() {
      let tod;
      if(this.planet === "Mercury") {
        switch(this.month) {
          case "March":
          case "July":
          case "November":
            tod = false;
            break;
          case "May":
          case "January":
          case "August":
          case "September":
          case "December":
            tod = true;
            break;
          default:
            tod = true;
            break;
        }
      }
      if(this.planet === "Venus"){
          switch(this.month){
            case "January":
            case "Feburary":
            case "March":
            case "April":
              tod = true;
              break;
            case "July":
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
              tod = false;
              break;
          }
      }
      if(this.planet === "Mars"){
          switch(this.month){
            case "January":
            case "Feburary":
            case "March":
            case "April":
              tod = true;
              break;
            case "July":
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
              tod = false;
              break;
          }
      }
      if(this.planet === "Jupiter") {
        switch(this.month) {
          case "March":
          case "July":
          case "November":
            tod = false;
            break;
          case "May":
          case "January":
          case "August":
          case "September":
          case "December":
            tod = true;
            break;
          default:
            tod = true;
            break;
        }
      }
      if(this.planet === "Saturn") {
        switch(this.month) {
          case "March":
          case "July":
          case "November":
            tod = false;
            break;
          case "May":
          case "January":
          case "August":
          case "September":
          case "December":
            tod = true;
            break;
          default:
            tod = true;
            break;
        }
      }
      if(this.planet === "Uranus") {
        switch(this.month) {
          case "March":
          case "July":
          case "November":
            tod = false;
            break;
          case "May":
          case "January":
          case "August":
          case "September":
          case "December":
            tod = true;
            break;
          default:
            tod = true;
            break;
        }
      }
      if(this.planet === "Neptune") {
        switch(this.month) {
          case "March":
          case "July":
          case "November":
            tod = false;
            break;
          case "May":
          case "January":
          case "August":
          case "September":
          case "December":
            tod = true;
            break;
          default:
            tod = true;
            break;
        }
      }
        if (tod === true) {
          return "Morning"
        } else {
          return "Evening"
        }
      }
      
      /*This function: mainFun will determine the planet, month, and time of day it the planet will appear*/
      mainFun()  {
        const setTime = this.tof();
        console.log(setTime)
        const ufDay = this.fpDay();
        const ulDay = this.pDay();
        console.log(ufDay)
        console.log(ulDay)
        }
    
  }
  export { CP };
  