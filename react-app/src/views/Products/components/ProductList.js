import React, { useState, useEffect } from "react";
import { localMarketBaseUrl } from "./config/api";
import axios from "axios";
import { FixedSizeList } from "react-window";
import ProductCard from "./ProductCard";

function ProductList() {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProductsData();
    }, []);

    const getProductsData = async () => {
        const response = await axios.get(localMarketBaseUrl + "/products");
        setProductsData(response.data);
    };
    return (
        <FixedSizeList
            height={500}
            width={500}
            itemCount={productsData.length}
            itemSize={50}
        >
            {({ index, style }) => (
                <ProductCard data={productsData[index]} style={style} />
            )}
        </FixedSizeList>
    );
}

export default ProductList;
