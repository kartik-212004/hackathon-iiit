import React from 'react';
import Navbar from './components/Navbar';
import SurveillanceFeed from './components/SurveillanceFeed';
import ReportForm from './components/ReportForm';

function App() {
    return (
        <div>
            <Navbar />
            <div className="p-4">
                <SurveillanceFeed />
                <ReportForm />
            </div>
        </div>
    );
}

export default App;
