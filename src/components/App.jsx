import React, { useState } from 'react';
import MainThread from './MainThread.jsx';
import '../styling/sitewide.scss';

const App = () => {

    return (
        <div id='app-body'>
            <h1 id='page-title'>Hello Cloudstore!</h1>
            <MainThread />
        </div>
    )
}

export default App;