let resultElement = document.getElementById("totalPrice")
let inputQuantity = document.getElementById("quantity")
let inputItem = document.getElementById("item") 

function calculatePrice() {
    let input = inputQuantity.value
    let itemCount = parseInt(input)
    let totalPrice = 42
    let result  = createTotalPriceMessage(inputItem, itemCount, totalPrice)
    resultElement.value = result
}
    
function createTotalPriceMessage(inputItem, itemCount, totalPrice){
    return `total price: ${itemCount} articles with id ${inputItem} cost: ${totalPrice}` 
}
    