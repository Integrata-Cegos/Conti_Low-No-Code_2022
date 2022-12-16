let discount = {
	no: 0,	low: 0.1,high: 0.2,
	lowLimit:1000, highLimit: 5000
}

function applyDiscount(totalPrice){
    let price = totalPrice;
    if (totalPrice >= discount.lowLimit && totalPrice < discount.highLimit){
        price = totalPrice * (1 - discount.low)
    }else if (totalPrice >= discount.highLimit){
        price = totalPrice * (1 - discount.high)
    }
	return price;
}

