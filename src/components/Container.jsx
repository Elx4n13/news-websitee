import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
import "./styles/NewsContainer.scss";
import NewsList from "./NewsList";
const Container = () => {
  const [news, setNews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [smilar,setSmilar] = useState(false)
  const [mainNews,setMainNews] = useState([])
  const [smilarNews,setSmilarNews] = useState([])
  useEffect(()=>{
    window.onpopstate = ()=> {
      setSmilar(false)
    }
  })
  useEffect(() => {
    const categoryApi = searchParams.get("categories");
    setSmilar(false)
    const getApi = () => {
      fetch(
        `https://inshorts.deta.dev/news?category=${
          categoryApi === null ? "all" : categoryApi.toLowerCase()
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          setNews(data.data.slice(0, 6));
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    getApi();
  }, [searchParams]);
  const changeCategory = (text) => {
    setLoading(true);
    setSearchParams({categories: `${text.toLowerCase()}`});
    toast.success("Yeni Xeberler yuklenir");
  };
  const showSmilar =(id)=>{
    setSmilarNews(news.filter(item=>item.id!==id))
    setMainNews(news.filter(item=>item.id===id))
    setSmilar(true)
  }
  return (
    <div className="newsContainer">
      <div className="titleContainer">
        <h1>News</h1>
      </div>
      <Categories changeCategory={changeCategory} searchParams={searchParams} />
      {loading ? <Loading /> : <NewsList showSmilar={showSmilar} news={news} smilar={smilar} mainNews={mainNews} smilarNews={smilarNews}/>}
      <ToastContainer />
    </div>
  );
};

export default Container;
