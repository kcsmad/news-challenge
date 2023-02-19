import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { Auth0Provider } from "@auth0/auth0-react";

import {
    MenuHeader,
} from '../components';

import {
    HomePage,
    RegistrationPage,
} from '../pages';

import {
    MyArticlesPage,
    WriteArticlePage,
} from '../pages/article';

const routing = (
    <Auth0Provider
        domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
        clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <React.StrictMode>
            <Router>
                <MenuHeader />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/sign-up' element={<RegistrationPage />} />
                    <Route path='/my-articles' element={<MyArticlesPage />} />
                    <Route path='/write-article' element={<WriteArticlePage />} />
                </Routes>
            </Router>
        </React.StrictMode>
    </Auth0Provider>
)

export default routing;
