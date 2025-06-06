import { PostProps } from "../types/types"

const PostCard = ({title, body}: PostProps ) => {
  return (
    <div className="postcard">
        <h1>{ title} </h1>
        <p>{ body } </p>

    </div>
  )
}

export default PostCard;