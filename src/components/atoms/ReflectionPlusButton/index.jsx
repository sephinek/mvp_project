import styles from './index.module.css'

const ReflectionPlusButton = ({ children, ...rest }) => {
    return (
        <div className={styles.ReflectionPlus}>
            <button className={styles.ReflectionPlusButton}></button>
        </div> 
    )
}

export default ReflectionPlusButton
