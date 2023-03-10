import React, { useContext } from 'react'
import AppContext from 'store/AppContext';
import { StyledCreateSaleButton } from './CreateSaleButton.style';

function CreateSaleButton (props) {
    const { createNewSale } = useContext(AppContext);

    const onClick = (e) => {
        createNewSale();
    }
    return (
        <StyledCreateSaleButton onClick={onClick}>
            INICIAR NOVA VENDA
        </StyledCreateSaleButton>
    );
}

export default CreateSaleButton;