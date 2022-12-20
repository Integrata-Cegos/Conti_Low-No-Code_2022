function addToList(){
    let todo = document.getElementById("todo")
    let todoList = document.createElement("todoList")
    todoList.innerHTML = todo
    return todoList
}