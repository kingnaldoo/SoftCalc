import React from 'react';

import './styles.css';

interface KeyButtonProps {
    keyButton: string;
}

const KeyButton: React.FC<KeyButtonProps> = (props) => {  
    return (
        <div id="content">
            <h3>{props.keyButton}</h3>
        </div>
    );
}

export default KeyButton;