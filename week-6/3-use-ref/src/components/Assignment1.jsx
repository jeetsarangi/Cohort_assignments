import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inp = useRef(null);
    
    useEffect(() => {
        inp.current.focus();
    }, [inp]);

    const handleButtonClick = () => {
        inp.current.focus();
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={inp}/>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
