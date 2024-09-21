export {mainFun, fpDay, pDay, tof} 
//function Switch Statement is to help out with the days of the planet Mercury
//Also determines the first day the planets will appear
const fpDay = function(uPlanet , pMonth) {
    let fmDay = 1;
    if (uPlanet === "Mercury") {
    console.log('In Mercury if statement')
      switch (pMonth) {
        case "January":
          fmDay = 5;
          break;
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
          throw new Error(`Invalid month ${pMonth} for planet Mercury`)
      }
    }
    if(uPlanet === "Venus") {
      console.log("In Venus if statement")
      switch (pMonth) {
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
            throw new Error(`Invalid month ${pMonth} for planet Venus`)
      }
    }
    if(uPlanet === "Mars") {
      console.log("In Mars if statement")
      switch(pMonth) {

      }
    }
    return fmDay;
}
  //Another function switch statement to get the last day of the months of each planet
  const pDay = function(uMonth, uPlanet) { 
    let lmDay = 0;
    if(uPlanet === "Mercury"){
      switch (uMonth) {
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
    return lmDay;
  }
  //New function that is a switch statement that will determine the month and planet and will 
  //return true = morning and false = evening, depending on the planet
  const tof = function(uMonth, uPlanet) {
  let tod;
    if(uPlanet === "Mercury"){
        switch(uMonth) {
          case "March":
          case "July":
          case "November":
            tod = true;
            break;
          case "May":
          case "January":
          case "August":
          case "September":
          case "December":
            tod = false;
            break;
          default:
            tod = true;
            break;
        }
      }
    if(uPlanet === "Venus"){
      switch(uMonth){
        case "January":
        case "Feburary":
        case "March":
        case "April":
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
  const mainFun = (userP , userM) => {
    const setTime = tof(userM, userP);
    console.log(setTime)
    const ufDay = fpDay(userP, userM);
    const ulDay = pDay(userM, userP);
    console.log(ufDay)
    console.log(ulDay)
    }
