// x = 1; //1
// var a = 5; //5
// var b = 10; //10
// var c = function (a, b, c) {
//   var x = 10; //10
//   console.log(x); //10
//   console.log(a); //8
//   var f = function (a, b, c) {
//     b = a; //8
//     console.log(b); //8
//     b = c; //10
//     var x = 5; //5
//   }
//   f(a, b, c);
//   console.log(b); //9
// }
// c(8, 9, 10);
// console.log(b); //10
// console.log(x); //1



// console.log(bar); //undefined
// // console.log(baz); //undefined
// foo(); //hola
// function foo() { console.log('Hola!'); }
// var bar = 1; //1
// baz = 2; //2


// var instructor = "Tony";
// if (true) {
//   var instructor = "Franco";
// }
// console.log(instructor);//Franco


// var instructor = "Tony";
// console.log(instructor); //Tony
// (function () {
//   if (true) {
//     var instructor = "Franco";
//     console.log(instructor);//Franco
//   }
// })();
// console.log(instructor);//Tony



// var instructor = "Tony";
// let pm = "Franco";
// if (true) {
//   var instructor = "The Flash";
//   let pm = "Reverse Flash";
//   console.log(instructor); //The flash
//   console.log(pm); //Reverse Flash
// }
// console.log(instructor); //The flash
// console.log(pm); //Franco



// 6 / "3" //2
// "2" * "3" //6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 //$45
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // infinity
// { } [0] //undefined porque 0 no es una propiedad dentro del objeto
// parseInt("09") //9
// 5 && 2 //2
// 2 && 5 //5
// 5 || 0 //5
// 0 || 5 //5
// [3] + [3] - [10] //23 por que con el + es una concatenacion y el menos si es resta
// 3 > 2 > 1 //false porque la izquierda es true y true es igual 1
// // [] == ![] // False

// //

// function test() {
//   console.log(a); //undefined
//   console.log(foo()); //2

//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }

// test();

// //

// var snack = 'Meow Mix';

// function getFood(food) {
//   if (food) {
//     var snack = 'Friskies';
//     return snack; // Friskies
//   }
//   return snack;
// }

// getFood(false); //Meow Mix

// //
// var fullname = 'Juan Perez';
// var obj = {
//   fullname: 'Natalia Nerea',
//   prop: {
//     fullname: 'Aurelio De Rosa',
//     getFullname: function () {
//       return this.fullname;
//     }
//   }
// };

// console.log(obj.prop.getFullname());//aurelio de rosa

// var test = obj.prop.getFullname;

// console.log(test()); //juan perez


// //
// function printing() {
//   console.log(1);
//   setTimeout(function () { console.log(2); }, 1000);
//   setTimeout(function () { console.log(3); }, 0);
//   console.log(4);
// }

// printing();
// //1 3 4 2