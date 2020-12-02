import React from 'react';
import '../styles/styles.css';
// import './index.css';
// import App from './App';

import SelectedPairValues from "./SelectedPairValues";
import CositoDeArriba from "./CositoDeArriba";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export default function TradingPairsContainer() {

  return (
    <div>
      <Paper elevation={3} className="container-item trading-pairs-container">
      {/* <Grid
          container
          direction="column"
          justify="stretch"
          alignItems="space-between"
        > */} 
        <CositoDeArriba />
        <SelectedPairValues />
      {/* </Grid> */}
      </Paper>
      
    </div>
  )
}