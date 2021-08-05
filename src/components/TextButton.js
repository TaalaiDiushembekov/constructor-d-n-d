import React, { useState } from 'react';
import AddText from "./addText";

const TextButton = () => {
    const [count, setCount] = useState([]);
    return (
        <div className="text-button">

            <button
                className="text-button"
                onClick={() =>
                setCount([...count, <AddText/>])}
            >
                +text
            </button>
            <p>{count}</p>
        </div>
    );
};

export default TextButton;
