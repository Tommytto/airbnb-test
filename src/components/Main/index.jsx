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
                <div className="main__card-grid">
                    <CardGrid />
                </div>
            </main>
        </div>
    );
};

export default Main;
