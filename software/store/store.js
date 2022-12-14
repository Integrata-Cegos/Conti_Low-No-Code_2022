let doAgain = ""
let discounts = {
    no: 0,
    low: 0.05,
    high: 0.1
}
do {
    let input = prompt()
    let itemCount = parseInt(input)
    if (itemCount > 0) {
        let discount = discounts.no
        if (itemCount >= 10 && itemCount < 20) {
            discount = discounts.low
        } else if (itemCount >= 20) {
            discount = discounts.high
        }
        let itemPrice = 42
        let totalPrice = itemPrice * itemCount * (1 - discount)
        console.log("Total price is " + totalPrice)
    } else {
        console.log("invalid input")
    }
    doAgain = prompt("again? raus mit no!")
} while (doAgain != "no");