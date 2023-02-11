import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import Form from '../Form'

export default function Coupon() {

  return (
    <section id = "coupon" className = {styles.discount} >
      <div className = {cn(styles.coupon_wrapper, 'wrapper')}>
        <div className = {styles.discount_info}>
          <p>5% off </p>
          <p>on the first order</p>
        
          <Form 
            button_color = 'transparent' 
            button_children = 'Get a discount' 
            form_className = {styles.form}
          />
        </div>
      </div>

    </section>
  )
}
