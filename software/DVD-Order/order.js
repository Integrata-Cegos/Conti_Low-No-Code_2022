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
            return `ARTIKEL MIT DER ID ${articleId} GIBT ES NICHT`
        }

    },
    createTotalPriceMessage: function (articleId, article, numberOfArticles, totalPrice) {
        return `BESTELLUNG: ${numberOfArticles} X ARTIKEL ${article.description} ZUM PREIS VON: ${totalPrice}`
    }

}