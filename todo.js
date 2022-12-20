const list = {

    inputElement: document.getElementById("input"),
    prioInput: document.getElementById("prioInput"),
    outputElement: document.getElementById("output"),
    
    DoAdd:  function(){
        let listItem = this.inputElement.value
        let Prio = this.prioInput.value
        // let totalList = listItem
        // this.outputElement.value = totalList
        this.createList(listItem,Prio)
        // this.appendItemToList(listItem,prioInput)
        console.log (listItem,Prio,'in Add')
    },
    
    createList: function(listEntry,Prio){
        let List = document.createElement("li")
        if (Prio == "low"){
            List.innerHTML = listEntry.toLowerCase() +' Prio:   '+Prio}
        if (Prio == "HIGH"){
            List.innerHTML = listEntry.toUpperCase() +' Prio:   '+Prio}
        if (Prio == "medium"){
            List.innerHTML = listEntry +' Prio:   '+Prio}

        let outputMsg=this.outputElement
        console.log (outputMsg,' List in createList')
        console.log (Prio,' Prio in createList')
        console.log (this.outputElement,'intoList')
        this.outputElement.appendChild(List)
    },
    
    DoClear: function() {
            while (this.outputElement.hasChildNodes()) {
                this.outputElement.removeChild(this.outputElement.firstChild)
            }
    
    }
    
    }