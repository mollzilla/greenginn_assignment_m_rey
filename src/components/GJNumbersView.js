import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import GJNumberLabel from "./GJNumberLabel";
// import './index.css';
// import App from './App';
import Paper from '@material-ui/core/Paper';


export default function GJNumbersView(props) {

  const { pairs } = props;
  const [pairsComparison, setPairsComparison] = useState();
// console.log(pairsComparison)

  async function fetchPairsComparison() {
    try {   
      let resp = await fetch(`https://www.bitstamp.net/api/v2/ticker/${pairs[0].symbol}/${pairs[1].symbol}`);
      let fetchedPairsData=await resp.json();
      setPairsComparison(fetchedPairsData);      
    } catch (error) {
      console.log(error)
    }      
  }

  useEffect(() => {
    fetchPairsComparison()
  }, [pairs]);

  function returnGJNumberLabels() {
    const GJNumberLabelsArray=[];
    for(let descriptionValuePair in pairsComparison) {
      GJNumberLabelsArray.push({
        description:descriptionValuePair,
        value: pairsComparison[descriptionValuePair]
      })
    }
    return GJNumberLabelsArray;
  }

  return (
    <div>
      <Paper elevation={3} className="trading-pairs-paper">
        <h2>{pairs[0].description} -- {pairs[1].description}</h2>  
        {/* This will be the main container the selected pair values.         */}
        {/* https://www.bitstamp.net/api/v2/ticker/btcusdc/btcgbp */}
        <div className="pairs-list">
          {returnGJNumberLabels().map((GJNumberLabelsArrayElement, i) => 
            <GJNumberLabel {...GJNumberLabelsArrayElement} key={i} />
          ) }
        </div>
      </Paper>
    </div>
  )
}