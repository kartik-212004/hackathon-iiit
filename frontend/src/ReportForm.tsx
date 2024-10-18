import React, { useState } from 'react';

const ReportForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        last_seen: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/report-missing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-lg font-bold mb-4">Report Missing Person</h2>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border p-2 mb-2 w-full"
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="border p-2 mb-2 w-full"
            />
            <input
                type="text"
                name="last_seen"
                value={formData.last_seen}
                onChange={handleChange}
                placeholder="Last Seen Location"
                className="border p-2 mb-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white p-2">
                Submit Report
            </button>
        </form>
    );
};

export default ReportForm;
