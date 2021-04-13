import NavInshorts from './components/NavInshorts';
import './App.css';
import { useEffect, useState } from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apikey from './data/Config'

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const [loadMore, setLoadMore] = useState(10); 

  const newsApi = async() => {
    try
    {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${loadMore}`);
      // console.log(news.data.articles)
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    }
    
    catch(error)
    {
      console.log(error);
    }
  }

  //console.log(newsArray);

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadMore])

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory}/>
      <NewsContent newsArray={newsArray} newsResults={newsResults} loadMore={loadMore} setLoadMore={setLoadMore}/>
    </div>
  );
}

export default App;
 