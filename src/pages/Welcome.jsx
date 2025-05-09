import React, { useState } from 'react';

const Welcome = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSearch(input.startsWith('http') ? input : `https://www.google.com/search?q=${encodeURIComponent(input)}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full bg-zinc-900 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to MyProxy</h1>
            <p className="text-zinc-400 mb-6">Your ultra-fast, private proxy browser</p>
            <form onSubmit={handleSubmit} className="w-full max-w-xl px-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search the web or enter URL"
                    className="w-full p-3 rounded-full bg-zinc-800 text-white placeholder-zinc-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </form>
        </div>
    );
};

export default Welcome;