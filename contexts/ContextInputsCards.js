import {createContext, useState} from 'react'

const ContextInputsCards = createContext()

// provider - Component que wrapeara a los componentes que tendra

 const ContextInputsCardsProvider = ({children}) => {
    // const [userAuth, setUserAuth] = useState({})
    const [responseIsrForm, setResponseIsrForm] = useState({})
    const [responseIvaForm, setResponseIvaForm] = useState({})
    const [responseInputsForm, setResponseInputsForm] = useState({})
    const [responseInputsDate, setResponseInputsDate] = useState({})
    const [selectedDate, handleDateChange] = useState(new Date());
    const data = {responseIsrForm, setResponseIsrForm, responseIvaForm, setResponseIvaForm, selectedDate, handleDateChange, responseInputsForm, setResponseInputsForm, responseInputsDate, setResponseInputsDate}
    return (
        <ContextInputsCards.Provider value={data}>
            {children}
        </ContextInputsCards.Provider>
    )
}

export { ContextInputsCards }

export default ContextInputsCardsProvider;