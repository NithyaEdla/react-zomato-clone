import React from 'react';
import './filters.css';
import Filteritem from './filteritem/filteritem';

const Filters = ({filtersList}) => {
  return (
    <div className='filters'>
        {filtersList && filtersList.map((filter) => {
            return <Filteritem filter={filter} key={filter.id}/>
        })}
    </div>
  );
};

export default Filters;