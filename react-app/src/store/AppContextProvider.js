import React, { useEffect, useState } from "react";
import axios from "axios";
import { localMarketBaseUrl } from "config/api";
import AppContext from "./AppContext";
import { demoCategories, demoProducts, demoSales } from "./DemoValues";
import * as AxiosLogger from "axios-logger";

const api = axios.create({
    baseURL: localMarketBaseUrl,
    headers: {
        "Content-Type": "multipart/form-data",
    },
    timeout: 2000,
});
api.interceptors.request.use(AxiosLogger.requestLogger);

const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [sales, setSales] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentSaleId, saveCurrentSaleId] = useState(1);

    const queryParams = new URLSearchParams(window.location.search);
    const isDemo = queryParams.get("demo") === "true";

    const setCurrentSaleId = (value) => {
        localStorage.setItem("currentSaleId", value);
        saveCurrentSaleId(Number(value));
    };

    const fetchValues = async () => {
        if (isDemo) {
            setProducts(demoProducts);
            setSales(demoSales);
            setCategories(demoCategories);
        } else {
            const { data: products } = await api.get("/products");
            const { data: sales } = await api.get("/sales");
            const { data: categories } = await api.get("/products/categories");
            setProducts(products);
            setSales(sales);
            setCategories(categories);
        }
    };

    useEffect(() => {
        setCurrentSaleId(Number(localStorage.getItem("currentSaleId") ?? 0));
        fetchValues();
    }, []);

    const updateProduct = async (product, keys) => {
        setProducts(products.map((p) => (p.id === product.id ? product : p)));

        let requestBody = {};
        keys.forEach((key) => {
            requestBody[key] = product[key];
        });
        requestBody["id"] = product["id"];

        await api.post("/products", requestBody);
    };

    const updateCategory = async (category, keys) => {
        setCategories(
            categories.map((c) => (c.id === category.id ? category : c))
        );

        let requestBody = {};
        keys.forEach((key) => {
            requestBody[key] = category[key];
        });
        requestBody["id"] = category["id"];

        await api.post("/products/categories", requestBody);
    };

    const updateSale = async (sale, keys) => {
        setSales(sales.map((s) => (s.id === sale.id ? sale : s)));

        let requestBody = {};
        keys.forEach((key) => {
            requestBody[key] = sale[key];
        });
        requestBody["id"] = sale["id"];

        await api.post("/sales", requestBody);
    };

    const getProductById = (id) => {
        return products.find((p) => p.id === id);
    };

    const getCategoryById = (id) => {
        return categories.find((c) => c.id === id);
    };

    const getSaleById = (id) => {
        return sales.find((s) => s.id === id);
    };

    const arrayGroupBy = (items, callback) => {
        return items.reduce((groups, item) => {
            const category = callback(item);
            groups[category] = groups[category] ?? [];
            groups[category].push(item);
            return groups;
        }, []);
    };

    const createNewSale = async (product = null) => {
        const { data: newSale } = await api.post("/sales", {
            finished: false,
            products: JSON.stringify( product? [{
                id: product.id,
                amount: product.amount,
            }] : []),
        });
        setSales([...sales, newSale]);
        setCurrentSaleId(newSale.id);
    };

    const updateSaleItem = async (product, sum = false) => {
        await api.post("/sales", {
            id: currentSaleId,
            products: JSON.stringify([{
                id: product.id,
                amount: product.amount,
            }]),
            sum_items: sum,
        });

        const { taxes, total } = calculateSalePrices(currentSaleId);
        const sale = getSaleById(currentSaleId);
        sale.taxes_price = taxes;
        sale.total_price = total;
        updateSale(sale, ["taxes_price", "total_price"]);
        fetchValues();
    }

    const calculatePrices = (product_id) => {
        const product = getProductById(product_id);
        const category = getCategoryById(product.category.id);
        const tax_percentage = category.tax_percentage;

        return {
            taxes: Number(product.price) * Number(tax_percentage) / 100,
            total: Number(product.price) + Number(product.price) * Number(tax_percentage) / 100,
        }
    }

    const calculateSalePrices = (sale_id) => {
        const sale = getSaleById(sale_id);

        let taxes = 0;
        let total = 0;

        sale.products.forEach((sp) => {
            const { taxes: productTaxes, total: productTotal } = calculatePrices(sp.product_id);
            taxes += productTaxes*Number(sp.amount);
            total += productTotal*Number(sp.amount);
        })


        return {
            taxes,
            total,
        }
    }

    return (
        <AppContext.Provider
            value={{
                products,
                categories,
                sales,
                updateProduct,
                updateCategory,
                updateSale,
                currentSaleId,
                setCurrentSaleId,
                getProductById,
                getSaleById,
                arrayGroupBy,
                createNewSale,
                updateSaleItem,
                calculatePrices,
                calculateSalePrices
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
