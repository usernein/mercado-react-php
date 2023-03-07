import ProductsList from 'components/ProductsList';
import React, { useContext } from 'react'
import AppContext from 'store/AppContext';
import { StyledSaleProductsView } from './SaleProductsView.style';

function SaleProductsView (props) {
    const { sales, products, currentSaleId } = useContext(AppContext);
    const currentSale = sales.find(sale => sale.id === currentSaleId) ?? {products:[]};

    const filteredProducts = products.filter((product) => {
        return currentSale.products.findIndex(sp => sp.product_id === product.id) !== -1;
    });


    return (
        <StyledSaleProductsView>
            <ProductsList products={filteredProducts} sale={currentSale} />
        </StyledSaleProductsView>
    );
}

export default SaleProductsView;