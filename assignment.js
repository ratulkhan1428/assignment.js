

function kilometerToMeter(kilometer) {
    if ( kilometer <= 0 ){
        return "Distance must be longer than 0 km";
        }
        else{
            var meter = kilometer * 1000;
            return meter;
        }
}
var distance = kilometerToMeter(13);
console.log(distance)





function budgetCalculator(watch, mobile, laptop){
    if ( watch, mobile, laptop <= 0){
        return "Number of products should be at least 1";
        }
        else{
            var watchPrice = watch * 50;
            var mobilePrice = mobile * 100;
            var laptopPrice = laptop * 500;
            totalPrice = watchPrice + mobilePrice + laptopPrice;
            return totalPrice;
        }
}
var budget = budgetCalculator(4, 5, 2);
console.log(budget)





function hotelCost(days){
    var cost = 0;
    if (days <= 10){
        cost = days * 100;
    }
    else if (days <= 20){
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var lastPart = remaining * 50;
        cost = firstPart + secondPart + lastPart;
    }
    return cost;
}
var total = hotelCost(27);
console.log(total)





function megaFriend(friends) {
    if (friends == "") {
        return "Your array is empty";
    }
    else {
        var longest = "";
    
        for (var friend of friends) {
            if (friend.length > longest.length) longest = friend;
        }
    }
    return longest;
}
var result = megaFriend(['Rakib', 'Nadiya', 'Khabirul', 'Mushfiqur', 'Fuad', 'Tonny']);
console.log(result)