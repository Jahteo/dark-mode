import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = (key) => {
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(key);
  return [darkModeEnabled, setDarkModeEnabled]
};

export default useDarkMode;