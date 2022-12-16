let discounts = {
    no: 0, low: 0.1, high: 0.2,
    lowLimit: 10, highLimit: 50
}

function applyDiscount(totalPrice) {
let price = totalPrice
if (totalPrice >= discounts.lowLimit && totalPrice < discounts.highLimit) {
    price = totalPrice* (1-discounts.low)
} else if (totalPrice >= discounts.highLimit) {
    price = totalPrice* (1-discounts.high)
}
    return price
}