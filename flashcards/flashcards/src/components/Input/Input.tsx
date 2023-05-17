import styles from './Input.module.css'

export default function Input({type, onChange, placeholder}: any) {
  return (
    <input className={styles.input} type={type} 
        onChange={(e: any) => {onChange(e.target.value)}} 
        placeholder={placeholder}>
    </input>
  )
}


