import React from 'react';
import siteLogo from '../images/siteLogo.jpg'

const Navbar = () => {
    return (
        <nav className="bg-black text-white flex justify-between items-center p-4">
            <div className="logo">
                <img src={siteLogo} alt="Logo" className="h-12" />
            </div>
            <ul className="flex space-x-6">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/products" className="hover:underline">Products</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;