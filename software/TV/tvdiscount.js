let discount = {
    no: 0, low: 0.1, high: 0.2,
    lowLimit: 250, highLimit: 2000
}

function applyDiscount(result){
    let price = result;
    if (result >= discount.lowLimit && result < discount.highLimit){
        price = result * (1 - discount.low)
    } else if (result >= discount.highLimit){
        price = result * (1 - discount.high)
    }
    return price
}
