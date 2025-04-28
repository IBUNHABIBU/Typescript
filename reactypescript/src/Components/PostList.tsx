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

    const data: PostProps[] = await getData();

    return (
        <div className="postlist">
          {data.map((post) => (
            <PostCard key={post.id} {... post } />
          ))}
        </div>
      )
}

export default PostList