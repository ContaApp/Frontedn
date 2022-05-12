import { react, useState, useContext } from 'react';
import { ContextInputsCards } from '../contexts/ContextInputsCards';



function sumaisr (){
    const { responseIsrForm, setResponseIsrForm } = useContext(ContextInputsCards);
    const {limitCalculos} = useContext(ContextInputsCards);
    
    const {objetLimit}= limitCalculos;
    const {incomes}= responseIsrForm;

    const suma = objetLimit.lowerLimit * incomes.incomes;
    console.log('La suma es:', suma);
    return suma;
}

export {
    sumaisr
}