import React from 'react';

function NewsCard({ele}) {

  const {title,description,url,urlToImage} = ele;
  return (
      <div className='p-2 my-9 w-full min-h-full mx-auto border-2 border-black text-start'>
        <a href={url}>
          <h1 className='text-xl my-5 font-bold'>
          {title}
          </h1>
          <div className='w-full max-h-60 mx-auto block '>
            <img src={urlToImage} alt="other" className='min-w-full max-h-56'/>
          </div>
        </a>
          <p className='my-5 text-md'>{description}</p>
      </div>
  )
}

export default NewsCard;