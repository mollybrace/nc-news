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

export const patchArticleVotes = (article_id, inc_votes) => {
  return ncNews.patch(`/api/articles/${article_id}`, inc_votes).then((patchReceived) => {
    return patchReceived
  })
}

export const postComment = (article_id, commentObject) => {
  return ncNews.post(`/api/articles/${article_id}/comments`, commentObject).then((commentPosted) => {
    console.log(commentPosted.data.comment, "commentpooooooost")
    return commentPosted.data.comment
  })
}