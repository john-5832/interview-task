import { useState,useRef , useEffect } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const darkmodeRef =useRef(darkMode)

    useEffect(()=>{
        darkmodeRef.current = darkMode;
    },[darkMode])
    const handleStart = () => {
        setTimeout(() => {
            alert(`Dark Mode is: ${darkmodeRef.current}`); 
        }, 5000);
    };
    return (
        <div>
            <input type="checkbox" 
            checked={darkMode} 
            onChange={e => setDarkMode(e.target.checked)} 
            />
            <button onClick={handleStart}>Start Timer</button>
        </div>
    );
}

export default App;