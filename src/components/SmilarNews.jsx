import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import "./styles/SmilarNews.scss";
const SmilarNews = ({ item,showSmilar }) => {
  const handleClick = () =>{
    showSmilar(item.id)
  }
  return (
    <div className="smilarCard" onClick={handleClick}>
      <img src={item.imageUrl} alt="News Img" />
      <div className="infoSmilarCard">{item.title}</div>
      <div className="footerSmilar">
        <p className="date">
          <span className="dateIcon">
            <BiTimeFive />
          </span>
          {item.date}
        </p>
        <p className="author">
          <span className="authorIcon">
            <FaRegUser />
          </span>
          {item.author}
        </p>
      </div>
    </div>
  );
};

export default SmilarNews;
