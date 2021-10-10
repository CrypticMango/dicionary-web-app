import React from "react";
import "./Phonetic.css"

export default function Phonetics(props) {
    return (
        <div className="Phonetic">
            <br />
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer"> Listen Here 🔊</a>
            <br />
            <br />
            <p>/{props.phonetic.text}/</p>
        </div>
    )
}