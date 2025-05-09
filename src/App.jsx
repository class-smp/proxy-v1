
import React, { useState, useEffect } from 'react';
import Welcome from './pages/Welcome';
import Settings from './pages/Settings';
import ProxyFrame from './components/ProxyFrame';
import TabBar from './components/TabBar';

const obfuscateURL = (url) => btoa(unescape(encodeURIComponent(url)));

const App = () => {
    const [tabs, setTabs] = useState([{ title: "Welcome", url: "myproxy://welcome", id: 0 }]);
    const [activeTab, setActiveTab] = useState(0);

    const renderPage = (url) => {
        if (url.startsWith("glide://welcome"))
            return <Welcome tabs={tabs} setTabs={setTabs} setActiveTab={setActiveTab} />;          
        if (url.startsWith("glide://settings")) return <Settings />;
            return <ProxyFrame url={`https://yawning-lorianne-csmp-7e4de4fa.koyeb.app/uv/service/${obfuscateURL(url)}`} />;
    };

    return (
        <div className="h-screen w-screen bg-zinc-900 text-white flex flex-col">
            <TabBar tabs={tabs} setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-grow overflow-hidden">
                {renderPage(tabs[activeTab]?.url)}
            </div>
        </div>
    );
};

export default App;
