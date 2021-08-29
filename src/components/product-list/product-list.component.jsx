import {centsConverter} from '../cents-converter/cents-converter.component';
import {dateConverter} from '../date-converter/date-converter.component';
import { ProductListContainer } from './product-list.styles';
import Card from '@material-ui/core/Card';

const ProductList = (items) => {
  
    const {size, price, date, face} = items.items

    return (
        <ProductListContainer>
            <div className='container' >
            <Card className='card'>
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


























