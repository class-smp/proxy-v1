import React from 'react';

const TabBar = ({ tabs, setTabs, activeTab, setActiveTab }) => {
    return (
        <div className="flex border-b border-zinc-700 bg-zinc-800 text-sm">
            {tabs.map((tab, index) => (
                <div
                    key={tab.id}
                    className={`px-4 py-2 cursor-pointer relative ${index === activeTab ? "text-blue-400 font-semibold" : "text-zinc-300"}`}
                    onClick={() => setActiveTab(index)}
                >
                    {tab.title}
                    {index === activeTab && (
                        <div className="absolute bottom-0 left-0 h-0.5 bg-blue-400 w-full transition-all" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default TabBar;