import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import MenuOption from '../../components/MenuOption';

import standartImg from '../../assets/calc-icon.svg';
import deleteIcon from '../../assets/delete.svg';
import KeyButton from '../../components/KeyButton';
import HistoricEquation from '../../components/HistoricEquation'; 

function Standart(){
    const keys: string[] = ['(', ')', 'x²', '√', 'X!', 'ln', 'log', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '', '0', ',', '='];
    // const optionalKeys = ["Shift", "Backspace", "Enter", "Delete"]
    let equation: string[] = [];
    let equationString: string = ''; 

    function validadeKeys(key: string) {   
        keys.map((a) => {
            if(a === key){
                equation.push(key);
                return equationString+=key;
            }
        })
        document.querySelector("#viser")?.setAttribute("value", equationString);
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
                    value={equationString}   
                    disabled
                />

                <div 
                    id="keys"                     
                > 
                    <div id="topKeys">
                        <button id="empty1"></button>
                        <div id="actionKeys">
                            <button id="delete">
                                <img src={deleteIcon} alt="Deletar"/>
                                <p hidden>delete</p>
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
                                    type="button"
                                    autoFocus
                                    id={buttonName} 
                                    key={keyValue}
                                    value={keyValue}
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        validadeKeys(e.currentTarget.value)
                                    }}
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