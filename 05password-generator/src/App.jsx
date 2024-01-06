import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (specialCharsAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, specialCharsAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, specialCharsAllowed]);

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password) // this copies the password from the React state and writes it to clipboard so that when we do a paste, the password will be available
    passwordRef.current?.select() // similar to a Java Optional where it selects the element if it finds the reference otherwise sets it to null. No action taken
    // passwordRef.current?.setSelectionRange(0,4) // select only a substring of chars
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipBoard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={specialCharsAllowed}
            onChange={() => {
              setSpecialCharsAllowed((prev) => !prev);
            }}
            name=""
            id="characterInput"
          />
          <label htmlFor="characterInput">Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
