import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = "AIzaSyAaKgvqL_uNRlt-9h5y5pV59OlC0lAAcLQ"

// Create a new component
// Component should create HTML

// Take the components HTML and put it on the page (in the DOM)

const App = () => 
{
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container')); 