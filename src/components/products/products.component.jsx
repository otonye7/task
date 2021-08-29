import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductList from '../product-list/product-list.component';
import { ProductsContainer } from './products.styles';

const Product = () => {
    const [datas, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState("");
    const [limit, setLimit] = useState(15)
    const[ finished, setFinished] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

      
    const handleScroll = event => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        console.log("scrolltop: ", scrollTop)
        console.log("clientHeight: ", clientHeight)
        console.log("scrollHeight:", scrollHeight)
    }

    const loadData = async () => {
        const res = await axios.get(`http://localhost:3000/products?_page=${page + 1}&_limit=${limit}&_sort=${sort}`)
        setData(prev => [...prev, ...res.data])
    }
 

    return (
        <ProductsContainer>
        <div className='preview' onScroll={handleScroll} >
            {
                datas.map((items) => <ProductList key={items.id} items={items}  /> )
            }
        </div>
        <br />
        </ProductsContainer>
      
    )
}

export default Product