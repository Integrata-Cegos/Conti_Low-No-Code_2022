const act = {

    prio: document.getElementById("prio"),
    todo: document.getElementById("todo"),
    


    addToList: function(){

        let newEntry = this.todo.value
        let prio = this.prio.value

        this.createList(newEntry, prio)
    },

    createList: function(newEntry, prio)  {
        
        let List = document.createElement("li")


        if (prio == "low"){
            List.innerHTML = newEntry.toLowerCase()}
        if (prio == "high"){
            List.innerHTML = newEntry.toUpperCase()}
        if (prio == "medium"){
            List.innerHTML = newEntry}

        document.getElementById("todoList").appendChild(List)
    },


    deleteList: function () {
        todoList.value = ""
    },

    
}