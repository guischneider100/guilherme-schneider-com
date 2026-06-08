import React, { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {

    const [language, setLanguage] = useState('en') 
    
    const toggleLanguage = (lang) => {
        setLanguage(lang)
    }

    const text = translations[language]

    return(
        <LanguageContext.Provider value={{language, toggleLanguage, text}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)

    return context
}