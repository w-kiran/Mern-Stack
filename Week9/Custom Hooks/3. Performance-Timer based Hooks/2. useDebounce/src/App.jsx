import { useEffect, useState } from 'react';

function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value]);

  return debouncedValue;
}
function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  return (
    <>
      Debounced value is {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default App;