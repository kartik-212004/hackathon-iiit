import React, { useState, useEffect } from 'react';

const SurveillanceFeed = () => {
    const [feed, setFeed] = useState(null);

    useEffect(() => {
        // Fetch the live surveillance feed from the backend
        fetch('/api/surveillance-feed')
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setFeed(url);
            });
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Surveillance Feed</h2>
            {feed ? (
                <video src={feed} controls autoPlay className="w-full h-auto" />
            ) : (
                <p>Loading feed...</p>
            )}
        </div>
    );
};

export default SurveillanceFeed;
