import React, { useState, useEffect } from 'react';

const SurveillanceFeed = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchSurveillanceData = async () => {
            try {
                // Fetching surveillance data from the backend
                const response = await fetch('http://127.0.0.1:5000/api/surveillance');
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setImages(result.images || []);  // Expecting 'images' array from the backend
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSurveillanceData();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold">Surveillance Feed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div key={index} className="border rounded p-2">
                            <img src={image.image_url} alt={image.name} className="w-full h-auto" />
                            <p className="text-center mt-2">{image.name}</p>
                        </div>
                    ))
                ) : (
                    <p>No surveillance data available</p>
                )}
            </div>
        </div>
    );
};

export default SurveillanceFeed;
