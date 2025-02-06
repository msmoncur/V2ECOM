import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    // Add environment checking
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const API_BASE_URL = isLocalhost ? 'http://localhost:3000' : '';

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/products`);
            if (response.ok) {
                const data = await response.json();
                console.log('Raw data:', data);

                // Transform the data to include full image URLs for local development
                const productsWithImages = data.map(product => ({
                    ...product,
                    // Prefix image_url with API_BASE_URL only in local development
                    image_url: isLocalhost ? `${API_BASE_URL}${product.image_url}` : product.image_url
                }));

                console.log('Processed products:', productsWithImages);
                setProducts(productsWithImages);
                setFilteredProducts(productsWithImages);
            } else {
                console.error('Error fetching products:', response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    // Debug function to log image loading errors
    const handleImageError = (e, product) => {
        console.error('Image failed to load:', {
            product: product.title,
            attemptedUrl: e.target.src
        });
    };

    // Your existing sort and filter functions remain the same
    const sortLowToHigh = () => {
        const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
        setFilteredProducts(sorted);
    };

    const sortHighToLow = () => {
        const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
        setFilteredProducts(sorted);
    };

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
            <div className="flex justify-center">
                <h1 className="text-5xl font-semibold text-balance text-black mb-4 sm:text-7xl">Collection</h1>
            </div>

            {/* Filter Bar */}
            <div className="flex justify-center py-4">
                <div className="bg-black text-white px-6 py-2 rounded-2xl w-[95%] md:w-1/2">
                    <div className="flex justify-center">
                        <button
                            className="text-lg font-semibold"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* Filter Options */}
            {showFilters && (
                <div className="w-full py-4">
                    <div className="container mx-auto flex flex-wrap justify-center gap-4 px-4">
                        <button
                            onClick={sortLowToHigh}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                        >
                            Price: Low to High
                        </button>
                        <button
                            onClick={sortHighToLow}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                        >
                            Price: High to Low
                        </button>
                        <button
                            onClick={() => filterByCategory('Base')}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                        >
                            Base
                        </button>
                        <button
                            onClick={() => filterByCategory('Accesories')}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                        >
                            Accessories
                        </button>
                        <button
                            onClick={() => filterByCategory('Outerwear')}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                        >
                            Outerwear
                        </button>
                        <button
                            onClick={() => filterByCategory('Shoes')}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                        >
                            Shoes
                        </button>
                        <button
                            onClick={() => filterByCategory('All')}
                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                        >
                            All Products
                        </button>
                    </div>
                </div>
            )}

            {/* Product Grid */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="border border-gray-200 rounded-lg shadow-sm p-4 text-center">
                        <img
                            src={product.image_url}
                            alt={product.title}
                            className="h-100 w-full object-contain mb-4"
                            onError={(e) => handleImageError(e, product)}
                        />
                        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                        <p className="text-sm mb-2">{product.description}</p>
                        <p className="text-xl font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;