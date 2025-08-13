import React, {useContext, useEffect, useState} from 'react';
import {PostContext} from "../../Contexts/PostContext.jsx";
import Loader from "../Loader/Loader.jsx";
import PostCard from "../PostCard/PostCard.jsx";
import AddPost from "../AddPost/AddPost.jsx";


function Home() {

    const [isLoading, setIsLoading] = useState(true);

    const [allPosts, setAllPosts] = useState([]);
    let {getAllPosts} = useContext(PostContext);

    async function getPosts() {
        let posts = await getAllPosts();
        setAllPosts(posts);
        setIsLoading(false);
    }

    useEffect(() => {
        getPosts();
        console.log(allPosts);
    }, []);


    return (
        <>
            {isLoading ? <Loader/> :
                <>
                    <AddPost/>
                    <div className="container mx-auto">
                        <div className="flex justify-center items-center">
                            <div className="w-full">
                                {
                                    allPosts.map((post) => <PostCard key={post.id} post={post}/>)
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Home;