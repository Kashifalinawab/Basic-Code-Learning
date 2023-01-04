



let a = function calCul1() {
    var num1 = Number(document.querySelector("#calc").value);
    console.log(num1);
    return num1
}


let b = function calCul2() {
    var num2 = Number(document.querySelector(".calCulator").value);
    console.log(num2);
    return num2
}








function addition() {


    let result = a() + b()
    console.log("res " + result);

    document.querySelector("#area").innerHTML = `Addition is : ` + result;
}





// let b = function calCul2() {
//     let num2 = Number(document.querySelector("#calc").value);
//     console.log(num2);
//     return num2

// }

// let z = calCul1() + calCul1();
// console.log(z);



