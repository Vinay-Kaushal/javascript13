
// push,pop,shift,unshift,spread,concate,flat(infinity)
  
let marvel = ["thor" , "loki", "ironman"]

let dc = ["superman" , "flash" , "nova"]

marvel.push(dc)

console.log(marvel)

//concatenate

const newarr = marvel.concat(dc)
   console.log(newarr)


let x =[1,3,5,5,6,6]

console.log(x.push(7))

const y = x.join()//convert into string
console.log(y)

console.log(typeof(y))

const mynewArray = [2,2,45,5,5,5,3,43]

console.log("A:"+mynewArray.slice(0,4))

console.log("B :" + mynewArray.splice(0,4))


const arr = [...dc,...marvel]

console.log(arr)

const myflate = [1,2,3,4,[1,2,3,4,[1,2,3,4]]]

const anothernum = myflate.flat(Infinity)

console.log(anothernum)