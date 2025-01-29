import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center p-4">
            <ul className="flex justify-center space-x-6">
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                <li className="hover:underline">Privacy Policy</li>
                <li>&copy; All Rights Reserved</li>
                <li><a href="https://www.instagram.com/" className="hover:underline">Instagram</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
