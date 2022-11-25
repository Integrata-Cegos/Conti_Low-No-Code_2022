input = prompt()
itemCount = parseInt(input)
if (itemCount > 0){
    itemPrice = 42
    totalPrice = itemPrice * itemCount
    console.log("Total price is " + totalPrice)
}else{
    console.log("invalid input")
}
