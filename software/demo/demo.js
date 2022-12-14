let person = {
    lastname: "Sawitzki", 
    firstname: "Rainer"
}

console.log(person.lastname)
let first = person.firstname
console.log(first)
person.height = 183
console.log(person.height)

function sayHello(name){
    return "Hello " + name
}

console.log(sayHello("Hugo"))
console.log(sayHello("Emil"))
let helloMessage = sayHello(person.lastname)
console.log(helloMessage)