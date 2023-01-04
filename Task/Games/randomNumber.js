let numBerMath = Math.floor(Math.random() * 10);
console.log(numBerMath);


let number = 1;
let mouseClicked = function () {
    number++;
}

function findYourLuck() {

    mouseClicked();
    let getNumber = Number(document.querySelector("#num").value);


    if (numBerMath < getNumber) {
        console.log("Your Number bigger");
    } else if (numBerMath === getNumber) {

        console.log("You Win");
        console.log('Your tried Steps :  ' + number);


    } else if (numBerMath > getNumber) {

        console.log("Your Number is smaller");
    }


}




