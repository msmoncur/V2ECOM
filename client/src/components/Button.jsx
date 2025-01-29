import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, className, type = "button", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 bg-gray-100 text-black rounded-full hover:bg-gray-200 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired, // The button text
    onClick: PropTypes.func, // Function to call on click
    className: PropTypes.string, // Additional custom classes
    type: PropTypes.oneOf(["button", "submit", "reset"]), // Button type
    disabled: PropTypes.bool, // Disabled state
};



export default Button;