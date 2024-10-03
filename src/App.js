import { useState } from 'react';
import './App.css';
import Blogs from './components/blogs/Blogs';
import Bookmarks from './components/bookmark/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookmarks,setbookmarks]=useState([]);
  const [readingTime,setresdingTime]=useState(0)
  const handleBookmark=blog=>{
    const x=[...bookmarks,blog]
    setbookmarks(x)    
  }
  const handleMarkasRead=time=>{
    const x=readingTime+time;
    setresdingTime(x)
  }
  return (
    <>
    <Header></Header>
    <div className='md:flex p-4 m-4'>
      <Blogs handleBookmark={handleBookmark} handleMarkasRead={handleMarkasRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  );
}

export default App;
