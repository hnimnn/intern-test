import React, { useState } from "react";
import './Menu.css'

const Menu = () => {
const [activeButton, setActiveButton] = useState("Home");

const options = [
  { name: "Home" },
  { name: "Services" },
  { name: "News" },
  { name: "Blog" },
  { name: "Contact" },
];
  return (
    <nav class="menu-bar">
      {options.map((option, index) => (
      <div 
      key={index} 
      className={activeButton === option.name ? "option active" : "option"}
      onClick={()=>{
        setActiveButton(option.name);
      }}
      >
        {option.name}
      </div>
      ))}
  </nav>
  );
};

export default Menu;
