function HasBalancedBrackets(string) {
  // Your code here:
}

module.exports = HasBalancedBrackets;

// function HasBalanceBrackets(string) {
//   const validOpenBrackets = ["(", "[", "{"];
//   const validCloseBrackets = [")", "]", "}"];
//   const openedBrackets = [];
// ​
//   for (let i = 0; i < string.length; i++) {
//     const bracket = string[i];
//     console.log(bracket);
//     if (validOpenBrackets.includes(bracket)) {
//       openedBrackets.push(bracket);
//     }
//     if (validCloseBrackets.includes(bracket)) {
//       const index = validCloseBrackets.indexOf(bracket);
//       const brother = validOpenBrackets[index];
//       if (openedBrackets.at(-1) === brother) {
//         openedBrackets.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   if (openedBrackets.length === 0) return true;
//   return false;
// ​
//   // const validBrackets = {
//   //   "(": ")",
//   //   "[": "]",
//   //   "{": "}",
//   // };
// ​
//   // const openBrackets = [];
// ​
//   // for (const bracket of string) {
//   //   if (validBrackets[bracket]) openBrackets.push(bracket);
//   //   else if (validBrackets[openBrackets.pop()] !== bracket) return false;
//   // }
// ​
//   // return !openBrackets.length;
// }
// ​
// // console.log(HasBalanceBrackets("()")); //(true);
// ​
// // console.log(HasBalanceBrackets("{[]()}")); //(true);
// ​
// // console.log(HasBalanceBrackets("{[(])}")); //(false);
// ​
// // console.log(HasBalanceBrackets("{[(")); //(false);
// ​
// // console.log(HasBalanceBrackets("{[([{()[]{}}])]}")); //(true);
// ​
// // console.log(HasBalanceBrackets("{[]}}")); //(false);
