import React from 'react';

const ProductCard = ({ product, onImageError }) => {
    return (
        <div className="border border-gray-200 rounded-lg shadow-sm p-4 text-center">
            <img
                src={product.image_url}
                alt={product.title}
                className="h-100 w-full object-contain mb-4"
                onError={(e) => onImageError(e, product)}
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-sm mb-2">{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
        </div>
    );
};

export default ProductCard;