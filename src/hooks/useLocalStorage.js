import { useState } from "react";
//useing a funciton call in useState() so that the function can be LAZY and only run on initial mount, when it must. Using this hook twice will run it twice, but subsequent renders will not keep rerunning that function.
// vs moving `const value = window.localStorage.getItem(key);` up a line where it would be rerun on every render.

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = window.localStorage.getItem(key);
    try {
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      console.error(e);
      //alert is useless and will confuse a user, but amuses Josh, this is his first alert ever.
      alert(`You're local Storage is corrupted, but we will work for now. ${e.message}`);
      // return prompt("What should we use instead?")
      return initialValue
    }
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return [storedValue, setValue]
};

export default useLocalStorage;

//localStorage is Only being read at mounting. This means that changing local storage in the browser for example will not effect the usage of the app , (unless you reload without setting the Value the first).

//the try catch in lines 8-13 is for the odd chance that a user manages to corrupt their local storage (like when I set it in the browser to "peekaboo", or if a static strike did magic on the 1's and 0's), the browser knows what to do with the error that was otherwise eff'ed. Refreshing the browser didn't help at all, bc localStorage persists.