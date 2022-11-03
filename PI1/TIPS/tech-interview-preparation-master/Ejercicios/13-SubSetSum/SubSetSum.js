function subsetSum(nums, n) {
  // Your code here:
}

module.exports = subsetSum;

// function subsetSum(nums, n) {
//   // Your code here:
//   //que nos llega?
//   // nums --> arr
//   //n --> int --> resultado de las sumas que se deben iterar en el arr
//   //espera si por algun motivo la combinacion entre los numeros del arr es = n return true, else false
//   //Esta de abajo es una solucion a medias
//   /* console.log(nums)
//   console.log(n)
//   let sum = 0
//   for (const num of nums) {
//     console.log(num)
//     if(num === n) return true
//     if(num < n)sum = sum + num
//     console.log(sum)
//     if(sum === n) return true
//   }
//   return false */
//   let sums =  new Set([0])
//   for (const num of nums) {
//     let sumAux = [...sums]
//     for (const sum of sumAux) {
//       let totalSum = sum + num;
//       if (totalSum === n) return true;
//       if(totalSum < n && !sums.has(totalSum))sums.add(totalSum);
//     }
//   }
// return false
// ​
// }
// /*
// console.log(subsetSum( [1,10,5,3], 4 ))// output: true <= 1 + 5 + 3
// ​
// console.log(subsetSum( [1,10,5,3], 19 ))// output:true <= add all 4
// ​
// console.log(subsetSum( [1,10,5,3], 17 ))// output:false
// ​
// console.log(subsetSum( [1,10,5,3], 2 ))// output:false
// ​
// console.log(subsetSum( [1,10,5,3], 10 ))// output:true <= 10 + 0 = 10  */
// ​
// module.exports = subsetSum;
