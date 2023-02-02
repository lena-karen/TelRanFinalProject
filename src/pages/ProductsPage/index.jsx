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

  const {category} = useParams();

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadProducts(category))
  }, [])

   const products = useSelector(state => state.products)
   const categories = useSelector(state => state.categories)

   const currentCategory = categories.find(el => el.id == category)

   const sort_products = event => dispatch(sortProductsAction(event.target.value))

   const min = Math.min(...products.map(el => el.discont_price))
   const max = Math.max(...products.map(el => el.discont_price))

   const [minValue, setMinValue] = useState(0)
   const [maxValue, setMaxValue] = useState(Infinity)
   const [onSale, setOnSale] = useState(false)
  
   useEffect(() => {
    dispatch(searchProductsByPriceAction({minValue, maxValue}))
  }, [minValue, maxValue])
   

  useEffect(() => {
    if (onSale) {
      dispatch(onSaleProductsAction())
    } else {
      dispatch(loadProducts(category))
    }
  }, [onSale])

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
            <option value = "price">price</option>
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
