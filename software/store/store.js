let doAgain = ""
do {
    let input = prompt()
    let itemCount = parseInt(input)
    if (itemCount > 0) {
        let discount = 0
        if (itemCount >= 10 && itemCount < 20) {
            discount = 0.05
        } else if (itemCount >= 20) {
            discount = 0.1
        }
        let itemPrice = 42
        let totalPrice = itemPrice * itemCount * (1 - discount)
        console.log("Total price is " + totalPrice)
    } else {
        console.log("invalid input")
    }
    doAgain = prompt("again?")
} while (doAgain != "exit");