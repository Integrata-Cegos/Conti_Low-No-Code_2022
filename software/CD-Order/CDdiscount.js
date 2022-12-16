let discount = {
    no: 0, low: 0.1, high: 0.2,
    lowLimit: 10, highLimit: 50,
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
