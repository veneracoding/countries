import '../css/main.css'

// console.log('hello webpack !!!')

import request from './request'
import { createCountries } from './updateUI';


const API = 'https://restcountries.com/v3.1/all?fields=.';


request(API).then((data) => {
    createCountries(data)
}).catch((err) => {
    alert(err.message)
})