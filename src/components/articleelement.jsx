import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle } from "../utils/utils"
import Comments from "./comments"

const ArticleElement =() => {

    const [article, setArticle] = useState([])

const {article_id} = useParams()

useEffect(() => {
    fetchArticle(article_id).then((articleReceived) => {
        setArticle(articleReceived)
    })
})

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