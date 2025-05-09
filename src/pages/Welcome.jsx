import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Welcome = ({ tabs, setTabs, setActiveTab }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    const newTab = {
      id: Date.now(),
      title: query,
      url,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(tabs.length); // focus on the new tab
  };

  return (
    <div className="flex flex-col h-full bg-zinc-900 text-white">
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-light mb-6 tracking-tight">
          Welcome to <span className="font-semibold text-blue-400">MyProxy</span>
        </h1>

        <form onSubmit={handleSearch} className="w-full max-w-xl relative">
          <input
            type="text"
            placeholder="Search with Google or enter address"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-zinc-800 border border-zinc-600 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white">
            <Search size={20} />
          </button>
        </form>

        <p className="mt-4 text-zinc-500 text-sm">
          Your private proxy browser. Ultra-fast. Ultra-private.
        </p>
      </div>
    </div>
  );
};

export default Welcome;