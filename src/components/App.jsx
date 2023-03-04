import React, { useState } from 'react';
import Thread from './MainThread.jsx';
import '../styling/sitewide.scss';

const App = () => {

    return (
        <div id='app-body'>
            <h1 id='page-title'>Hello Cloudstore!</h1>
            <Thread />
        </div>
    )
}

export default App;