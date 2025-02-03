import React from "react";

const Button = ({ label, onClick, type = "button", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="px-4 py-2 bg-white text-black border border-black rounded-lg hover:bg-gray-100 transition duration-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;