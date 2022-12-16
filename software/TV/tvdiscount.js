let discount = {
	no: 0,	low: 0.1,high: 0.2,
	lowLimit:250, highLimit: 2000,
    apply: function (result){
        let price = result;
        if (result >= this.lowLimit && result < this.highLimit){
            price = result * (1 - this.low)
        }else if (result >= this.highLimit){
            price = result * (1 - this.high)
        }
        return price;
    }

}
