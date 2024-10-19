import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface Face {
  name: string;
  image: string;
  location: string; // Add location field
}

const Surveillance: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [faces, setFaces] = useState<Face[]>([]);

  useEffect(() => {
    const initCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    };

    initCamera();
  }, []);

  const autoCapture = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/png');

        try {
          const response = await axios.post('http://localhost:5000/api/detect', { image: imageData });
          if (response.data.faces.length > 0) {
            // Map through the detected faces and set static images
            const newFaces = response.data.faces.map((face: Face) => ({
              ...face,
              image: face.image, // Use the returned image
            }));

            setFaces((prevFaces) => [...prevFaces, ...newFaces]); // Append new faces to the existing list
          }
        } catch (error) {
          console.error('Error capturing face:', error);
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      autoCapture(); // Automatically capture the face every 2 seconds (adjust as needed)
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col items-center p-4 border-r border-gray-300">
        <h2 className="text-lg font-bold mb-4">Detected Faces</h2>
        <div className="flex flex-wrap justify-center">
          {faces.map((face, index) => (
            <div key={index} className="border p-2 m-2">
              <img src={face.image} alt={`Face ${index}`} className="w-24 h-24 object-cover" />
              <p>{face.name}</p>
              <p>Location: {face.location}</p> {/* Show location */}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <video ref={videoRef} className="border-2 border-gray-300" autoPlay />
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default Surveillance;
