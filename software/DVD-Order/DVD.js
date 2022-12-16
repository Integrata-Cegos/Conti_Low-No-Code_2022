const dvd = {
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