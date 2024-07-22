import React from 'react';
import './nightLifeCollections.css';
import NextArrow from '../../fixedBar/carousel/nextArrow';
import PrevArrow from '../../fixedBar/carousel/prevArrow';
import Slider from "react-slick";
import NightLifeItem from './nightLifeItem/nightLifeItem';

const nightLifeItems =[
    {
        id: 1,
        title: "Newly opened Places",
        places: "10 Places ▶",
        cover: "https://b.zmtcdn.com/data/pictures/8/20815838/07b0379d8109fba536088cc12448b77e_featured_v2.jpg",
    },
    {
        id: 2,
        title: "Regional Flavours",
        places: "26 Places ▶",
        cover: "https://b.zmtcdn.com/data/pictures/4/20514854/8cd5588c9d1e61a08cc8d7845e79703b_featured_v2.jpg",
    },
    {
        id: 3,
        title: "The Legends of Hyderabad",
        places: "24 Places ▶",
        cover: "https://b.zmtcdn.com/data/pictures/2/18807262/8772de26d722b7ea586da1bec255d414_featured_v2.jpg",
    },
    {
        id: 4,
        title: "Best insta-worthy Places",
        places: "18 Places ▶",
        cover: "https://b.zmtcdn.com/data/pictures/6/93766/187cbc9ec9e6c40d087f2bc53a234274_featured_v2.jpg",
    },
    {
        id: 5,
        title: "Authentic Mandi",
        places: "9 Places ▶",
        cover: "https://b.zmtcdn.com/data/pictures/5/18607685/b6db9a6d50f0880c9e640815daddf832_featured_v2.jpg",
    },
    {
        id: 6,
        title: "Top-breakfast Spots",
        places: "17 Places ▶",
        cover: "https://b.zmtcdn.com/data/pictures/4/20514854/8cd5588c9d1e61a08cc8d7845e79703b_featured_v2.jpg",
    },
    {
        id: 7,
        title: "Best Rooftop Places",
        places: "17 Places ▶",
        cover: "https://b.zmtcdn.com/data/pictures/chains/2/92112/5ff0227febc3b24bc8db794d41d41256_featured_v2.jpg",
    },
    {
        id: 8,
        title: "Finest Microbreweries",
        places: "6 Places ▶",
        cover: "https://b.zmtcdn.com/data/pictures/2/91732/483342127349a28a4e5b55cf0a67de42_featured_v2.jpg",
    },
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
}


const NightLifeCollections = () => {
  return (
    <div className='nightLife-Collections'>
        <div className='max-width'>
            <div className='nightLife-collection-title'>
                <h1>Collections</h1>
                <p>Explore curated lists of top restaurants, cafes, pubs, an bars in Hyderabad, based on trends</p>
            </div>
            <Slider{...settings}>
                {nightLifeItems.map((item)=>{
                    return <NightLifeItem key={item.id} item ={item}/>
                })}
            </Slider>
        </div>
    </div>
  )
}

export default NightLifeCollections;