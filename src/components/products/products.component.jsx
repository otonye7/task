import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductList from '../product-list/product-list.component';
import { ProductsContainer } from './products.styles';

const Product = () => {
    const [datas, setData] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const res = await axios.get(`http://localhost:3000/products`)
        setData(res.data)
    }

    return (
        <ProductsContainer>
        <div className='preview'>
            {
                datas.map((items) => <ProductList key={items.id} items={items} /> )
            }
        </div>
        <br />
        </ProductsContainer>
      
    )
}

export default Product