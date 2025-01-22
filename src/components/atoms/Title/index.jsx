import styles from './index.module.css'

const Title = ({ children, ...rest }) => {
    return (
        <h1 {...rest} className={styles.wrap}>
            {children}
        </h1>
    )
}

export default Title
