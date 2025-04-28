import PostCard from "./PostCard"

const getData = async () => {
    const res = fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        
    }
}

const PostList = () => {
  return (
    <div className="postlist">
        <PostCard title="Matangazo" desc="Wanasikitika kufiwa"/>
    </div>
  )
}

export default PostList