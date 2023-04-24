import { useState } from "react"
import { postComment } from "../utils/utils";

const AddComment = ({article_id, setComments}) => {

    const [body, setCommentBody] = useState("")
    const [username, setUsername] = useState("")
    const [newComment, setNewComment] = useState("")
    const [submit, setSubmit] = useState("Submit")
    const [error, setError] = useState(false)
    


    const handleClick = (event) => {
        event.preventDefault()
        if (!body) {setError(true)}
        const commentObject = {body, username}
        setNewComment(commentObject)
        setCommentBody("")
        setUsername("")
        setSubmit("Submitted!")
        postComment(article_id, commentObject).then((commentPosted) => {
            setComments((currComments) => {
                setError(false)
                return [commentPosted[0], ...currComments]
            })
        }).catch((err) => {
            setError(true);
            return <p>ERROR!</p>
            });
    }


    return (
        <section>

        <form>
            <p> Add comment: </p>
            <label htmlFor="body">Comment:</label>
            <textarea 
            type="text"
            placeholder="comment here..."
            value={body}
            onChange={(event) => {setCommentBody(event.target.value)}}
            >
            </textarea>
            <br></br>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            placeholder="username here..."
            value={username}
            onChange={(event) => {setUsername(event.target.value)}}>
            </input>
            <br></br>
            <button class="comment-button" type="submit" onClick={handleClick}>Submit</button>
            {error && <p> ERROR: Comment not submitted</p>}
            {newComment && !error && <p>{submit}</p>}
        </form>
            </section>
    )
}

export default AddComment;