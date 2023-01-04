let record = [];
function submit() {


    let data = {
        fname: document.querySelector("#fname").value,
        mobile: document.querySelector("#mobile").value,
        mail: document.querySelector("#mail").value,
        gender: document.querySelector('#gender').value

    };
    record.push(data);
    console.log(record);
}



function addData() {



    root.innerHTML = ` <tr>
    <th>Name</th>
    <th>Mobile</th>
    <th>Mail</th>
    <th>Gender</th>
</tr>`;

    for (let i = 0; i < record.length; i++) {
        createRow(record[i]);
    }
}






function createRow(data) {

    let row1 = document.createElement("tr");
    let fname = document.createElement("td");
    let mobile = document.createElement("td");
    let mail = document.createElement("td");
    let gender = document.createElement("td");


    fname.textContent = data.fname;
    mobile.textContent = data.mobile;
    mail.textContent = data.mail;
    gender.textContent = data.gender;

    row1.appendChild(fname);
    row1.appendChild(mobile);
    row1.appendChild(mail);
    row1.appendChild(gender);
    root.appendChild(row1);



}

function clearFill() {
    [

        document.querySelector("#fname").value = " ",
        document.querySelector("#mobile").value = " ",
        document.querySelector("#mail").value = " ",
        document.querySelector('#gender').value = " ",



    ]
}

