import { useState } from "react"

const AddComment = () => {

    const [userComment, setUserComment] = useState("")
    return (
        <form>
            <p> adding comment here: </p>
            <input 
            type="text"
            placeholder="comment here..."
            value={userComment}
            onChange={(event) => {setUserComment(event.target.value)}}
            >

            </input>
            
        </form>
    )
}

export default AddComment;