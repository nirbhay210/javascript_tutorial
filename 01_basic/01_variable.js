const accountId = 210312
let accountEmail ="nirbhay@gmail.com"
var accountPassword = "Osho@0102"
accountCity = "Faridabad"
let accountState


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// accountId =2 // not allowed

/*
Prefer not to use var because of block scope and functional scope
*/

accountEmail = "nirbhay210@nirbhay.com"
accountPassword = "arvan1404"
accountCity = "Delhi"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
