let articleIdInput = document.getElementById("articleId")
let numberOfArticlesInput = document.getElementById("numberOfArticles")
let totalPriceOutput = document.getElementById("totalPrice")

function calculatePrice(){
    let articleId = articleIdInput.value
    let numberOfArticles = parseInt(numberOfArticlesInput.value)
    let totalPrice = 42
    let result = createTotalPriceMessage(articleId, numberOfArticles, totalPrice)
    totalPriceOutput.value = result

}

function createTotalPriceMessage(articleId, numberOfArticles, totalPrice){
    return `total price: ${numberOfArticles} articles with id ${articleId} cost: ${totalPrice}` 
}


