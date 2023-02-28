import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import Button from '../Button'

import { Link } from 'react-router-dom'
import { addToCartAction } from '../../store/actions/addToCartAction'
import { useDispatch } from 'react-redux'
import { url_localhost, url_render } from '../../variables'

export default function ProductCard({product}) {

  const dispatch = useDispatch();

  const {id, title, image, categoryId, price, discont_price} = product
  const category = categoryId
  const discount = Math.round(( price - discont_price ) * 100 / price)

  const addToCart = (product) => {
    dispatch(addToCartAction(product))

  }
  return (
    <div className = {styles.product_card}>
      <div className = {styles.product_img}>
        <Link to = {`/${category}/${id}`}>
          <img src = {`${url_render}${image}`} alt = {title} />
        </Link> 

        <Button 
          color = 'hover' 
          className = {styles.button}
          onClick = {() => addToCart(product)}
        >
          Add to cart
        </Button>
      </div>
      <div className = {styles.product_info}>
        <Link to = {`/${category}/${id}`} tabIndex = '-1'>
        
          <div className = {styles.price_block}>
            {
              discont_price !== price
              ? <>
                  <p className = {styles.discont_price}>{discont_price}<span>$</span></p>
                  <p className = {styles.price}>{price}$</p>
                  <p className = {styles.discont}>{discount}%</p>
                </>
             
              : <p className = {cn(styles.discont_price, styles.no_discont)}>{discont_price}<span>$</span></p>
            }
            
          </div>
          <p className = {styles.product_title}>{title}</p>
       
        </Link>
      </div>
    </div>
  )
}
