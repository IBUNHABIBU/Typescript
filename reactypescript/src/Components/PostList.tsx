import PostCard from "./PostCard"

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error ("failed to fetch data");
    }
    return res.json();
}

const PostList = async () => {

    const data = await getData();

  return (
    <div className="postlist">
        {/* <PostCard title="Matangazo" desc="Wanasikitika kufiwa"/> */}

        {
            data.map((post: {id: number, title: string, body: string }) => {
                <PostCard key={post.id} {... post} />
            })
        }
    </div>
  )
}

export default PostList