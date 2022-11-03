function longestIncreasingSubsequence(nums) {
  // Your code here:
}

module.exports = longestIncreasingSubsequence;
// function longestIncreasingSubsequence(nums) {
//   // Your code here:
// ​
//   // nums --> array numeros
//   let longitud = 0;
//   let sequences = [];
// ​
//   for (const num of nums) {
//     sequences.push([num]);
//     for (const seq of sequences) {
//       if (num > seq[seq.length - 1]) {
//         const newSequence = seq.concat(num);
// ​
//         sequences.push(newSequence);
//         if (newSequence.length > longitud) longitud = newSequence.length;
//       }
//     }
//   }
//   return longitud;
// }
// ​
// console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]));
// console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80]));
// console.log(longestIncreasingSubsequence([3, 10, 4, 5]));
// console.log(
//   longestIncreasingSubsequence([
//     10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28,
//   ])
// );
// ​
// module.exports = longestIncreasingSubsequence;
