const order = {
    
    calculatePrice: function (articleId, numberOfArticles) {
        let article = articles[articleId] 
        if (article) {
        let totalPrice = numberOfArticles * article.price
        totalPrice = discount.apply(totalPrice)
        let totalPriceMessage = this.createTotalPriceMessage(articleId, numberOfArticles, totalPrice)
        return totalPriceMessage
    }
    else {
       return "article not found"
    }
},
    createTotalPriceMessage: function (articleId, numberOfArticles, totalPrice) {
        return `total price: ${numberOfArticles} articles with id ${articleId} cost: ${totalPrice}`
    }

}