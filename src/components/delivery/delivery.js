import React from 'react';
import "./delivery.css";
import Filters from '../fixedBar/filters/filters';
import DeliveryCollections from './deliveryCollections/deliveryCollections';
import TopBrands from './topBrands/topBrands';
import Restaurant from '../delivery/Data/restaurant';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
]

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filtersList = {deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands/>
      <Restaurant/>
    </div>
  )
}

export default Delivery;