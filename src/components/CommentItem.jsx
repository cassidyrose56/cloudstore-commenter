import React, { useState } from 'react';
import InputBox from './InputBox.jsx';
import '../styling/posts.scss';

const CommentItem = ({id, userId, comment, children, currComments, setCurrComments }) => {

    const [replying, setReplying] = useState(false);

    const addReply = (id, newComment) => {
        // Add the child's id to the children map of the parent
        children.set(id, userId);
        // Add the childs id and details to the overarching map
        setCurrComments(map => new Map(map.set(id, newComment)));
    };

    const deleteComment = (rootCommentId, commentId, currComments) => {
        let comment = currComments.get(commentId);
        // If the parent comment id equals the current comment id being deleted and the children array is empty, delete the parent and you're done
        // Also if its a child of something we should delete its child record from its parent
        if (rootCommentId === commentId && comment.children.size === 0) {
            let parentId = currComments.get(commentId).parent;
            // Remove child from map
            let newMap = new Map([...currComments].filter(([itemKey, value]) => itemKey !== rootCommentId));
            // If this isn't a root comment, remove the reference to the child from the parent
            if (comment.parent !== 0) {
                //Go to the parent and get its children list
                let parentsChildren = newMap.get(parentId).children;
                //Update the children list to no longer include the child
                parentsChildren = new Map([...parentsChildren].filter(([itemKey, value]) => itemKey !== commentId));
                let newParent = {
                    ...newMap.get(parentId),
                    children: parentsChildren
                };
                newMap.set(parentId, newParent);
            }
            return setCurrComments(newMap);
        }
        // If I'm done deleting my children, I can delete myself and go up to the next level
        if (comment.children.size === 0) {
            console.log("Moving to next level: ", comment.parent);
            let newMap = new Map([...currComments].filter(([itemKey, value]) => itemKey !== commentId));
            setCurrComments(newMap);
            return deleteComment(rootCommentId, comment.parent, currComments);
        };

        // Iterating through the comment's children and delete the child key from the comment, then run the delete function passing in the child's key
        comment.children.forEach((value, key) => {
            // console.log("Deleting child: ", key);
            comment.children.delete(key);
            deleteComment(rootCommentId, key, currComments);
        });
    };

    const renderChildComponents = () => {
        const childComponents = [];
        children.forEach((value, key) => {
            const comment = currComments.get(key);
            const parent = comment.parent;
            childComponents.push(<CommentItem id={key} key={key} parentsChildren={parent.children} userId={comment.userId} comment={comment.message} children={comment.children} currComments={currComments} setCurrComments={setCurrComments} />);
        });
        return childComponents;
    };

    return (
        <div>

                <div className='comment-item'>
                <h3 className='poster-name'>User {userId}</h3>
                <span className='post-content'>{comment}</span>
                <div id='button-section'>
                    {!replying ? (
                        <button className='btn' onClick={() => {setReplying(true)}}>Reply</button> 
                    )
                    :
                    (
                        <button className='btn' onClick={() => {setReplying(false)}}>Cancel</button>
                    )}
                    <button className='btn' onClick={() => deleteComment(id, id, currComments)}>
                        Delete
                    </button>
                </div>
                {replying && <InputBox addComment={addReply} parent={id} />}
                <div>
                    {renderChildComponents()}
                </div>
            </div>
        </div>
        
    )
}

export default CommentItem;