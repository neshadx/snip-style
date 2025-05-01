import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // all the routes
    const routes = ["/", "/box-shadow", "/buttons"];
    // current Route name
    const currentRoute = window.location.pathname;

    useEffect(() => {
        /* 
       
        * This useEffect just fetch all the list and loop through it just to check if which route is active and apply the class according to it.

        */

        const navList = document.querySelectorAll(".list");
        for (let i = 0; i < routes.length; i++) {
            if (currentRoute === routes[i]) {
                navList[i].classList.add("active-link");
            }
        }
    }, [currentRoute]);

    return (
        <nav className="navbar">
            <ul>
                <li className="list">
                    <Link to="/">SnipStyle</Link>
                </li>
                <li className="list">
                    <Link to="/box-shadow">ShadowKit</Link>
                </li>
                <li className="list">
                    <Link to="/buttons">BtnSnips</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
