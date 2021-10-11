import React from "react";
import './navbar.css';
import Button from "../button/button";
import { MagnifyingGlass } from "phosphor-react";


const NavBar = () => {

    return (
        <nav>
            <div className="nav__left">
                <p className="logo">SendFREIGHT</p>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <span className="magnify">
                        <MagnifyingGlass color="#eee" size={16} weight="bold" />
                    </span>
                </div>
            </div>
            <div className="nav__right">
                <Button value="Request Quote" color="#0548A1" border="1.5px solid #efefef"/>
                <Button value="Book Shipment" color="#5CC684" />
            </div>
        </nav>
    )
}

export default NavBar;