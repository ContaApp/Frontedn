//import {URL_BASE} from '../config.js'

/**
 * Ejemplo de peticion linea 8-19
 * Ejemplo dert acion linea 24-26
 */

/**
 fuction creatAccount(data){
     const URL = `${URL_BASE}/users/signup`
     const options ={
         method: 'POST',
         body: JSON.stringify(data),
         headers:{
             'Content-Type': 'application/json'
         },
         mode: 'cors'
     }
     return fetch (URL, options) //Regresa una promesa
 }
 */

 /**
  export{
      creatAccount
  }
 */