const order = {
    articlePrice: 100,
    calculatePriceTV: function (articleId, quantity) {
        let result = quantity * this.articlePrice
        result = discount.apply(result)
        let totalPriceMessage = this.createTotalPriceMessage(articleId, quantity, result)
        return totalPriceMessage

    },
    createTotalPriceMessage: function (articleId, quantity, result) {
        return `total price: ${quantity} articles with id ${articleId} cost: ${result}`
    }

}