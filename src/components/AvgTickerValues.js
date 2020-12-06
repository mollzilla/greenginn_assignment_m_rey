import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import Paper from '@material-ui/core/Paper';
// import GJNumbersView from "./GJNumbersView";
import GJNumberLabel from "./GJNumberLabel";

export default function AvgTickerValues() {

  const [averageValue, setAverageValue] = useState(0);
  const [pairsData, setPairsData] = useState([]);

  async function fetchTickerValues() {
    try {
      await Promise.all(
        [fetch(`https://cors-anywhere.herokuapp.com/bitstamp.net/api/v2/ticker/btcusd`),
        fetch(`https://cors-anywhere.herokuapp.com/api.coinbase.com/v2/exchange-rates?currency=BTC`),
        fetch(`https://cors-anywhere.herokuapp.com/api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD`)
      ]).then(([data1, data2, data3]) =>  {
        return Promise.all([data1.json(),  data2.json(), data3.json()])
      }).then(([bitstamp, coinbase, bitfinex]) => {
        // console.log("bitstamp", bitstamp, "coinbase", coinbase, "bitfinex", bitfinex)
        setPairsData([
          { 
            name: "bitstamp",
            value: parseFloat(bitstamp.bid) 
          },
          { name: "coinbase",
            value: parseFloat(coinbase.data.rates.USD)
          },
          { name: "bitfinex",
            value: bitfinex[0][1] }
        ])
      });
    }
    catch(error) {
      console.log(error);
    }
  }

  const getAverageTickerValues = () => {
    if(pairsData.length==3)
    {
      // console.log(Object.values(pairsData));
      console.log(pairsData.map(x => x.value))
      let sum = pairsData.reduce((acc, current) => acc+current.value, 0); // divide in 2 lines to make it more readable
      let avg =  sum/pairsData.length;
      setAverageValue(avg.toFixed(2));
    }
  }

  useEffect(() => getAverageTickerValues(), [pairsData])

  /* bitfinex.com api response */

  // [
  //   SYMBOL,
  //   BID, 
  //   BID_SIZE, 
  //   ASK, 
  //   ASK_SIZE, 
  //   DAILY_CHANGE, 
  //   DAILY_CHANGE_RELATIVE, 
  //   LAST_PRICE, 
  //   VOLUME, 
  //   HIGH, 
  //   LOW
  // ],

  useEffect(() => fetchTickerValues(), []);

  return (
    <div>
      <Paper elevation={3} className="average-container">
      <h2>Average Ticker Values</h2>
        <Paper elevation={3} className="trading-pairs-paper">
          <h3>Single Ticker Values</h3>
          <div className="single-values">
            {
              pairsData.length && (
                pairsData.map(pair => <GJNumberLabel description={pair.name} value={pair.value} />  )            
              )
            }
          </div>
          </Paper>
          <div className="average">
            <h3>Average Value</h3>
          <h4>$ {averageValue}</h4>  
          </div>
      </Paper>
    </div>
  )
}