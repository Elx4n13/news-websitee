import React, { useEffect, useState } from 'react'
import Categories from './Categories'
import {useSearchParams} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNews from './MainNews';
import Loading from './Loading';
import SmilarNewsList from './SmilarNewsList';
import './styles/NewsContainer.scss'
const Container = () => {
  const [news,setNews] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams()
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const categoryApi =searchParams.get('categories')
    const getApi = () => {
      fetch(`https://inshorts.deta.dev/news?category=${categoryApi ===null ?'all':categoryApi.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
          setNews(data.data.slice(0, 4));
          setLoading(false)
        })
        .catch((error) => console.log(error));
    };
    getApi();
  }, [searchParams]);
  const changeCategory = (text) => {
    setLoading(true)
    setSearchParams(text.toLowerCase());
    toast.success("Yeni Xeberler yuklenir");
  };
  return (
    <div className='newsContainer'>
      <div className="titleContainer">
        <h1>News</h1>
      </div>
      <Categories changeCategory={changeCategory} searchParams={searchParams}/>
      {loading? <Loading/> :<MainNews news={news}/> }
      {loading? null :<SmilarNewsList news={news}/> }

      <ToastContainer />
    </div>
  )
}

export default Container