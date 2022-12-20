const list = {

inputElement: document.getElementById("input"),
outputElement: document.getElementById("output"),

DoAdd:  function(){
    let listItem = this.inputElement.value
    let totalList = listItem
    this.outputElement.value = totalList

}

}