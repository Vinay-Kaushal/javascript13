
let str1 = "vinay";
let str2 = " kaushal"

let str = str1 + str2
console.log(str)

//operationn percedence

console.log(1 + "2") //12
console.log( "1" + 2) //12
console.log(1 + 2 + "3") //33  left to right percedence

//console.log( 3 + 2 *4 %5) => do not read like this
console.log( (3 + 2) + 4 * 3 % 3) // do this

let str3 = "";

let convert = Boolean(str3);
console.log(convert);//we get 0
console.log(typeof(convert))