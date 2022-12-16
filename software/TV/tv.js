let articleIdInput = document.getElementById("articleId")
let quantityInput = document.getElementById("quantity")
let totalPriceOutput = document.getElementById("result")
const articlePrice = 100
function calculatePriceTV(){
    let articleId = articleIdInput.value
    let quantity = parseInt(quantityInput.value)
    let result = quantity * articlePrice
    result = applyDiscount(result)
    let totalPrice = createTotalPriceMessage(articleId, quantity, result)
    totalPriceOutput.value = totalPrice

}

function createTotalPriceMessage(articleId, quantity, result){
    return `total price: ${quantity} articles with id ${articleId} cost: ${result}` 
}