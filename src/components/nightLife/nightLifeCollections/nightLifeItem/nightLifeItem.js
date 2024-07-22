import React from 'react';
import './nightLifeItem.css';

const NightLifeItem = ({item}) => {
  return (
    <div className='nightLife-item'>
        <div className='nightLife-item-cover'>
            <img src={item.cover}
            className='nightLife-item-image'
            alt={item.title} />
            <div className='nightLife-item-info'>
                <div className='nightLife-item-title'>{item.title}</div>
                <div className='nightLife-item-places'>{item.places}</div>
            </div>
        </div>
    </div>
  )
}

export default NightLifeItem;