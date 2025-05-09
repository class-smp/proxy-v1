
import React from 'react';

const ProxyFrame = ({ url }) => (
    <iframe src={url} title="Proxy" className="w-full h-full border-none" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
);

export default ProxyFrame;
