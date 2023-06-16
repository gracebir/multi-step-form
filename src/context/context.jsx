import { useState } from "react";
import { createContext } from "react";

const initialState = {
    isMonth: true,
}

export const AppContext = createContext(initialState)

export const AppProviver = ({ children }) => {
    const [isMonth, setIsMonth] = useState(true)
    return (
        <AppContext.Provider value={{
            setIsMonth,
            isMonth
        }}>
            {children}
        </AppContext.Provider>
    )
}