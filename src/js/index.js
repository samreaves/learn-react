import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../css/styles.css';

ReactDOM.render(<App />, document.getElementById('app'));

if (typeof window !== 'undefined') {
    window.React = React;
}