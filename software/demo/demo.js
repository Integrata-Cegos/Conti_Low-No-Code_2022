let discounts = {
    no: 0,
    low: 0.05,
    high: 0.1
}

console.log(discounts.high) //Ausgabe des großen Rabatts

let discounts2 = discounts 

console.log(discounts2.high) // Ausgabe?

discounts2.high = 0.2

console.log(discounts2.high) //Ausgabe des geänderten Rabatts
console.log(discounts.high) //Was wird hier ausgegeben? 2 Möglichkeiten: 0.1 oder 0.2
console.log(discounts2.low) //Was wird hier ausgegeben? 
console.log(discounts.low) //Was wird hier ausgegeben?

function playWithDiscounts(d){
    d.low = 0.01
    console.log(d.low)
}

playWithDiscounts(discounts) //Was wird hier ausgegeben?
console.log(discounts.low) //Was wird hier ausgegeben?