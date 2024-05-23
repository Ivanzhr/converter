'use strict'

const input = document.querySelector('.js_input');
const currency = document.querySelector('.js_currency');
const output = document.querySelector('.js_output');
const btn = document.querySelector('button');
const data = document.querySelector('.data');

let val;

currency.addEventListener('change', () => {
    const response = fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    response
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            let title = currency.value;
            val = data.find(item => item.cc === title);
})

btn.addEventListener('click', ()=> {
    const num = +input.value;
    const total = `${num * val.rate} грн`;
    output.value = total;

    const dateExchange = new Date();
    const day = dateExchange.getDate();
    const month = dateExchange.getMonth() + 1; 
    const year = dateExchange.getFullYear();

    data.innerHTML = '';
    
    data.insertAdjacentHTML('beforeend', `${day}. ${month}. ${year}`);

})


})









