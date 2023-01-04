// sumaiya

let info = []
function store() {

    debugger;


    fname = document.getElementById("txt_fname").value;
    contact = document.getElementById("txt_mobile").value;
    gender = document.getElementById("gender").value;


    // console.log(fname);
    // console.log(contact);
    // console.log(gender);
    info.push(fname, contact, gender);
    console.log(info);
}

function getInfo() {
    debugger;
    let data = {
        name: document.querySelector("#txt_fname").value,
        mobile: document.querySelector("#txt_mobile").value,
        email: document.querySelector("#gender").value
    };


    info.push(data);
    console.log(info);
}

function DisplayData() {
    debugger;
    var ul = '';
    let i = 0;
    for (i = 0; i <= info.length; i++) {
        ul += '<table id="mydata">'
        ul += '<thead>'
        ul += ' <tr><th>Name</th><th>Mobile no</th><th>Gender</th></tr>'
        ul += '</thead>'
        ul += ' <tbody>'
        ul += ' <tr>'
        ul += '  <td>' + info[i].fname + '</td><td>' + info[i].contact + '</td><td>' + info[i].gender + '</td>'
        ul += '</tr>'
        ul += '</tbody>'
        ul += '</table>'
    }
    document.getElementById("#mydata").append(ul);

}






// let info = []

// function submit() {


//     fname = document.getElementById("fname").value;
//     mobile = document.getElementById("mobile").value;
//     gender = document.getElementById("gender").value;

//     info.push(fname, mobile, gender);
//     console.log(info);

// }



// function submit() {
//     let x = document.forms["form"]["fname"].value;
//     let info = []
//     // if (x == "") {
//     //   alert("Name must be filled out");
//     info.push[x]
//     return info;
//     // return false;
// }
// console.log(submit());


// function submit() {
//     let info = []
//     let fname = document.getElementById("fname").value;
//     let mobile = document.getElementById("mobile").value;
//     let gender = document.getElementById("gender").value;

//     info.push(fname, mobile, gender);
//     return info
// }
// console.log(submit());


// let form = document.getElementById('form')

// form.addEventListener("submit", function (submit) {
//     let info = [];

//     let fname = document.getElementById("fname").value;
//     //console.log(fname);

//     let mobile = document.getElementById("mobile").value;
//     // console.log(mobile);

//     let gender = document.getElementById("gender").value;
//     // console.log(gender);

//     info.push(fname, mobile, gender);
//     console.log(info);
// })






