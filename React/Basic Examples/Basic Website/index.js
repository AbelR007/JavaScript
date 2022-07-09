import React from "react"
import ReactDOM from "react-dom"

const navbar = (
    <nav>
        <h1>JReX</h1>
        <ul>
            <li>Pricing</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)