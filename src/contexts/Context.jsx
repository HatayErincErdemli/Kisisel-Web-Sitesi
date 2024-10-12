import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("tr");
  const [langData, setLangData] = useState({});
  /*useEffect(() => {
    fetchLanguageData();
  }, []);
  console.log(langData);

  const fetchLanguageData = () => {
    const dataUrl = `/${lang}.js`;
    axios.get(dataUrl).then((res) => {
      setLangData(res.data);
    });
  };*/

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  }
  return (
    <MyContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </MyContext.Provider>
  );
};
