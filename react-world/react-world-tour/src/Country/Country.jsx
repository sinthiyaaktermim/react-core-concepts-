import React, { useState } from 'react';

import './Country.css'
const Country = ({country}) => {
  const{name,flags,population,area,cca3}=country;
  const[visited,setVisited]=useState(false);
  const handleVisited =()=>{
    setVisited(!true);
  }
  return (
    <div className='country'>
      <h3>name:{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>area:{area}</p>
      <p><small>code:{cca3}</small></p>
      <button onClick={handleVisited}>{visited ?'visited':'going'}</button>{
        visited ? 'i have visited this country.' :'i want to visit'
      }
    </div>
  );
};

export default Country;