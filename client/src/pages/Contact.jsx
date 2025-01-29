// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted', formData);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-8">
            {/* Image Section */}
            <div className="md:w-1/2">
                <img
                    src="src/images/coverImage.jpg"
                    className="w-full h-auto rounded shadow-lg"
                />
            </div>

            {/* Form Section */}
            <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold text-center text-white mb-4 sm:text-7xl">Contact Us</h1>
                <form onSubmit={handleSubmit} className="w-full p-4 border rounded shadow-lg text-white bg-black-800">
                    <div className="mb-4">
                        <input
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            className={`border p-2 w-full rounded ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            className={`border p-2 w-full rounded ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="message"
                            placeholder="Message"
                            onChange={handleChange}
                            className={`border p-2 w-full rounded ${errors.message ? 'border-red-500' : ''}`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="bg-white text-black p-2 w-full rounded hover:bg-gray-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;