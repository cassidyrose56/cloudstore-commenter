import React, { useState } from 'react';
import '../styling/posts.scss'

const InputBox = ({ addComment, parent }) => {

    const [newComment, setNewComment] = useState('')

    return (
        <div>
            <input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder='Add your comment here!'
            />
            <button className='btn' onClick={() => {
                addComment({
                    id: Math.floor(Math.random() * 100),
                    message: newComment,
                    parent: parent,
                    nestedArr: []
                });
                setNewComment('');
            }}>
                    Submit
            </button>
        </div>
        
    )
}

export default InputBox;