import React, {useEffect} from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import Input from '../../components/Input';
import Title from '../../components/Title';
import ArrowIcon from '../CartPage/ArrowIcon';
import Button from '../../components/Button';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { loadProduct } from '../../requests/productRequest';
import { addToCartAction } from '../../store/actions/addToCartAction';


export default function ProductPage() {

  const {currentProduct, category} = useParams();
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const currentCategory = categories.find(el => el.id == category)

  const navigate = useNavigate()
  useEffect(() => {
    dispatch(loadProduct(currentProduct))
  }, [])

  const product = useSelector(state => state.product)
   const {
          id,
          title, 
          image, 
          price, 
          discont_price,
          description
        } = product

  const discount = Math.round(( price - discont_price ) * 100 / price)

  return (
	<div className = {cn(styles.products_page, 'wrapper')}>
    <Title className = {styles.title}>{title}</Title>

    <div className = {styles.paths}>
      <Link to = '/'>Main</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
      <button onClick={() => navigate(`/${category}`)}>
        {currentCategory.title}
      </button>
    </div>

    <div className = {styles.product_block}>
      <img src = {`http://127.0.0.1:3333${image}`} alt="" />

      <div className = {styles.product_info}>
        <div className = {styles.price_block}>
          <p>{discont_price}<span>$</span></p>
          <p>{price}$</p>
          <p>{discount}%</p>
        </div>

        <Button 
          className = {styles.button} 
          color = 'green'
          onClick = {() => dispatch(addToCartAction(product))}
        >
          Add to cart
        </Button>
      
        <div className = {styles.divider}></div>
        <p className = {styles.product_description_title} >Description</p>
        <p className = {styles.product_description} >{description}</p>
      </div>
    </div>
  </div>
  )
}
