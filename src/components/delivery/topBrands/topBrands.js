import React from 'react';
import './topBrands.css';
import NextArrow from '../../fixedBar/carousel/nextArrow';
import PrevArrow from '../../fixedBar/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandsList = [
    {
        id: 1,
        time: "32min",
        title: "Mehfil",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png",
    },
    {
        id: 2,
        time: "25min",
        title: "Shah Ghouse Hotel & Restaurant",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png",
    },
    {
        id: 3,
        time: "25min",
        title: "Pista House",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0f13b4a115d1420b049835a5b2037a46_1649660664.png",
    },
    {
        id: 4,
        time: "37min",
        title: "KFC",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png",
    },
    {
        id: 5,
        time: "27min",
        title: "Cream Stone Ice Cream",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/cba530e2b1d8439cd4170fef9b3f1d51_1635882104.png",
    },
    {
        id: 6,
        time: "33min",
        title: "McDonald's",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983679.png",
    },
    {
        id: 7,
        time: "35min",
        title: "Kwality Wall's Frozen Dessert and Ice Cream Shop",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0619ae0b489d44dd3562538f7768e48a_1658824772.png",
    },
    {
        id: 8,
        time: "36min",
        title: "Jashan",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/91f550f3892cf36ce133bd2b6833f6f71703233325.png",
    },
    {
        id: 9,
        time: "27min",
        title: "Paradise Biryani-A Legend Since 1953",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6f7f4964abc7bb71c4bc370ccf36ff91_1633121322.png",
    },
    {
        id: 10,
        time: "38min",
        title: "California Burrito",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780738.png",
    },
];

    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {topBrandsList.map((brand)=>{
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className='top-brands-image' alt={brand.time} />
                        <div className='top-brand-title'>{brand.title}</div>
                        <div className='top-brand-time'>{brand.time}</div>
                    </div>
                </div>
            })}
        </Slider>
    </div>
  );
};

export default TopBrands;