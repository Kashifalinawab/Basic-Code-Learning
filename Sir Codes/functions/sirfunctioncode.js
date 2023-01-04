
// // console.log(square(7));

// // // console.log(square(8) * square(9));

// // // Function Expression
// // const cube = function adnan(num) {
// //   return num * num * num;
// // };

// // console.log(adnan(5));
// // // let result = 5*3+4;
// // // Function Declaration
// // function square(num) {
// //   return num * num;
// // }

// // //Arrow Functions
// // const power = (base, exp) => base ** exp;

// // console.log(cube(6));
// // console.log(power(5, 3));

// const user = "Umang";

// function greet() {
//     const user = "Piyush";
//     console.log("Hello, ", user);
// }

// // console.log(user); //
// // greet(); // Hello, Piyush
// // console.log(user); //

// // global, function, block - let & const

// //{}
// /*

// function
// loop
// if 
// else
// else if
// switch 
// while
// do-while
// */

// // var a = 10;
// // function xyz() {
// //   let a = 20;
// //   console.log(a);
// // }
// // xyz();
// // console.log(a);
// // xyz();
// // console.log(a);

// // if (!false) {
// //   const a = 30;
// //   console.log("Inside IF:  ", a);
// // } else {
// //   let a = 50;
// //   console.log("Inside ELSE:  ", a);
// // }

// // console.log(a);
// // function xyz() {
// //   // console.log("Inside XYZ");
// //   let a = 50;
// //   let x = 8;
// //   return function abc() {
// //     // console.log(x, a);
// //     return function () {
// //       console.log("Hello");
// //       return function () {
// //         console.log("World");
// //       };
// //     };
// //   };
// // }
// // let myNumbers = xyz();
// // myNumbers();

// // let helloFn = xyz()();
// // helloFn();

// function adder(num) {
//     return function (val) {
//         return val + num;
//     };
// }

// const adder10 = adder(10);
// console.log(adder10(7));
// console.log(adder10(90));

// const adderFive = adder(5);
// console.log(adderFive(4));

// // {
// //   var d = 10;
// //   console.log(d);
// // }
// // console.log(d);

// let obj = {
//     name: "Indiana",
//     age: 20,
//     getName() {
//         return this.name;
//     },
// };
// // console.log("Name: ", obj.my name);
// console.log("Age: ", obj.age);
// let key = "name";

// console.log(obj[key]);
// console.log(obj["age"]);

// console.log(obj.getName());

// const a = 9999;
// console.log(window.a);
// // console.log(this);

// function add() {
//     let result = 0;
//     for (let index = 0; index < arguments.length; index++) {
//         result += arguments[index];
//     }
//     return result;
// }

// console.log(add(1, 2, 4, 5, 6));



let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

document.getElementById("demo").innerHTML = sum;

function myFunction(item) {
    sum += item;
}