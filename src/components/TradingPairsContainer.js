import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import GJNumbersView from "./GJNumbersView";
import CositoDeArriba from "./CositoDeArriba";
import Paper from '@material-ui/core/Paper';


export default function TradingPairsContainer() {

  const [pairs, setPairs] = useState({
    0: {
      symbol: "",
      description: ""
    },
    1: {
      symbol: "",
      description: ""
    },
  });

  const [lastSelected, setLastSelected] = useState(1)
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

  useEffect(() => {
    setLastSelected((ls) => ls===1 ? 0 : 1);
  }, [pairs]);

  const handlePairChange = (symbol, description) => {

    setPairs({
      ...pairs,
      [lastSelected]: {
        symbol: symbol,
        description: description 
      } 
    })
  }

  useEffect(() => { fetchPairsData() }, [])

  return (
    <div>
      <Paper elevation={3} className="container-item trading-pairs-container">
        <CositoDeArriba pairs={pairs} pairsData={pairsData} handlePairChange={handlePairChange} />
        <GJNumbersView pairs={pairs} />
      </Paper>
      
    </div>
  )
}