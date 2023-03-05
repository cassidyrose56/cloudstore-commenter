import React, { useState } from 'react';
import InputBox from './InputBox.jsx';
import '../styling/posts.scss';

const CommentItem = ({ comment, currComments, setCurrComments }) => {

    const [replying, setReplying] = useState(false);
    const [nestedComments, setNestedComments] = useState(comment.nestedArr);
    const [visible, setVisible] = useState(true);

    const addComment = (newComment) => {
        setNestedComments((prev) => [newComment, ...prev]);
        setCurrComments((prev) => [newComment, ...prev]);
    };

    const deleteComment = (commentId, currComments) => {
        if (comment.parent === 0) {
            setCurrComments(currComments.filter(comment => {if (comment.id !== commentId && comment.parent !== commentId) return comment}));
            console.log(currComments)
        } else {
            setNestedComments([]);
            setCurrComments(currComments.filter(comment => {if (comment.id !== commentId && comment.parent !== commentId) return comment}));
            setVisible(false);
            console.log(currComments)  
        }
    };

    return (
        <div>
            {visible && 
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
                    <button className='btn' onClick={() => deleteComment(comment.id, currComments)}>
                        Delete
                    </button>
                </div>
                {replying && <InputBox addComment={addComment} parent={comment.id} />}
                <div>
                    {nestedComments.map((comment) => {
                        return <CommentItem key={comment.id} comment={comment} currComments={currComments} setCurrComments={setCurrComments}/>
                    })}
                </div>
            </div>}
        </div>
        
    )
}

export default CommentItem;