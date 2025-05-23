// // import React, { useState } from 'react';

// import { useState } from "react";

// // import { useState } from "react";

// // import { useState } from "react";

// // import './Country.css'
// const Country = ({country}) => {
//   const{name,flags,population,area,cca3}=country;
//   const[visited,setVisited]=useState(false);
//   const handleVisited =()=>{
//    if(!visited){
//     setVisited(true)
//    }
//   }
//   return (
//     <div className={`country${visited&&'visited'}`}>
//       <h3>name:{name.common}</h3>
//       <img src={flags.png} alt="" />
//       <p>Population:{population}</p>
//       <p>area:{area}</p>
//       <p><small>code:{cca3}</small></p>

//       <button className='bg-red-800 px-2 py-2 border-4 border-red-400' onClick={handleVisited}>{visited ?'visited':'going'}</button>{
//         visited ? 'i have visited this country.' :'i want to visit'
//       }
//     </div>
//   );
// };

// export default Country;
import { useState } from 'react';

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(true);
  };

  // const passWithParams =

  return (
    <div
      className={`border-gray-900 border-2 ${
        visited ? 'bg-lime-400 text-white ' : ''
      } `}
    >
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt={`${name.common} flag`} />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>

      <div
        className={`${
          visited
            ? 'bg-red-400 text-black px-4 py-2 '
            : 'bg-green-400 text-white  px-4 py-2 cursor-pointer'
        }`}
        disabled={visited}
        onClick={handleVisited}
      >
        <span>{visited ? 'Visited' : 'Going'}</span>
      </div>
      <br />
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
<button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag</button>
      <p className="mt-2">
        {visited ? 'I have visited this country.' : 'I want to visit.'}
      </p>
    </div>
  );
};

export default Country;
