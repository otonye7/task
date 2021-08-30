import {centsConverter} from '../cents-converter/cents-converter.component';
import {dateConverter} from '../date-converter/date-converter.component';
import { ProductListContainer } from './product-list.styles';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

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

const ProductList = (items) => {
    const classes = useStyles();
    const {size, price, date, face} = items.items

    return (
        <ProductListContainer>
            <div className='container' >
            <Card className={classes.root}>
                <div className='face'>
                    <h2>{face}</h2>
                </div>
                <div className='others'>
                    <p>SIZE: {size}</p>
                    <p>PRICE: ${centsConverter(price)}</p>
                    <p>DATE: {dateConverter(date)}</p>
                </div>
            </Card> 
            </div>
            <br />
        </ProductListContainer>
    )
}

export default ProductList;


























