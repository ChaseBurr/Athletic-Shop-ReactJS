import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";

export default () => {
   return (
      <nav className="navbar">
         <div className="nav-logo">Athletic Shop</div>
         <ul className="navbar-list container">
            {NavItems.map((item, i) => {
               return (
                  <li className={item.cName} key={i}>
                     <Link to={item.url}>{item.title}</Link>
                  </li>
               );
            })}
         </ul>
         <div className="shopping-cart">
            <Link to="/cart">
               <i className="fas fa-shopping-cart"></i>
               <figure className="items-in-cart">0</figure>
            </Link>
         </div>
      </nav>
   );
};
