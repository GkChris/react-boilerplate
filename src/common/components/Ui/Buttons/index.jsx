import Button from 'react-bootstrap/Button';


export const Button_Bootstrap = (props) => {
    return (
        <Button 
            variant={props.variant} 
            onClick={props.onClick}
        >
            {props.text}
        </Button >
    )
}