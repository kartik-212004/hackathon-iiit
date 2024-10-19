import React, { useState } from 'react';

const UploadImage = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://172.17.0.2:5000/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage('Error uploading file');
        }
    };

    return (
        <div>
            <h1>Upload Image</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} required />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UploadImage;
