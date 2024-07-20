
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ProductDetail = ({ product }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{product.productName}</Typography>
                <Typography variant="subtitle1">Company: {product.company}</Typography>
                <Typography variant="subtitle1">Category: {product.category}</Typography>
                <Typography variant="subtitle1">Price: ${product.price}</Typography>
                <Typography variant="subtitle1">Rating: {product.rating}</Typography>
                <Typography variant="subtitle1">Discount: {product.discount}%</Typography>
                <Typography variant="subtitle1">Availability: {product.availability}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProductDetail;