import '../css/main.css'

// console.log('hello webpack !!!')

import request from './request'
import { createCountries } from './updateUI';
import './filter'
import './mode'

const API = 'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags';

request(API)
  .then(data => {
    createCountries(data)
  })
  .catch((err) => {
    alert(err.message)
  })


//   agar data length: 250 yoki shunga o'xshash chiqsa -> API ishlaydi
  request(API)
  .then(data => {
    console.log("DATA LENGTH:", data.length)
    console.log(data)
  })
  .catch(err => console.error("API ERROR:", err))
