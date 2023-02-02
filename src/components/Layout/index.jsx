import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'

import Header from '../Header'
import Footer from '../Footer'

import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
	  <div className = {styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
