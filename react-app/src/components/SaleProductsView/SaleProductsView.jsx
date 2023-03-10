import CreateSaleButton from "components/CreateSaleButton";
import FinishSaleButton from "components/FinishSaleButton";
import SaleProductsList from "components/SaleProductsList";
import React, { useContext } from "react";
import AppContext from "store/AppContext";
import { StyledSaleProductsView } from "./SaleProductsView.style";

function SaleProductsView(props) {
    const { sales, products, currentSaleId } = useContext(AppContext);

    const currentSale = sales.find((sale) => sale.id === currentSaleId) ?? {
        products: [],
    };

    const filteredProducts = products.filter((product) => {
        return (
            currentSale.products.findIndex(
                (sp) => sp.product_id === product.id
            ) !== -1
        );
    });

    return (
        <StyledSaleProductsView>
            <SaleProductsList
                saleId={currentSaleId}
                products={filteredProducts}
                sale={currentSale}
            />
            {filteredProducts.length ? <FinishSaleButton sale={currentSale} /> : null}
            {currentSale.finished? <CreateSaleButton /> : null}
        </StyledSaleProductsView>
    );
}

export default SaleProductsView;
