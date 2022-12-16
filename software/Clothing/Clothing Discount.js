function calculatePrice(numberOfItems){
    let discounts = {
        no: 0,
        low: 0.1,
        high: 0.2
    }
    let discount = discounts.no
    if (numberOfItems >= 10 && numberOfItems < 20) {
        discount = discounts.low
    } else if (numberOfItems >= 20) {
        discount = discounts.high
    }
    let itemPrice = 100
    let totalPrice = itemPrice * numberOfItems * (1 - discount)
    return totalPrice

}