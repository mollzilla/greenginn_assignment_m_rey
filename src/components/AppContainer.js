import React from 'react';
import '../styles/styles.css';
// import './index.css';
// import App from './App';
import AvgTickerValues from "./AvgTickerValues";
import TradingPairsContainer from "./TradingPairsContainer";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export default function AppContainer() {

  return (
    <div>
      <Container className="app-container" maxWidth="xl">
        This will be the main container and single source of truth for the app.
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <AvgTickerValues  />
          <TradingPairsContainer  />
        </Grid>
      </Container>
    </div>
  )
}