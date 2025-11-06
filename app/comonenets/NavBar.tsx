'use client';

import Link from 'next/link';
import { useState } from 'react';

// For now, we'll use a prop to simulate auth status
// Later we'll replace this with real Supabase auth
interface NavbarProps {
    isAuthenticated?: boolean;
}

export default function Navbar({ isAuthenticated = false }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo & Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AnimeLib
              </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {/* Links for everyone */}
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition"
                        >
                            Home
                        </Link>
                        <Link
                            href="/explore"
                            className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition"
                        >
                            Explore
                        </Link>

                        {isAuthenticated ? (
                            // Navbar when signed IN
                            <>
                                <Link
                                    href="/library"
                                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition"
                                >
                                    My Library
                                </Link>
                                <Link
                                    href="/collections"
                                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition"
                                >
                                    Collections
                                </Link>
                                <Link
                                    href="/profile"
                                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition"
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={() => {
                                        // TODO: Add logout logic later
                                        alert('Logout clicked - will implement with Supabase');
                                    }}
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            // Navbar when signed OUT
                            <>
                                <Link
                                    href="/login"
                                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/signup"
                                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 hover:text-purple-600 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/explore"
                                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Explore
                            </Link>

                            {isAuthenticated ? (
                                <>
                                    <Link
                                        href="/library"
                                        className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        My Library
                                    </Link>
                                    <Link
                                        href="/collections"
                                        className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Collections
                                    </Link>
                                    <Link
                                        href="/profile"
                                        className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={() => {
                                            alert('Logout clicked - will implement with Supabase');
                                            setMobileMenuOpen(false);
                                        }}
                                        className="bg-red-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 text-left"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/signup"
                                        className="bg-purple-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}