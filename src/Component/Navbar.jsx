import React, { useState } from 'react';

function Navbar({setQuery}) {

  const [search,setSearch] = useState('');
  return (
    <div className='w-full flex bg-slate-400'>
        <div className='w-fit'>
            <h1 className='font-bold font-serif text-2xl md:text-4xl p-5'>DigiPaper</h1>
        </div>
        <div className='w-1/2 mx-auto flex h-fit m-5 '>
          <input type="text" placeholder='search here' className='w-full rounded-md p-2' onChange={(e)=>(setSearch(e.target.value))}/>
          <button className='text-xl font-bold border-2 border-black w-fit rounded-md ml-2 bg-white' onClick={()=> setQuery(search)}>search</button>
         </div>
    </div>
  )
}

export default Navbar;