import React, {useContext, useState} from "react";
import defaultUserImage from "../../assets/default-profile.png";
import {Link} from "react-router-dom";
import {PostContext} from "../../Contexts/PostContext.jsx";

export default function PostCard({post}) {
    const [showComments, setShowComments] = useState(false);
    const [commentsVisibility, setCommentsVisibility] = useState(1);
    const [commentContent, setCommentContent] = useState("");
    const [comments, setComments] = useState(post.comments);
    const {addComment, deletePost} = useContext(PostContext);

    if (!post) {
        return null;
    }

    async function handleAddComment(e) {
        e.preventDefault();

        let response = await addComment({content: commentContent, post: post._id})
        console.log(response);
        setCommentContent("");
        setComments([...comments, response]);
    }

    async function handleDeletePost(id) {
        let response = await deletePost(id);
        console.log(response);

    }

    return (<div className="card bg-base-100 shadow-md p-4 max-w-xl mx-auto my-6">
        <button onClick={() => {
            handleDeletePost(post._id);
        }} className={`text-blue-800 bg-slate-300 p-3 absolute top-0 right-0 cursor-pointer`}>X
        </button>
        <Link to={`/postDetails/${post._id}`}>
            <div className="flex items-center gap-3 mb-3">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={post.user.photo} alt="User"/>
                    </div>
                </div>
                <div>
                    <p className="font-bold">{post.user.name}</p>
                    <p className="text-sm text-gray-400">{post.createdAt}</p>
                </div>
            </div>

            <p className="mb-3">
                {post.body}
            </p>

            <img src={post.image} className="rounded-lg mb-4 w-full h-[400px]" alt="Post"/>
        </Link>

        <div className="flex gap-3 text-sm text-gray-500">
            <button className="btn btn-ghost btn-sm">👍 Like</button>
            <button
                className="btn btn-ghost btn-sm"
                onClick={() => setShowComments(!showComments)}
            >
                💬 Comments ({comments.length})
            </button>
            <button className="btn btn-ghost btn-sm">↪️ Share</button>
        </div>

        {/* Toggle Comments Section */}
        {showComments && (<div className="mt-4">
            {/* Existing Comments */}
            {comments.slice(0, commentsVisibility).map((comment) => (<div key={comment._id}>
                <div className="mb-2 flex justify-between gap-3 items-center">
                    <div className="">
                        <div className=" avatar">
                            <div className="w-8 h-8 rounded-full ">
                                <img
                                    src={comment.commentCreator.photo.includes("undefined") ? defaultUserImage : comment.commentCreator.photo}
                                    alt="Commenter"
                                />
                            </div>
                        </div>
                        <p>{comment.commentCreator.name}</p>
                    </div>
                    <div className="chat-bubble w-full">{comment.content}</div>
                </div>
            </div>))}
            {comments.length > commentsVisibility && <div className="text-center my-2">
                <button className={`btn btn-transparent`} onClick={() => {
                    setCommentsVisibility(commentsVisibility + 3);
                }}>Load More Comments
                </button>
            </div>}
            {/* New Comment Input */}
            <form onSubmit={(e) => {
                handleAddComment(e);
            }} className="flex  gap-5 content-between items-center">
                <input
                    type="text"
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    name="content"
                    placeholder="Write a comment..."
                    className="input input-bordered w-full"
                />
                <button className="px-3 py-2 bg-blue-400 text-white rounded-xl">
                    Add
                </button>
            </form>
        </div>)}
    </div>);
}