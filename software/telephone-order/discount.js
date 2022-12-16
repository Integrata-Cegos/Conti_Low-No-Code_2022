let discount ={
    no: 0, low: 0.05, high: 0.1,
    lowlimit:400, highlimit:1000
}

function applydiscount(totalprice){
    let price=totalprice
    if (totalprice>=discount.highlimit){
        price=totalprice*(1-discount.high)
    }elseif (totalprice>=discount.lowlimit){
        price=totalprice*(1-discount.low)
    }  
return price;
}


