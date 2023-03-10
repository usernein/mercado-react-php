import React, { useContext } from "react";
import { StyledSaleRow } from "./SaleRow.style";
import { BsChevronCompactRight } from "react-icons/bs";
import { PageContext } from "store/PageContext";
import AppContext from "store/AppContext";

function SaleRow({ sale }) {
    const { setPage } = useContext(PageContext);
    const { setCurrentSaleId } = useContext(AppContext);

    const formattedDate = new Date(sale.created_at).toLocaleString("pt-BR", {
        // weekday: "short",
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    const onClick = (e) => {
        setCurrentSaleId(e.target.closest("[data-id]").dataset.id);
        setPage("buy")
    }

    return (
        <StyledSaleRow
            onClick={onClick}
            data-id={sale.id}
            className="text-sm mt-3 mx-2 flex flex-row items-center bg-zinc-800 py-2 px-2 rounded-xl hover:bg-blue-600 hover:translate-x-2 duration-100"
        >
            <div className="text-4xl px-1 py-1 w-24">#{sale.id}</div>
            <div className="sale-info flex flex-col justify-center ml-2">
                <div className="">Venda #{sale.id}</div>
                <div className="">{formattedDate}</div>
            </div>
            <div className="prices flex flex-row ml-auto mr-16 space-x-8">
                <div className="taxes flex flex-col">
                    <span className="label text-xs">Impostos</span>
                    <div className="price">R${sale.taxes_price}</div>
                </div>
                <div className="total flex flex-col">
                    <span className="label text-xs">Total</span>
                    <div className="price">R${sale.total_price}</div>
                </div>
            </div>
            <BsChevronCompactRight className="mr-6 scale-150" />
        </StyledSaleRow>
    );
}

export default SaleRow;
