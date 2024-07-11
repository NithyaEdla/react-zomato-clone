import React from 'react';
import './restaurant.css';

const restaurantList = [
    {
        id: 1,
        time: "24min",
        title: "Pista House Bakery",
        rating: "4.2",
        cover: "https://b.zmtcdn.com/data/pictures/chains/8/19937288/b8f98cd0239c1792920ffd087a83f9fa_o2_featured_v2.jpg?output-format=webp",
    },
    {
        id: 2,
        time: "44min",
        title: "Shah Ghouse Hotel & Restaurant",
        rating: "4.1",
        cover: "https://b.zmtcdn.com/data/pictures/chains/0/93970/ae0a71b4d560c4bcf7f52761c614fcc1_o2_featured_v2.jpg?output-format=webp",
    },
    {
        id: 3,
        time: "31min",
        title: "Grand Hotel",
        rating: "4.2",
        cover: "https://b.zmtcdn.com/data/pictures/chains/0/92020/3088315ab85025468fb789f2871bf131_o2_featured_v2.jpg?output-format=webp",
    },
    {
        id: 4,
        time: "37min",
        title: "MS Mandi & Shawarma",
        rating: "3.9",
        cover: "https://b.zmtcdn.com/data/pictures/1/19497661/f3e30f26bacec0c1792418bd23df5759_o2_featured_v2.jpg?output-format=webp",
    },
    {
        id: 5,
        time: "29min",
        title: "Paradise Biryani - A Legend Since 1953",
        rating: "4.2",
        cover: "https://b.zmtcdn.com/data/pictures/chains/2/91662/651b69964e2fbade94d28221d854aed5_o2_featured_v2.jpg?output-format=webp",
    },
    {
        id: 6,
        time: "30min",
        title: "Pista House",
        rating: "4.2",
        cover: "https://b.zmtcdn.com/data/pictures/chains/9/91999/ac37ff595764daab5390ed616dc6e10d_o2_featured_v2.jpg?output-format=webp",
    },
    {
        id: 7,
        time: "27min",
        title: "Cafe Bahar",
        rating: "4.2",
        cover: "https://b.zmtcdn.com/data/pictures/chains/7/90517/f880231116d2f74b1a9251eecae2d763_o2_featured_v2.jpg?output-format=webp",
    },
    {
        id: 8,
        time: "31min",
        title: "Mehfil",
        rating: "4.2",
        cover: "https://b.zmtcdn.com/data/pictures/chains/3/93043/3088315ab85025468fb789f2871bf131_o2_featured_v2.jpg?output-format=webp",
    },
    {
        id: 9,
        time: "29min",
        title: "Cream Stone Ice Cream",
        rating: "4.1",
        cover: "https://b.zmtcdn.com/data/pictures/chains/6/90706/4d116d13c81407431c91116385681937_o2_featured_v2.jpg?output-format=webp",
    },
    {
        id: 10,
        time: "37min",
        title: "KFC",
        rating: "3.7",
        cover: "https://b.zmtcdn.com/data/pictures/chains/5/90195/a27bd9588a65ab593c977b7d6fbf6617_o2_featured_v2.jpg",
    },
    {
        id: 11,
        time: "32min",
        title: "Bawarchi",
        rating: "4.3",
        cover: "https://b.zmtcdn.com/data/pictures/chains/6/90896/ba15e8b45ae70a8b0c249a77600f23aa_o2_featured_v2.jpg",
    },
    {
        id: 12,
        time: "27min",
        title: "Lucky Restaurant",
        rating: "4.0",
        cover: "https://b.zmtcdn.com/data/pictures/chains/6/94336/b11958906834b77171383978608a20ef_o2_featured_v2.jpg",
    },
    {
        id: 13,
        time: "40min",
        title: "McDonald's",
        rating: "3.9",
        cover: "https://b.zmtcdn.com/data/pictures/4/19026144/92237989e8a919c0fcfdf3d9f8da3fb0_o2_featured_v2.jpg",
    },
    {
        id: 14,
        time: "41min",
        title: "Pizza Hut",
        rating: "4.0",
        cover: "https://b.zmtcdn.com/data/pictures/chains/4/90384/e81f66522df2f3dbc3c9d0aa3ce0756d_o2_featured_v2.jpg",
    },
    {
        id: 15,
        time: "33min",
        title: "Kritunga",
        rating: "3.7",
        cover: "https://b.zmtcdn.com/data/pictures/chains/6/19509846/aead71107d5811aab1b5da10c1726e77_o2_featured_v2.jpg",
    },
    {
        id: 16,
        time: "36min",
        title: "Burger King",
        rating: "4.0",
        cover: "https://b.zmtcdn.com/data/pictures/chains/8/18138658/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg",
    },
    {
        id: 17,
        time: "40min",
        title: "La Pino'z Pizza",
        rating: "3.9",
        cover: "https://b.zmtcdn.com/data/pictures/chains/7/18867877/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg",
    },
    {
        id: 18,
        time: "23min",
        title: "Scoops Ice Cream",
        rating: "4.4",
        cover: "https://b.zmtcdn.com/data/pictures/chains/9/91559/1ea696d2e09e937df6840d5c6e76637e_o2_featured_v2.jpg",
    },
]


const Restaurant = () => {
  return (
    <div className='restaurants max-width'>
        <div className='restaurants-title'>Food Delivery Restaurants in Hyderabad
        </div>
        <div className='restaurants-grid'>
            {restaurantList.map((restaurant)=>{
                return <div>
                    <div className='restaurant-cover'>
                        <img src={restaurant.cover} className='restaurant-image' alt={restaurant.time} />
                        <div className='restaurant-title'>{restaurant.title}</div>
                        <div className='restaurant-time'>{restaurant.time}</div>
                    </div>
                </div>
            })}
        </div>
    </div>
  );
}

export default Restaurant;