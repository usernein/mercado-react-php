import SalesList from 'components/SalesList';
import React, { useContext } from 'react'
import AppContext from 'store/AppContext';
import { StyledSalesView } from './SalesView.style';

function SalesView (props) {
    const { sales } = useContext(AppContext);

    return (
        <StyledSalesView>
            <SalesList sales={sales} />
        </StyledSalesView>
    );
}

export default SalesView;