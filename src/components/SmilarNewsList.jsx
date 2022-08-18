import React from "react";
import SmilarNews from "./SmilarNews";
import "./styles/SmilarNewsList.scss";
const SmilarNewsList = ({ smilarNews,showSmilar }) => {
  return (
    <div className="smilarNewsContainer">
      <h1>Similar news</h1>
      <div className="smilarCards">
        {smilarNews.slice(0,3).map((item) => (
          <SmilarNews key={item.id} item={item} showSmilar={showSmilar}/>
        ))}
      </div>
    </div>
  );
};

export default SmilarNewsList;
