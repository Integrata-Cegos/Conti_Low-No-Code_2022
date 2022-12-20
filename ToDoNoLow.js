const list = {

    inputElement: document.getElementById("input"),
    outputElement: document.getElementById("output"),
    
    DoAdd:  function(){
        let listItem = this.inputElement.value
        this.appendItemToList(listItem)
    },
    
    appendItemToList: function(listEntry){
        let newLi = document.createElement("li")
        newLi.innerHTML = listEntry
        this.outputElement.appendChild(newLi)
    },
    
    DoClear: function() {
    
        while (this.outputElement.hasChildNodes()) {
    
            this.outputElement.removeChild(this.outputElement.firstChild)
    
        }
    
    }
    
    }