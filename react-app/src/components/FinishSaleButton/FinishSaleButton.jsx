import React, { useContext } from 'react'
import AppContext from 'store/AppContext';
import { StyledFinishSaleButton } from './FinishSaleButton.style';

function FinishSaleButton ({sale}) {
    const { updateSale } = useContext(AppContext);

    const onClick = (e) => {
        if (sale.finished) {
            return;
        }
        sale.finished = true;
        
        updateSale(sale, ['finished']);
    };

    return (
        <StyledFinishSaleButton onClick={onClick} $finished={sale.finished}>
            {sale.finished? "COMPRA FINALIZADA" : "FINALIZAR COMPRA"}
        </StyledFinishSaleButton>
    );
}

export default FinishSaleButton;