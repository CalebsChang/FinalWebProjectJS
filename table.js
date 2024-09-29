import { CP } from "./classplanet.js";
import { planetFORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headTextArr = ["Planet", "Month", "Days","TOF", "Button"];
  headTextArr.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
}

const renderTblBtn = (index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", e => {
    if (data.length > 1) {
      console.log("del the chosen array");
      console.log(e);
      onUpdate(index, data);
    } else {
      console.log("del the chosen array as well as the heading");
      onUpdate(index, data)
      renderTblHeading();
    }
  });
  btnEdit.addEventListener("click", e => {
    console.log("edit the chosen array");
    if (data.length > 1) {
      let editArr = data[index];
      console.log("editArr", editArr);
      planetFORM.planetChoice.value = editArr.planet;
      planetFORM.monthChoice.value = editArr.month;
      //planetFORM.dayChoice.value = editArr.day;
      onUpdate(index, data);
    } else {
      let editArr = data[index];
      console.log("editArr", editArr);
      planetFORM.planetChoice.value = editArr.planet;
      planetFORM.monthChoice.value = editArr.month
      //planetFORM.dayChoice.value = editArr.day;
      onUpdate(index, data);
      renderTblHeading();
    }
  });
  return td;
}

const renderTBLBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach( (obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["planet", "month", "day", "timeDay"]
    keys.forEach(key => {
      const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
    })
    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const renderTbl = data => {
  const table = renderTblHeading();
  const tbody = renderTBLBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}
export { renderTbl };
