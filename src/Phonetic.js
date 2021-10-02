import React from "react";

export default function Phonetics(props) {
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer"> Listen Here</a>
            <br />
            <p>/{props.phonetic.text}/</p>
        </div>
    )
}