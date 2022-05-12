import {URL_BASE} from '../config';

function createLogbooks(dataLogbooksToCreate, token){
    const URL = `${URL_BASE}/logbooks`;
    console.log('Este es el token que llega index', token);
    const options ={
       
        method: 'POST',
        body: JSON.stringify(dataLogbooksToCreate),
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        mode: 'cors'
    }
    return fetch(URL, options) //Regresa una promesa
}

export {
    createLogbooks
}