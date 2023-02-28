import React, {useRef, useState} from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import LogoIcon from './LogoIcon'
import CartIcon from './CartIcon'
import Nav from '../Nav'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

export default function Header() {
  let [isMenuOpened, setIsMenuOpened] = useState(false)
  const productsInCart = useSelector(state => state.cart)
  const menuDivRef = useRef(null)
  const menuIconRef = useRef(null)

  document.addEventListener('click', (event) => {
    if (!menuDivRef.current?.contains(event.target) && !menuIconRef.current?.contains(event.target) ) {
      setIsMenuOpened(false)
    } else {
      setIsMenuOpened(!isMenuOpened)
    }
  })

  const variants = {
    visible: { display: 'flex', opacity: 1 },
    hidden: { display: 'none', opacity: 0 }
  }
  return (
	  <header className = {cn(styles.header, 'wrapper')}>
      <Link to = '/' className = {styles.logo}>
        <LogoIcon />
      </Link>

      <Link to = 'products' className = {styles.catalog_link}>
        <Button color = 'green' className = {styles.button}>Catalog</Button>
      </Link>

      <div className = {styles.static_nav}>
        <Nav setIsMenuOpened = {setIsMenuOpened}/>
      </div>

      <motion.div 
        className = {styles.nav}
        animate = {isMenuOpened ? 'visible' : 'hidden'}
        variants = {variants}
        initial = 'hidden'
        ref = {menuDivRef}

      >
        <Nav setIsMenuOpened = {setIsMenuOpened}  /> 
      </motion.div>

      <Link to = '/cart' className = {styles.link_to_cart}>
        <CartIcon />
        {
          productsInCart.length > 0 
          ? <div className = {styles.quantity_in_cart}>
              {productsInCart.reduce((total, el) => total + el.count, 0)}
            </div>
          : ''
        }
      </Link>

      <div 
        className = {styles.menu_icon} 
        ref = {menuDivRef}
      >
        <MenuOutlined />
      </div>
    </header>
  )
}
