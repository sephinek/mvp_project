import styles from './index.module.css'

const SampleComponent = ({ children, ...rest }) => {
    return (
        <button {...rest} className={styles.wrap}>
            {children}
        </button>
    )
}

export default SampleComponent
