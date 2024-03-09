import React, { useState } from 'react';
import '../styling/posts.scss'

const InputBox = ({ addComment, parent }) => {

    const [newComment, setNewComment] = useState('')

    const id = Math.floor(Math.random() * 100);
    const myMap = new Map();

    return (
        <div>
            <input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder='Add your comment here!'
            />
            <button className='btn' onClick={() => {
                addComment(id, {
                    userId: Math.floor(Math.random() * 100),
                    message: newComment,
                    parent: parent,
                    children: myMap
                });
                setNewComment('');
            }}>
                    Submit
            </button>
        </div>
        
    )
}

export default InputBox;