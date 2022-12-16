let discount = {
	no: 0,	low: 0.05,high: 0.1,
	lowLimit:300, highLimit: 600,
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