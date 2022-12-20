const list = {

inputElement: document.getElementById("input"),
inputPriority: document.getElementById("priority"),
outputElement: document.getElementById("output"),

DoAdd:  function(){
    let listItem = this.inputElement.value
    let prioInput = this.inputPriority.value

    this.appendItemToList(listItem, prioInput)
},

appendItemToList: function(listEntry, prioInput){
    let newLi = document.createElement("li")

    if (prioInput =="Low") {
        newLi.innerHTML = listEntry.toLowerCase() 
    }
    if (prioInput =="High") {
        newLi.innerHTML = listEntry.toUpperCase()    
    }
    if  (prioInput =="Medium") {
        newLi.innerHTML = listEntry 
    }
   
    this.outputElement.appendChild(newLi)
},

DoClear: function() {

    while (this.outputElement.hasChildNodes()) {

        this.outputElement.removeChild(this.outputElement.firstChild)

    }

},

}