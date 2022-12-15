import React from "react";

import locationLogo from "./images/icons8-location-48.png"

export default function Cards(props) {
    return (
        <section className="container">
            <div className="card">
                <img className="card-img" src={props.img}  alt="" />

                <div className="card-discription">
                    <span className="card-location">
                        <img className="location-logo" src={locationLogo} alt=""/>
                        <p className="card-country">{props.country}</p>
                    </span>
                    <h3 className="card-name">{props.name}</h3>
                    <p className="card-date">{props.date}</p>
                    <p className="card-p">{props.note}</p>
                </div>
            </div>
            
           
        </section>
    )
}
 
// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg


