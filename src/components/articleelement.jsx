import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle } from "../utils/utils"
import Comments from "./comments"
import { patchArticleVotes } from "../utils/utils"

const ArticleElement =() => {

    const [article, setArticle] = useState([])
    const [votes, setVotes] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [upvoteText, setUpvoteText] = useState("Vote")
    const [downvoteText, setDownvoteText] = useState("Downvote")
    const [disableUpvote, setDisableUpvote] = useState(false)
    const [disableDownvote, setDisableDownvote] = useState(false)
    const [voteError, setVoteError] = useState(false)

const {article_id} = useParams()

useEffect(() => {
    fetchArticle(article_id).then((articleReceived) => {
        setIsLoading(true);
        setArticle(articleReceived)
        setVotes(articleReceived[0].votes)
        setIsLoading(false)
    })
}, [article_id])

const handleClick = () => {
        const inc_votes = {inc_votes: 1}
        setVotes(votes + 1)
        setUpvoteText("Voted!")
        setDisableUpvote(true)
        patchArticleVotes(article_id, inc_votes).catch(() => {
            setVotes(votes -1 )
            setVoteError(true)
        })
        }
    
const handleDownVote = () => {
    const inc_votes = {inc_votes: -1}
    setVotes(votes -1)
    setDisableDownvote(true)
    patchArticleVotes(article_id, inc_votes).then(() => {
        setDownvoteText("Voted!")
    })
}
  
if (isLoading) return <p>Loading...</p>

return (
    <section>
        <ul className="article-info">
            {
                article.map((info) => {
                    return (
                        <li key={article.article_id}>
                            <h3 className="article-header">{info.title}</h3>
                            <img className="article-image" src={info.article_img_url} alt="Article preview"></img>
                            <p>{info.body}</p>
                            <p> ♥ {votes}</p>
                            <button className="vote-button" disabled={disableUpvote} onClick={handleClick}>{upvoteText}</button>
                            <br></br>
                            <button className="vote-button" disabled={disableDownvote} onClick={handleDownVote}>{downvoteText}</button>
                            <p>{info.author}</p>
                            <p>{info.created_at}</p>
                            {voteError && <p> ERROR: Vote again...</p>}

                        </li>
                    
                        )
                })
            }
        </ul>
        <section>
        <Comments article_id={article_id}/>

        </section>
    </section>
    )
}

export default ArticleElement;