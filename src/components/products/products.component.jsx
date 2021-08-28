import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductList from '../product-list/product-list.component';

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
        <div>
            {
                datas.map((items) => <ProductList key={items.id} items={items} /> )
            }
        </div>
    )
}

export default Product