import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Books from './components/Books';
import api from "./api/base-url.js";
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  useEffect (()=>{
    handleSearchFromSessionStorage();
  },[]);
  const handleSearchFromSessionStorage = async () => {
      try{
        const response = await api.get(`/search-books/${sessionStorage.getItem('search-key')}`);
        setBooks(response.data);
      }
      catch(err){
        console.log(err.response.data);
      }
  }
  const handleSearchClick = async (event) => {
    try{
      if(event.target.value !== ""){
        const response = await api.get(`/search-books/${event.target.value}`);
        setBooks(response.data);
        sessionStorage.setItem('search-key', event.target.value);
      }
    }
    catch(err){
      console.log(err.response.data);
    }
  }
  return (
    <div>
      <Header handleSearchClick={handleSearchClick}/>
      <Books books={books}/>
    </div>

  );
}

export default App;
