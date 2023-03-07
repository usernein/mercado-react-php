import React, { useEffect, useState } from "react";
import axios from "axios";
import { localMarketBaseUrl } from "config/api";
import AppContext from "./AppContext";
import { demoCategories, demoProducts, demoSales } from "./DemoValues";

const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [sales, setSales] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentSaleId, setCurrentSaleId] = useState(0);

    const queryParams = new URLSearchParams(window.location.search);
    const isDemo = queryParams.get("demo") === "true";

    const localStorageLogic = async () => {
        const storedSaleId = localStorage.getItem("currentSaleId");
        if (!storedSaleId) {
            const { data } = isDemo
                ? { data: { id: 1 } }
                : await axios.post(`${localMarketBaseUrl}/sales`, {
                    finished: false,
                });
            const createdSaleId = data.id;
            localStorage.setItem("currentSaleId", createdSaleId);
            setCurrentSaleId(createdSaleId);

            await fetchValues();
            return;
        }
        setCurrentSaleId(Number(storedSaleId ? storedSaleId : 0));
    };

    const fetchValues = async () => {
        if (isDemo) {
            setProducts(demoProducts);
            setSales(demoSales);
            setCategories(demoCategories);
        } else {
            const { data: products } = await axios.get(
                `${localMarketBaseUrl}/products`
            );
            const { data: sales } = await axios.get(`${localMarketBaseUrl}/sales`);
            const { data: categories } = await axios.get(
                `${localMarketBaseUrl}/products/categories`
            );
            setProducts(products);
            setSales(sales);
            setCategories(categories);
        }
    };

    useEffect(() => {
        const controller = new AbortController();

        fetchValues();
        localStorageLogic();

        return () => {
            controller.abort();
        };
    }, []);

    const updateProduct = async (product, keys) => {
        setProducts(products.map((p) => (p.id === product.id ? product : p)));

        let requestBody = {};
        keys.forEach((key) => {
            requestBody[key] = product[key];
        });

        await axios.post(localMarketBaseUrl + "/products", requestBody);
    };

    const updateCategory = async (category, keys) => {
        setCategories(
            categories.map((c) => (c.id === category.id ? category : c))
        );

        let requestBody = {};
        keys.forEach((key) => {
            requestBody[key] = category[key];
        });

        await axios.post(
            localMarketBaseUrl + "/products/categories",
            requestBody
        );
    };

    const updateSale = async (sale, keys) => {
        setSales(sales.map((s) => (s.id === sale.id ? sale : s)));

        let requestBody = {};
        keys.forEach((key) => {
            requestBody[key] = sale[key];
        });

        await axios.post(localMarketBaseUrl + "/sales", requestBody);
    };

    const getProductById = (id) => {
        return products.find((p) => p.id === id);
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
                getProductById,
                getSaleById,
                arrayGroupBy,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
