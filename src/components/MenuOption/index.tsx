import React from 'react';

import './styles.css';


interface MenuOptionProps {
    image: string;
    alt: string;
    textContent: string;
}

const MenuOption: React.FC<MenuOptionProps> = (props) => {
    return (
        <div id="option">
            <div id="content">
                <img src={props.image} alt={props.alt} />
                <h3>{props.textContent}</h3>
            </div>
        </div>
    );
}

export default MenuOption;