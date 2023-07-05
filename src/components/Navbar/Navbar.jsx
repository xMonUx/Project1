import React, { useState } from "react";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSignInAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const navbarlistItems = [
  { id: "0", text: "Products", link: "#products" },
  { id: "1", text: "Solutions", link: "#solutions" },
  { id: "2", text: "Pricing", link: "#pricing" },
  { id: "3", text: "Learn", link: "#learn" },
  { id: "4", text: "Contact", link: "#contact" },
];

function NavbarListItems({ text, link, isActive, onClick }) {
  return (
    <li className={`navbar__item ${isActive ? "active" : ""}`}>
      <a href={link} onClick={onClick}>
        {text}
      </a>
    </li>
  );
}

const navbarButtons = [
  { id: "0", text: "", className: "search", icon: faSearch },
  { id: "1", text: "Log In", className: "login" },
  { id: "2", text: "Start My Free Trial", className: "freetrial" },
];

function NavbarButtons({ text, className, icon }) {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  if (className === "search") {
    return (
      <li className="navbar__button">
        <span className={className} onClick={toggleInputVisibility}>
          {icon && <FontAwesomeIcon icon={icon} className="navbar__icon" />}
          <input
            type="text"
            placeholder="Search"
            className={`search__input ${isInputVisible ? "visible" : ""}`}
          />
        </span>
      </li>
    );
  }

  return (
    <li className="navbar__button">
      <span className={className}>
        {icon && <FontAwesomeIcon icon={icon} className="navbar__icon" />}
        {text}
      </span>
    </li>
  );
}

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const onItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <header>
      <div className="navbar__logo">C Solutions</div>
      <nav className="navbar__wrapper">
        <ul className="navbar__items--wrapper">
          {navbarlistItems.map((item) => (
            <NavbarListItems
              key={item.id}
              text={item.text}
              link={item.link}
              isActive={activeItem === item.id}
              onClick={() => onItemClick(item.id)}
            />
          ))}
        </ul>
        <ul className="navbar__buttons--wrapper">
          {navbarButtons.map((item) => (
            <NavbarButtons
              key={item.id}
              text={item.text}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}


export default Navbar;
