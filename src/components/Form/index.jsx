import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import InputMask from 'react-input-mask'

import Button from '../Button'
import { useForm } from 'react-hook-form'


export default function Form({button_color, button_children, input_classname, form_className, order = []}) {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onSubmit'})

  const placeholderPhone = errors?.phone ? errors?.phone?.message : 'Your phone'

  const submit = data => {
    alert(`Your phone is ${data.phone}`)
    if (order.length > 0) {
      console.log('Your order is ', order)
    }
    reset()
  }

  return (
	  <form onSubmit = {handleSubmit(submit)} className = {cn(styles.form, form_className)}>
   
      <InputMask
        mask = "+99 999 999 999 99"
          placeholder = {placeholderPhone}
          {...register('phone', {
            required: {
              value: true,
              message: '* Phone number is required',
            },
            pattern: {
              value: /^[\+][0-9]{2}[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{2}/i,
              message: '* Invalid phone format'
            }

          })}
          className = {cn(styles.input, input_classname, {
            [styles.input_required]: errors.phone
          })}
      />
   
      {errors?.phone?.message 
      ? <span className = {styles.error}>{errors?.phone?.message}</span>
      : ''}
        
      <Button 
        color = {button_color} 
        className = {styles.button}
      >
        {button_children}
      </Button>
    </form>
  )
}
