// setTimeout(myfun(a), timeout);

// function myfun(a) {
//     return a + 10
// }


// function yinG(a) {
//     setTimeout(() => {
//         console.log(a + a);
//     }, 2000);
// }



// const f2000 = function decorator(a) {
//     return yinG(a)
// }


// let videoArr = ["20.mp4", "21.mp4", "22.mp4", "23.mp4"];

// let vDi = document.querySelector("#videoArea")

// let videoPlayer = document.createElement('video');
// console.log(videoPlayer);
// videoPlayer.src = videoArr[3]
// videoPlayer.width = 700;
// videoPlayer.height = 700;
// videoPlayer.autoplay = true;
// vDi.appendChild(videoPlayer)


///// Promise-then-catch function

// let promise = new Promise(function (resolved, reject) {
//     const a = 20;
//     const b = 10;
//     if (a === b) {
//         resolved();
//     } else {
//         reject();
//     }
// })

// promise.then(function () {
//     console.log("Nice");
// }).
//     catch(function () {
//         console.log("Next time");
//     })



// let testPro = new Promise(function (solved, pending) {
//     let x = "1";
//     let y = "s";
//     if (x === y) {
//         solved();
//     } else {
//         pending();
//     }
// })

// testPro.then(function () {
//     console.log("strings");
// },
//     function () {
//         console.log("not a strings");
//     })



// let myPromise = new Promise(function (solved, reject) {
//     setTimeout(() => {
//         solved("OKay");
//     }, 5000);
// })

// myPromise.then(function (value) {
//     console.log(value);
// },
//     function () {
//         console.log("not ok");
//     })

// let arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arrTest.forEach(element => {
// console.log(element);
// });


//map will only  give the boolean values for Odd-Even values:
// let a = arrTest.map((num) => num % 2 == 0)
// console.log(a);


// setInterval(() => {
//     document.querySelector("#root").innerHTML = "hello"
//     // console.log("hello");

// }, 0);


/// Variable Asign With var ......
// var a = 10

// console.log("variable assign = " + a);
// function testing() {
//     var a = 20;
//     console.log("function assign = " + a);

// }
// testing()

// for (i = 0; i < 1; i++) {
//     console.log("loop Value " + i);
//     var a = 30;
//     console.log("inside loop = " + a);
// }

// console.log(" Oustide loop assign = " + a);


/// Variable Asign With let ......

// let a = 10

// console.log("variable assign = " + a);
// function testing() {
//     let a = 20;
//     console.log("function assign = " + a);

// }
// testing()

// for (i = 0; i < 1; i++) {
//     console.log("loop Value " + i);
//     let a = 30;
//     console.log("inside loop = " + a);
// }


// const users = {
//     name: "Kon",
//     id: "K2004",
//     username: "Kon@1125",
//     address: "M K Road Town",
//     website: "fledge.xyz.com"
// }

//////////////////////////////////////

const arrAy = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];


// for (i = 0; i < arrAy.length; i++) {
//     console.log(arrAy[i]);
// }

// console.log("...........................................................");
// const newArray = arrAy.map((day) => {
//     return (day);
// })


// console.log(newArray)

// console.log("-------------------------------------------");


// arrAy.forEach((day) => {
//     console.log(day);
// })


// const newDay = arrAy.filter((day) => {
//     let z = day.length < 7;
//     return (z);
// })
// console.log(newDay);


