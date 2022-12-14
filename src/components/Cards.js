import React from "react";
import japan from "./images/japan.jpg"
import locationLogo from "./images/icons8-location-48.png"

export default function Cards() {
    return (
        <section className="container">
            <div className="card">
                <img className="card-img" src={japan}  alt="" />

                <div className="card-discription">
                    <span className="card-location">
                        <img className="location-logo" src={locationLogo} alt=""/>
                        <p className="card-country">JAPAN</p>
                    </span>
                    <h3 className="card-name">Mount Fuji</h3>
                    <p className="card-date">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className="card-p">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
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


