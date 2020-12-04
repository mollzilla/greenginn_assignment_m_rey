import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import GJNumbersView from "./GJNumbersView";
import CositoDeArriba from "./CositoDeArriba";
import Paper from '@material-ui/core/Paper';


export default function TradingPairsContainer() {

  const [pair, setPair] = useState({
      symbol: "",
      description: ""
  });

  const [pairData, setPairData] = useState([]);

  async function fetchPairData() {
    try {    
      let resp = await fetch("https://www.bitstamp.net/api/v2/trading-pairs-info/");
      let fetchedPairData=await resp.json();
      setPairData(fetchedPairData);
    } catch (error) {
      console.log(error)
    }      
  }

  // useEffect(() => {
  //   setLastSelected((ls) => ls===1 ? 0 : 1);
  // }, [pairs]);

  const handlePairChange = (symbol, description) => {
    setPair({
        symbol: symbol,
        description: description 
      });
  }

  useEffect(() => { fetchPairData() }, [])

  return (
    <div>
      <Paper elevation={3} className="container-item trading-pairs-container">
        <CositoDeArriba pair={pair} pairData={pairData} handlePairChange={handlePairChange} />
        <GJNumbersView pair={pair} />
      </Paper>
      
    </div>
  )
}