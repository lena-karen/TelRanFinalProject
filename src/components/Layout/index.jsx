import React, { useState } from 'react'
import styles from './index.module.css'
import cn from 'classnames'

import Header from '../Header'
import Footer from '../Footer'
import { UpCircleOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [btnShown, setBtnShown] = useState(false)

  window.addEventListener('scroll', () => {
    window.scrollY > 400 ? setBtnShown(true) : setBtnShown(false)
  })
  
  return (
	  <div className = {styles.layout}>
      <Header />
      <main>
        <Outlet />
        <div 
          className = {cn(styles.btn_up, {
            [styles.btn_up_shown]: btnShown
          })}
          onClick = {() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <UpCircleOutlined className = {styles.up_icon} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
