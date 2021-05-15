import React, { useState } from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import MenuOption from '../../components/MenuOption';

import standartImg from '../../assets/calc-icon.svg';
import deleteIcon from '../../assets/delete.svg';
import KeyButton from '../../components/KeyButton';
import HistoricEquation from '../../components/HistoricEquation'; 

function Standart(){
    const keys = ['(', ')', 'x²', '√', 'X!', 'ln', 'log', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '', '0', ',', '='];
    const [viserValue, setViserValue] = useState("0");

    function filterKeys(keyValue: string) {
        const optionalKeys = ["Shift", "Backspace", "Enter", "Delete"]

        if(keys.indexOf(keyValue) !== -1 || optionalKeys.indexOf(keyValue) !== -1) return keyValue 
        else return "" 
    }

    return( 
        <div id="container">
            <div>
                <div id="logo">
                    <img src={logoImg} alt="SoftCalc Logo" />
                </div>
 
                <nav id="menu">
                    <MenuOption image={standartImg} alt="Padrão" textContent="Padrão"/>
                </nav>
            </div>

            <div>
                <input 
                    type="text" 
                    id="viser" 
                    placeholder="0" 
                    autoComplete="off"
                    value={viserValue}   
                    onKeyDown={(e) => {filterKeys(e.key)}}
                    
                />

                <div id="keys" onFocus={(e) => {setViserValue(e.target.innerText)}}>
                    <div id="topKeys">
                        <button id="empty1"></button>
                        <div id="actionKeys">
                            <button id="delete">
                                <img src={deleteIcon} alt="Deletar"/>
                            </button>
                            <button id="clean">
                                <h3>CE</h3>
                            </button>
                        </div>
                    </div>
                
                    <div id="bottomKeys">
                        {keys.map((keyValue) => {
                            let buttonName = "button";
                            switch(keyValue){
                                case "=":
                                    buttonName = "buttonEqual";
                                    break;
                                case "":
                                    buttonName = "buttonNull";
                                    break;
                            }
                            
                            return (    
                                <button 
                                id={buttonName} 
                                key={keyValue}
                                >                      
                                    <KeyButton keyButton={keyValue}/>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <aside id="historic">
                <div id="title">
                    <h1>HISTÓRICO</h1>
                </div>
                
                <div id="historicSection">
                    <HistoricEquation />
                    <HistoricEquation />
                    <HistoricEquation />
                    <HistoricEquation />
                    <HistoricEquation />
                    <HistoricEquation />
                    <HistoricEquation />
                </div>
            </aside>
        </div>
    );
}

export default Standart;