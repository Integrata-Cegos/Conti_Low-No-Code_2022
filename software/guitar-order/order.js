const order = {
    articlePrice: 100,
    calculatePrice: function (articleId, numberOfArticles) {
        let totalPrice = numberOfArticles * this.articlePrice
        totalPrice = discount.apply(totalPrice)
        let totalPriceMessage = this.createTotalPriceMessage(articleId, numberOfArticles, totalPrice)
        return totalPriceMessage

    },
    createTotalPriceMessage: function (articleId, numberOfArticles, totalPrice) {
        return `total price: ${numberOfArticles} articles with id ${articleId} cost: ${totalPrice}`
    }

}