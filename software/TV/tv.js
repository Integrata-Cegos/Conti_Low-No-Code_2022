let articleIdInput = document.getElementById("articleId")
let quantityInput = document.getElementById("quantity")
let resultOutput = document.getElementById("result")
function doOrder(){
    let articleId = articleIdInput.value
    let quantity = parseInt(quantityInput.value)
    let totalPriceMessage = order.calculatePriceTV(articleId, quantity)
    resultOutput.value = totalPriceMessage

}