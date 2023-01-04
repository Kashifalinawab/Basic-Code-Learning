let myGallery = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
]
console.log(myGallery);


let divArea = document.querySelector("#photoSlides");
console.log(divArea);
let btnEl = document.querySelector('#btnArea')
console.log(btnEl);

let imgRoll = document.createElement("img");
let currentIndex = 0;
imgRoll.src = myGallery[currentIndex];



let leftBTN = document.createElement("button");
let rightBTN = document.createElement("button");
leftBTN.innerHTML = "Left";
rightBTN.innerHTML = "Right";

divArea.appendChild(imgRoll);
btnEl.appendChild(leftBTN);
btnEl.appendChild(rightBTN);

rightBTN.addEventListener('click', function (e) {

    currentIndex += 1
    if (currentIndex >= 4) {
        return currentIndex = -1
    }
    console.log(currentIndex);

    imgRoll.src = myGallery[currentIndex]



})


leftBTN.addEventListener('click', function (e) {
    currentIndex -= 1
    if (currentIndex <= -1) {

        return currentIndex = 4
    }

    console.log(currentIndex);


    imgRoll.src = myGallery[currentIndex]

})




// imgRoll.src = myGallery[0];
// divArea.appendChild(imgRoll)
// console.log(imgRoll);


// function right(index) {

//     myGallery[index + 1];
//     console.log(imgRoll);
// }






// function left(index) {
//     imgRoll.src = myGallery[index - 1]
//     divArea.appendChild(imgRoll);
//     console.log(imgRoll);


// }
