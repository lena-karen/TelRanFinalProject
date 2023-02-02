import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import InputMask from 'react-input-mask'

export default function Input({register, name, placeholder, type = 'text', className, ...props}) {

  return (
	  <input
      className = {cn(className, styles.input)} 
      type = {type} 
      placeholder = {placeholder} 
      {...register(name, {
        required: {
          value: true,
          message: '* Phone number is required',
        }
      })}
      {...props}

        // pattern: {
        //   value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        //   message: '* Invalid phone format'
        // }
    
     
    />
  )
}
