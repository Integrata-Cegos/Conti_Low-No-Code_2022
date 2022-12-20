// IDs

// entryInput
// prioInput
// outputMessage


const updateList = {

    prioInput: document.getElementById(`prioInput`),
    entryInput: document.getElementById(`entryInput`),
    outputMessage: document.getElementById(`outputMessage`),


    addButton: function(){

        let entryList = this.entryInput.value
        let prioInput = this.prioInput.value

        this.createList(entryList, prioInput)
    },

    createList: function(entryList, prioInput)  {
        // new line
        let List = document.createElement("li")

        if (prioInput == "low"){
            List.innerHTML = entryList.toLowerCase()}
        if (prioInput == "high"){
            List.innerHTML = entryList.toUpperCase()}
        if (prioInput == "medium"){
            List.innerHTML = entryList}

            this.outputMessage.appendChild(List)
    },


    clearButton: function () {
        outputMessage.value = ""
    },

    
}


