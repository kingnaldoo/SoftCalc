import './styles.scss';

type MenuOptionProps = {
    image: string;
    alt: string;
    textContent: string;
}

export function MenuOption(props: MenuOptionProps) {
    return (
        <div id="option">
            <div id="content">
                <img src={props.image} alt={props.alt} />
                <h3>{props.textContent}</h3>
            </div>
        </div>
    );
}