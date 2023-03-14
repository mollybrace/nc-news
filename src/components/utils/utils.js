import axios from "axios";

const ncNews = axios.create({ baseURL: "https://backend-project-1.onrender.com/"});

export const fetchArticles = () =>{
    return ncNews
    .get("api/articles")
    .then((articlesReceived) =>{
        console.log(articlesReceived,"AXIOS")
        return articlesReceived.data.articles
        })
}
