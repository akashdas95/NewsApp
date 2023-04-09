import React from 'react';

function Category({setCategory}) {

  
    const categories = ['Business','General','science','Health','Sports','Entertainment','Technology']

   return (
    <div className='w-full'>
        <ul className='w-full grid grid-cols-2 md:grid-cols-4 lg:flex place-content-center p-5 bg-slate-200 text-xl font-bold' >
          {
            categories.map((category,ind)=>{
                return(
                    <li className='px-5 mx-2 hover:cursor-pointer' key={ind} onClick={(e)=>setCategory((e.target.innerText).toLowerCase())}>{category}</li>
                )
            })
          }
            
            
        </ul>
    </div>
  )
}

export default Category