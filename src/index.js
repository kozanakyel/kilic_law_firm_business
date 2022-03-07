import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Scrolltotop from './components/scrolltotop/Scrolltotop';

ReactDOM.render(
    <Router>
        <Scrolltotop />
        <App />
    </Router>,
    document.getElementById("root")
);
