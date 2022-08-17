import React from 'react'
import SmilarNews from './SmilarNews'
import './styles/SmilarNewsList.scss'
const SmilarNewsList = ({news}) => {
  return (
    <div className='smilarNewsContainer'>
      <h1>Similar news</h1>
      <div className="smilarCards">

        {news.slice(1).map((item)=>(
            <SmilarNews key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default SmilarNewsList