import { useEffect, useState } from "react";

import { PostProps } from "../types/types";
import PostCard from "./PostCard"


const PostList =  () => {
    const [posts, setPosts] = useState<PostProps[]>([])

    useEffect(() => {
      
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        
            if (!res.ok) {
                throw new Error ("failed to fetch data");
            }
            const data = await res.json();
            setPosts(data);
        }
        getData()
    }, [])
    

    return (
        <div className="postlist">
            <h3>p</h3>
          {posts.map((post) => (
            <PostCard key={post.id} {... post } />
          ))}
        </div>
      )
}

export default PostList;