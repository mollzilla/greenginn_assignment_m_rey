import React, { useEffect } from 'react';
import '../styles/styles.css';
// import './index.css';
// import App from './App';
import Paper from '@material-ui/core/Paper';


export default function AvgTickerValues() {

  async function fetchTickerValues() {
    try {
      await Promise.all(
        [fetch(`https://cors-anywhere.herokuapp.com/bitstamp.net/api/v2/ticker/btcusd`),
        fetch(`https://cors-anywhere.herokuapp.com/api.coinbase.com/v2/exchange-rates?currency=BTC`),
        fetch(`https://cors-anywhere.herokuapp.com/api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD`)
      ]).then(([data1, data2, data3]) =>  {
        return Promise.all([data1.json(), data2.json(), data3.json()])
      }).then(data => {
        console.log(data)
      })
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => fetchTickerValues(), []);

  return (
    <div>
      <Paper elevation={3} className="container-item">
        This will be the main container for average ticker values.        
      </Paper>
    </div>
  )
}