import React, { useEffect } from 'react';
import '../styles/styles.css';
// import './index.css';
// import App from './App';
import Paper from '@material-ui/core/Paper';


export default function SelectedPairValues(props) {

  const { pairs } = props;

  console.log(pairs)

  // useEffect(() => {
  //   if()
  // })

  return (
    <div>
      <Paper elevation={3} className="trading-pairs-paper">
        This will be the main container the selected pair values.        
        https://www.bitstamp.net/api/v2/ticker/btcusdc/btcgbp
      </Paper>
    </div>
  )
}