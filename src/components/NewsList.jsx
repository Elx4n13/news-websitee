import React from "react";
import NewsCard from "./NewsCard";
import Smilar from "./Smilar";
import "./styles/NewsList.scss";
const NewsList = ({ news ,showSmilar,smilar,mainNews,smilarNews}) => {
  return (
    <>
    
    {smilar ? <Smilar news={news} mainNews={mainNews} smilarNews={smilarNews} showSmilar={showSmilar}/>:<div className="cardDiv">
      {news.map((item) => (
        <NewsCard key={item.id} item={item} showSmilar={showSmilar} />
      ))}
    </div>}
    </>
    
  );
};

export default NewsList;