 //NUMBERS
 const score = 100 
 console.log(score)

 const num = new Number(100)
 console.log(num)
 console.log(typeof num)

 console.log(num.toString())

 console.log(num.toFixed(2))

 const otherNum = 134.98

 console.log(otherNum.toPrecision(3))
 console.log(otherNum.toPrecision(2))

 const localeg = 100000;
 console.log(localeg.toLocaleString())

 console.log(localeg.toLocaleString("en-IN"))//to change IN

// +++++++++++++++++++++++++++++++++===================================================================

//MATHS PRACTICE

   console.log(Math.abs(-22))

   console.log(Math.round(676.99))

   console.log(Math.max(6,7,8,4))

   console.log(Math.floor(4.2))//4
   console.log(Math.ceil(4.2))//5

   console.log(Math.random())
   console.log(Math.floor(Math.random()*10)+1)

   const max = 10;
   const min = 5;

   console.log(Math.floor(Math.random()*(max - min +1) +min))

   //in above line finding a random num between 10 to 5 and using floor math function not to get max num this provide min round of num 