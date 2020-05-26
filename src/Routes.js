import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// SCREENS
import HomePage from './screens/HomePage';
import MyPdfViewer from './screens/MyPdfViewer';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/pdf" component={MyPdfViewer} />

            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;