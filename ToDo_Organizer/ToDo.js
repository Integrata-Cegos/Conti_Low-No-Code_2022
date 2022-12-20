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

        // let id = this.lastID + 1
        // lastID = id
        // List = this.outputMessage
        // outputMessage.value = `${List} ${this.createListMessage(entryInput, prioInput, id)}`
    },

    createList: function(entryList, prioInput)  {

        let List = document.createElement("li")
        List.innerHTML = prioInput + "   " + entryList
        this.outputMessage.appendChild(List)

        // return `ID: ${id} Prio: ${prioInput}          Message:  --->  ${entryInput}`
    },


    clearButton: function () {
        outputMessage.value = ""
    },

    
}


