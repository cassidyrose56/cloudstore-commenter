import React from 'react';
import '../styling/posts.scss'

const InitialPost = () => {

    const name = 'name';
    const content = 'content';

    return (
        <div id='i-post-body'>
            <h1 id='poster-name'>{name}</h1>
            <p id='post-content'>{content}</p>
        </div>
    )
}

export default InitialPost;