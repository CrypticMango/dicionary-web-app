import React from "react";
import "./Phonetic.css"

export default function Phonetics(props) {
    return (
        <div className="Phonetic">
            <p>/{props.phonetic.text}/</p>
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer"> <strong>Listen Here 🔊</strong></a>
        </div>
    )
}