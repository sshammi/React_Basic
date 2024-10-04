import React from 'react'
import PropTypes from 'prop-types'; 
import { FaRegBookmark } from "react-icons/fa";

export default function Blog({blog,handleBookmark,handleMarkasRead}) {
    const {id,title,cover,author_img,reading_time,author,posted_date,hashing}=blog;
  return (
    <div className='mb-20 space-y-4'>
      <img src={cover} alt=""/>
      <div className='flex justify-between mb-4'>
        <div className='flex'> 
            <img src={author_img} alt="" className='w-14 h-14'/>
            <div className='ml-6'>
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
            </div>
        </div>
        <div>
            <span>{reading_time} min time</span>
            <button className='ml-2' onClick={()=>handleBookmark(blog)}><FaRegBookmark></FaRegBookmark></button>
        </div>
      </div>
      <h1 className='text-4xl'>{title}</h1>
      <p>{hashing}</p>
      <button onClick={()=>handleMarkasRead(id,reading_time)} className='text-purple-600 font-bold underline'>Mark as read</button>
    </div>
  )
}

Blog.prototype={
    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func
}
