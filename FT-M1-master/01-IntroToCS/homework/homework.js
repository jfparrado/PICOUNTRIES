'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let splitStr = num.split("");
  let reverseArray = splitStr.reverse();
  let sum = 0;
  for (let i = 0; i < reverseArray.length; i++) {
    sum += parseInt(reverseArray[i]) * Math.pow(2, i);
  }
  return sum;
  // return splitStr.length
}

function DecimalABinario(num) {
  // tu codigo aca
  let newNum = "";
  for (num; num >= 1; num /= 2) {
    if (num % 2 === 0) {
      newNum += "0";
    }
    else {
      newNum += "1";
    }
  }
  let splitStr = newNum.split("");
  let reverseArray = splitStr.reverse();
  let joinArray = reverseArray.join("");
  return joinArray


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}