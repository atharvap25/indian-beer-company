import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
    return (
        <div className="loading-container">
            <img 
                src="/loading.gif"
                alt="Loading..."
                className="loading-gif"
            />
        </div>
    );
};

export default LoadingScreen;