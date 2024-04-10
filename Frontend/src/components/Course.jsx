import React from 'react';
import Cards from "./Cards";
import list from "../../public/list.json";
import { IoArrowBack } from "react-icons/io5";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!</span></h1>
          <p className='mt-12 text-justify md:text-left md:mx-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, soluta ducimus distinctio dolor alias eos sed doloribus minima tempore repellat culpa! Cumque, doloribus deleniti quisquam cupiditate ducimus minima nihil quaerat?</p>
          
          <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'> <IoArrowBack className='inline-block mr-2' />Back</button>
          </Link>
        </div>

        {/* we render cards data on Courses page */} 
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
