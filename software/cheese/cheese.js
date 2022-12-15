let inputOrderId = document.getElementById("orderId")
let inputNumber = document.getElementById("number")
let resultElement = document.getElementById("result")

function userInput(){
    let input = inputNumber.value
    let id = inputOrderId.value
    let itemCount = parseInt(input)
    if (itemCount > 0) {
        let totalPrice = calculatePrice(itemCount)
        resultElement.value = "Total price: " + input + " articles with id " + id + " cost:" + totalPrice + " Euro "
    } else {
        resultElement.value = "invalid input"
    }
}

function clearInput(){
    inputElement.value = ""

}

function calculatePrice(numberOfItems){
    let discounts = {
        no: 0,
        low: 0,
        high: 0
    }
    let discount = discounts.no
    if (numberOfItems >= 10 && numberOfItems < 20) {
        discount = discounts.low
    } else if (numberOfItems >= 20) {
        discount = discounts.high
    }
    let itemPrice = 42
    let totalPrice = itemPrice * numberOfItems * (1 - discount)
    return totalPrice

}
