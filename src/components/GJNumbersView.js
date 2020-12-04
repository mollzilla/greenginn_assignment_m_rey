import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import GJNumberLabel from "./GJNumberLabel";
// import './index.css';
// import App from './App';
import Paper from '@material-ui/core/Paper';


export default function GJNumbersView(props) {

  const { pair } = props;
  const [pairComparison, setPairComparison] = useState([]);
  let [GJNumberLabels, setGJNumberLabels] = useState([])

  async function fetchPairsComparison() {
    try {
      let resp = await fetch(`https://www.bitstamp.net/api/v2/ticker/${pair}`);
      let fetchedPairData=await resp.json();
      setPairComparison(fetchedPairData)
    } catch (error) {
      console.log(error);
    }      
  }

  useEffect(() => {
    fetchPairsComparison()
  }, [pair]);

  // useEffect(() => {
  //   returnGJNumberLabels();
  // }, [pairComparison])

  // function returnGJNumberLabels() {
  //   const GJNumberLabelsArray=[];
  //   for(let descriptionValuePair in pairsComparison) {
  //     GJNumberLabelsArray.push({
  //       description:descriptionValuePair,
  //       value: pairsComparison[descriptionValuePair]
  //     })
  //   }
  //   setGJNumberLabels(GJNumberLabelsArray);
  // }

  return (
    <div>
      <Paper elevation={3} className="trading-pairs-paper">
        <h2>{pair.description}</h2>  
        <div className="pairs-list">
          {pairComparison.map((GJNumberLabelsArrayElement, i) => 
            <GJNumberLabel {...GJNumberLabelsArrayElement} key={i} />
          ) }
        </div>
      </Paper>
    </div>
  )
}