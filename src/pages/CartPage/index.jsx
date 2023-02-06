import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'

import ArrowIcon from './ArrowIcon'
import Title from '../../components/Title'
import Form from '../../components/Form'
import CartCard from '../../components/CartCard'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



export default function CartPage() {

  const productsInCart = useSelector(state => state.cart)

  const total_discont = productsInCart.reduce((total, {count, discont_price}) => total + count * discont_price, 0)
  const total = productsInCart.reduce((total, {count, price}) => total + count * price, 0)
  
  return (
	<div className = {cn(styles.cart_page, 'wrapper')}>
    <Title className = {styles.title}>Shopping cart</Title>

    <div className = {styles.paths}>
      <div>
        <Link to = '/'>Main</Link>&nbsp;&nbsp;/&nbsp;&nbsp;Cart
      </div>
  
      <Link to = '/categories' >Back to the shop
        <ArrowIcon className = {styles.arrow_img} />
      </Link>
    </div>
    {
      productsInCart.length ?
      <div className = {styles.order_block}>
        <div className = {styles.products_block}>
          {
            productsInCart.map(el => <CartCard key = {el.id} {...el} />)
          }
        </div> 

        <div>
          <div className = {styles.order_details}>
            <p className = {styles.order_details_title}>Order details</p>
            <div className = {styles.total_block}>
            
              <div>
                <p>Total</p>
                <p>{total}$</p>
              </div>

              {
                total_discont != 0
                ?               
                <div>
                  <p>Total with discont</p>
                  <p>{total_discont}$</p>
                </div>
                : ''
              }

              <div>
                <p>You save</p>
                <p>{total - total_discont}$</p>
              </div>
            </div>
            <Form 
              button_color = 'green'
              button_children = 'Order'
              input_classname = {styles.cart_input}
              form_className = {styles.form}
              order = {productsInCart}
            />
          </div>
        </div>
    </div>
    : <Title className = {styles.message}>Your cart is empty</Title>
    }

  </div>
  )
}
