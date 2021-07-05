import './styles.scss';

type HistoricEquationProps = {
    equation: string;
    result: string;
}

export function HistoricEquation(props: HistoricEquationProps) {
    return(
        <div id="equationItem">
            <h3>{props.equation}</h3>
            <h3 id="result">{props.result}</h3>
        </div>
    );
}