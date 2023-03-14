import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://backend-project-1.onrender.com/",
});

export const fetchArticles = () => {
  return ncNews.get("api/articles").then((articlesReceived) => {
    return articlesReceived.data.articles;
  });
};

export const fetchArticle = (article_id) => {
  return ncNews.get(`/api/articles/${article_id}`).then((articleReceived) => {
    return articleReceived.data.article
  })
}
export const fetchComments = (article_id) => {
return ncNews.get(`/api/articles/${article_id}/comments`).then((commentsReceived) => {
  return commentsReceived.data.comments
})
}

export const patchArticleVotes = (article_id) => {
  return ncNews.patch(`/api/articles/${article_id}`, {inc_votes: 1}).then((patchReceived) => {
    console.log(patchReceived)
  })
}