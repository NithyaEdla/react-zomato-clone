import React from 'react';
import "./nightLife.css";
import NightLifeCollections from './nightLifeCollections/nightLifeCollections';
import Filters from '../fixedBar/filters/filters';
import Offers from './Offers/Offers';
import NightRestaurants from './nightLifeCollections/nightLifeItem/NightRestaurants/NightRestaurants';

const nightLifeFilters = [
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
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
]


const NightLife = () => {
  return (
    <div>
      <div className='max-width'>
        <NightLifeCollections />
        <Filters filtersList = {nightLifeFilters} />
        <Offers/>
        <NightRestaurants/>
      </div>
    </div>  
  )
}

export default NightLife;