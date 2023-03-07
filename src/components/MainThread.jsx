import React, { useState } from 'react';
import CommentItem from './CommentItem.jsx';
import InputBox from './InputBox.jsx';

import '../styling/posts.scss';


const MainThread = () => {
    const [currComments, setCurrComments] = useState(new Map());

    const addComment = (id, newComment) => {
        setCurrComments(map => new Map(map.set(id, newComment)));
    };

    const renderChildComponents = () => {
        const childComponents = [];
        currComments.forEach((value, key, currComments) => {
            if(value.parent === 0) {
                childComponents.push(<CommentItem id={key} key={key} userId={value.userId} comment={value.message} children={value.children} currComments={currComments} setCurrComments={setCurrComments} />);
            };
        });
        return childComponents;
    };


    return (
        <div>
            <div id='new-post-body'>
                <InputBox addComment={addComment} parent={0} />
            </div>
            <div id='comments'>
                {renderChildComponents()}
            </div>
        </div>
    )
};

export default MainThread;