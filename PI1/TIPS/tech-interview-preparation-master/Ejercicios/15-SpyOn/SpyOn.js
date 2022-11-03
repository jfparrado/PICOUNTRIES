function spyOn(fn) {
  // Your code here:
}

module.exports = spyOn;

// const adder = (n1, n2) => {
//   return n1 + n2;
// };
// adder(3, 2); // 5
// adder(3, 5); // 8
// // .getCallCount() // 2
// // .wasCalledWith(4) // false
// // .returned(5) // true
// function spyOn_test1(fn) {
//   // Your code here:
//   var result = fn(12, 4);
//   return "hola " + result;
// }
// let espia_test1 = spyOn_test1(adder);
// console.log(espia_test1);
// ​
// /*
// .getCallCount(): Devuelve la cantidad de veces que el spy fue llamado
// .wasCalledWith(val): devuelve true si la función fue alguna vez llamada con ese valor, else false
// .returned(val): devuelve true si alguna vez devolvió ese valor.
// */
// ​
// /*
// CLOUSURE
// */
// function spyOn_test2(fn) {
//   // Your code here:
//   return function (n1, n2) {
//     return fn(n1, n2);
//   };
// }
// let espia_test2 = spyOn_test2(adder);
// console.log(espia_test2(4, 3));
// ​
// function spyOn_test3(fn) {
//   // Your code here:
//   return function (n1, n2) {
//     return fn(n1, n2);
//   };
// }
// let espia_test3 = spyOn_test3(adder);
// console.log(espia_test3(4, 6));
// ​
// // .getCallCount Devuelve la cantidad de veces que el spy fue llamado
// ​
// function spyOn_test4(fn) {
//   // Your code here:
//   let count = 0;
//   const spy = function (n1, n2) {
//     count++;
//     return fn(n1, n2);
//   };
//   spy.getCallCount = () => count;
//   return spy;
// }
// let espia_test4a = spyOn_test4(adder);
// console.log(espia_test4a(21, 6));
// console.log(espia_test4a(2, 4));
// console.log(espia_test4a.getCallCount());
// ​
// let espia_test4b = spyOn_test4(adder);
// console.log(espia_test4b(43, 6));
// console.log(espia_test4b.getCallCount());
// ​
// // .wasCalledWith(4) devuelve true si la función fue alguna vez
// // llamada con ese valor, else false
// ​
// function spyOn_test5(fn) {
//   // Your code here:
//   let params_count = [];
//   let count = 0;
//   const spy = function (...args) {
//     // ...args
//     count++;
//     args.forEach((arg) => params_count.push(arg));
//     return fn(...args);
//   };
//   spy.getCallCount = () => count;
//   spy.wasCalledWith = (val) => {
//     let result = params_count.find((e) => {
//       return e === val;
//     });
//     return result ? true : false;
//   };
//   return spy;
// }
// let espia_test5 = spyOn_test5(adder);
// console.log(espia_test5(21, 6));
// console.log(espia_test5(2, 4));
// console.log(espia_test5.getCallCount());
// console.log(espia_test5.wasCalledWith(22));
// ​
// ​
// ​
// ​
// ​
// // .returned(val): devuelve true si alguna vez devolvió ese valor.
// ​
// function spyOn_test6(fn) {
//   // Your code here:
//   let params_count = [];
//   let count = 0;
//   let returns = []
//   const spy = function (...args) {
//     // ...args
//     count++;
//     const result = fn(...args)
//     returns.push(result)
//     args.forEach((arg) => params_count.push(arg));
//     return fn(...args);
//   };
//   spy.getCallCount = () => count;
//   spy.wasCalledWith = (val) => {
//     let result = params_count.find((e) => {
//       return e === val;
//     });
//     return result ? true : false;
//   };
//   spy.returned = (val) => {
//     let result = returns.find((e) => {
//       return e === val;
//     });
//     return result ? true : false;
//   };
//   return spy;
// }
// let espia_test6 = spyOn_test6(adder);
// console.log(espia_test6)
// console.log(espia_test6(21, 6));
// console.log(espia_test6(2, 4));
// console.log(espia_test6.getCallCount());
// console.log(espia_test6.wasCalledWith(4));
// console.log(espia_test6.returned(55));
// ​
// ​
// // Las funciones son objetos (tipo de dato especial)
// function ejemplo() {
//   return "hola";
// }
// ​
// console.log(ejemplo);
// ejemplo.run = function () {
//   return "correr";
// };
// ejemplo.str = "queeee";
// console.log(ejemplo);
// ​
// console.log(ejemplo.str);
// console.log(ejemplo.run());
// ​
// module.exports = spyOn;
