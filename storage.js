const saveLS = arrObj => {
    const serializedArr = JSON.stringify(arrObj);
    localStorage.setItem("cfp", serializedArr);
}

const getLS = () => {
    const retrievedArr = localStorage.getItem("cfp")
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    }
    else {
        return [];
    }
}

const arrObj = getLS();

export {arrObj, saveLS, getLS}