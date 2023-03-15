import { useState } from "react"
import { postComment } from "../utils/utils";

const AddComment = ({article_id}) => {

    const [body, setCommentBody] = useState("")
    const [username, setUsername] = useState("")
    


    const handleClick = (event) => {
        event.preventDefault()
        const commentObject = {body, username}
        console.log(commentObject)
        postComment(article_id, commentObject).then((commentPosted) => {
            console.log(commentObject)
        })
    }
    return (
        <form>
            <p> Add comment: </p>
            <input 
            type="text"
            placeholder="comment here..."
            value={body}
            onChange={(event) => {setCommentBody(event.target.value)}}
            >
            </input>
            <input
            type="text"
            placeholder="username here..."
            value={username}
            onChange={(event) => {setUsername(event.target.value)}}>
            </input>
            <button type="submit" onClick={handleClick}>Submit</button>
            
           
        </form>
    )
}

export default AddComment;