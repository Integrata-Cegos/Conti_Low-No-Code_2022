let resultElement = document.getElementById("totalPrice")
let inputQuantity = document.getElementById("quantity")
let inputItem = document.getElementById("item") 

function calculatePrice() {
    let item = inputItem.value
    let input = inputQuantity.value
    let itemCount = parseInt(input)
    let totalPrice = itemCount* 1
    totalPrice= applyDiscount(totalPrice)
    let result  = createTotalPriceMessage(item, itemCount, totalPrice)
    resultElement.value = result
}
    
function createTotalPriceMessage(inputItem, itemCount, totalPrice){
    return `total price: ${itemCount} articles with id ${inputItem} cost: ${totalPrice}` 
}
    