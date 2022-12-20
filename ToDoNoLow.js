let articleIdInput = document.getElementById("articleId")
let numberOfArticlesInput = document.getElementById("numberOfArticles")
let totalPriceOutput = document.getElementById("totalPrice")
const articlePrice = 100
function calculatePrice(){
    let articleId = articleIdInput.value
    let numberOfArticles = parseInt(numberOfArticlesInput.value)
    let totalPrice = numberOfArticles * articlePrice
    totalPrice = discount.apply(totalPrice)
    let totalPriceMessage = createTotalPriceMessage(articleId, numberOfArticles, totalPrice)
    totalPriceOutput.value = totalPriceMessage

}

function createTotalPriceMessage(articleId, numberOfArticles, totalPrice){
    return `total price: ${numberOfArticles} articles with id ${articleId} cost: ${totalPrice}` 
}