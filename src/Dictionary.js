import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Photos from "./Photos";
import Results from "./Results";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] =useState(null);
let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(response);
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f917000010000013b936fa5ae7c454d8ac663d0fd3d0870";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className = "Dictionary"> 
        
            <form onSubmit={search}>
                <input type="search" placeholder="      Search for a word.." onChange={handleKeywordChange} className="search-field"/>
                <input type="submit" value="🔎" />
            </form>
        
        <Results results={results}/>
        <Photos photos={photos} />
        </div>
);
    }