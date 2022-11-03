function MaxValue(shares) {
  // Your code here:
}

module.exports = MaxValue;

// function MaxValue(shares) {
//   console.log(shares);
// ​
//   // O(n)
//   let buy = shares[0];
//   let maxProfit = -Infinity;
// ​
//   for (let i = 1; i < shares.length; i++) {
//     const sell = shares[i];
//     const profit = shares[i] - buy;
//     maxProfit = profit > maxProfit ? profit : maxProfit;
//     buy = sell < buy ? sell : buy;
//   }
//   return maxProfit;
// ​
//   // O(n*m) discutible
//   //   let maxProfit = -Infinity;
//   //   for (let i = 0; i < shares.length - 1; i++) {
//   //     for (let j = i + 1; j < shares.length; j++) {
//   //       const profit = shares[j] - shares[i];
//   //       maxProfit = profit > maxProfit ? profit : maxProfit;
//   //     }
//   //   }
//   //   return maxProfit;
// }
// ​
// module.exports = MaxValue;
// ​
// console.log(MaxValue([12, 11, 10, 5, -13])); // -1
// ​
// console.log(MaxValue([4, 3, 2, 5, 11, 1, 9])); //(9);
// ​
// console.log(MaxValue([23, 7, 3, 4, 8, 6])); //(5);
