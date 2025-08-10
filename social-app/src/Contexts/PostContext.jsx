import React, {createContext} from "react";
import axios from "axios";

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
            console.log(data);
            return data.posts;
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <PostContext.Provider value={{getAllPosts}}>
            {children}
        </PostContext.Provider>
    );
}
