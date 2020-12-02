import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
// import './index.css';
// import App from './App';
import Paper from '@material-ui/core/Paper';
import ColorButton from '@material-ui/core/Button';

export default function CositoDeArriba(props) {

const { pairsData, handlePairChange, pairs } = props;


const onPairSelect = (symbol) => {
  handlePairChange(symbol);
  // if()
}

useEffect(() => {

}, [pairs]);

  return (
    <div>
      <Paper elevation={3} className="trading-pairs-paper cosito-de-arriba">
        <h4>Choose Pair</h4>
        {pairsData.length && pairsData.map((pair, i) => 
          <ColorButton 
            onClick={() => {onPairSelect(pair.url_symbol)}} 
            variant="contained" 
            color="primary" 
            className={` ${Object.values(pairs).includes(pair.url_symbol) ? "selected pair-button" : "pair-button"}`}
            key={i}>
            {pair.description}
          </ColorButton>
        )}
      </Paper>
    </div>
  )
}