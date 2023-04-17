import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        border-radius: 24px;
        min-width: ${minWidth};
        color: white;
        &:hover {
            background: linear-gradient(180deg, #4D9FF0 0%, #36699D 100%);
        }
        &:active {
            background: #152842;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;