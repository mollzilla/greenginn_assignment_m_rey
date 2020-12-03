import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
// import './index.css';
// import App from './App';
import Paper from '@material-ui/core/Paper';


export default function GJNumbersView(props) {

  const { pairs } = props;
console.log(pairs)
  const [pairsComparison, setPairsComparison] = useState();

  async function fetchPairsComparison() {
    try {   
      let resp = await fetch(`https://www.bitstamp.net/api/v2/ticker/${pairs[0].symbol}/${pairs[1].symbol}`);
      console.log(resp)
      let fetchedPairsData=await resp.json();
      setPairsComparison(fetchedPairsData);
      // console.log(fetchedPairsData);
      
    } catch (error) {
      console.log(error)
    }      
  }
// console.log(pairsComparison)
  useEffect(() => {
    fetchPairsComparison()
  }, [pairs]);

  return (
    <div>
      <Paper elevation={3} className="trading-pairs-paper">
        <h2>{pairs[0].description} -- {pairs[1].description}</h2>  
        This will be the main container the selected pair values.        
        https://www.bitstamp.net/api/v2/ticker/btcusdc/btcgbp
      </Paper>
    </div>
  )
}