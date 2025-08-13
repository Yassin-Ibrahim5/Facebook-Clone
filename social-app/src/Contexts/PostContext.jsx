import React, {createContext} from "react";
import axios from "axios";
import toast from "react-hot-toast";

export let PostContext = createContext();

export default function PostContextProvider({children}) {

    const headers = {
        token: localStorage.getItem("userToken"),
    };

    async function getAllPosts() {
        try {
            let {data} = await axios.get('https://linked-posts.routemisr.com/posts?limit=50', {
                headers
            });
            console.log(data, "all posts");
            return data.posts;
        } catch (error) {
            console.log(error);
        }
    }

    async function getSinglePost(id) {
        try {
            let {data} = await axios.get(`https://linked-posts.routemisr.com/posts/${id}`, {
                headers
            });
            console.log(data, "single post");
            return data.post;
        } catch (error) {
            console.log(error);
        }
    }

    async function getUserData() {
        try {
            let {data} = await axios.get('https://linked-posts.routemisr.com/users/profile-data', {
                headers
            });
            console.log(data, "user data");
            return data.user;
        } catch (error) {
            console.log(error);
        }
    }

    async function getUserPosts(id) {
        try {
            let {data} = await axios.get(`https://linked-posts.routemisr.com/users/${id}/posts?limit=50`, {
                headers
            });
            console.log(data, "user posts");
            return data.posts;
        } catch (error) {
            console.log(error);
        }
    }

    async function addComment(body) {
        try {
            let {data} = await axios.post(`https://linked-posts.routemisr.com/comments`, body, {
                headers
            });
            console.log(data, "add comment");
            toast.success("Comment Added Successfully!");
            return data.comments;
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    async function addPosts(formData) {
        try {
            let {data} = await axios.post(`https://linked-posts.routemisr.com/posts`, formData, {
                headers
            });
            console.log(data, "add post");
            toast.success("Post Added Successfully!");
            // return data.comments;
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }


    return (<PostContext.Provider value={{getAllPosts, getSinglePost, getUserData, getUserPosts, addComment, addPosts}}>
        {children}
    </PostContext.Provider>);
}
