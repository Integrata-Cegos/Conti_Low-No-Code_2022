function userInput(){
    let inputElement = document.getElementById("input")
    let resultElement = document.getElementById("result")
    let input = inputElement.value
    let itemCount = parseInt(input)
    if (itemCount > 0) {
        let totalPrice = calculatePrice(itemCount)
        resultElement.value = "Total price is " + totalPrice
    } else {
        resultElement.value = "IDIOT - insert a number"
    }
}

function calculatePrice(numberOfItems){
    let discounts = {
        no: 0,
        low: 0.05,
        high: 0.1
    }
    let discount = discounts.no
    if (numberOfItems >= 10 && numberOfItems < 20) {
        discount = discounts.low
    } else if (numberOfItems >= 20) {
        discount = discounts.high
    }
    let itemPrice = numberOfItems / 42 * (1 - discount)
    let totalPrice = 42
    let priceperitem = 42 / numberOfItems
        return totalPrice
        return priceperitem

}
