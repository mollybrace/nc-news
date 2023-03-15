import { useState, useEffect } from "react";
import { fetchComments } from "../utils/utils";
import AddComment from "./addcomment";


const Comments = ({article_id}) => {

const [isLoading, setIsLoading] = useState(true)
const [comments, setComments] = useState([])
    
useEffect (() => {
    fetchComments(article_id).then((commentsReceived) => {
        setIsLoading(true)
        setComments(commentsReceived)
        setIsLoading(false)
    })
}, [article_id])

if (isLoading) return <p>Loading...</p>

return (
    <section>
        <AddComment article_id={article_id} />
        <h2>Comments</h2>
        <ul className="comments-list">
            {
                comments.map((comment) => {
                    return (
                        <li key={comment.comment_id}>
                            <h1>{comment.body}</h1>
                            <button>
                            <h1>{comment.votes}</h1>
                            </button> 

                        </li>
                    )
                })
            }
        </ul>

    </section>
    )
}

export default Comments;