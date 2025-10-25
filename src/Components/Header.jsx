import logo from "./../assets/logo/logo.png";
import { useState, useEffect } from "react";
import "./Components.css";
export default function Header({ setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const handlescroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", handlescroll);

  return (
    <>
      <div className={`mainheader ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#About" onClick={() => setPage("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#Menu" onClick={() => setPage("menu")}>
                Menu
              </a>
            </li>
            <li>
              <a href="#Blogs" onClick={() => setPage("blogs")}>
                Blogs
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={() => setPage("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
