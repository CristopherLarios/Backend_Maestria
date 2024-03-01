window.addEventListener("load", function () {
    ObtenerPrincipal();
});

const postContainer = document.querySelector('#container3');

async function ObtenerPrincipal() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10')
        const data = await response.json();

        let claves = Object.keys(data)

        console.log(data);


        for (let i = 0; i < claves.length; i++) {

            console.log(data[claves[i]]);


            const postElement = document.createElement('div');
            postElement.classList.add('col');
            postElement.innerHTML = `
            <div class="card">
            <img src="${data[claves[i]].image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data[claves[i]].title}</h5>
                <p class="card-text">${data[claves[i]].description}</p>
            </div>
            <div class="card-footer ">${data[claves[i]].price +`$`}</div>
        </div>
            `
            postContainer.appendChild(postElement);
        }



    } catch (error) {
        console.error(error)
    }
}










