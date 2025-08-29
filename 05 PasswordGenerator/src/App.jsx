import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  // State hooks to manage password length, number and special character options, and generated password
  const [length, setLength] = useState(8); // Initialize password length to 8
  const [numberAllowed, setNumberAllowed] = useState(false); // Initialize number inclusion to false
  const [charAllowed, setCharAllowed] = useState(false); // Initialize special character inclusion to false
  const [password, setPassword] = useState(""); // Initialize password to an empty string

  // useRef hook to store the reference of the password input field
  const passwordRef = useRef(null); // Create a reference for the password input field


  // useCallback is used to cache the password generation function
  // It regenerates only when its dependencies change (length, numberAllowed, charAllowed)
  const passwordGenerator = useCallback(() => {
    let pass = ""; // Initialize password as an empty string
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Initialize character set with alphabets
    if (numberAllowed) str += "0123456789"; // Append numbers to character set if allowed
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"; // Append special characters to character set if allowed

    // Generate a random password based on the selected options
    for (let i = 1; i <= length; i++) { // Loop to generate password of specified length
      let char = Math.floor(Math.random() * str.length + 1); // Generate a random index
      pass += str.charAt(char); // Add the selected character to the password string
    }

    // Set the newly generated password to the state
    setPassword(pass); // Update the password state with the generated password
  }, [length, numberAllowed, charAllowed, setPassword]); // Dependencies for useCallback

  // Function to copy the password to clipboard
  // Cached with useCallback and re-runs only when the password changes
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the password input field
    passwordRef.current?.setSelectionRange(0, 999); // Select the entire password
    window.navigator.clipboard.writeText(password); // Copy to clipboard
  }, [password]); // Dependencies for useCallback

  // useEffect triggers password generation whenever the length, numberAllowed, or charAllowed state changes
  useEffect(() => {
    passwordGenerator(); // Generate password on component mount and when dependencies change
  }, [length, numberAllowed, charAllowed, passwordGenerator]); // Dependencies for useEffect

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1> {/* Title */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password} // Bind password state to input value
          className="outline-none w-full py-1 px-3"
          placeholder="Password" // Placeholder text
          readOnly // Make input read-only
          ref={passwordRef} // Attach ref to input
        />
        <button
          onClick={copyPasswordToClipboard} // Attach click handler to copy password
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6} // Minimum length of password
            max={36} // Maximum length of password
            value={length} // Bind length state to input value
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value); // Update length state on change
            }}
          />
          <label>Length: {length}</label> {/* Display current length */}
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed} // Set initial checked state
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev); // Toggle numberAllowed state
            }}
          />
          <label htmlFor="numberInput">Numbers</label> {/* Label for number checkbox */}
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed} // Set initial checked state
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev); // Toggle charAllowed state
            }}
          />
          <label htmlFor="characterInput">Characters</label> {/* Label for character checkbox */}
        </div>
      </div>
    </div>
  );
}

export default App; // Export App component as default