import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import {
    MenuHeader,
} from '../components';

import {
    HomePage,
} from '../pages';

const routing = (
    <React.StrictMode>
        <Router>
            <MenuHeader />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Router>
    </React.StrictMode>
)

export default routing;
