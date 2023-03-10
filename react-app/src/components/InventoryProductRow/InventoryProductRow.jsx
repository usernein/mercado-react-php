//@ts-check
import React, { useContext } from "react";
import AppContext from "store/AppContext";
import {
    ProductPriceInput,
    StyledInventoryProductRow,
    StyledProductName,
    StyledProductPrice,
    StyledProductTaxedPrice,
} from "./InventoryProductRow.style";

function InventoryProductRow(props) {
    const { products, categories, updateProduct } = useContext(AppContext);
    const product = products.find((p) => p.id === props.product.id);
    const category = categories.find((c) => c.id === product.category.id);
    const [productPrice, setProductPrice] = React.useState(product.price);

    const updateProductPrice = (e) => {
        product.price = parseFloat(productPrice);
        updateProduct(product, ['price'])
    }

    return (
        <StyledInventoryProductRow>
            <StyledProductName>{product.name}</StyledProductName>
            <StyledProductPrice>
                R${" "}
                <ProductPriceInput
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            updateProductPrice(e);
                        }
                    }}
                ></ProductPriceInput>
            </StyledProductPrice>
            <StyledProductTaxedPrice>
                R${" "}
                {Number(product.price) +
                    Number(product.price) *
                        (Number(category.tax_percentage) / 100)}
            </StyledProductTaxedPrice>
        </StyledInventoryProductRow>
    );
}

export default InventoryProductRow;
