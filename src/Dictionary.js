import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] =useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        console.log(response.data[0].meanings[0].definitions[0].definition)
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }

   

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className = "Dictionary"> <form onSubmit={search}>
            <input type="search" placeholder="      Search for a word.." onChange={handleKeywordChange}/>
            <input type="submit" value=" 🔍 "/>
        </form>
        <Results results={results}/>
        </div>
)
}