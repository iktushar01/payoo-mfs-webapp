function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}

function getInputValueById(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIdAndValue(id, value){
    document.getElementById(id).innerText = value;
    document.getElementById(id).value = value;
    return value;
}