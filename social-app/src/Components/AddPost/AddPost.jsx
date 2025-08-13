import React, {useContext} from 'react';
import {PostContext} from "../../Contexts/PostContext.jsx";

export default function AddPost({callback}) {
    let {addPosts} = useContext(PostContext);
    async function handleAddPost(e) {
        e.preventDefault();

        let formData = new FormData();
        let body = e.target.body.value;
        let image = e.target.image.files[0];
        formData.append("body", body);
        formData.append("image", image);
        let response = await addPosts(formData);
        console.log(response);
        callback();
    }
    return (
        <div className={`w-1/2 mx-auto`}>
            <h2 className={`text-blue-800 text-3xl my-5 text-center`}>Add Post</h2>
            <form onSubmit={(e) => {handleAddPost(e);}}>
                <input
                    type="text"
                    name="body"
                    placeholder="Write your post here..."
                    className={`input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800`}
                />
                <input
                    type="file"
                    name="image"
                    className={`input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800`}
                    placeholder="Upload your image..."
                />
                <button
                    type="submit"
                    className={`px-3 py-2 rounded-xl bg-blue-800 text-white my-3 text-center btn hover:bg-blue-700`}
                >
                    Post
                </button>
            </form>
        </div>
    );
}
