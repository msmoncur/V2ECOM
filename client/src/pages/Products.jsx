import React, { useEffect, useState } from 'react';
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

/**
 * Products Component
 * Displays a collection of products with filtering and sorting capabilities
 * Handles product data fetching, state management, and rendering of product grid
 */
const Products = () => {
    // State for managing product data and UI
    const [products, setProducts] = useState([]); // Stores original product list
    const [filteredProducts, setFilteredProducts] = useState([]); // Stores filtered/sorted products
    const [showFilters, setShowFilters] = useState(false); // Controls filter menu visibility

    // Environment detection for API URL configuration
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const API_BASE_URL = isLocalhost ? 'http://localhost:3000' : '';

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    /**
     * Fetches product data from the API and processes image URLs
     * Handles both development and production environments
     */
    const fetchProducts = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/products`);
            if (response.ok) {
                const data = await response.json();
                // Process image URLs based on environment
                const productsWithImages = data.map(product => ({
                    ...product,
                    image_url: isLocalhost ? `${API_BASE_URL}${product.image_url}` : product.image_url
                }));
                setProducts(productsWithImages);
                setFilteredProducts(productsWithImages);
            } else {
                console.error('Error fetching products:', response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    /**
     * Logs image loading errors for debugging
     */
    const handleImageError = (e, product) => {
        console.error('Image failed to load:', {
            product: product.title,
            attemptedUrl: e.target.src
        });
    };

    /**
     * Sorting functions for product prices
     */
    const sortLowToHigh = () => {
        const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
        setFilteredProducts(sorted);
    };

    const sortHighToLow = () => {
        const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
        setFilteredProducts(sorted);
    };

    /**
     * Filters products by category
     * @param {string} category - Product category to filter by
     */
    const filterByCategory = (category) => {
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.product_type === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="bg-white min-h-screen text-black">
            {/* Page Title */}
            <div className="flex justify-center">
                <h1 className="text-5xl font-semibold text-balance text-black mb-4 sm:text-7xl">Collection</h1>
            </div>

            {/* Filter Bar Component */}
            <FilterBar
                showFilters={showFilters}
                setShowFilters={setShowFilters}
                sortLowToHigh={sortLowToHigh}
                sortHighToLow={sortHighToLow}
                filterByCategory={filterByCategory}
            />

            {/* Product Grid */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-4">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onImageError={handleImageError}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;