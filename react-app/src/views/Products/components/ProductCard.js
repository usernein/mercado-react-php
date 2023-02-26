import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        padding: 20,
        textAlign: "center",
        border: "solid 1px black",
    },
});

function ProductCard(props) {
    const classes = useStyles();
    const { name, price } = props.data;

    return (
        <Card className={classes.root}>
            <h3>Name: {name}</h3>
            <h4>Price: ${price.toFixed(2)}</h4>
        </Card>
    );
}

export default ProductCard;
