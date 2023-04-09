import axios from 'axios';
import { useEffect, useState } from 'react';
import Category from './Component/Category';
import Navbar from './Component/Navbar';
import NewsList from './Component/NewsList';



function App() {

  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('');
  const [category,setCategory] = useState('general');

  const generalApi = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
  const searchApi = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${import.meta.env.VITE_API_KEY}`;

 
  const getData = async (url) =>{
     try{
       const res = await axios.get(url);
       setApiData(res.data.articles);
      
     }catch(err){
      console.error(err)
     }
  }


  useEffect(()=>{

    if(query){
      getData(searchApi); 
    }
    else{
      getData(generalApi);

    } 
    console.log(`rendered`);
    
  },[query,category])

  console.log(query);
  


  return (
    <div className="App flex flex-col place-items-center">
      <Navbar setQuery={setQuery}/>
      <Category setCategory={setCategory}/>
      <NewsList apiData={apiData} />
    </div>
  )
}

export default App;
