import React, { useState, createContext, useContext } from "react";
import { language as content } from "../language";

const LanguageContext = createContext();
const LANGUAGE = { ENGLISH: "EN", SPANISH: "ES" };

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAGE.ENGLISH);
  const [data, setData] = useState(content.english);

  function handleChangeLanguage() {
    if (language === LANGUAGE.ENGLISH) {
      setLanguage(LANGUAGE.SPANISH);
      setData(content.spanish);
    } else {
      setLanguage(LANGUAGE.ENGLISH);
      setData(content.english);
    }

  }
  const state = { language, data };
  const action = { changeLanguage: handleChangeLanguage };
  const contextValue = { state, action };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// custom hook for consuming userContext
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "LanguageContext must be used within LanguageProvider. Wrap a parent component in <LanguageProvider> to fix this error"
    );
  }
  return context;
}

export default LanguageProvider;
