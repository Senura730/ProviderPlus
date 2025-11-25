'use client';
import React, { useState } from 'react';
import { User, Menu, X } from "lucide-react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full py-6 px-6 flex justify-between items-center max-w-7xl mx-auto relative z-50">
            {/* Logo Placeholder */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>
                <span className="font-bold text-xl text-gray-800 tracking-tight">BrandName</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10 text-sm font-medium text-gray-600">
                <a href="#" className="hover:text-black transition">Home</a>
                <a href="#" className="hover:text-black transition">Services</a>
                <a href="#" className="hover:text-black transition">About Us</a>
                <a href="#" className="hover:text-black transition">Join Us</a>
                <a href="#" className="hover:text-black transition">Contact Us</a>
            </div>

            {/* Profile Icon & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
                <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer transition hidden md:block">
                    <User className="w-6 h-6 text-gray-700" />
                </div>
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden border-t border-gray-100">
                    <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Home</a>
                    <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Services</a>
                    <a href="#" className="text-gray-600 py-2 border-b border-gray-100">About Us</a>
                    <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Join Us</a>
                    <a href="#" className="text-gray-600 py-2">Contact Us</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;