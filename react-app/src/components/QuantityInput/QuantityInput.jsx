import React from "react";
import {
    StyledQuantityInput,
    StyledInput,
    MinusButton,
    PlusButton,
} from "./QuantityInput.style";

function QuantityInput(props) {
    const onMinusClick = () => {
        props.setQuantity((value) => value > 0 && value - 1);
    }
    const onPlusClick = () => {
        props.setQuantity((value) => value + 1);
    }
    return (
        <StyledQuantityInput>
            <MinusButton onClick={onMinusClick} />
            <StyledInput
                type="numeric"
                value={props.value || 0}
                onChange={props.onInputChange}
            />
            <PlusButton onClick={onPlusClick} />
        </StyledQuantityInput>
    );
}

export default QuantityInput;
