import React from "react";
import {
    StyledQuantityInput,
    StyledInput,
    MinusButton,
    PlusButton,
} from "./QuantityInput.style";

function QuantityInput(props) {
    const onMinusClick = () => {
        props.setQuantity((value) => value > 0? value - 1 : 0);
    }
    const onPlusClick = () => {
        props.setQuantity((value) => value + 1);
    }
    return (
        <StyledQuantityInput>
            <MinusButton onClick={onMinusClick} />
            <StyledInput
                type="text"
                pattern="[0-9]*"
                value={props.value}
                onChange={(e) => {
                    e.target.validity.valid && props.setQuantity(Number(e.target.value))
                }}
            />
            <PlusButton onClick={onPlusClick} />
        </StyledQuantityInput>
    );
}

export default QuantityInput;
