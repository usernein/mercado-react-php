import React from 'react'
import { StyledInventoryProductRow } from './InventoryProductRow.style';

function InventoryProductRow (props) {
    return (
        <StyledInventoryProductRow>
            <InfoBox>{props.product.name}</InfoBox>
        </StyledInventoryProductRow>
    );
}

export default InventoryProductRow;