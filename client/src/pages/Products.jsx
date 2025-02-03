import React, { useEffect, useState } from 'react'; // Importing React and hooks


//state to hold products
const Products = () => {
    const [products, setProducts] = useState([]);
    //state to hold filtered products
    const [filteredProducts, setFilteredProducts] = useState([]);
    //state to show visibility and filter options
    const [showFilters, setShowFilters] = useState(false);


    //hook to fetch products
    useEffect(() => {
        fetchProducts();
    }, []);


    //function to fetch products
    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products'); // Relative path 
            if (response.ok) {
                const data = await response.json();
                console.log('Fetched Products:', data); // Log the data
                setProducts(data);
                setFilteredProducts(data); // Initialize filtered products
            } else {
                console.error('Error fetching products:', response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    // Sorting products from low to high 
    const sortLowToHigh = () => {
        const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
        setFilteredProducts(sorted);
    };

    //function to sort products from high to low 
    const sortHighToLow = () => {
        const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
        setFilteredProducts(sorted);
    };

    // Filtering products by category
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
                            onClick={() => setShowFilters(!showFilters)} // Toggle filter options
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
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;