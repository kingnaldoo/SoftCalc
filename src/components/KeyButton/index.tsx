import classes from 'classnames';

import './styles.scss';

type KeyButtonProp = {
    keyValue?: string;
    sourceImg?: string;
}

export function KeyButton (props: KeyButtonProp) {  
    function imageOrText(){
        if (props.sourceImg) 
            return(<img src={props.sourceImg} alt={props.keyValue}/>);
        else
            return(<h3>{props.keyValue}</h3>);
    }

    return (
        <div className={classes(
            'button',
            { equal: props.keyValue === "=" },
            { clear: props.keyValue === "CE" },
            { null: props.keyValue === "" },
            { delete: props.sourceImg}
            
        )}>
            {imageOrText()}
        </div>
    );
}