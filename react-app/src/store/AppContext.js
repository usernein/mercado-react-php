import React from "react";

const dummyFunction = async (arg1, arg2) => {};
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
    setCurrentSaleId: (value) => {},
    createNewSale: async (product) => {},
    updateSaleItem: async (product, sum) => {},
    calculatePrices: (product_id) => ({}),
    calculateSalePrices: (sale_id) => ({}),
});

export default AppContext;
