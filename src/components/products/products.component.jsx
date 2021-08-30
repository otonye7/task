import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductList from '../product-list/product-list.component';
import LoadingSign from '../spinner/spinner.component';
import NativeSelects from '../select/select.component';
import { ProductsContainer } from './products.styles';
import Ad from '../ad/ad.component';

const Product = () => {
    const [datas, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState("");
    const [limit] = useState(15)
    const [ finished, setFinished] = useState(false)
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {
        loadData()
    }, [sort])

      
    const handleScroll = event => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight) {
            loadData()
        }
    }

    const loadData = async () => {
        setIsLoading(true)
        const res = await axios.get(`http://localhost:3000/products?_page=${page + 1}&_limit=${limit}&_sort=${sort}`)
        setData(prev => [...prev, ...res.data])
        setPage(page + 1)
        if (!datas.length) {
            setFinished(true)
        }
        setIsLoading(false)
    }

    console.log(sort)

    const handleChange = (e) => {
        setData([])
        setPage(0)
        setFinished(false)
        setSort(e.target.value)
    }

    return (
        <ProductsContainer>
            {/* <Ad /> */}
            <br />
        <NativeSelects handleChange={handleChange} sort={sort}/>
        <br />
        <div className='preview' onScroll={handleScroll} >
            {
                datas.map((items, i) => (
                <>
                <ProductList key={items.id} items={items}  /> 
                {(i + 1) % 20 === 0 && <Ad />}
                </>
            ))}
            {finished === true ? <h1>End of Catalogue</h1> : null} 
            {!isLoading ? null : <LoadingSign />}
        </div>
        <br />
       
        </ProductsContainer>
      
    )
}

export default Product