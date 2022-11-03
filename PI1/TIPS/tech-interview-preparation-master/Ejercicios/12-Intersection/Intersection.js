function intersection(arr1, arr2) {
  // Your code here:
}

module.exports = intersection;

// function intersection(arr1, arr2) {
//   // Your code here:
//   console.log(arr1);
//   console.log(arr2);
// ​
//   // SOLUCIÓN 1 *******************************************************
//   // const result = [];
// ​
//   // for (const num1 of arr1)
//   //   for (const num2 of arr2)
//   //     if (num1 === num2) {
//   //       result.push(num1);
//   //       break;
//   //     }
//   // return result;
//   //***************************************************************** */
//   // SOLUCIÓN 2 *****************************************************
// ​
//   // let i = 0;
//   // let j = 0;
//   // let result = [];
// ​
//   // while (i < arr1.length && j < arr2.length) {
//   //   const num1 = arr1[i];
//   //   const num2 = arr2[j];
//   //   if (num1 === num2) {
//   //     result.push(num1);
//   //     i++;
//   //     j++;
//   //   } else num1 > num2 ? j++ : i++;
//   // }
//   // return result;
// ​
//   /******************************************************************** */
//   // SOLUCIÓN 3
//   // let result = [];
//   // for (const num1 of arr1) if (arr2.includes(num1)) result.push(num1);
//   // return result;
//   //******************************************************************* */
//   // SOLUCIÓN 4
//   // return arr1.filter((num) => arr2.includes(num));
//   //******************************************************************** */
//   // SOLUCIÓN 5
//   // const result = [];
//   // const hashMap = {};
//   // for (const num1 of arr1) hashMap[num1] = true;
//   // for (const num2 of arr2) if (hashMap[num2]) result.push(num2);
//   // console.log(hashMap);
//   // return result;
//   //******************************************************************* */
//   // SOLUCIÓN 6
//   // const result = [];
//   // const arrayAsociativo = [];
//   // for (const num1 of arr1) arrayAsociativo[num1] = true;
//   // for (const num2 of arr2) if (arrayAsociativo[num2]) result.push(num2);
//   // console.log(arrayAsociativo);
//   // return result;
//   //******************************************************************* */
//   // SOLUCIÓN 7
//   const result = [];
//   const hashMap = new Map();
//   for (const num1 of arr1) hashMap.set(num1, true);
//   for (const num2 of arr2) if (hashMap.get(num2)) result.push(num2);
//   console.log(hashMap);
//   return result;
// }
// ​
// module.exports = intersection;
// ​
// // console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])); //([
// ​
// // console.log(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])); //([]);
// ​
// console.log(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8]));
