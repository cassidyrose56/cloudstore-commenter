import React, { useState } from 'react';
import InputBox from './InputBox.jsx';
import '../styling/posts.scss';

const CommentItem = ({ comment, currComments, setCurrComments }) => {

    const [replying, setReplying] = useState(false);
    const [nestedComments, setNestedComments] = useState(comment.nestedArr);

    const addComment = (newComment) => {
        setNestedComments((prev) => [newComment, ...prev]);
        setCurrComments((prev) => [newComment, ...prev])
        console.log(newComment.parent)
    };

    const deleteComment = (commentId, prevComments) => {
        if (comment.parent === 0) {
            setCurrComments(prevComments.filter(comment => comment.id !== commentId));
        } else {
            const newCurrComments = [];
            newCurrComments.forEach((el) => {
                if (el.id !== userId && el.parent !== userId) {
                    newCurrComments.push(el);
                    console.log(newCurrComments)
                }
            })
            setCurrComments(newCurrComments);
        }
        
    };

    return (
        <div className='comment-item'>
            <h3 className='poster-name'>User {comment.id}</h3>
            <span className='post-content'>{comment.message}</span>
            <div id='button-section'>
                {!replying ? (
                    <button className='btn' onClick={() => {setReplying(true)}}>Reply</button> 
                )
                :
                (
                    <button className='btn' onClick={() => {setReplying(false)}}>Cancel</button>
                )}
                <button className='btn' onClick={() => {deleteComment(comment.id, currComments)}}>
                    Delete
                </button>
            </div>
            {replying && <InputBox addComment={addComment} parent={comment.id} />}
            <div>
                {nestedComments.map((comment) => {
                    return <CommentItem key={comment.id} comment={comment} />
                })}
            </div>
            
            
            
        </div>
    )
}

export default CommentItem;