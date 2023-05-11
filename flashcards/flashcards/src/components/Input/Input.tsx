import React from 'react'
import styles from './Input.module.css'

export default function Input({type, onChange, placeholder}) {
  return (
    <input className={styles.input} type={type} 
        onChange={(e) => {onChange(e.target.value)}} 
        placeholder={placeholder}>
    </input>
  )
}


