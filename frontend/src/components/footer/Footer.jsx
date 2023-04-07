import React from 'react';
import './footer.css'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-8 pb-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="md:flex md:justify-between md:items-center">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <p className="text-sm leading-loose">We are a company that provides services and products for our customers. Our mission is to help people achieve their goals and improve their lives.</p>
                    </div>
                    <div className="md:flex md:space-x-4">
                        <div className="mb-8 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Links</h3>
                            <ul className="text-sm leading-loose">
                                <li><a className="hover:text-gray-400" href="/">Home</a></li>
                                <li><a className="hover:text-gray-400" href="/">Products</a></li>
                                <li><a className="hover:text-gray-400" href="/">Services</a></li>
                                <li><a className="hover:text-gray-400" href="/">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="mb-8 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <ul className="text-sm leading-loose">
                                <li>123 Main Street</li>
                                <li>Anytown, USA 12345</li>
                                <li>Phone: (123) 456-7890</li>
                                <li>Email: info@mywebsite.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-6 md:flex md:justify-between md:items-center">
                    <p className="text-sm">&copy; 2023 My Website. All rights reserved.</p>
                    <ul className="md:flex md:space-x-4 mt-4 md:mt-0">
                        <li><a className="hover:text-gray-400" href="/">Privacy Policy</a></li>
                        <li><a className="hover:text-gray-400" href="/">Terms of Use</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
