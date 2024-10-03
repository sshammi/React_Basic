import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import { PropTypes } from 'prop-types';

export default function Blogs({handleBookmark,handleMarkasRead}) {

    const [blogs,setblogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])
    
  return (
    <div className='md:w-2/3'>
      <h1>Blogs:{blogs.length}</h1>
      {
        blogs.map(x=><Blog 
          key={blogs.id} 
          blog={x}
          handleBookmark={handleBookmark}
          handleMarkasRead={handleMarkasRead}
          ></Blog>)
      }
    </div>
  )
}

Blogs.prototype={
  handleBookmark:PropTypes.func
}