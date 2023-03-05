import React, { useState } from 'react';
import CommentItem from './CommentItem.jsx';
import InputBox from './InputBox.jsx';

import '../styling/posts.scss';

const commentsArr = [
    {
        id: 1,
        message: 'This is comment 1',
        parent: 0,
        nestedArr: []
    },
    {
        id: 2,
        message: 'This is comment 2',
        parent: 0,
        nestedArr: []
    },
    {
        id: 3,
        message: 'This is comment 3',
        parent: 0,
        nestedArr: []
    }
];

const MainThread = () => {

    const [currComments, setCurrComments] = useState(commentsArr);

    const addComment = (newComment) => {
        setCurrComments((prev) => [newComment, ...prev]);
        console.log(newComment.parent)
    };

    // const deleteComment = (userId) => {
    //     console.log('delete')
    //     setCurrComments(prevComments => {
    //         return prevComments.filter(comment => comment.id !== userId)
    //     })
    // };

    return (
        <div>
            <div id='new-post-body'>
                <InputBox addComment={addComment} parent={0} />
            </div>
            <div id='comments'>
                {currComments.map((comment) => {
                    if(comment.parent === 0) return <CommentItem key={comment.id} comment={comment} currComments={currComments} setCurrComments={setCurrComments} />
                })}
            </div>
        </div>
    )
};

export default MainThread;