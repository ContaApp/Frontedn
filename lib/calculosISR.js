function calculateIsrProfit(incomes, expenses ){
    console.log('incomes que llega:', incomes)
    console.log('expenses que llega:', expenses)
    return ((incomes)-(expenses));
}
function calculateIsracumulated(profit){
    return (profit);
}
function calculateIsrResult({lowerLimit,perCentAboveLowerLimit, fixedRate}, isrProfit){
   console.log('isrProfit en la funcion calcularResult', isrProfit);
   console.log('datos en calculateIsrResult', lowerLimit,perCentAboveLowerLimit, fixedRate )
    return (
        (((isrProfit-lowerLimit)*perCentAboveLowerLimit*.001)+fixedRate)
        )
}

function calculateIsrItToPay( result, whitholdedIncomeTax){
    return (result-whitholdedIncomeTax);
}

export {
    calculateIsrProfit,
    calculateIsracumulated,
    calculateIsrResult,
    calculateIsrItToPay
}