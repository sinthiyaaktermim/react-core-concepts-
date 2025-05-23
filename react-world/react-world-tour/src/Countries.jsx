import { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
  const [countries, setcountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  console.log(countries);
  const [count, setCount] = useState(0);
  const handleChangeAmout = () => {
    const newAmount = count + 1;
    setCount(newAmount);
  };
  const handleVisitedCountry = country => {
    console.log('add this to your visited country');
    console.log(country);

    const newVisitCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitCountry);
  };
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setcountries(data));
  }, [count]);
  const [VisitedFlag, setVisitedFlags] = useState([]);

 const handleVisitedFlag = flags => {
  const newVisitedFlags = [...VisitedFlag, flags]; 
  setVisitedFlags(newVisitedFlags);
}

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleChangeAmout()}>count</button>
      <h3 className="text-2xl">countries:{countries.length}</h3>
      <div>
        {/* visited countries */}
        <div>
          <h5>visited countries:{visitedCountries.length}</h5>
          <ul>
            {visitedCountries.map(country => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        </div>
        <div className='flag-container w-50'>{
          VisitedFlag.map(flag => <img src={flag}></img>)
          }

        </div>
        {/* display countries */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map(country => (
          <Country
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
