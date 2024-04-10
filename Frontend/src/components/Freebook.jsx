import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import list from '../../public/list.json';
import Cards from './Cards';
function Freebook() {
    // Filter data for items with category "free"
    const filterData = list.filter((data) => data.category === "free");

    var settings = {
        dots: true, // Enable slider dots
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true // Enable slider dots for smaller screens
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true // Enable slider dots for smallest screens
                }
            }
        ]
    };
    

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi eaque blanditiis deleniti repellat, doloribus nulla fugit sapiente dolorem mollitia beatae molestias obcaecati laboriosam saepe eos, id libero corporis error?</p>
            </div>

            <div>

                <Slider {...settings}>
                    {filterData.map((item) => (
                    <div key={item.id}>
                    <Cards item={item}/>
                    </div>
                    ))} 
                </Slider>

            </div>
        </div>
    );
}

export default Freebook;

