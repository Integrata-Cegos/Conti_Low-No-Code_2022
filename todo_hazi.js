let inputElement = document.getElementById("newEntryInput")
let outputElement = document.getElementById("newEntryOutput")
let auswahl = document.getElementById("auswahlFeld")
//let outputListe = document.getElementById("outputListe")

function addInput(){
    let input = inputElement.value
    if (auswahl.value == "medium"){outputElement.value = input}
    else if (auswahl.value == "high"){outputElement.value = input.toUpperCase()}
   else {outputElement.value = input.toLowerCase()}
}

//function addInput(){
    //let input = inputElement.value
    //outputElement.value = input
//}

//   function (ausgabe){
    //let newLi = document.createElement("Li")
    //newLi.innerHTML = ausgabe
    //this.outputListe.appenChild(newLi)

//}

function deleteInput(){
    outputElement.value = ""
}