import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/utils";

const ArticleList = ()=> {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [articles, setArticles]= useState([])

    useEffect(() => {
        fetchArticles().then((articlesReceived) => {
            setIsLoading(true);
            setIsError(false);
            setArticles(articlesReceived)
            setIsLoading(false)
        })
    })

    if (isLoading) return <p>Loading...</p>
    return (
        <section>
        <h2>Top Stories</h2>
        <ul className ="article-list">
        {
            articles.map((article) => {
                return (
                    <li key={article.article_id} className="article-element">
                        <h3>{article.title}</h3>
                        <img width="500px" src={article.article_img_url} alt="Article image"></img>
                    </li>
                )
            })
        }
       
     </ul>
        </section>
    )
}

export default ArticleList;