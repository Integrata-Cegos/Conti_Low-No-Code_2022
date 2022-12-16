const articles = {
	"id-123": {description: "Lesley xyz", price: 29.99},
	"id-124": {description: "Höhner", price: 666.66},

}


let articleId = prompt()
let article = articles[articleId]
if (article){
    let articlePrice = article.price
    console.log(articlePrice)
}
console.log("Artikel nicht gefunden")
