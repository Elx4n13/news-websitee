import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import "./styles/MainNews.scss";
const MainNews = ({ mainNews }) => {
  return (
    <div className="mainCard">
      <div className="left">
        <div className="mainCardImg">
          <img src={mainNews[0].imageUrl} alt="News Img" />
        </div>
        <div className="footerLeft">
          <p className="date">
            <span className="dateIcon">
              <BiTimeFive />
            </span>
            {mainNews[0].date}
          </p>
          <p className="author">
            <span className="authorIcon">
              <FaRegUser />
            </span>
            {mainNews[0].author}
          </p>
        </div>
      </div>
      <div className="right">
        <div className="titleMainCard">
          <p>{mainNews[0].title} </p>
        </div>
        <hr />
        <div className="infoMainCard">
          <p>{mainNews[0].content}</p>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
