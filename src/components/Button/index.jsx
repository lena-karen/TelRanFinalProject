import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'

export default function Button({children, className, color, ...props}) {
  return (
	  <button 
      className = {cn(styles.button, className, {
        [styles.green]: color == 'green',
        [styles.white]: color == 'white',
        [styles.transparent]: color == 'transparent',
        [styles.hover]: color == 'hover',
      })}
      {...props}
    >
      {children}
    </button>
  )
}
