import React from "react";
import { makeStyles } from "tss-react/mui";
import { Chip, IconButton, Stack } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

const useStyles = makeStyles()((theme) => ({
    stack: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    numberInput: {
        fontSize: "16px",
        fontWeight: "bold",
        border: "0px",
    },
    minus: {
        // color: "red",
    },
    plus: {
        // color: "green",
    },
    delete: {
        color: "red",
        marginLeft: "50px",
    },
    add: {
        color: "green",
        marginLeft: "50px",
    },
}));

function QuantitySelection(props) {
    const { classes } = useStyles();
    return (
        <>
            <Stack direction="row" spacing={0} className={classes.stack}>
                <IconButton
                    className={classes.minus}
                    size="small"
                    onClick={props.handleDecreaseQuantity}
                >
                    <KeyboardArrowDownSharpIcon />
                </IconButton>

                <Chip className={classes.numberInput} label={props.quantity} />

                <IconButton
                    className={classes.plus}
                    size="small"
                    onClick={props.handleAddQuantity}
                >
                    <KeyboardArrowUpSharpIcon />
                </IconButton>

                {props.quantity === 0 && (
                    <IconButton className={classes.delete} size="medium">
                        <MdDeleteForever />
                    </IconButton>
                )}

                {props.quantity > 0 && (
                    <IconButton className={classes.add} size="medium">
                        <IoAddCircleSharp />
                    </IconButton>
                )}
            </Stack>
        </>
    );
}

export default QuantitySelection;
