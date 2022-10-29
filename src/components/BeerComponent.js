import React, { Component } from 'react';

function BeerComponent(props) {
    const {name, image_url, first_brewed, tagline, abv, description } = props
    return (
        <li style={{listStyle: "none", display: "flex", marginLeft: "20%", marginRight:"20%", padding: "10px"}}>
            <img style={{ height: "250px", paddingRight: "5px"}} src={image_url}></img>
            <div style={{ height: "250px", width: "100%" }}>
                <h3>{name} <span>({first_brewed})</span></h3>
                <h4 style={{ fontSize: "12pt", fontWeight: "lighter", fontStyle: "italic" }}>{tagline}</h4>
                <p style={{ fontSize: "14pt" }}><span>{abv}% ABV: </span>{description}</p>
            </div>
            <button onClick={() => {props.handleClick(props.index)}} style={{ height: "35px", alignSelf: "center", backgroundColor: "#f4cccc" }}>Like</button>
        </li>
    )
}

export default BeerComponent