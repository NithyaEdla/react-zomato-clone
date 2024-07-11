import React from 'react';
import "./diningOut.css";
import Filters from '../fixedBar/filters/filters';
import DiningOutCollections from './diningOutCollections/diningOutCollections';
import Trending from './Trending/trending';

const diningOutFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Offers",
  },
  {
    id: 3,
    title: "Rating 4.0+",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Pet Friendly",
  },
  {
    id: 6,
    title: "Outdoor Seating",
  },
  {
    id: 7,
    title: "Serves Alcohol",
  },
  {
    id: 8,
    title: "Open Now"
  }
]


const DiningOut = () => {
  return (
    <div className='dining-out-page'>
      <div className='max-width'>
        <DiningOutCollections />
        <Filters filtersList = {diningOutFilters} />
        <Trending />
      </div>
    </div>
  )
};

export default DiningOut;