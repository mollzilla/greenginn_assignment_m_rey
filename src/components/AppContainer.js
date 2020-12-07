import React from 'react';
import '../styles/styles.css';
import AvgTickerValues from "./AvgTickerValues";
import TradingPairsContainer from "./TradingPairsContainer";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export default function AppContainer() {

  return (
    <div>
      <Container className="app-container" maxWidth="xl">
      <h1>
        WELCOME TO MY GREENGINN ASSIGNMENT
      </h1>
        This is the main container of the single page App.
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <AvgTickerValues />
          <TradingPairsContainer />
        </Grid>
      </Container>
    </div>
  )
}