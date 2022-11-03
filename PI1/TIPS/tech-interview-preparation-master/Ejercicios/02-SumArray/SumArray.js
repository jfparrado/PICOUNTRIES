function SumArray(arr, n) {
  // Your code here:
}

module.exports = SumArray;

// function SumArray (arr, n) {
//   // SOLUCION 1
//   // for (let i = 0; i < arr.length -1; i++) {
//   //   for (let j = i + 1; j < arr.length; j++) {
//   //     if(arr[i] + arr[j] === n ) return true;
//   //   }
//   // }
//   // return false
// ​
// // SOLUCION 2
//   let start = 0;
//   let end = arr.length -1;
// ​
//   while(start !== end) {
//     const sum = arr[start] + arr[end]
//     console.log(sum);
//     if(sum === n) return true
//     if(sum > n) end --
//     else start ++
//   }
//   return false
// }
// ​
// module.exports = SumArray
// ​
// ​
// ​
// // ORDENADOS
// console.log(SumArray([2, 4, 5, 9], 9))//(true)
// console.log(SumArray([2, 4, 5, 9], 12))//(false)
// console.log(SumArray([2, 5, 9], 4))//(false)
// ​
// // DESORDENADOS
// console.log(SumArray([4, 2, 9, 5], 7))//(true)
// console.log(SumArray([5, 2, 9, 4], 12))//(false)
