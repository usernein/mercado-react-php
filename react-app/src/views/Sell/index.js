import React, { useState, useEffect } from "react";
import axios from "axios";
import { localMarketBaseUrl } from "config/api";
import SelectionBar from "views/Sell/components/SelectionBar";

function Sell(props) {
    const [products, setProducts] = useState([]);
    const [salesItems, setSalesItems] = useState([]);
    const [saleId, setSaleId] = useState(0);

    useEffect(() => {
        const fetchInfo = async () => {
            let sale_id_storage = localStorage.getItem("sale_id");

            if (sale_id_storage) {
                setSaleId(Number(sale_id_storage));
            } else {
                let response = await axios.post(
                    localMarketBaseUrl + "/sales",
                    {}
                );
                setSaleId(response.data.id);
            }

            let response = await axios.get(localMarketBaseUrl + "/products");
            setProducts(response.data);
        };
        fetchInfo();
    }, []);

    useEffect(() => {
        const updateSalesItems = async () => {
            localStorage.setItem("sale_id", String(saleId));
            const sale = await axios.get(
                localMarketBaseUrl + `/sales?id=${saleId}`
            );
            const items = sale.data.products;
            setSalesItems(items);
        };
        if (saleId) {
            updateSalesItems();
        }
    }, [saleId]);

    return (
        <>
            {salesItems.map((item, index) => {
                let product = products.find(
                    (product) => product.id === item.product_id
                );
                return (
                    <SelectionBar
                        product_name={product.name}
                        key={product.id}
                        product_id={product.id}
                        quantity={item.amount}
                    />
                );
            })}
        </>
    );
}

export default Sell;
