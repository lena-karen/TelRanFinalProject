import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import Button from '../Button'

import { Link, useParams } from 'react-router-dom'
import { addToCartAction } from '../../store/actions/addToCartAction'
import { useDispatch, useSelector } from 'react-redux'
export default function ProductCard({product}) {

  const dispatch = useDispatch();

  const {id, title, image, categoryId, price, discont_price} = product
  const category = categoryId
  const discount = Math.round(( price - discont_price ) * 100 / price)

  // const click = event => {
  //   event.stopPropagation()
  // }
  
  const addToCart = (product) => {
    dispatch(addToCartAction(product))

  }
  return (
    <div className = {styles.product_card}>
      <div className = {styles.product_img}>
        <Link to = {`/${category}/${id}`}>
          <img src = {`http://127.0.0.1:3333${image}`} alt = {title} />
        </Link> 

        <Button 
          color = 'hover' 
          className = {styles.button}
          onClick = {() => addToCart(product)}
        >
          Add to cart
        </Button>
      </div>

      <Link to = {`/${category}/${id}`}>
        <div className = {styles.price_block}>
          <p>{discont_price}<span>$</span></p>
          <p>{price}$</p>
          <p>{discount}%</p>
        </div>
        <p className = {styles.product_title}>{title}</p>
      </Link>
    </div>
  )
}
