import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
// import './index.css';
// import App from './App';

import SelectedPairValues from "./SelectedPairValues";
import CositoDeArriba from "./CositoDeArriba";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export default function TradingPairsContainer() {

  const [pair, setPair] = useState({
    0: "",
    1: ""
  });
  const [pairsData, setPairsData] = useState([]);

  async function fetchPairsData() {
    try {
      
      let resp = await fetch("https://www.bitstamp.net/api/v2/trading-pairs-info/");
      let fetchedPairsData=await resp.json();
      setPairsData(fetchedPairsData);
      return pairsData;
    } catch (error) {
      console.log(error)
    }      
  }

  const handlePairChange = (value, order) => {
    setPairsData({
      ...pairsData,
      order: value 
    })
  }

  useEffect(() => { fetchPairsData() }, [])

  return (
    <div>
      <Paper elevation={3} className="container-item trading-pairs-container">
        <CositoDeArriba pairsData={pairsData} handlePairChange={handlePairChange} />
        <SelectedPairValues />
      </Paper>
      
    </div>
  )
}