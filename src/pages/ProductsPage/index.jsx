import React, {useEffect, useState} from 'react';
import styles from './index.module.css';

import cn from 'classnames';

import Title from '../../components/Title';
import ProductCard from '../../components/ProductCard';

import FormCheck from 'react-bootstrap/FormCheck';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadProducts } from '../../requests/productsRequest';
import { sortProductsAction } from '../../store/actions/sortProductsAction';
import { searchProductsByPriceAction } from '../../store/actions/searchProductsByPriceAction';
import { onSaleProductsAction } from '../../store/actions/onSaleProductsAction';

export default function ProductsPage() {

  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(Infinity)
  const [onSale, setOnSale] = useState(false)
  const [sortType, setSortType] = useState('default')

  const {category} = useParams();

  const dispatch = useDispatch()

 
  useEffect(() => {
    dispatch(loadProducts(category))
  
  }, [])

   const products = useSelector(state => state.products)
   const categories = useSelector(state => state.categories)

   const currentCategory = categories.find(el => el.id == category)
  

   const sort_products = event => {
    setSortType(event.target.value)
    dispatch(sortProductsAction(event.target.value))
   }

   const min = Math.min(...products.map(el => el.discont_price))
   const max = Math.max(...products.map(el => el.discont_price))

   useEffect(() => {
    dispatch(searchProductsByPriceAction({minValue, maxValue}))
  }, [minValue, maxValue])
   
  useEffect(() => {
      dispatch(onSaleProductsAction({onSale, sortType}))

  }, [onSale])

  const changeMaxValue = (event) => {
    if (!event.target.value.slice(-1).match(/[0-9]/)) {
      event.target.value = event.target.value.slice(0, -1)
    }
    setMaxValue(+event.target.value)
  }

  const changeMinValue = (event) => {
    if (!event.target.value.slice(-1).match(/[0-9]/)) {
      event.target.value = event.target.value.slice(0, -1)
    }
    setMinValue(+event.target.value)

  }

  return (
	  <div className = {cn(styles.products_page, 'wrapper')}>
      <Title className = {styles.title}>{currentCategory.title}</Title>

      <div className = {styles.filter_block}>
        <div className = {styles.price_filter}>
          <p>Price</p>
          <input 
            name = 'min' 
            className = {styles.price_input} 
            placeholder = {`from ${min}$`} 
            type = 'text'
            
            onChange = {(e) => changeMinValue(e)}
            
          />
          <input 
            name = 'max' 
            className = {styles.price_input} 
            placeholder = {`to ${max}$`} 
            type = 'text' 
            
            onChange = {(e) => changeMaxValue(e)}
          />
        </div>

        <div className = {styles.sale_filter}>
          <p>Products in sale</p>

          <FormCheck.Input 
            className = {styles.sale_checkbox}
            type = 'checkbox'
            checked = {onSale}
            onChange = {() => setOnSale(prev => !prev)}
            tabIndex = '1'
          />
        </div>

        <div className = {styles.sort_block}>
          <p>Sort by</p>
          <select className = {styles.sort_select} onInput = {sort_products} tabIndex = '2'>
            <option value = "default">default</option>
            <option value = "title">title</option>
            <option value = "discont_price">price</option>
          </select>
        </div>
      </div>

      <div className = {styles.products_block}>
      {
        products.filter(el => !el.hidden).map(el => <ProductCard key = {el.id} product = {el} />)
      }
      </div>

  </div>
  )
}
