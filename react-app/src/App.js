import * as React from "react";
import theme from "./theming";
import { darken, ThemeProvider } from "@mui/material/styles";
import {
    BottomNavigation,
    BottomNavigationAction,
    lighten,
} from "@mui/material";
import { useState, useLayoutEffect } from "react";
import { BiPackage, BiMoney, BiHistory } from "react-icons/bi";
import Products from "./views/Products";
import Sell from "./views/Sell";
import History from "./views/History";
import { makeStyles } from "tss-react/mui";
import BottomBar from "./components/BottomBar";

const useStyles = makeStyles()({
    app: {
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.light,
    }
});

function App() {
    const [Page, setPage] = useState("vender");
    const { classes } = useStyles();

    useLayoutEffect(() => {
        document.body.style.backgroundColor = darken(
            theme.palette.primary.main,
            0.8
        );
    }, []);
    
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.app}>
                {Page === "produtos" && <Products />}
                {Page === "vender" && <Sell />}
                {Page === "historico" && <History />}

                <BottomBar page={Page} setPage={setPage} />
            </div>
        </ThemeProvider>
    );
}

export default App;
