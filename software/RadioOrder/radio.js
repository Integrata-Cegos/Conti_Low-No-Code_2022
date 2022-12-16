let articleIdInput = document.getElementById("articleId")
let numberOfArticlesInput = document.getElementById("numberOfArticles")
let totalPriceOutput = document.getElementById("totalPrice")
const articlePrice = 100
function calculatePrice(){
    let articleId = articleIdInput.value
    let numberOfArticles = parseInt(numberOfArticlesInput.value)
    let totalPrice = numberOfArticles * articlePrice
    totalPrice = applyDiscount(totalPrice)
    let totalPriceMessage = createTotalPriceMessage(articleId, numberOfArticles, totalPrice)
    totalPriceOutput.value = totalPriceMessage

}

function createTotalPriceMessage(articleId, numberOfArticles, totalPrice){
    return `total price: ${numberOfArticles} articles with id ${articleId} cost: ${totalPrice}` 
}const radio = {
    articleIdInput: document.getElementById("articleId"),
    numberOfArticlesInput: document.getElementById("numberOfArticles"),
    totalPriceOutput: document.getElementById("totalPrice"),
    doOrder: function(){
        let articleId = this.articleIdInput.value
        let numberOfArticles = parseInt(this.numberOfArticlesInput.value)
        let totalPriceMessage = order.calculatePrice(articleId, numberOfArticles)
        this.totalPriceOutput.value = totalPriceMessage
    }
}