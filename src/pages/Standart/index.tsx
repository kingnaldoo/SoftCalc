import React, {ReactNode} from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import MenuOption from '../../components/MenuOption';

import standartImg from '../../assets/calc-icon.svg';
import deleteIcon from '../../assets/delete.svg';
import KeyButton from '../../components/KeyButton';
import HistoricEquation from '../../components/HistoricEquation';

interface StandartProps {
    button?: ReactNode;
}


const Standart: React.FC<StandartProps> = () => {
    const keys = ['%', '1/x', 'x²', '√', 'X!', 'ln', 'log', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '', '0', ',', '='];

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
                <div id="viser">
                    <h1>0</h1>
                </div>

                <div id="keys">
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
                        {keys.map((value) => {
                            return (
                                <KeyButton keyButton={value}/>
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