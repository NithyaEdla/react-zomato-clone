import React from 'react';
import './diningOutItem.css';

const DiningOutItem = ({item}) => {
  return (
    <div className='dining-out-item'>
        <div className='diningOut-item-cover'>
          <img 
          src={item.cover} 
          className='dining-item-image' 
          alt={item.title} />
          <div className='dining-item-info'>
              <div className='dining-item-title'>{item.title}</div>
              <div className='dining-item-places'>{item.places}</div>
          </div>
        </div>
    </div>
  )
}

export default DiningOutItem; 