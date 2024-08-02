import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <ul>
        <div className="nav-elements">
          <div className="nav-left-elements"></div>
          <div className="nav-right-elements">
            <li>Home</li>
            <li>Projects</li>
            <li>
              <a
                href="mailto: Sreyathomas5@gmail.com"
                style={{ "text-decoration": "none", color: "black" }}
              >
                Sreyathomas5@gmail.com
              </a>
            </li>
          </div>
        </div>
      </ul>
    </>
  );
};
export default Navbar;
