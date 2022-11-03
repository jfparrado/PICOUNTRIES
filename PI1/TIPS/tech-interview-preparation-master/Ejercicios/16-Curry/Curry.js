function curry(fn) {
  // Your code here:
}

module.exports = curry;

// function curry(fn) {
//   // Your code here:
//   console.log(fn) // fn --> function
//   console.log(fn.length)
//   const args = []
//   return function cohorte30(value) {
//     args.push(value)
//     console.log(args);
//     // [1,2,3,4]
//     if(fn.length === args.length) return fn(...args);
//     return (nextValue) => cohorte30(nextValue)
//   }
// }
// function calcAllFour(var1, var2, var3, var4, arg5) {
//   return var1 + var2 - var3 * var4 + arg5;
// }
// /* const curriedCalcAllFour = curry(calcAllFour)
// const firstReturn = curriedCalcAllFour(1)
// console.log(firstReturn)
// const secondReturn = firstReturn(2);
// console.log(secondReturn)
// const thirdReturn = secondReturn(3)
// console.log(thirdReturn)
// const fourthReturn = thirdReturn(4)
// console.log(fourthReturn)
// const fiveReturn = fourthReturn(5)
// console.log(fiveReturn) */
// const curriedCalcAllFour = curry(calcAllFour);
// const firstReturn = curriedCalcAllFour(1)(2)(3)(4)(5);
// console.log(firstReturn);
// // primera parte: Entendiendo el ejercicio:
// ​
// /*
// /* function curry(fn) {
//   // Your code here:
//   console.log(fn) // fn --> function
//   return function (a) {
//     console.log(a)
//     return function (b) {
//       console.log(b)
//       return fn(a,b)
//     }
//   }
// } */
// ​
// /* const one = (a) => a+2
// const curryOne = curry(one)
// const firstReturn = curryOne(3)
// console.log(firstReturn) // 5
// console.log(curryOne) */
// ​
// //para 2 parametros
// ​
// /* const two = (a, b) => a + b;
// const curryTwo = curry(two)
// const firstReturn = curryTwo(4)
// console.log(firstReturn)
// const secondReturn = firstReturn(5)
// console.log(secondReturn) */
// ​
// module.exports = curry;
