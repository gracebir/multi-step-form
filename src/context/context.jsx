import { useState } from "react";
import { createContext } from "react";
import { navData } from "../data";
import { useNavigate } from "react-router-dom";

const initialState = {
    isMonth: true,
    setIsMonth: undefined,
    currentIndex: 0,
    increase: () => {},
    decrease: () => {},
    setCurrentIndex: undefined
}

export const AppContext = createContext(initialState)

export const AppProviver = ({ children }) => {
    const navigate = useNavigate()
    const [isMonth, setIsMonth] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)
    const increase = () => {
        setCurrentIndex((prev) => (prev + 1) % navData.length)
        navigate((navData[currentIndex + 1].href))
    }

    const decrease = () => {
        setCurrentIndex((prev)  => {
                  const newIndex = prev - 1;
                  return newIndex >= 0 ? newIndex : navData.length - 1;
        })
        navigate((navData[currentIndex -1].href))
    }
    return (
        <AppContext.Provider value={{
            isMonth,
            setIsMonth: setIsMonth,
            currentIndex,
            increase: increase,
            decrease,
            setCurrentIndex: setCurrentIndex
        }}>
            {children}
        </AppContext.Provider>
    )
}