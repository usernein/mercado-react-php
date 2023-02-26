import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import { BiHistory, BiMoney, BiPackage } from "react-icons/bi";
import styled from "styled-components";
import SelectionBar from "../views/Sell/components/SelectionBar";

const StyledBottomBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${props => props.theme.palette.primary.dark};
    color: red;`;

function BottomBar(props) {
    return (
        <StyledBottomBar>
            {props.page === "vender" && <SelectionBar />}

            <BottomNavigation
                showLabels
                value={props.page}
                onChange={(evt, newValue) => {
                    props.setPage(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Produtos"
                    icon={<BiPackage />}
                    value="produtos"
                />
                <BottomNavigationAction
                    label="Vender"
                    icon={<BiMoney />}
                    value="vender"
                />
                <BottomNavigationAction
                    label="Histórico"
                    icon={<BiHistory />}
                    value="historico"
                />
            </BottomNavigation>
        </StyledBottomBar>
    );
}

export default BottomBar;
