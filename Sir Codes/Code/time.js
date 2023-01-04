// function add(a, b, callback) {
//     setTimeout(() => {
//         console.log("Addition: ", a + b);
//         callback(a + b);
//     }, 6000);
// }

// function sub(a, b, callback) {
//     setTimeout(() => {
//         console.log("Substraction: ", a - b);
//         callback(a - b);
//     }, 4000);
// }
// function mul(a, b, callback) {
//     setTimeout(() => {
//         console.log("Multiplication: ", a * b);
//         callback(a * b);
//     }, 1000);
// }
// function div(a, b, callback) {
//     setTimeout(() => {
//         console.log("Division: ", a / b);
//         callback(a / b);
//     }, 5000);
// }

// add(3, 5, function (resultAdd) {
//     sub(resultAdd, 2, function (resultSub) {
//         mul(resultSub, 5, function (resultMul) {
//             div(resultMul, 2, function (resultDiv) {
//                 add(resultDiv, 17, (data) => console.log("Final Result: ", data));
//             });
//         });
//     });
// });




