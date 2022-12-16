// let discount ={
//     no: 0, low: 0.05, high: 0.1,
//     lowlimit:400, highlimit:1000
// }

// function applydiscount(totalprice){
//     let price=totalprice
//     if (totalprice>=discount.highlimit){
//         price=totalprice*(1-discount.high)
//     }else if (totalprice>=discount.lowlimit){
//         price=totalprice*(1-discount.low)
//     }  
// return price;
// }

let discount = {
	no: 0,	low: 0.05,high: 0.1,
	lowLimit:400, highLimit: 1000,
    apply: function (totalPrice){
        let price = totalPrice;
        if (totalPrice >= this.lowLimit && totalPrice < this.highLimit){
            price = totalPrice * (1 - this.low)
        }else if (totalPrice >= this.highLimit){
            price = totalPrice * (1 - this.high)
        }
        return price;
    }

}



