import {URL_BASE} from '../config';

function createAccount(dataUserToRegister){
    const URL = `${URL_BASE}/users/signup`
    
    const options ={
        method: 'POST',
        body: JSON.stringify(dataUserToRegister),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    return fetch(URL, options) //Regresa una promesa
}


function loginUser(email, password){
    const URL = `${URL_BASE}/users/login`

    const options ={
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    return fetch(URL, options) //Regresa una promesa
}

export {
    createAccount,
    loginUser
}