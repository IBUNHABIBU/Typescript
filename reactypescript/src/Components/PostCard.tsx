import Child from "../children/Child";
import Parent from "../children/Parent";
import { PostProps } from "../types/types"

const PostCard = ({title, body}: PostProps ) => {
  return (
    <div className="postcard">
        <h1>{ title} </h1>
        <p>{ body } </p>

        <Parent>
          <Child />
        </Parent>
    </div>
  )
}

export default PostCard;