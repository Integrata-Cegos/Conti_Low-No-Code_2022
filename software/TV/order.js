const order = {
    calculatePriceTV: function (articleId, quantity) {
        let article = articles [articleId]
        if (article) {
            let result = quantity * article.price
            result = discount.apply(result)
            let totalPriceMessage = this.createTotalPriceMessage(articleId, article, quantity, result)
            return totalPriceMessage
        }
        else {
            return `article with id ${articleId} not found`
        }

    },
    createTotalPriceMessage: function (articleId, article, quantity, result) {
        return `total price: ${quantity} articles: ${articleId}=${article.description} cost: ${result}`
    }

}