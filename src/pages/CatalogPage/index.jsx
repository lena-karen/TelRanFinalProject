import React, {useEffect, useState} from 'react';
import styles from './index.module.css';
import cn from 'classnames';

import Title from '../../components/Title';
import ProductCard from '../../components/ProductCard';

import FormCheck from 'react-bootstrap/FormCheck';

import { useDispatch, useSelector } from 'react-redux';
import { loadAllProducts } from '../../requests/allProductsRequest';
import { sortAllProductsAction } from '../../store/actions/sortAllProductsAction';
import { searchAllProductsByPriceAction } from '../../store/actions/searchAllProductsByPriceAction';
import { onSaleAllProductsAction } from '../../store/actions/onSaleAllProductsAction';


export default function CatalogPage() {

  const dispatch = useDispatch()

  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(Infinity)
  const [onSale, setOnSale] = useState(false)
  const [sortType, setSortType] = useState('default')

  useEffect(() => {
    dispatch(loadAllProducts)
  }, [])

  const products = useSelector(state => state.allProducts)
  const sort_products = event => {
    setSortType(event.target.value)
    dispatch(sortAllProductsAction(event.target.value))
  }

  const min = Math.min(...products.map(el => el.discont_price))
  const max = Math.max(...products.map(el => el.discont_price))

  useEffect(() => {
    //console.log('eff', minValue, maxValue)
    dispatch(searchAllProductsByPriceAction({minValue, maxValue}))
  }, [minValue, maxValue])
   

  useEffect(() => {
      dispatch(onSaleAllProductsAction({onSale, sortType}))
  }, [onSale])

  return (
	<div className = {cn(styles.products_page, 'wrapper')}>
    <Title className = {styles.title}>Catalog</Title>

    <div className = {styles.filter_block}>
      <div className = {styles.price_filter}>
        <p>Price</p>
        <input 
            name = 'min' 
            className = {styles.price_input} 
            placeholder = {`from ${min}$`} 
            type = 'number'
            onChange = {(e) => setMinValue(+e.target.value)}
          />
        <input 
            name = 'max' 
            className = {styles.price_input} 
            placeholder = {`to ${max}$`} 
            type = 'number' 
            onChange = {(e) => setMaxValue(+e.target.value)}
          />
      </div>

      <div className = {styles.sale_filter}>
        <p>Products in sale</p>
     
        <FormCheck.Input 
          className = {styles.sale_checkbox}
            type = 'checkbox'
            checked = {onSale}
            onChange = {() => setOnSale(prev => !prev)}
          />
      </div>

      <div className = {styles.sort_block}>
        <p>Sort by</p>
        <select className = {styles.sort_select} onInput = {sort_products}>
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
