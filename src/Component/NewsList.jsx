import React from 'react';
import NewsCard from './NewsCard';

function NewsList({apiData}) {
  
  
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
       {apiData.map((ele)=>{
        return(
          <div key={ele.publishedAt} >
            <NewsCard ele={ele} />  
          </div>
        )
       })} 
    </div>
  )
}

export default NewsList;