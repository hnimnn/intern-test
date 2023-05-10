import React, { useState } from "react";
import './Item.css'

const Item = ({title, content, image}) => {
  return (
   <div className="item">
    <div className="title-item">{title}</div>
    <div className="content-item">
    <img id='image-item' src={image}/>
    <div className="text-item">{content}</div>
    </div>
   </div>
  );
};

export default Item;
