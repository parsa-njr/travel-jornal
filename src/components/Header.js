import React from "react";
import earthlogo from "./images/earth64.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header-logo" src={earthlogo} />
            <h1 className="header-title">my travel jornal</h1>
        </header>
    )
}