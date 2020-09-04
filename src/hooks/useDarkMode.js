import { useState } from "react"
import useLocalStorage from "./useLocalStorage";


// const useDarkMode = (key) => {
//   const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(key);
//   return [darkModeEnabled, setDarkModeEnabled]
// };

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
   const toggleMode = e => {
     e.preventDefault();
     setDarkMode(!darkMode);
   };
   return [darkMode, toggleMode]
 }

export default useDarkMode;