import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { fetchArticles } from "../utils/utils";
import ArticleSearch from "./articlesearch";

const ArticleList = ()=> {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles]= useState([])
    
    const topicQuery = searchParams.get('topic')
    
    useEffect(() => {
        const newSearchParams = new URLSearchParams(useSearchParams)
        console.log(topicQuery)
        fetchArticles(topicQuery).then((articlesReceived) => {
            setIsLoading(true);
            setIsError(false);
            setArticles(articlesReceived)
            setIsLoading(false)
        }) 
    }, [searchParams])

    if (isLoading) return <p>Loading...</p>

    return (
        <section>
            <ArticleSearch />
        <h2>Top Stories</h2>
        <ul className ="article-list">
        {
            articles.map((article) => {
                return (
                    <li key={article.article_id} className="article-element">
                        <h3>{article.title}</h3>
                        <Link to={`/articles/${article.article_id}`}>
                        <img width="500px" src={article.article_img_url} alt="Article image"></img>
                        </Link>
                    </li>
                )
            })
        }
       
     </ul>
        </section>
    )
}

export default ArticleList;