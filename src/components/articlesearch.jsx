import { useState } from "react";
import select from "react-select"

const ArticleSearch = () => {

    const optionList = [
        {value: "hello", Label: "hello"}
    ]


    const [topic, setTopic] = useState()
    return (

        <section>
            <h1>Searh for article:</h1>
                <select
                options={optionList}
                placeholder="select topic"
                value={topic}
                >Choose topic</select>
        </section>
    )
}

export default ArticleSearch;