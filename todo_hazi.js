let inputElement = document.getElementById("newEntryInput")
let outputElement = document.getElementById("newEntryOutput")

function addInput(){
    let input = inputElement.value
    outputElement.value = input
}

function deleteInput(){
    outputElement.value = ""
}