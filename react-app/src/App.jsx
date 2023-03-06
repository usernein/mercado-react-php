import * as React from "react";
import { useState } from "react";
import BottomNavigationBar from "components/BottomNavigationBar/BottomNavigationBar";

import StyledApp from "./App.style";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductsView from "components/ProductsView";

function App() {
    const [Page, setPage] = useState("buy");

    return (
        <Provider store={store}>
            <StyledApp>
                {Page === "buy" && <ProductsView />}

                <BottomNavigationBar page={Page} setPage={setPage} />
            </StyledApp>
        </Provider>
    );
}

export default App;
