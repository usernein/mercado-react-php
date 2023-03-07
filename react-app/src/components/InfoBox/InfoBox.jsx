import React from 'react'
import { StyledInfoBox } from './InfoBox.style';

function InfoBox (props) {
    return (
        <StyledInfoBox>
            {props.children}
        </StyledInfoBox>
    );
}

export default InfoBox;