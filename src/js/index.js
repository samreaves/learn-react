import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('app'));

if (typeof window !== 'undefined') {
    window.React = React;
}