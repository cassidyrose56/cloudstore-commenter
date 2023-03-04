import React, { useState } from 'react';
import CommentItem from './CommentItem.jsx';
import InputBox from './InputBox.jsx';

import '../styling/posts.scss';

const commentsArr = [
    {
        id: 1,
        message: 'This is comment 1',
        nestedArr: []
    },
    {
        id: 2,
        message: 'This is comment 2',
        nestedArr: []
    },
    {
        id: 3,
        message: 'This is comment 3',
        nestedArr: []
    },
];

const MainThread = () => {

    const [currComments, setCurrComments] = useState(commentsArr);

    const addComment = (newComment) => {
        setCurrComments((prev) => [newComment, ...prev]);
    };

    const deleteComment = (comment) => {
        console.log('delete')
        
    };

    return (
        <div>
            <div id='new-post-body'>
                <InputBox addComment={addComment}/>
            </div>
            <div id='comments'>
                {currComments.map((comment) => {
                      return <CommentItem comment={comment} deleteComment={deleteComment} />
                })}
            </div>
        </div>
    )
};

export default MainThread;