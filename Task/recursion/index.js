//Recursion
// 5! = 5 * 4 * 3 * 2 * 1

// factorial(5) = 5 * factorial(4)
//factorial(4) = 4 * factorial(3)
//factorial(3) = 3 * factorial(2)
//factorial(2) = 2 * factorial(1)
//factorial(1) = 1

// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

//1) factor

// function factorial(num) {
//     // debugger;
//     //console.log("Current Num: ", num);
//     if (num <= 1) return 1;
//     //console.log(`Recusion operation: ${num} * factorial(${num - 1}) `);
//     return num * factorial(num - 1);
// }

// console.log(factorial(5));


//2) Power 

// function powerNumber(base, expo) {
//     console.log("Current Number:", base, expo);
//     if (expo == 0) return 1;
//     if (expo == 1) return base;

//     console.log(`Recusion Operation: ${base}**expot(${expo - 1})`);
//     return base * powerNumber(base, expo - 1);

// }
// console.log(powerNumber(2, 6));


//3) base change power

function sumSeries(base, expo) {
    console.log("Current Number:", base, expo);
    if (base <= 1) return 1;

    console.log(`Recusion Operation: ${base - 1}**expo(${expo})`);
    return base ** expo + sumSeries(base - 1, expo);

}
console.log(sumSeries(10, 2));
