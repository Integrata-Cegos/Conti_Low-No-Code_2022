// IDs

// entryInput
// prioInput
// Output


const updateList = {

    prioInput: document.getElementById(`prioInput`),
    entryInput: document.getElementById(`entryInput`),




    addButton: function(){

        let entryInput = this.entryInput.value
        let prioInput = this.prioInput.value

        output.value = this.createListMessage(entryInput, prioInput)

    },

    createListMessage: function(entryInput, prioInput)  {
        return `Prio: ${prioInput}                 Message:  --->  ${entryInput}`
    },


    clearButton: function () {
        output.value = ""
    },

    
}


