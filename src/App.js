import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';  // (In this project we'll work with axios instead of fetch.)
import Coin from './Coin';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const currency="pkr"; // change currency if needed

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(resp => {
        setCoins(resp.data);
        // console.log(resp.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filterCoins = coins.filter(coins =>
    coins.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      <div className='coin-app'>
        <div className='coin-search'>
          <h1 className='coin-text'>Search a Crypto</h1>
          <form>
            <input type="text" onChange={handleChange} placeholder='Search here' className='coin-input' />
          </form>
        </div>
        <div className='coin-container'>
          <div className='coin-row'>
            <div className='coin'>
              <h1>Name</h1>
              <p className='coin-symbol'>Symbol</p>
            </div>
            <div className='coin-data'>
              <p className='coin-price'>Current Price</p>
              <p className='coin-volume'>Total Volume</p>
              <p className='coin-percent'>Change 24</p>
              <p className='coin-marketcap'>Market Capital</p>
            </div>
          </div>
        </div>
        {

          filterCoins.map(coins => {
            return <>
              <Coin coins={coins} />
            </>
          })
        }
      </div>
    </>
  );
}

export default App;
