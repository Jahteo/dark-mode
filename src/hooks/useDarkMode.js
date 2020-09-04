import useLocalStorage from "./useLocalStorage";
//KEY bc it is a permanent, unchangeable constant. Always & forever.
//on smaller projects, prepare that other apps using the same localStorage will also be writing there, so consider writing it as `KEY = "CoinTracker/Preference:Dark mode" for example with the app name first.

const KEY = "Preference: Dark Mode"

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage(KEY, false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return [darkMode, toggleMode]
}

export default useDarkMode;