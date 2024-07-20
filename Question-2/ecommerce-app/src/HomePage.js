import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import ProductList from '../components/ProductList';
import { Button, TextField, Select, MenuItem } from '@material-ui/core';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [company, setCompany] = useState('AMZ');
    const [category, setCategory] = useState('Laptop');
    const [top, setTop] = useState(10);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);

    useEffect(() => {
        fetchProducts();
    }, [company, category, top, minPrice, maxPrice]);

    const fetchProducts = async () => {
        const response = await getProducts(company, category, top, minPrice, maxPrice);
        setProducts(response.data);
    };

    return (
        <div>
            <div>
                <Select value={company} onChange={(e) => setCompany(e.target.value)}>
                    <MenuItem value="AMZ">Amazon</MenuItem>
                    <MenuItem value="FLP">Flipkart</MenuItem>
                    <MenuItem value="SNP">Snapdeal</MenuItem>
                    <MenuItem value="MYN">Myntra</MenuItem>
                    <MenuItem value="AZO">Azo</MenuItem>
                </Select>
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <MenuItem value="Laptop">Laptop</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                    {/* Add other categories */}
                </Select>
                <TextField label="Top N" value={top} onChange={(e) => setTop(e.target.value)} />
                <TextField label="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                <TextField label="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                <Button variant="contained" color="primary" onClick={fetchProducts}>Fetch Products</Button>
            </div>
            <ProductList products={products} />
        </div>
    );
};

export default HomePage;