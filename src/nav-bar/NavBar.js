import React from 'react'
import "./navBar.css"
import Select from "react-select"
const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="heading">
                <h1>Intely Pos</h1>
            </div>
            <div className="nav-options">
                <button className="refresh">Refresh</button>
                <Select />
                <Select />
                <Select />
                <Select />
                <button className="quick-order">Quick Order</button>
            </div>
        </div>
    )
}

export default NavBar
