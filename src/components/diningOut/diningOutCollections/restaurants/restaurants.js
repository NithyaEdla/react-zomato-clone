import React from 'react';
import './restaurants.css';

const restaurantsList = [
    {
        id: 1,
        cover: "https://media.istockphoto.com/id/843610508/photo/interior-of-cozy-restaurant-loft-style.jpg?s=612x612&w=0&k=20&c=s_PVQJNzcilxKYpm3O-AxBMx4_om5G0TKuxUmiMl85Y=",
        title: "Ta.ma.sha Veg Cafe",
        offer: "Flat 15% OFF",
        rating: "New★",
        items: "Ice Cream,Waffle,...",
        cost: "₹450 for two",
        address: "Abids,Hyderabad",
        km: "2.7 km",

    },
    {
        id: 2,
        cover: "https://media.istockphoto.com/id/1211547141/photo/modern-restaurant-interior-design.jpg?s=612x612&w=0&k=20&c=CvJmHwNNwfFzVjj1_cX9scwYsl4mnVO8XFPi0LQMTsw=",
        title: "Exotica",
        offer: "Flat 15% OFF",
        rating: "4.6★",
        items: "North Indian,Biryani,kebab",
        cost: "₹2500 for two",
        address: "12th Square Building,Banjara Hills,Hyderabad",
        km: "6.4 km",

    },
    {
        id: 3,
        cover: "https://media.istockphoto.com/id/1422245075/photo/cozy-restaurant-interior-design-with-yellow-chair.jpg?s=612x612&w=0&k=20&c=m1r4c0ky2Tf4bGz1_5Q8DzBYvFjwUXOtWCMCrhtLuH4=",
        title: "Moyaaah!",
        offer: "Flat 10% OFF",
        rating: "4.5★",
        items: "Cafe,Burger,Fast Food,S...",
        cost: "₹1,150 for two",
        address: "Banjara Hills,Hyderabad",
        km: "6 km",

    },
    {
        id: 4,
        cover: "https://media.istockphoto.com/id/1427804808/photo/luxury-restaurant-interior-with-bar-counter-and-tables-at-night.jpg?s=612x612&w=0&k=20&c=cIh8b3HfEzKSMkgBoGLbW8IfZeekm8d6uRVAnb1iLk0=",
        title: "Amritsar Haveli",
        offer: "Flat 10% OFF",
        rating: "3.8★",
        items: "North Indian,Chinese,Fast Foods",
        cost: "₹800 for two",
        address: "Attapur,Hyderabad",
        km: "5 km",

    },
    {
        id: 5,
        cover: "https://media.istockphoto.com/id/1792822095/photo/luxurious-upscale-restaurant.jpg?s=612x612&w=0&k=20&c=HVd5s_bB3yeoKwKR4WUyDfRTgWGf3y56WExEtn0g7Ag=",
        title: "Mings & Mee",
        offer: "Flat 10% OFF",
        rating: "4.5★",
        items: "Chinese, Sushi,Asian,Des...",
        cost: "₹1,900 for two",
        address: "Banjara Hills,Hyderabad",
        km: "6.1 km",
    },
    {
        id: 6,
        cover: "https://media.istockphoto.com/id/1792829728/photo/industrial-style-upscale-restaurant.jpg?s=612x612&w=0&k=20&c=ckBhM3oG7d7N3r1bbUJeEE5XXjn08KIzV2UyBQtrw88=",
        title: "Headquarters",
        offer: "Flat 15% OFF",
        rating: "4.4★",
        items: "Continental,Chinese,Italian",
        cost: "₹1,800 for two",
        address: "Somajiguda,Hyderabad",
        km: "6.4 km",
    },
    {
        id: 7,
        cover: "https://media.istockphoto.com/id/1273168607/photo/interior-of-luxury-cafe-with-bar-counter-plants-and-tables.jpg?s=612x612&w=0&k=20&c=cPeWuA1F0ZXdc6RaCPwJpbaMmEIqXOPMkpPuSswZNFM=",
        title: "Ofen",
        offer: "Flat 10% OFF",
        rating: "3.7★",
        items: "Cafe,Coffee,Sandwich,It...",
        cost: "₹1,200 for two",
        address: "Banjara Hills,Hyderabad",
        km: "6.5 km",
    },
    {
        id: 8,
        cover: "https://media.istockphoto.com/id/1792821015/photo/luxurious-upscale-restaurant.jpg?s=612x612&w=0&k=20&c=52gaRAFflNR_dXDESqXKb0htdhorPqrskhClq_39XdA=",
        title: "Coffee Cup",
        offer: "Flat 10% OFF",
        rating: "4.2★",
        items: "Cafe,Tea,Beverages,Am...",
        cost: "₹950 for two",
        address: "Somajiguda,Hyderabad",
        km: "6.5 km",
    },
    {
        id: 9,
        cover: "https://media.istockphoto.com/id/1792837813/photo/luxurious-dark-upscale-restaurant.jpg?s=612x612&w=0&k=20&c=kdOlF6e-Uhr889Q8NRJ58XAKiT7zeudp5Bsd3LTyzJQ=",
        title: "Xena Brewery & Kitchen",
        rating: "4.4★",
        items: "Modern India,Continental...",
        cost: "₹2,500 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "11.2 km",
    },
    {
        id: 10,
        cover: "https://media.istockphoto.com/id/1724101086/photo/female-friends-on-a-brunch-in-a-restaurant.jpg?s=612x612&w=0&k=20&c=0Xg789eN2PBri9O1gabETbgzOmYJCR8FxX5_JCB1IBc=",
        title: "Mindspace Social",
        rating: "4.2★",
        items: "Hyderabadi,Kebab,Mom...",
        cost: "₹2,000 for two",
        address: "Hitech City,Hyderabad",
        km: "13.2 km",

    },
    {
        id: 11,
        cover: "https://media.istockphoto.com/id/1917539042/photo/luxury-restaurant-interior-at-night-with-dining-tables-potted-plants-pendant-lights-and.jpg?s=612x612&w=0&k=20&c=XJOxe64s-gGVyQMHBqqKbkewEo4xv2m3dhlOdqZQem0=",
        title: "AnTeRa Kitchen And Bar",
        offer: "Flat 10% OFF",
        rating: "4.4★",
        items: "South Indian,North Indian,...",
        cost: "₹1,905 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "10.1 km",
    },
    {
        id: 12,
        cover: "https://media.istockphoto.com/id/1359351298/photo/interior-view-of-an-empty-restaurant.jpg?s=612x612&w=0&k=20&c=pcNHUw_yTjGHoR9Akcl2vJjLFV2JWxA4r4X5TqVlS24=",
        title: "Red Rhino",
        offer: "Flat 10% OFF",
        rating: "4.5★",
        items: "Sushi,Italian,Oriental,Asi...",
        cost: "₹2,400 for two",
        address: "Hitech City,Hyderabad",
        km: "12.7 km",
    },
    {
        id: 13,
        cover: "https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg",
        title: "One8 Commune",
        rating: "New★",
        items: "European,Continental,Piz...",
        cost: "₹1,500 for two",
        address: "Hitech City,Hyderabad",
        km: "12.4 km",

    },
    {
        id: 14,
        cover: "https://media.istockphoto.com/id/1438541884/photo/pub-interior-with-christmas-tree-ornaments-bar-counter-and-tables.jpg?s=612x612&w=0&k=20&c=No7kb1veKFFFj9EOBxKpZtWZ5ge9QnQ7wT5xHCPl_Bo=",
        title: "ZYTHUM Brewing Co.",
        offer: "Flat 15% OFF",
        rating: "4.4★",
        items: "Continental,Pizza,North Indian...",
        cost: "₹2,500 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "9.3 km",
    },
    {
        id: 15,
        cover: "https://media.istockphoto.com/id/1248298343/photo/3d-rendering-of-a-luxury-restaurant-interior-at-night.jpg?s=612x612&w=is&k=20&c=CzzUnbivzWpdQNI8G59mcPbFnbyajA9Mzfu3xUzCAdA=",
        title: "Anaga Spice Kitchen & Bar",
        offer: "Flat 10% OFF",
        rating: "4.5★",
        items: "Andhra,North Inian,Biryani...",
        cost: "₹1,200 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "10 km",
    },
    {
        id: 16,
        cover: "https://media.istockphoto.com/id/1248298343/photo/3d-rendering-of-a-luxury-restaurant-interior-at-night.jpg?s=612x612&w=0&k=20&c=HATLl-O0gMhEEFP5gOA48YrCiFAw5J4gMD69I7WIhlg=",
        title: "Makau",
        rating: "4.2★",
        items: "North Indian,Beverages,...",
        cost: "₹2,200 for two",
        address: "Road 36,Jubilee Hills,Hyderabad",
        km: "11.3 km",
    },
    {
        id: 17,
        cover: "https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM=",
        title: "36 Downtown Brew Pub",
        offer: "Flat 20% OFF",
        rating: "4.3★",
        items: "Continental,Hyderabadi,...",
        cost: "₹3,000 for two",
        address: "Road 36,Jubilee Hills,Hyderabad",
        km: "11.2 km",
    },
    {
        id: 18,
        cover: "https://media.istockphoto.com/id/1163284610/photo/very-stylish-indian-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=-0Bz0mNjnrDoXApfo6P_xBrKmIMPZYJwQ5zAGEpzThI=",
        title: "Forefathers",
        rating: "4.2★",
        items: "Finger Food,Pizza,Bar Fo...",
        cost: "₹3,000 for two",
        address: "Jubilee Hills,Hyderabad",
        km: "10.8 km",
    },
]


const Restaurants = () => {
  return (
    <div className='restaurantss max-width'>
        <div className='restaurantsss-title'>Trending dining out restaurants in Hyderabad</div>
            <div className='restaurantss-grid'>
                {restaurantsList.map((restaurants) => (
                <div key={restaurants.id} className='restaurantss-cover'>
            <img src={restaurants.cover} className='restaurantss-image' alt={restaurants.title} />
            {restaurants.offer && <div className='restaurantss-offer'>{restaurants.offer}</div>}
            <div className='restaurantss-title-rating'>
                <div className='restaurantss-title'>{restaurants.title}</div>
                <div className='restaurantss-rating'>{restaurants.rating}</div>
            </div>
            <div className='restaurantss-info'>
                <div className='restaurantss-items'>{restaurants.items}</div>
                <div className='restaurantss-costs'>{restaurants.cost}</div>
            </div>
            <div className='restaurantss-location'>
                <div className='restaurantss-address'>{restaurants.address}</div>
                <div className='restaurantss-km'>{restaurants.km}</div>
            </div>
        </div>
        ))}
        </div>
    </div>
  );
}

export default Restaurants;