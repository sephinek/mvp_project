import styles from './index.module.css'

const SimpleDateGrid = ({ children, ...rest }) => {
    return (
        <div {...rest} className={styles.wrap}>
            <ul className={styles.simpleDateGrid}>
                <li>월</li>
                <li>화</li>
                <li>수</li>
                <li>목</li>
                <li>금</li>
                <li>토</li>
                <li>일</li>
            </ul>
        </div>
    )
}

export default SimpleDateGrid
