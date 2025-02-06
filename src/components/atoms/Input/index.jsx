import styles from './index.module.css'

const Input = ({ inputRef, ...rest }) => {
    return <input ref={inputRef} {...rest} className={styles.wrap} />
}

export default Input
