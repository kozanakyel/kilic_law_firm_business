
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Scrolltotop from './components/scrolltotop/Scrolltotop';

import React, { Suspense } from 'react';
import './i18n.js';

ReactDOM.render(
    <Router>
        <Suspense fallback="...loading">
        <Scrolltotop />
        <App />
        </Suspense>
        
    </Router>,
    document.getElementById("root")
);
