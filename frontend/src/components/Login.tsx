import React, { useState } from 'react';

// A single SVG icon component for the dropdown arrow
const SelectArrowIcon = () => (
    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="292.4" height="292.4">
        <path fill="#6B7280" d="M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z"/>
    </svg>
);

// Main App Component to manage state and render forms
export default function Login() {
    const [isLogin, setIsLogin] = useState(true); // Start with the login form

    const toggleForm = () => {
        setIsLogin(prevState => !prevState);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
            <div className="w-full max-w-md">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                        {isLogin ? 'Welcome Back!' : 'Create Account'}
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        {isLogin ? 'Log in to continue.' : 'Join us and start your journey.'}
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* Fields only for Signup */}
                        {!isLogin && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="signup-name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                                    <input type="text" id="signup-name" name="name" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="John Doe" required />
                                </div>
                            </>
                        )}
                        
                        {/* Common Fields */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="you@example.com" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="••••••••" required />
                        </div>

                        {/* Role field only for Signup */}
                        {!isLogin && (
                            <div className="mb-6 relative">
                                <label htmlFor="role" className="block text-gray-700 text-sm font-medium mb-2">Role</label>
                                <select id="role" name="role" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none">
                                    <option value="USER">User</option>
                                    <option value="INSTRUCTOR">Instructor</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                                <SelectArrowIcon />
                            </div>
                        )}
                        
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mt-2">
                            {isLogin ? 'Log In' : 'Sign Up'}
                        </button>
                    </form>
                    <p className="text-center text-gray-600 text-sm mt-6">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button onClick={toggleForm} className="font-medium text-blue-600 hover:text-blue-500 ml-1 bg-transparent border-none p-0">
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </p>
                </div>
            </div>
        </main>
    );
}