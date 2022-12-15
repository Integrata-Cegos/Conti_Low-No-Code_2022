let articleIDInput = document.getElementById("articleId")
let articleNumberInput = document.getElementById("articleNumber")
let totalPriceOutput = document.getElementById("totalPrice")



function calculatePrice(){
    let articleId = articleIDInput.value
    let articleNumber = parseInt(articleNumberInput.value)
    let totalPrice = 42
    let result = createTotalPriceMessage(articleId, articleNumber, totalPrice)
    totalPriceOutput.value = result
}



function createTotalPriceMessage(articleId, articleNumber, totalPrice){
    return `total price for ${articleNumber}  ${articleId}  is  ${totalPrice}`  // Achtung, kein normales Hochkomma
}



