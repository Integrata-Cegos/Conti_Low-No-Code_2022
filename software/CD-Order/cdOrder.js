let resultElement = document.getElementById("totalPrice")
let inputQuantity = document.getElementById("quantity")
let inputItem = document.getElementById("item") 

function doOrder(){
    let articleId = inputItem.value
    let numberOfArticles = parseInt(inputQuantity.value)
    let totalPriceMessage = order.calculatePrice(articleId, numberOfArticles)
    resultElement.value = totalPriceMessage

}
  