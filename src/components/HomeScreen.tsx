import React from 'react';
import Header from './Header';
import Body from './Body';
// import Footer from './Footer';

const HomeScreen: React.FC = () => {
    return (
        <div className="home-container">
            <Header />

            <Body />

            {/* <Footer /> */}
        </div>
    );
};

export default HomeScreen;