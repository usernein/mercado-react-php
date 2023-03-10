import SaleRow from 'components/SaleRow';
import React from 'react'
import { StyledSalesList } from './SalesList.style';

function SalesList ({sales}) {
    return (
        <StyledSalesList>
            {sales.map(s => (
                <SaleRow key={s.id} sale={s} />
            ))}
        </StyledSalesList>
    );
}

export default SalesList;