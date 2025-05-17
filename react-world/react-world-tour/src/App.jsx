import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Countries from './Countries';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('hi');
  const handleChange = () => {
    setMessage('bye');
  };

  return (
    <>
      <h3>{message}</h3>
      <h2>React World Tour</h2>
      <button onClick={() => handleChange()}>change</button>
      <Countries></Countries>
    </>
  );
}

export default App;
