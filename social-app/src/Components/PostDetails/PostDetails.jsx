import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PostContext} from "../../Contexts/PostContext.jsx";
import PostCard from "../PostCard/PostCard.jsx";
import Loader from "../Loader/Loader.jsx";

export default function PostDetails() {

    let {id} = useParams();
    let {getSinglePost} = useContext(PostContext);
    const [singlePost, setSinglePost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    console.log(id);

    async function getPostDetails(id) {
        let response = await getSinglePost(id);
        console.log(response);
        setSinglePost(response);
        setIsLoading(false);
    }

    useEffect(() => {
        getPostDetails(id);
    }, []);
    return (
        <>
            {
                isLoading ? <Loader/> :
                    <div className={`container`}>
                        <div className="flex">
                            <PostCard post={singlePost}/>
                        </div>
                    </div>
            }
        </>
    );
}
