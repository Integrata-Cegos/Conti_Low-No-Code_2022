const act = {

    prio: document.getElementById("prio"),
    todo: document.getElementById("todo"),
    todoListe: document.getElementById("todoList"),


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
        else {
            List.innerHTML = newEntry}

        this.todoList.appendChild(List)
    },


    deleteList: function () {
        todoList.value = ""
    },

    
}