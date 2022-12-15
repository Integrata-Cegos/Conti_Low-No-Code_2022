let articleIdInput = document.getElementById("articleId")
let countInput = document.getElementById("count")
let totalPriceOutput = document.getElementById("totalPrice")

function calculatePrice(){
    let articleId = articleIdInput.value
    let count = parseInt(countInput.value)
    let totalPrice = 42
    let result = createTotalPriceMessage(articleId, count, totalPrice)
    totalPriceOutput.value = result

}

function createTotalPriceMessage(articleId, count, totalPrice){
    return `total price: ${count} ${articleId} total cost: EUR ${totalPrice}` 
}