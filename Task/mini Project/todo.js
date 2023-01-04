


function addlist() {

    let items = document.querySelector('#list').value

    let uL = document.createElement('UL');
    let lI = document.createElement('LI');

    lI.textContent = items;
    uL.appendChild(lI);
    document.body.appendChild(uL);


}









