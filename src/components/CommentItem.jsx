import React, { useState } from 'react';
import InputBox from './InputBox.jsx';
import '../styling/posts.scss';

const CommentItem = ({ comment }) => {

    const [replying, setReplying] = useState(false);
    const [nestedComments, setNestedComments] = useState(comment.nestedArr);

    const addComment = (newComment) => {
        setNestedComments((prev) => [newComment, ...prev]);
        comment.nestedArr = nestedComments;
        console.log(comment.nestedArr)
    };

    const deleteComment = (comment) => {
        console.log('delete')
        
    };

    return (
        <div className='comment-item'>
            <h3 className='poster-name'>User {comment.id}</h3>
            <span className='post-content'>{comment.message}</span>
            {!replying ? (
               <button className='btn' onClick={() => {setReplying(true)}}>Reply</button> 
            )
            :
            (
                <div className='replying-layout'>
                    <button className='btn' onClick={() => {setReplying(false)}}>Cancel</button>
                </div>
            )}
            {replying && <InputBox addComment={addComment} />}
            <div>
                {nestedComments.map((comment) => {
                    return <CommentItem comment={comment} />
                })}
            </div>
            <button className='btn' onClick={deleteComment()}>
                Delete
            </button>
            
            
        </div>
    )
}

export default CommentItem;