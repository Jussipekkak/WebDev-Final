import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    // Body overflow, kun menu auki
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const menuItems = [
    { name: "Etusivu", to: "etusivu" },
    { name: "Esittely", to: "yrittaja" },
    { name: "Hinnasto", to: "hinnasto" },
    { name: "Kalenteri", to: "kalenteri" },
    { name: "Ota yhteyttä", to: "yhteys" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="container">
        <div className="logo">TMI Koti puhtaaksi</div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div id="main-menu" className={`menu ${menuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-100} // Tärkeä! Headerin korkeus
              spy={true}
              activeClass="active-link"
              className="menu-item"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
