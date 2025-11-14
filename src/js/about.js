import '../css/main.css'
import './mode'

import request from './request'
import { createCountryInfo } from './updateUI'

const params = new URLSearchParams(window.location.search)
const country = params.get('country')

console.log(country)

const countryAPI = `https://restcountries.com/v3.1/name/${country}`

console.log(countryAPI)

request(countryAPI)
    .then(data => {
        createCountryInfo(data[0])
    })
    .catch(err => alert(err.message))
