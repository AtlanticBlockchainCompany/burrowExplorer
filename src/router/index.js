import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../components/Home';
import Accounts from '../components/Accounts';

export default () => {
    return (
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Route exact path='/' component={Home} />
            <Route path='/accounts' component={Accounts} />
        </div>
    );
};