let inputElement = document.getElementById("newEntryInput")
let outputElement = document.getElementById("newEntryOutput")
let auswahl = document.getElementById("auswahlFeld")

function addInput(){
    let input = inputElement.value
    let wert = auswahl.value
    if (wert == "medium"){outputElement.value = input}
    else if (wert == "high"){outputElement.value = input.toUpperCase()}
    else {outputElement.value = input.toLowerCase()}
}

function deleteInput(){
    outputElement.value = ""
}