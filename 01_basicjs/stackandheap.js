

//so basically a non primmitive datatype of data is store in heap memory and to
// get this data we need refrence variable or we can say it will store by its original value or refrence

//and non primitive data store in stack tha data is copied value of in memory db
/*
let firstName = "VINAY"

let secondName = firstName;

secondName = "nischay"

console.log(firstName) // VINAY     ! primitive datatype value store in stack
console.log(secondName) // nischay  !
*/

let user = {
     email : "vinaykaushal87439@gmail.com",
     pass : "212"

}

let user2 = user;
user2.email = "nischay22@gmail.com"

console.log(user)
console.log(user2)



