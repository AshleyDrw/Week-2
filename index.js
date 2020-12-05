let isHotOutside = false;
let isWeekDay = true;
let hasMoneyInPocket = true;

let costOfMilk = 3;
let moneyInWallet = 35;
let thirstLevel = 5;

let shouldBuyIceCream = isHotOutside && hasMoneyInPocket;
let willGoSwimming = isHotOutside && !isWeekDay;
let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekDay;
let willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= costOfMilk * 2; 

console.log(shouldBuyIceCream);
console.log(willGoSwimming);
console.log(isAGoodDay);
console.log(willBuyMilk);