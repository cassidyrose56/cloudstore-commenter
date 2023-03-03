import React, { useState } from 'react';
import NewPost from './NewPost.jsx';
import Thread from './Thread.jsx';
import '../styling/sitewide.scss';

const App = () => {

    return (
        <div id='app-body'>
            <h1 id='page-title'>Hello Cloudstore!</h1>
            <Thread />
            <NewPost />
        </div>
    )
}

export default App;