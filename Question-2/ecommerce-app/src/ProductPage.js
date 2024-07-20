
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api';
import ProductDetail from '../components/ProductDetail';

const ProductPage = () => {
    const { company, category, productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [company, category, productId]);

    const fetchProduct = async () => {
        const response = await getProducts(company, category, 1, 1, 100000);
        const product = response.data.find((p) => p.productId === productId);
        setProduct(product);
    };

    return (
        <div>
            {product && <ProductDetail product={product} />}
        </div>
    );
};

export default ProductPage;