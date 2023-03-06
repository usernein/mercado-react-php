import React from 'react'
import { DeleteButton, StyledProductActionsBar, SubmitButton } from './ProductActionsBar.style';

function ProductActionsBar (props) {
    const isActionWanted = (action) => {
        return !props.actions || action === props.actions || props.actions.includes(action);
    };
    return (
        <StyledProductActionsBar>
            {isActionWanted('delete') && (
                <DeleteButton onClick={props.onDelete} />
            )}
            {isActionWanted('submit') && (
                <SubmitButton onClick={props.onSubmit} />
            )}
        </StyledProductActionsBar>
    );
}

export default ProductActionsBar;