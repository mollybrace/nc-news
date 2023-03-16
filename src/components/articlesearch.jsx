import { useEffect, useState } from "react";
import select from "react-select"
import { useSearchParams, useParams } from "react-router-dom";

const ArticleSearch = () => {
    
    const [topicSearchBy, setTopicSearchBy] = useState()
    const [searchParams, setSearchParams] = useSearchParams();
    

    useEffect (() => {
        setSearchParams(`topic=${topicSearchBy}`)
        const newSearchParams = new URLSearchParams(useSearchParams)

    },[topicSearchBy, searchParams])

    return (

        <section>
            <label htmlFor="searchBy">Searh By Topic:</label>
                <select
                placeholder="select topic"
                value={topicSearchBy}
                onChange={(event) =>{setTopicSearchBy(event.target.value)}}
                >
                <option value="football">football</option>
                <option value="coding">coding</option>
                <option value="cooking">cooking</option>
                </select>
        </section>
    )
}

export default ArticleSearch;