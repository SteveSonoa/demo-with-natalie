import React from 'react';
import Counter from '../Counter';

export const Home = () => (
    <div className="home-container">
        <h1>Home</h1>
        This is my home page.
        <h1>THIS COUNTER IS INSIDE HOME:</h1>
        <Counter name="Natalie" adj="boring" />
    </div>
);

export default Home;
