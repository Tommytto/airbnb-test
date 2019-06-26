import React from 'react';
import Header from '../Header';
import CardGrid from '../CardGrid';
import './style.scss';

const Main = () => {
    return (
        <div className="main">
            <div className="main__header">
                <Header />
            </div>
            <main className="main__content">
                <CardGrid />
            </main>
        </div>
    );
};

export default Main;
