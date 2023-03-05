import React from 'react'
import { DeleteButton, StyledProductActionsBar, SubmitButton } from './ProductActionsBar.style';

function ProductActionsBar () {
    return (
        <StyledProductActionsBar>
            <DeleteButton />
            <SubmitButton />
        </StyledProductActionsBar>
    );
}

export default ProductActionsBar;