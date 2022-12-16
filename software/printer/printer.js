let articleIdInput = document.getElementById("articleId")
let numberOfArticlesInput = document.getElementById("numberOfArticles")
let totalPriceOutput = document.getElementById("totalPrice")
function doOrder(){
    let articleId = articleIdInput.value
    let numberOfArticles = parseInt(numberOfArticlesInput.value)
    let totalPriceMessage = order.calculatePrice(articleId, numberOfArticles)
    totalPriceOutput.value = totalPriceMessage

}