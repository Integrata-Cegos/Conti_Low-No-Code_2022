const guitar = {
    
    articleIdSelect: document.getElementById("articleId"),
    numberOfArticlesInput: document.getElementById("numberOfArticles"),
    orders: document.getElementById("orders"),
    doOrder: function(){
        let articleId = this.articleIdSelect[this.articleIdSelect.selectedIndex].value
        let numberOfArticles = parseInt(this.numberOfArticlesInput.value)
        let totalPriceMessage = order.calculatePrice(articleId, numberOfArticles)
        this.appendOrderToList(totalPriceMessage)
    },

    appendOrderToList: function(orderMessage){
        let newLi = document.createElement("li")
        newLi.innerHTML = orderMessage
        this.orders.appendChild(newLi)
    }
}

for (const [key, value] of Object.entries(articles)){
    console.log(key)
    guitar.articleIdSelect.add(new Option(key))
}
