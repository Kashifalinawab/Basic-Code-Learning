let rootEl = document.querySelector("#root");

// function create() {

async function getApiLink() {
    let getUrl = await fetch('https://jsonplaceholder.typicode.com/users');
    let userData = await getUrl.json();
    console.log(userData);
    return userData;

}
// getApiLink()
let tableEl = document.querySelector("#table");




async function tabuLation() {
    let apiData = await getApiLink();


    createHead()

    apiData.map(
        (data) => {
            let roowEl = document.createElement("tr")


            let iD = document.createElement("td");
            iD.textContent = data.id;
            roowEl.appendChild(iD);

            let userName = document.createElement("td");
            userName.textContent = data.username
            roowEl.appendChild(userName);

            let name = document.createElement("td");
            name.textContent = data.name;
            roowEl.appendChild(name);

            let phoneNo = document.createElement("td");
            phoneNo.textContent = data.phone;
            roowEl.appendChild(phoneNo);

            let emailId = document.createElement("td");
            emailId.textContent = data.email;
            roowEl.appendChild(emailId);

            let webSite = document.createElement("td");
            webSite.textContent = data.website;
            roowEl.appendChild(webSite);

            let addressStreetEl = document.createElement("td");
            addressStreetEl.textContent = ` Street : ` + data.address.street;
            roowEl.appendChild(addressStreetEl);

            let addressEl = document.createElement("td");
            addressEl.textContent = ` City : ` + data.address.city;
            roowEl.appendChild(addressEl);


            let zipCodeEl = document.createElement("td");
            zipCodeEl.textContent = ` Zip Code : ` + data.address.zipcode;
            roowEl.appendChild(zipCodeEl);

            let conpanyEl = document.createElement("td");
            conpanyEl.textContent = data.company.name;
            roowEl.appendChild(conpanyEl);



            tableEl.appendChild(roowEl)




        })



}
tabuLation()

function createHead() {
    let idHead = document.createElement("th");
    idHead.textContent = "ID"
    tableEl.appendChild(idHead)

    let userNameHead = document.createElement("th");
    userNameHead.textContent = "USERNAME"
    tableEl.appendChild(userNameHead)

    let nameHead = document.createElement("th");
    nameHead.textContent = "NAME"
    tableEl.appendChild(nameHead)

    let phoneHead = document.createElement("th");
    phoneHead.textContent = "PHONE NO"
    tableEl.appendChild(phoneHead)

    let emailHead = document.createElement("th");
    emailHead.textContent = "EMAIL ID"
    tableEl.appendChild(emailHead)

    let webSiteHead = document.createElement("th");
    webSiteHead.textContent = "WEBSITE"
    tableEl.appendChild(webSiteHead)

    let addressHead = document.createElement("th");
    addressHead.colSpan = "3"
    addressHead.textContent = "ADDRESS"
    tableEl.appendChild(addressHead)

    let companyHead = document.createElement("th");

    companyHead.textContent = "COMPANY NAME "
    tableEl.appendChild(companyHead)
}

// }

