import { ProductListContainer } from './product-list.styles';
import Card from '@material-ui/core/Card';

const ProductList = (items) => {
    const {size, price, date, face} = items.items
    
    return (
        <ProductListContainer>
            <div className='container'>
            <Card className=''>
                <div className='face'>
                    <h2>{face}</h2>
                </div>
                <div className='others'>
                    <p>{size}</p>
                    <p>{price}</p>
                    <p>{date}</p>
                </div>
            </Card> 
            <br />
            </div>
        </ProductListContainer>
    )
}

export default ProductList;


























