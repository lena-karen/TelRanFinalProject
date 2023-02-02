import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'

import { Link } from 'react-router-dom'
import CartIcon from '../Header/CartIcon'
import Discount from '../Coupon'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { HashLink } from 'react-router-hash-link'
import { useSelector } from 'react-redux'

export default function Nav({setIsMenuOpened}) {

  // const productsInCart = useSelector(state => state.cart)

  return (
	  <nav className = {styles.nav}>
      <Link 
        to = '/categories'
        onClick = {() => setIsMenuOpened(false)}
      >
        Categories
      </Link>

      <HashLink 
        smooth to = '/#coupon'
        onClick = {() => setIsMenuOpened(false)}
      >
        Coupon
      </HashLink>

      <HashLink 
        smooth to = '/#actions'
        onClick = {() => setIsMenuOpened(false)}
      >
        Sale
      </HashLink>

      <HashLink 
        smooth to = '#contacts'
        onClick = {() => setIsMenuOpened(false)}
      >
        Contacts
      </HashLink>
      {/* <Link to = '/cart' className = {styles.link_to_cart}>
        <CartIcon />
        {
          productsInCart.length > 0 
          ? <div className = {styles.quantity_in_cart}>
              {productsInCart.reduce((total, el) => total + el.count, 0)}
            </div>
          : ''
        }
      </Link> */}
    </nav>
  )
}
