import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Nav({setIsMenuOpened}) {

  return (
	  <nav className = {styles.nav}>
      <Link 
        to = '/categories'
         onClick = {() => setIsMenuOpened(false)}
      >
        Categories
      </Link>

      
        <HashLink 
          onClick = {() => setIsMenuOpened(false)}
          smooth to = '/#coupon'

        >
          Coupon
        </HashLink>
      


      <HashLink 
        onClick = {() => setIsMenuOpened(false)}
        smooth to = '/#actions'
      >
        Sale
      </HashLink>

      <HashLink 
        smooth to = '#contacts'
        onClick = {() => setIsMenuOpened(false)}
      >
        Contacts
      </HashLink>
    </nav>
  )
}
