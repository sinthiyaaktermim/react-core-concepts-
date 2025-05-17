import { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
  const [countries, setcountries] = useState([]);
  console.log(countries);
  const [count, setCount] = useState(0);
  const handleChangeAmout = () => {
    const newAmount = count + 1;
    setCount(newAmount);
  };
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setcountries(data));
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>handleChangeAmout()}>count</button>
      <h3>countries:{countries.length}</h3>
      {countries.slice(0, 7).map(country => (
        <Country country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
