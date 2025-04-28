import { useEffect, useState } from "react";

import { PostProps } from "../types/types";
import PostCard from "./PostCard"


const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!res.ok) {
        throw new Error ("failed to fetch data");
    }
    return res.json();
}

const PostList = async () => {
    const [post, setPost] = useState([])

    const data: PostProps[] = await getData();

    useEffect(() => {
      
    
      return () => {
      
      }
    }, [])
    

    return (
        <div className="postlist">
            <h3>postlist</h3>
          {data.map((post) => (
            <PostCard key={post.id} {... post } />
          ))}
        </div>
      )
}

export default PostList;