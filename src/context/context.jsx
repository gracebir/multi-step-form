import { useState } from "react";
import { createContext } from "react";

const initialState = {
    isMonth: true,
    setIsMonth:null
}

export const AppContext = createContext(initialState)

export const AppProviver = ({ children }) => {
    const [isMonth, setIsMonth] = useState(true)
    return (
        <AppContext.Provider value={{
            isMonth,
            setIsMonth: setIsMonth
        }}>
            {children}
        </AppContext.Provider>
    )
}