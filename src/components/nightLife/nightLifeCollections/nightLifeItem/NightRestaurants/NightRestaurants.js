import React from 'react'
import './NightRestaurants.css';

const restaurantsList = [
    {
        id: 1,
        cover: "https://b.zmtcdn.com/data/pictures/4/90744/c9e8d3cecfd4e43f9ef0d2eac58d7511_featured_v2.jpg",
        title: "The Neighbourhood",
        offer: "Flat 10% OFF",
        rating: "4.3★",
        items: "North Indian,Continental,...",
        cost: "₹2,000 for two",
        address: "Himayanth Nagar,Hyderabad",
        km: "4 km",

    },
    {
        id: 2,
        cover: "https://b.zmtcdn.com/data/pictures/9/18562409/bc85183d2683bb5b377cc255a0871340_featured_v2.jpg",
        title: "Headquaters",
        offer: "Flat 15% OFF",
        rating: "4.4★",
        items: "Continental,Chinese,Italian,...",
        cost: "₹1,800 for two",
        address: "Somajiguda,Hyderabad",
        km: "6.4 km",

    },
    {
        id: 3,
        cover: "https://b.zmtcdn.com/data/pictures/0/20236950/da539860e558621893c9dc28d3dab66e_featured_v2.jpg",
        title: "Red Rhino",
        offer: "Flat 10% OFF",
        rating: "4.5★",
        items: "North Indian,Burger,American",
        cost: "₹2,450 for two",
        address: "Hitech City,Hyderabad",
        km: "12.7 km",

    },
    {
        id: 4,
        cover: "https://b.zmtcdn.com/data/pictures/1/20259091/a9c9fcd667c5423dab5d325f13062c3d_featured_v2.jpg",
        title: "One8 Commune",
        rating: "4.0★",
        items: "European,Continental,Pizza",
        cost: "₹1,500 for two",
        address: "Hitech City,Hyderabad",
        km: "12.4 km",

    },
    {
        id: 5,
        cover: "https://b.zmtcdn.com/data/pictures/3/20888753/95f8a80d367987d11e9a59ea4bf837fc_featured_v2.jpg",
        title: "Xena Brewery & Kitchen",
        rating: "4.4★",
        items: "Modern Indian,Continental...",
        cost: "₹2,500 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "11.2 km",
    },
    {
        id: 6,
        cover: "https://b.zmtcdn.com/data/pictures/3/19797553/c398782475e8bc2f829915819a1b79f0_featured_v2.jpg",
        title: "AnTeRa Kitchen & Bar",
        offer: "Flat 10% OFF",
        rating: "4.4★",
        items: "South Indin,North Indian,...",
        cost: "₹1,900 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "10.1 km",
    },
    {
        id: 7,
        cover: "https://b.zmtcdn.com/data/pictures/3/20682583/b466eed2d54adfa012a2081baa7ee0c6_featured_v2.jpg",
        title: "Sip Of Sky",
        rating: "4.0★",
        items: "Italian,Seafood,Continental,...",
        cost: "₹1,100 for two",
        address: "Aero Plaza,RGI Airport,Shamshabad,Hyderabad",
        km: "13.7 km",
    },
    {
        id: 8,
        cover: "https://b.zmtcdn.com/data/pictures/8/19979098/c736f9a070d1cf26f62d91d7cdddfab4_featured_v2.jpg",
        title: "Raise The Bar",
        rating: "4.3★",
        items: "Finger Food,Continental,...",
        cost: "₹1,900 for two",
        address: "Manikonda,Hyderabad",
        km: "12.2 km",
    },
    {
        id: 9,
        cover: "https://b.zmtcdn.com/data/pictures/4/21084944/88dac3680b8f5df6bd2aeb082fa315cd_featured_v2.jpg",
        title: "AnTeRa Courtyard",
        rating: "4.3★",
        items: "South Indian,Kebab,Biryani...",
        cost: "₹1,600 for two",
        address: "Financial District,Hyderabad",
        km: "16.6 km",
    },
    {
        id: 10,
        cover: "https://b.zmtcdn.com/data/pictures/9/18356469/465c9a710e89e24e9c821c6af175c5db_featured_v2.jpg",
        title: "Prost",
        rating: "4.4★",
        items: "Continental,Pasta,Fast Foods,...",
        cost: "₹2,500 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "10.5 km",
    },
    {
        id: 11,
        cover: "https://b.zmtcdn.com/data/pictures/7/18487737/9721e25633b2b043c301f7f64faafe72_featured_v2.jpg",
        title: "36 Downtown Brew Pub",
        offer: "Flat 20% OFF",
        rating: "4.3★",
        items: "Continental,hydrabadi,...",
        cost: "₹3,000 for two",
        address: "Road 36,Jubilee Hills,Hyderabad",
        km: "11.2 km",
    },
    {
        id: 12,
        cover: "https://b.zmtcdn.com/data/pictures/3/20598223/a67b4025b919f4ea9dfa27e90d979c83_featured_v2.jpg",
        title: "ZYTHUM Brewing Co.",
        offer: "Flat 15% OFF",
        rating: "4.4★",
        items: "Continental,Pizza,North Indian,...",
        cost: "₹2,500 for two",
        address: "Jubille Hills,Hyderabad",
        km: "9.3 km",
    },
    {
        id: 13,
        cover: "https://b.zmtcdn.com/data/pictures/4/19982534/1e983c74000b2d5490e9d38baff441f5_featured_v2.jpg",
        title: "Makau",
        rating: "4.2★",
        items: "North Indian,Beverages,...",
        cost: "₹2,200 for two",
        address: "Road 36,Jubilee Hills,Hyderabad",
        km: "11.3 km",

    },
    {
        id: 14,
        cover: "https://b.zmtcdn.com/data/pictures/8/20357948/1cdf7366c7878b6e3d81e9b0871a93c8_featured_v2.jpg",
        title: "Barbeque Holic",
        offer: "Flat 20% OFF",
        rating: "4.5★",
        items: "Chinese,Salad,Fast Food,...",
        cost: "₹1,500 for two",
        address: "Kondapur,Hyderabad",
        km: "15.9 km",
    },
    {
        id: 15,
        cover: "https://b.zmtcdn.com/data/pictures/9/20976279/0d607805aa50001b0cd8daedaf783aba_featured_v2.jpg",
        title: "White Hart",
        offer: "Flat 10% OFF",
        rating: "4.3★",
        items: "North Indian,Mughlai,Continental...",
        cost: "₹1,500 for two",
        address: "Gachibowli,Hyderabad",
        km: "13.1 km",
    },
    {
        id: 16,
        cover: "https://b.zmtcdn.com/data/pictures/7/20984037/5810cfbb0dd40cc3b8a7fd0be9390ace_featured_v2.jpg",
        title: "Anaga Spice Kitchen & Bar",
        offer: "Flat 10% OFF",
        rating: "4.4★",
        items: "Andhra,North Indian,Biryani,...",
        cost: "₹1,200 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "10 km",
    },
    {
        id: 17,
        cover: "https://b.zmtcdn.com/data/pictures/5/21240405/a6ac29684039e6b4298ffbd0159e39aa_featured_v2.jpg",
        title: "Daily Rituals",
        rating: "New★",
        items: "Continental,Asian,Bar food,...",
        cost: "₹1,300 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "10.1 km",
    },
    {
        id: 18,
        cover: "https://b.zmtcdn.com/data/pictures/2/19878202/63274232c609a0463e6eaeb28bb1277f_featured_v2.jpg",
        title: "Forge Breu-Hous",
        offer: "Flat 20% OFF",
        rating: "4.5★",
        items: "Finger Food,Continental,...",
        cost: "₹2,500 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "10.9 km",
    },
]

const NightRestaurants = () => {
  return (
    <div className='night-restaurants max-width'>
        <div className='night-restaurant-title'>Trending dining out restaurants in Hyderabad</div>
            <div className='night-restaurant-grid'>
                {restaurantsList.map((restaurants) => (
                <div key={restaurants.id} className='night-restaurant-cover'>
            <img src={restaurants.cover} className='night-restaurant-image' alt={restaurants.title} />
            {restaurants.offer && <div className='night-restaurant-offer'>{restaurants.offer}</div>}
            <div className='night-restaurant-title-rating'>
                <div className='night-restaurant-title'>{restaurants.title}</div>
                <div className='night-restaurant-rating'>{restaurants.rating}</div>
            </div>
            <div className='night-restaurant-info'>
                <div className='night-restaurant-items'>{restaurants.items}</div>
                <div className='night-restaurant-costs'>{restaurants.cost}</div>
            </div>
            <div className='night-restaurant-location'>
                <div className='night-restaurant-address'>{restaurants.address}</div>
                <div className='night-restaurant-km'>{restaurants.km}</div>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default NightRestaurants;