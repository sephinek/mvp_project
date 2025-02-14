import styles from './index.module.css'

const ReflectionTopBar = ({ children, ...rest }) => {
    return (
        <div className={styles.topBar} {...rest}>
            <div className={styles.iconLeft}></div>
            <h1 className={styles.title}>{children}</h1>
            <div className={styles.iconRight}></div>
        </div>
    )
}

export default ReflectionTopBar
