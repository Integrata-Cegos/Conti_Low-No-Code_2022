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
    return "total price: " +numberOfArticles + " articles with id " + articleId +" cost: " +totalPrice 
   
}
let discount ={
    no: 0, low: 0.05, high: 0.1
    lowlimit:400, highlimit:1000
}

function applydiscount(totalprice){
    let price=totalprice
    if (totalprice>=discount.highlimit){
        price=totalprice*(1-discount.high)
    }
    if (totalprice>=discount.lowlimit){
        price=totalprice*(1-discount.low)
    }  
return price
}


