import React from 'react'
import Bookmark from '../showbookmark/Bookmark'

export default function Bookmarks({bookmarks,readingTime}) {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4'>
        <div className='text-4xl'>
            <h3>Reading Time: {readingTime}</h3>
        </div>
        <h1 className="text-3xl text-center">Bookmark:{bookmarks.length}</h1>
        {
            bookmarks.map(x=><Bookmark showbookmark={x}></Bookmark>)
        }
    </div>
  )
}
