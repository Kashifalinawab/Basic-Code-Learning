


// let worldArry = [{
//     country: [{
//         india: [{
//             state: {
//                 maharashtra: { city: ["Nagpur", "Mumbai", "Pune"] },

//                 uttarPradesh: { city: ["Kanpur", "Agra", "Delhi"] },

//                 himachalPradesh: { city: ["Manali", "Kulu", "Shimla"] }

//             }

//         }],

//         paskistan: [{
//             state: {
//                 punjab: { city: ["Lahor", "Attock", "Faisalabad"] },

//                 sidhi: { city: ["Karachi", "Hydrabad", "Sukkur"] },

//                 azadJandK: { city: ["Muzafarbad", "Kotli", "Mirpur"] }

//             }

//         }],
//         sriLanka: [{
//             state: {
//                 southSL: { city: ["Galle", "Matara", "Hikkaduwa"] },

//                 westSL: { city: ["Negombo", "Gampha", "Kalutara"] },

//                 uva: { city: ["Colombo", "Badulla", "Haputale"] }

//             },

//         }]

//     }]

// }]


///////////////////////////////////////////////////////////////////////


// let worldArry = [

//     {

//         india: {
//             maharashtra: ["Nagpur", "Mumbai", "Pune"],
//             uttarPradesh: ["Kanpur", "Agra", "Delhi"],
//             himachalPradesh: ["Manali", "Kulu", "Shimla"]
//         },



//         paskistan: {

//             punjab: ["Lahor", "Attock", "Faisalabad"],

//             sidhi: ["Karachi", "Hydrabad", "Sukkur"],

//             azadJandK: ["Muzafarbad", "Kotli", "Mirpur"]

//         },


//         sriLanka: {

//             southSL: ["Galle", "Matara", "Hikkaduwa"],

//             westSL: ["Negombo", "Gampha", "Kalutara"],

//             uva: ["Colombo", "Badulla", "Haputale"]

//         }

//     }
// ]

// console.log(worldArry);

// let root = document.querySelector('#stateArea');
// let selectEl = document.querySelector('#datas');




// for (let i = 0; i < worldArry.length; i++) {

//     let fillData = document.createElement('option');
//     console.log(worldArry[i])

//     fillData.textContent = worldArry[i];

//     fillData.appendChild(worldArry[i])



// }


////////////////////////////////////////////////////////////////////////////////////


// var worldArry = {
//     india: {
//         maharashtra: ["Nagpur", "Mumbai", "Pune"],
//         uttarPradesh: ["Kanpur", "Agra", "Delhi"],
//         himachalPradesh: ["Manali", "Kulu", "Shimla"]
//     },
//     paskistan: {
//         punjab: ["Lahor", "Attock", "Faisalaba"],
//         sidhi: ["Karachi", "Hydrabad", "Sukkur"],
//         azadJandK: ["Muzafarbad", "Kotli", "Mirpur"]

//     },
//     sriLanka: {

//         southSL: ["Galle", "Matara", "Hikkaduwa"],

//         westSL: ["Negombo", "Gampha", "Kalutara"],

//         uva: ["Colombo", "Badulla", "Haputale"]


//     }
// }

// function createOpEl(options, div) {
//     for (let i = 0; i < options.length; i++) {
//         let optionEl = document.createElement('option');
//         optionEl.textContent = options[i];
//         div.appendchild(optionEl);
//     }
// }


// let namelist = Object.keys(worldArry);
// createOpEl(namelist, root)

// let selectedCountry = " ";

// function getCountryVal() {
//     selectedCountry = root.value;
//     console.log(selectedCountry);
//     let statelist = Object.keys(countires[selectedCountry]);
//     console.log(statelist);
//     let state = document.querySelector("#selectstate");
//     createOpEl(statelist, state)
// }

///////////////////////////////////////////////////////////


let worldArry = {



    india: {
        maharashtra: ["Nagpur", "Mumbai", "Pune"],
        uttarPradesh: ["Kanpur", "Agra", "Delhi"],
        himachalPradesh: ["Manali", "Kulu", "Shimla"]
    },



    paskistan: {

        punjab: ["Lahor", "Attock", "Faisalabad"],

        sidhi: ["Karachi", "Hydrabad", "Sukkur"],

        azadJandK: ["Muzafarbad", "Kotli", "Mirpur"]

    },


    sriLanka: {

        southSL: ["Galle", "Matara", "Hikkaduwa"],

        westSL: ["Negombo", "Gampha", "Kalutara"],

        uva: ["Colombo", "Badulla", "Haputale"]

    }


}

//console.log(worldArry);
let divEl = document.querySelector("#stateArea");



const selectEl = document.createElement("select");



for (key in worldArry) {
    const element = worldArry;
    console.log(element);

    const optionEl = document.createElement("option");
    optionEl.textContent = key;

    selectEl.appendChild(optionEl);
}
divEl.appendChild(selectEl);


const selectEl2 = document.createElement("select");
for (key in worldArry.india) {
    const element = worldArry.india;
    console.log(element);


    const optionEl2 = document.createElement("option");


    optionEl2.textContent = key;

    selectEl2.appendChild(optionEl2);
}
divEl.appendChild(selectEl2);



