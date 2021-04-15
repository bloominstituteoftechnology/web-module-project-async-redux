import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      //if key exists use it
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      // if not set the new key value
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setLocallyStoredValue = (newStoredValue) => {
    //set local and session value
    window.localStorage.setItem(key, JSON.stringify(newStoredValue));
    setStoredValue(newStoredValue);
  };

  return [storedValue, setLocallyStoredValue];
};

export { useLocalStorage };
