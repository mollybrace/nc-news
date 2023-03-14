import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle } from "../utils/utils"
import Comments from "./comments"
import { patchArticleVotes } from "../utils/utils"

const ArticleElement =() => {

    const [article, setArticle] = useState([])
    const [votes, setVotes] = useState()
    const [click, setClick] = useState(false)

const {article_id} = useParams()

useEffect(() => {
    fetchArticle(article_id).then((articleReceived) => {
        setArticle(articleReceived)
        setVotes(articleReceived[0].votes)
    })
}, [article_id])

const handleClick = () =>{
    setVotes(votes + 1)
    patchArticleVotes(article_id)
}

return (
    <section>
        <h2> this is the element </h2>
        <ul className="article-info">
            {
                article.map((info) => {
                    return (
                        <li key={article.article_id}>
                            <h3>{info.title}</h3>
                            <img src={info.article_img_url} alt="Article image"></img>
                            <p>{info.body}</p>
                            <p>Votes: {votes}</p>
                            <button onClick={handleClick}>Vote</button>
                            <p>{info.author}</p>
                            <p>{info.created_at}</p>
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