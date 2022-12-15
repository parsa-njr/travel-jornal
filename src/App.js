import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import data from "./data";

export default function App () {


    const myCards= data.map(item => {
        return(
            <Cards
            key={item.id}
            img={item.img}
            country={item.country}
            name={item.name}
            date={item.date}
            note={item.note}
            />
        )
    })
    return (
        <div className="main">
            <Header />
           {myCards}
        </div>
    )
}