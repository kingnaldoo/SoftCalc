import { useState } from 'react';

import logoImg from '../../assets/logo.svg';
import standartImg from '../../assets/calc-icon.svg';
import deleteIcon from '../../assets/delete.svg';

import {HistoricEquation} from '../../components/HistoricEquation'; 
import {MenuOption} from '../../components/MenuOption';
import { KeyButton } from '../../components/KeyButton';

import './styles.scss';


function Standart(){
    const keys: string[] = ['(', ')', 'x²', '√', 'X!', 'ln', 'log', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '', '0', ',', '='];
    let equation: string[] = [];

    const [placeholder, setPlaceholder] = useState("0");
    const [viserValue, setViserValue] = useState("")
    

    function validadeKeysToBuildEquation(key: string) { 
        setPlaceholder("placeholder");

        if(keys.indexOf(key) !== -1)
            (String(parseInt(key)) !== 'NaN') ? equation.push(key) : calculateEquation(key);
        
        else if(key === "delete" || key === "Backspace")
            equation.pop();
        
        else if(key === "clean")
            equation = [];
        
        showInViser(equation.join(''));
    }

    function showInViser(expression: string = ''){
        setViserValue(expression);
    }

    function calculateEquation(key: string) {
        try {
            const equationExpression: string = equation.join('');
            // eslint-disable-next-line
            let equationResult: number = eval(equationExpression);

            switch(key){
                case 'x²':
                    equationResult = Math.pow(equationResult, 2);
                    break;
                case '√':
                    equationResult = Math.sqrt(equationResult);
                    break;
                case 'X!':
                    var cont=1;
                    for (var i = 2; i <= equationResult; i++)
                        cont = cont * i;
                    equationResult = cont;
                    break;
                case 'ln':
                    equationResult = Math.log(equationResult);
                    break;
                case 'log':
                    equationResult = Math.log10(equationResult);
                    break;
                case '=':
                    break;
                
                default:
                    equation.push(key);
                    return showInViser(equation.join(''));
            }

            getResultsToSaveInHistoric([equationExpression, equationResult.toString()]);
            equation = equationResult.toString().split('');
            showInViser(equationResult.toString());
        }

        catch{
            equation = [];
            showInViser(equation.join(''));
            setPlaceholder("Expressão Inválida")
        }
    }

    function getResultsToSaveInHistoric(array: string[]){
        const results = {
            expression: array[0],
            result: array[1]
        }
        console.log(JSON.stringify(results))
    }

    return( 
        <div id="container" onKeyDown={e => validadeKeysToBuildEquation(e.key)}>
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
                    placeholder={placeholder} 
                    autoComplete="off"
                    value={viserValue}
                    onChange={e => setViserValue(e.target.value)}   
                    disabled
                />

                <div id="keys"> 
                    <div id="topKeys">
                        <KeyButton keyValue="CE"/>
                        <KeyButton sourceImg={deleteIcon} keyValue="Deletar"/>
                    </div>
                    <div id="bottomKeys">
                        {keys.map((e) => {
                            return <KeyButton keyValue={e} key={e}/>
                        })}
                    </div>
                </div>
            </div>

            <aside id="historic">
                <div id="title">
                    <h1>HISTÓRICO</h1>
                </div>
                
                <div id="historicSection">
                    <HistoricEquation equation="2 + 2" result="4"/>
                </div>
            </aside>
        </div>
    );
}

export default Standart;