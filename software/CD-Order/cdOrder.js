const cd = {

resultElement: document.getElementById("totalPrice")
inputQuantity: document.getElementById("quantity")
inputItem: document.getElementById("item") 

doOrder: function(){
    let articleId = this.inputItem.value
    let numberOfArticles = parseInt(this.inputQuantity.value)
    let totalPriceMessage = order.calculatePrice(articleId, numberOfArticles)
    this.resultElement.value = totalPriceMessage

}
}