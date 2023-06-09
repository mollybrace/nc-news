import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ArticleSearch = () => {
    
    const [topicSearchBy, setTopicSearchBy] = useState("*")
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("DESC");
    

     
    useEffect (() => {
        setSearchParams(`?topic=${topicSearchBy}&sort_by=${sortBy}&order=${orderBy}`)
        console.log(searchParams)
        const newSearchParams = new URLSearchParams(useSearchParams)
        console.log(newSearchParams)
    },[topicSearchBy, sortBy, orderBy, searchParams, setSearchParams])

    return (

        <section className="search-function">
            <label htmlFor="searchBy">Searh By Topic:</label>
                <br></br>
                <select
                className="search-option"
                placeholder="select topic"
                value={topicSearchBy}
                onChange={(event) =>{setTopicSearchBy(event.target.value)}}
                >
                <option value="football">football</option>
                <option value="coding">coding</option>
                <option value="cooking">cooking</option>
                </select>
            <br></br>
            <label htmlFor="SortBy">Sort By:</label>
            <br></br>
            <select
            className="search-option"
            placeholder="select sort by"
            value={sortBy}
            onChange={(event) =>{setSortBy(event.target.value)}}
            >
                <option value="created_at">Created at</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="comment_count">Comment count</option>
                <option value="votes">Votes</option>
            </select>
            <br></br>
            <label htmlFor="orderBy">Order By:</label>
            <br></br>
            <select
            className="search-option"
            placeholder="Order"
            value={orderBy}
            onChange={(event) =>{setOrderBy(event.target.value)}}
            >
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
            </select>
        </section>
    )
}

export default ArticleSearch;
