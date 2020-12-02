import React from 'react';
import '../styles/styles.css';
// import './index.css';
// import App from './App';
import Paper from '@material-ui/core/Paper';
import ColorButton from '@material-ui/core/Button';

const longArrayOfButtons=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] 

export default function CositoDeArriba(props) {

console.log(props)
const { pairsData } = props;

  return (
    <div>
      <Paper elevation={3} className="trading-pairs-paper cosito-de-arriba">
        <h4>Choose Pair</h4>
        {pairsData.length && pairsData.map((pair, i) => 
          <ColorButton variant="contained" color="primary" className="pair-button" key={i}>
            {pair.description}
          </ColorButton>
        )}
      </Paper>
    </div>
  )
}