import React from 'react'
import "./Category.css"
import { clearSearchQuery } from '../../store/videoSlice';

const categories = ["All","Gaming","Freestyle Rap","Anime","Podcast" ]
function Category({setCategory,dispatch}) {
  const changeCategory = (e)=>{
    setCategory(e.target.value)
    dispatch(clearSearchQuery())
  }
  return (
    <div className='flex flex-row flex-wrap justify-center box-border w-10/12 ml-72 p-3 mb-6 bg-slate-800 opacity-95	 category-border sticky top-20 z-10'>
        {
            categories.map((category)=><button key={category} className='text-white bg-slate-900 mx-5 list-none  px-3 py-1 rounded-full' value={category} onClick={(e)=>changeCategory(e)}>{category}</button>)
        }
    </div>
  )
}

export default Category