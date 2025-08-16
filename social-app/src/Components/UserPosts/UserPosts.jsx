import React, {useContext, useEffect, useState} from 'react';
import {PostContext} from "../../Contexts/PostContext.jsx";
import PostCard from "../PostCard/PostCard.jsx";
import Loader from "../Loader/Loader.jsx";
import AddPost from "../AddPost/AddPost.jsx";

export default function UserPosts() {
    let {getUserData, getUserPosts} = useContext(PostContext);
    const [userPosts, setUserPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getUserId() {
        let response = await getUserData();
        // console.log(response._id);
        let userPosts = await getUserPosts(response._id);
        setUserPosts(userPosts);
        setIsLoading(false);
        console.log(userPosts);
    }

    useEffect(() => {
        getUserId();
    }, []);
    return (
        <div className={"container mx-auto"}>
            {isLoading ? <Loader/> : <>
                <AddPost callback={getUserId}/>
                <div className="flex justify-center items-center">
                    <div className="w-full">
                        {userPosts.map((post) => <PostCard callback={getUserId} key={post.id} post={post}></PostCard>)}
                    </div>
                </div>
            </>
            }
        </div>
    );
}
