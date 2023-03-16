import { useState } from "react"
import { postComment } from "../utils/utils";

const AddComment = ({article_id, setComments}) => {

    const [body, setCommentBody] = useState("")
    const [username, setUsername] = useState("")
    const [newComment, setNewComment] = useState("")
    


    const handleClick = (event) => {
        event.preventDefault()
        const commentObject = {body, username}
        postComment(article_id, commentObject).then((commentPosted) => {
            console.log(commentPosted[0].comment_id, "new comment")
            setComments((currComments) => {
                return [commentPosted[0], ...currComments]
            })
        })
    }
    return (
        <section>

        <form>
            <p> Add comment: </p>
            <label htmlFor="body">Comment:</label>
            <input 
            type="text"
            placeholder="comment here..."
            value={body}
            onChange={(event) => {setCommentBody(event.target.value)}}
            >
            </input>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            placeholder="username here..."
            value={username}
            onChange={(event) => {setUsername(event.target.value)}}>
            </input>
            <button type="submit" onClick={handleClick}>Submit</button>
        </form>
            </section>
    )
}

export default AddComment;