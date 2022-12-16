let articleIdInput = document.getElementById("articleId")
let numberOfArticlesInput = document.getElementById("numberOfArticles")
let totalPriceOutput = document.getElementById("totalPrice")

function calculatePrice(){
    let articleId = articleIdInput.value
    let articlePrice = articleId
    let article=articles[articleId]
    let numberOfArticles = parseInt(numberOfArticlesInput.value)
    
    if (article) {
        let totalPrice = article.price//articles[articleId].price//articlePrice 
        totalPrice = totalPrice*numberOfArticles 
            
        totalPrice=applydiscount(totalPrice)
        let result = "total price: " +numberOfArticles + " articles (t-phones) with id " + articleId +" cost: " +totalPrice
        totalPriceOutput.value = result
    }
    else{
        totalPriceOutput.value='article/t-phone not existing/found'
    }
}


