const order = {
    calculatePrice: function (articleId, numberOfArticles) {
        let article = articles[articleId]
        if (article) {
            let totalPrice = numberOfArticles * article.price
            totalPrice = discount.apply(totalPrice)
            let totalPriceMessage = this.createTotalPriceMessage(articleId, article, numberOfArticles, totalPrice)
            return totalPriceMessage
        }
        else{
            return `article with id ${articleId} not found` // Test
        }

    },
    createTotalPriceMessage: function (articleId, article, numberOfArticles, totalPrice) {
        return `total price: ${numberOfArticles} articles id ${articleId}=${article.description} cost: ${totalPrice}`
    }

}