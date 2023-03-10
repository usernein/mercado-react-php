import ProductActionsBar from "components/ProductActionsBar";
import { StyledProductName } from "components/InventoryProductRow/InventoryProductRow.style";
import QuantityInput from "components/QuantityInput";
import React, { useContext, useEffect } from "react";
import AppContext from "store/AppContext";
import {
    ProductTotalPrice,
    ProductUnitPrice,
    StyledSaleProductRow,
} from "./SaleProductRow.style";

function SaleProductRow(props) {
    const {
        getProductById,
        updateSaleItem,
        calculateSalePrices,
        currentSaleId,
        getSaleById,
        updateSale,
    } = useContext(AppContext);
    const product = getProductById(props.saleItem.product_id);
    const [itemAmount, setItemAmount] = React.useState(props.saleItem.amount);

    useEffect(() => {
        product.amount = itemAmount;
        updateSaleItem(product);

        const { taxes, total } = calculateSalePrices(currentSaleId);
        const sale = getSaleById(currentSaleId);
        sale.taxes_price = taxes;
        sale.total_price = total;
        updateSale(sale, ["taxes_price", "total_price"]);
    }, [itemAmount]);

    const onDelete = () => {
        updateSaleItem({ id: product.id, amount: 0 });
    };

    return (
        <StyledSaleProductRow>
            <StyledProductName>{product.name}</StyledProductName>
            <ProductUnitPrice>R$ {product.price}</ProductUnitPrice>
            <QuantityInput value={itemAmount} setQuantity={setItemAmount} />
            <ProductTotalPrice>
                R$ {product.price * props.saleItem.amount}
            </ProductTotalPrice>
            <ProductActionsBar actions="delete" onDelete={onDelete} />
        </StyledSaleProductRow>
    );
}

export default SaleProductRow;
