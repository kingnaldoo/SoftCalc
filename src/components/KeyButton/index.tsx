import React from 'react';

import './styles.css';

interface KeyButtonProps {
    keyButton: string;
}

const KeyButton: React.FC<KeyButtonProps> = (props) => {  
    let buttonName = "button";

    switch(props.keyButton){
        case "=":
            buttonName = "buttonEqual";
            break;
        case "":
            buttonName = "buttonNull";
            break;
    }
    
    return (
        <button id={buttonName} >
            <div id="content">
                <h3>{props.keyButton}</h3>
            </div>
        </button>
    );
}

export default KeyButton;