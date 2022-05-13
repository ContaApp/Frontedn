function calculateVat( {vatAP, vatAR, vatWH} ){
    console.log('la info en el calculo llega:',vatAP, vatAR, vatWH )
    return ((vatAP+vatWH)-vatAR);
}

 

export {
    calculateVat
}