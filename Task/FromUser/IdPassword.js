let checkingArry = [
    {
        name: "Tom",
        password: "tom123"
    },

    {
        name: "Sunny",
        password: "sunny123"
    },

    {
        name: "joy",
        password: "joy123"
    }
]
let formEl = document.querySelector("#createUserInfo")




function checkDetails() {

    let name = document.querySelector("#first").value;
    let password = document.querySelector("#were").value

    for (let i = 0; i < checkingArry.length; i++) {
        if (checkingArry[i].name === name && checkingArry[i].password === password) {
            return alert("Hello " + name);
        }
    };
    return alert("Sorry something is wrong " + name);
};

