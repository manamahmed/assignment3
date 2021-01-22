//https://github.com/manamahmed/assignment3


//kilometerToMeter

function kilometerToMeter(km) {
    const meter = km * 1000;
    return meter;   
}

console.log(kilometerToMeter(2));




//budgetCalculator
function budgetCalculator(numOfGhori, numOfMobile, numOfLaptop) {

    const priceOfGhori = 50;
    const priceOfMobile = 100;
    const priceOfLaptop = 500;
    const totalBudget = (priceOfGhori * numOfGhori) + (priceOfMobile * numOfMobile) + (priceOfLaptop * numOfLaptop);
    
    return totalBudget;    
}

console.log(budgetCalculator(2, 4, 6));




//hotelCost
function hotelCost(totalDays) {

    let totalPrice = 0;
     

    if (totalDays > 20) {
        const remainingDays = totalDays - 20;
        const price = (remainingDays * 50) + (10 * 100) + (10 * 80);
        totalPrice = totalPrice + price;
        
    }
    else if (totalDays > 10) {
        const remainingDays = totalDays - 10;
        const price = (remainingDays * 80) + (10 * 100);
        totalPrice = totalPrice + price;
    
    } else {
        const price = (totalDays * 100);
        totalPrice = totalPrice + price;
    }

    return totalPrice;
}
console.log(hotelCost(2));




//megaFriend
var friendsName = ['Adam', 'Akkas', 'Shahrukh', 'Abraham Linkon', 'Salman Khan'];
var maxLetter = friendsName[0];

function megaFriend() {
    
   for (let i = 1; i < friendsName.length; i++) {
       var element = friendsName[i];
       if (element.length > maxLetter.length) {
           maxLetter = element;
        }

    }
    return maxLetter;
}
var largestName = megaFriend(friendsName);
console.log(largestName);





//Extra
function meterToKm(m) {
    const km = m / 1000;
    return km;
 }

 console.log(meterToKm(5000));