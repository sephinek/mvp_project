import styles from './index.module.css'

const Text = ({ children, ...rest }) => {
    return (
        <p {...rest} className={styles.wrap}>
            {children}
        </p>
    )
}

export default Text
