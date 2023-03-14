import { useState, useEffect } from "react";
import { fetchComments } from "../utils/utils";


const Comments = ({article_id}) => {

const [comments, setComments] = useState([])
    
useEffect (() => {
    fetchComments(article_id).then((commentsReceived) => {
        setComments(commentsReceived)
    })
})


return (
    <section>
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