import PostCard from "./PostCard"

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new ("failed to fetch data");
    }
    return res.json();
}

const PostList = async () => {

    const data = await getData();
  return (
    <div className="postlist">
        <PostCard title="Matangazo" desc="Wanasikitika kufiwa"/>
    </div>
  )
}

export default PostList