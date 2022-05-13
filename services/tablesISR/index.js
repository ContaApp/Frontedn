import {URL_BASE} from '../config';

function searchRange(month, year, money){
    const URL = `${URL_BASE}/tables-isr/search-range`;
    console.log('Este es el mes que llega', month);
    console.log('Este es el año que llega', year);
    console.log('Este es el ingreso que llega', money);
    const options ={
       
        method: 'POST',
        body: JSON.stringify({month, year, money}),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    return fetch(URL, options) //Regresa una promesa
}

export {
    searchRange
}