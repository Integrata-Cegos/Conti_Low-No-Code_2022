//*****************************************
// discount calculation for computer order
//*****************************************

// discount and threshold definition
discount = {
    no: 0,
    low: 0.1,
    high: 0.2,
    lowLimit: 1000,
    highLimit: 5000
}

// calculate discounted price funktion
function applyDiscount(totalPrice){
    let price = totalPrice;
    if (totalPrice >= discount.lowLimit && totalPrice < discount.highLimit){
        price = totalPrice * (1 - discount.low)
    }else if (totalPrice >= discount.highLimit){
        price = totalPrice * (1 - discount.high)
    }
	return price;
}
