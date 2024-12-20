import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { fetchArticles } from "../utils/utils";
import ArticleSearch from "./articlesearch";

const ArticleList = ()=> {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [articles, setArticles]= useState([])
    
    const [searchParams] = useSearchParams();
    const topicQuery = searchParams.get('topic')
    const sort_by = searchParams.get("sort_by")
    const order = searchParams.get("order")

    console.log(searchParams)
    
    
    useEffect(() => {
        fetchArticles(topicQuery, sort_by, order).then((articlesReceived) => {
            setIsLoading(true);
            setIsError(false);
            setArticles(articlesReceived)
            setIsLoading(false)
        }) 
    }, [searchParams, topicQuery, sort_by, order ])



    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>ERROR!</p>

    return (
        <section>
            <ArticleSearch />
        <h2 className="article-heading">Top Stories</h2>
        <ul className ="article-list">
        {
            articles.map((article) => {
                return (
                    <li key={article.article_id} className="article-element">
                        <h3 className="article-title">{article.title}</h3>
                        <Link to={`/articles/${article.article_id}`}>
                        <img width="500px" src={article.article_img_url} alt="Article preview"></img>
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