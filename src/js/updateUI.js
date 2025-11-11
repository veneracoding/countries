
const cardsEl = document.querySelector('.cards')
export const createCountries = (countries) => {

    // agar cards elementlari bo'lmasa error chiqishi console da
    // if(!cardsEl) {
    //     console.error("cards element not found in DOM")
    //     return
    // }

    countries.forEach((country) => {
        const commonName = country.name.common 
        const population = country.population.toLocaleString()
        const region = country.region
        const capital = country.capital ? country.capital[0] : "No Capital"
        const flag = country.flags?.svg || country.flags?.png

        //li 
        const li = document.createElement('li')
        li.classList.add('cards_item')
        li.innerHTML = `
         <a href="./about.html">
           <img src="${flag}" alt="${commonName}-flag" width="267" height="160">
            <div class="cards__item-inner">
                <h3 class="cards__title">${commonName}</h3>
                <p class="population">Population: <span>${population}</span></p>
                <p class="region">Region: <span>${region}</span></p>
                <p class="capital">Capital: <span>${capital}</span></p>
            </div>
         </a>
        `
 
        //ul 
        cardsEl.appendChild(li)

    })
}

    /* <a href="./about.html">
    <img src="./images/jpg/germany-flag.jpg" alt="germany-flag" width="267" height="160">
    <div class="cards__item-inner">
        <h3 class="cards__title">Germany</h3>
        <p class="population">Population: <span>81,770,900</span></p>
        <p class="region">Region: <span>Europe</span></p>
        <p class="capital">Capital: <span>Berlin</span></p>
    </div>
    </a> */