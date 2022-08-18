import React from "react";
import "./styles/NewsCard.scss";
import { BiTimeFive } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
const NewsCard = ({ item ,showSmilar}) => {
    const handleClick = () =>{
        showSmilar(item.id)
    }
  return (
    <div
    className="onlyCardDiv" onClick={handleClick}>
      <div className="top">
      <img src={item.imageUrl} alt="News Img" />
      <div className="title">
        <p>{item.title}</p>
      </div>
      <hr />
      <div className="info">
        <p>{item.content}</p>
      </div>
      </div>
      <div className="footer">
        <p className="time">
          <span className="timeIcon">
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

export default NewsCard;
