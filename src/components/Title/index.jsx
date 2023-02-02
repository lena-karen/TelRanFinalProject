import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'

export default function Title({children, className, ...props}) {
  return (
	  <h3 className = {cn(styles.title, className )} {...props}>
      {children}
    </h3>
  )
}
