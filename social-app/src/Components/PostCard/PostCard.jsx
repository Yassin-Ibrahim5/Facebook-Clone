import React, {useState} from "react";

export default function PostCard({post}) {
    const [showComments, setShowComments] = useState(false);

    return (<div className="card bg-base-100 shadow-md p-4 max-w-xl mx-auto my-6">
        <div className="flex items-center gap-3 mb-3">
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src={post.user.photo} alt="User"/>
                </div>
            </div>
            <div>
                <p className="font-bold">{post.user.name}</p>
                <p className="text-sm text-gray-400">2 hours ago</p>
            </div>
        </div>

        <p className="mb-3">
            {post.body}
        </p>

        <img src={post.image} className="rounded-lg mb-4" alt="Post"/>

        <div className="flex gap-3 text-sm text-gray-500">
            <button className="btn btn-ghost btn-sm">👍 Like</button>
            <button
                className="btn btn-ghost btn-sm"
                onClick={() => setShowComments(!showComments)}
            >
                💬 Comments
            </button>
            <button className="btn btn-ghost btn-sm">↪️ Share</button>
        </div>

        {/* Toggle Comments Section */}
        {showComments && (<div className="mt-4">
            {/* Existing Comments */}
            {post.comments.map((comment) => (
                <div key={comment.id}>
                    <div className="mb-2 flex justify-between gap-3 items-center">
                        <div className="">
                            <div className=" avatar">
                                <div className="w-8 h-8 rounded-full ">
                                    <img
                                        src={comment.commentCreator.photo}
                                        alt="Commenter"
                                    />
                                </div>
                            </div>
                            <p>{comment.commentCreator.name}</p>
                        </div>
                        <div className="chat-bubble w-full">{comment.content}</div>
                    </div>
                </div>))}
            {/* New Comment Input */}
            <form className="flex  gap-5 content-between items-center">
                <input
                    type="text"
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