input = prompt("Number of items:")
itemCount = parseInt(input)
if (itemCount != NaN && itemCount > 0){
    itemPrice = 42 
    totalPrice = itemPrice * itemCount
    totalPriceOutput = "Total price: " + totalPrice
    console.log(totalPriceOutput)
    
}
else{
    console.log(input + " is not a positive number")
}
