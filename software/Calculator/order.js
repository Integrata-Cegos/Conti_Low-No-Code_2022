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
            return `${articleId} not found`
        }

    },
    createTotalPriceMessage: function (articleId, article, numberOfArticles, totalPrice) {
        return `total price: ${numberOfArticles} ${article.description} EUR ${totalPrice}`
    }

}