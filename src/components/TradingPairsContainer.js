import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import SelectedPairValues from "./SelectedPairValues";
import CositoDeArriba from "./CositoDeArriba";
import Paper from '@material-ui/core/Paper';


export default function TradingPairsContainer() {

  const [pairs, setPairs] = useState({
    0: "",
    1: ""
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

  const handlePairChange = (value) => {

    setPairs({
      ...pairs,
      [lastSelected]: value 
    });
    // console.log("pairs: ",pairs)
    // console.log("lastSelected: ",lastSelected)
  }

  useEffect(() => { fetchPairsData() }, [])

  return (
    <div>
      <Paper elevation={3} className="container-item trading-pairs-container">
        <CositoDeArriba pairs={pairs} pairsData={pairsData} handlePairChange={handlePairChange} />
        <SelectedPairValues pairs={pairs} />
      </Paper>
      
    </div>
  )
}