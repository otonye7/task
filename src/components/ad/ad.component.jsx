import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AdsContainer } from './ad.styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';

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

export default function SimpleCard() {
  const classes = useStyles();

 let lastAd = 0;
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
          <img class="ad" src={`/ads/?r=${random()}`} alt=""/>
      </CardContent>
      <CardActions>
        <Button className='button' size="small">Advert From Our Sponsors</Button>
      </CardActions>
    </Card>
    </AdsContainer>
  );
}
