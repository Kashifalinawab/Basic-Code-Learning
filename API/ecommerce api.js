



async function getFetchFile() {
    let files = await fetch("https://fakestoreapi.com/products");
    // let files = await fetch("https://picsum.photos/v2/list");
    let collectedFiles = await files.json();
    console.log(collectedFiles);

    return collectedFiles;
}
getFetchFile()

async function showData() {
    rootEl = document.querySelector("#root")

    let innerDivEl = document.createElement("div");
    innerDivEl.className = "smalldiv"

    let apiData = await getFetchFile()
    apiData.map(
        (data) => {

            let categoryEl = document.createElement("h2")
            categoryEl.className = "catEl";
            categoryEl.textContent = data.category.toUpperCase();
            innerDivEl.appendChild(categoryEl)
            rootEl.appendChild(innerDivEl)

            let titleEl = document.createElement("h3")
            titleEl.className = "titEl"
            titleEl.textContent = data.title;
            innerDivEl.appendChild(titleEl)
            rootEl.appendChild(innerDivEl)

            let idEl = document.createElement("h2")
            idEl.className = "iDEl"
            idEl.textContent = data.id;
            innerDivEl.appendChild(idEl)
            rootEl.appendChild(innerDivEl)

            let imageEl = document.createElement("img")
            imageEl.className = "imgEl"
            imageEl.setAttribute("src", data.image)


            innerDivEl.appendChild(imageEl)
            rootEl.appendChild(innerDivEl)


            // let discEl = document.createElement("p")
            // discEl.className = "disCEL"
            // discEl.textContent = data.description;
            // innerDivEl.appendChild(discEl)
            // rootEl.appendChild(innerDivEl)


            let priceEl = document.createElement("h2")
            priceEl.className = "pricEEL"
            priceEl.textContent = `Price  ` + data.price + " " + "$";
            innerDivEl.appendChild(priceEl)
            rootEl.appendChild(innerDivEl)

            let rateEl = document.createElement("h5")
            rateEl.className = "ratEEl"
            rateEl.textContent = "Rate : " + data.rating.rate + " Out Of 5";
            innerDivEl.appendChild(rateEl)
            rootEl.appendChild(innerDivEl)

            let countEl = document.createElement("h5")
            countEl.className = "counTEl"
            countEl.textContent = "Count : " + data.rating.count;
            innerDivEl.appendChild(countEl)
            rootEl.appendChild(innerDivEl)

        })

}
showData()


