import { ProductListContainer } from './product-list.styles';
import Card from '@material-ui/core/Card';

const ProductList = (items) => {
    const {size, price, date, face} = items.items
    
    return (
        <ProductListContainer>
            <div className='container'>
            <Card className='card'>
                <div className='face'>
                    <h2>{face}</h2>
                </div>
                <div className='others'>
                    <p>SIZE: {size}</p>
                    <p>PRICE: {price}</p>
                    <p>DATE: {date}</p>
                </div>
            </Card> 
            </div>
            <br />
        </ProductListContainer>
    )
}

export default ProductList;


























