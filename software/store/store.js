do {
    input = prompt()
    itemCount = parseInt(input)
    if (itemCount > 0) {
        discount = 0
        if (itemCount >= 10 && itemCount < 20) {
            discount = 0.05
        } else if (itemCount >= 20) {
            discount = 0.1
        }
        itemPrice = 42
        totalPrice = itemPrice * itemCount * (1 - discount)
        console.log("Total price is " + totalPrice)
    } else {
        console.log("invalid input")
    }
    doAgain = prompt("again?")
} while (doAgain != "no");
