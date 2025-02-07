import React from 'react';

const FilterBar = ({
    showFilters,
    setShowFilters,
    sortLowToHigh,
    sortHighToLow,
    filterByCategory
}) => {
    return (
        <>
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
        </>
    );
};

export default FilterBar;