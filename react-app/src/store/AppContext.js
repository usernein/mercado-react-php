import React from "react";

const dummyFunction = async () => {};
const AppContext = React.createContext({
    products: [],
    sales: [],
    categories: [],
    updateProduct: dummyFunction,
    updateCategory: dummyFunction,
    updateSale: dummyFunction,
    currentSaleId: 0,
    getProductById: null,
    getSaleById: null,
    arrayGroupBy: null,
});

export default AppContext;
