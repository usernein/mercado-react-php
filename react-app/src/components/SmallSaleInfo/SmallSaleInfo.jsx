import React, { useContext } from "react";
import AppContext from "store/AppContext";
import { StyledSmallSaleInfo } from "./SmallSaleInfo.style";

function SmallSaleInfo(props) {
    const { sales } = useContext(AppContext);
    const currentSale = sales.find((sale) => sale.id === props.saleId) ?? {
        products: [],
    };

    return (
        <StyledSmallSaleInfo>
            <div className="number flex text-base">Venda #{currentSale.id}</div>
            <div className="taxes flex flex-col">
                <div className="label text-xs">Impostos</div>
                <div className="price">
                    R$
                    {currentSale.taxes_price && Number(currentSale.taxes_price).toFixed
                        ? Number(currentSale.taxes_price).toFixed(2)
                        : currentSale.taxes_price}
                </div>
            </div>
            <div className="total flex flex-col">
                <div className="label text-xs">Total</div>
                <div className="price">
                    R$
                    {currentSale.total_price && Number(currentSale.total_price).toFixed
                        ? Number(currentSale.total_price).toFixed(2)
                        : currentSale.total_price}
                </div>
            </div>
        </StyledSmallSaleInfo>
    );
}

export default SmallSaleInfo;
