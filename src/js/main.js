import '../css/main.css'

// console.log('hello webpack !!!')

import request from './request'

const API = 'https://restcountries.com/v3.1/all?fields=.';


request(API).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})