import React from 'react'
import SmilarNewsList from "./SmilarNewsList";
import MainNews from "./MainNews";

const Smilar = ({mainNews,smilarNews,showSmilar}) => {
  return (
    <>
    <MainNews mainNews={mainNews} />
    <SmilarNewsList smilarNews={smilarNews} showSmilar={showSmilar} />
    </>
  )
}

export default Smilar