import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(0);
  const [price, setPrice] = useState(0);
  const [coins, setCoins] = useState([]);
  const onChange = (event) => {
    setMoney(event.target.value)
  };
  const onSelect = (event) => {
    setPrice(event.target.value);
    console.log(event.target.value);
  };
  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false);
      });
  
  }, [])
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      <input 
        type="text"
        value={money}
        onChange={onChange}
        placeholder="input your the amount"
      />
      {money === 0 ? null : <h3>{money/price}</h3>}
      {loading ? <strong>loadging...</strong> : (
      <select onChange={onSelect}>
        <option>select coin</option>
        {coins.map((coin, index) => 
          <option key={index} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        )}
      </select>
      )}
      
    </div>
  );
}

export default App;
