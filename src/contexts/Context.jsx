import { createContext, useEffect, useState } from "react";
import { languages } from "../../data";
import axios from "axios";
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("tr");
  const [langData, setLangData] = useState(() => {
    return languages["tr"];
  });
  useEffect(() => {
    fetchLanguageData();
  }, [lang]);
  console.log(langData);

  const fetchLanguageData = () => {
    const dataUrl = `https://reqres.in/api/workintech`;
    axios.post(dataUrl, languages[lang]).then((res) => {
      setLangData(res.data);
    });
  };

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  }
  return (
    <MyContext.Provider value={{ toggleDarkMode, darkMode, langData }}>
      {children}
    </MyContext.Provider>
  );
};
