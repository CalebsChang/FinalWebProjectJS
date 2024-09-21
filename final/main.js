import{ planetFORM, outputDiv, SUBMIT, planetChoice, monthChoice } from "./global.js"
import { renderTbl } from "./table.js";
import {saveLS, arrObj} from "./storage.js";
import {mainFun} from "./calander.js";
import { CP } from "./classplanet.js";
import { disClock } from "./clock.js";

if (arrObj.length > 0) {
  renderTbl(arrObj)
}

const validateField = function (event) {
  const field = event.target.value
  const fieldId = event.target.id
  const fieldError = document.getElementById(`${fieldId}Error`)
  if (field === '') {
    fieldError.textContent = `${fieldId} is required`
    event.target.classList.add('invalid')
  }
  else {
    fieldError.textContent = '';
    event.target.classList.remove('invalid');
  }
}

disClock 


planetFORM.addEventListener('submit', function(e) {
  e.preventDefault();
  try{
  const choicePlanet = planetChoice.value;
  const choiceMonth = monthChoice.value;
  if(choicePlanet !== '' && choiceMonth !== '') {
    SUBMIT.textContent = '';
    const cpObj = new CP(choicePlanet, choiceMonth)
    arrObj.push(cpObj)
    console.log(arrObj)

    const oPara = document.createElement('p');
    const outPara = document.createElement('p');
    outPara.textContent = "Aligning constellations... (loading)"
    setTimeout(() => {
      outPara.remove()
    }, 2000)
    outputDiv.appendChild(oPara);
    outputDiv.appendChild(outPara);

    setTimeout(() =>{
      mainFun(choicePlanet, choiceMonth)
      saveLS(arrObj);
      renderTbl(arrObj)
    }, 2000)
    planetFORM.reset();
  }
  else {
    SUBMIT.textContent = "Form requires both planet and month";
    e.preventDefault()
  }
  }
  catch(error) {
    const outPara = document.createElement('p');
    outPara.textContent = "Planet doesn't appear during this month please try again"
    outPara.style.color = "red";
    outputDiv.appendChild(outPara);
    setTimeout(() => {
      outPara.remove()
    }, 5000)
  }
})