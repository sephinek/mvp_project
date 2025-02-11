import styles from './index.module.css'

const RadioButton = ({ children, value, e, ...rest }) => {
    return (
        <label>
            <input 
                type="radio"
                name={e}
                value={value}
                {...rest} className={styles.wrap}>
                {children}
            </input>
        </label>
    )
}

export default RadioButton
