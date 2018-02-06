import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component
// Component should create HTML

// Take the components HTML and put it on the page (in the DOM)

const App = () => 
{
    return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container')); 