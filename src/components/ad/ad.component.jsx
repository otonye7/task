import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AdsContainer } from './ad.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


let lastAd = 0;
export default function SimpleCard() {
  const classes = useStyles();

  const random = () => {
    
    let number;
    do {
        number = Math.floor(Math.random() * 1000);
    } while (lastAd === number)
    lastAd = number;
    return number;
}

  return (
    <AdsContainer>
    <Card className={classes.root}>
      <CardContent>
          <img class="ad" src={`http://localhost:3000/ads/?r=${random()}`} alt=""/>
      </CardContent>
    </Card>
    <br />
    </AdsContainer>
  );
}
