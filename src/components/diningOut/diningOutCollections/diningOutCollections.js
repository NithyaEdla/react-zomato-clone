import React from 'react';
import './diningOutCollections.css';
import NextArrow from '../../fixedBar/carousel/nextArrow';
import PrevArrow from '../../fixedBar/carousel/prevArrow';
import Slider from "react-slick";
import DiningOutItem from './diningOutItem/diningOutItem';

const diningOutItems =[
    {
        id: 1,
        title: "Newly opened Places",
        places: "10 Places ▶",
        cover: "https://lh5.googleusercontent.com/p/AF1QipNDT7UDRSjZj6DvxygtcOpA-U5fpF03wbAi7GXR=w115-h115-n-k-no",
    },
    {
        id: 2,
        title: "Regional Flavours",
        places: "26 Places ▶",
        cover: "https://lh5.googleusercontent.com/p/AF1QipNDT7UDRSjZj6DvxygtcOpA-U5fpF03wbAi7GXR=w115-h115-n-k-no",
    },
    {
        id: 3,
        title: "The Legends of Hyderabad",
        places: "24 Places ▶",
        cover: "https://lh5.googleusercontent.com/p/AF1QipNDT7UDRSjZj6DvxygtcOpA-U5fpF03wbAi7GXR=w115-h115-n-k-no",
    },
    {
        id: 4,
        title: "Best insta-worthy Places",
        places: "18 Places ▶",
        cover: "https://lh5.googleusercontent.com/p/AF1QipNDT7UDRSjZj6DvxygtcOpA-U5fpF03wbAi7GXR=w115-h115-n-k-no",
    },
    {
        id: 5,
        title: "Authentic Mandi",
        places: "9 Places ▶",
        cover: "https://lh5.googleusercontent.com/p/AF1QipNDT7UDRSjZj6DvxygtcOpA-U5fpF03wbAi7GXR=w115-h115-n-k-no",
    },
    {
        id: 6,
        title: "Top-breakfast Spots",
        places: "17 Places ▶",
        cover: "https://lh5.googleusercontent.com/p/AF1QipNDT7UDRSjZj6DvxygtcOpA-U5fpF03wbAi7GXR=w115-h115-n-k-no",
    },
    {
        id: 7,
        title: "Best Rooftop Places",
        places: "17 Places ▶",
        cover: "https://lh5.googleusercontent.com/p/AF1QipNDT7UDRSjZj6DvxygtcOpA-U5fpF03wbAi7GXR=w115-h115-n-k-no",
    },
    {
        id: 8,
        title: "Finest Microbreweries",
        places: "6 Places ▶",
        cover: "https://lh5.googleusercontent.com/p/AF1QipNDT7UDRSjZj6DvxygtcOpA-U5fpF03wbAi7GXR=w115-h115-n-k-no",
    },
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
}

const DiningOutCollections = () => {
  return (
    <div className='dining-out-collections'>
        <div className='max-width'>
            <div className='diningOut-collection-title'>
                <h1>Collections</h1>
                <p>Explore curated lists of top restaurants, cafes, pubs, an bars in Hyderabad, based on trends</p>
            </div>
            <Slider{...settings}>
                {diningOutItems.map((item)=>{
                    return <DiningOutItem key={item.id} item ={item}/>
                })}
            </Slider>
        </div>
    </div>
   )
} 

export default DiningOutCollections;