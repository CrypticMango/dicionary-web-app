import React from "react";
import "./Results.css";

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
        return (
            <div className="Results">hello from results</div>
        )
    } else {
        return null;
    }
}