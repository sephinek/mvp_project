import Input from '../../atoms/Input'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import styles from './index.module.css'

const TabContent = ({ type }) => {
    if (type === 0) {
        return (
            <div className={styles.wrap}>
                <Button>{type} 버튼</Button>
            </div>
        )
    } else if (type === 1) {
        return (
            <div className={styles.wrap}>
                <Text>현재 타입은 {type}</Text>
            </div>
        )
    } else if (type === 2) {
        return (
            <div className={styles.wrap}>
                <Input />
            </div>
        )
    } else if (type ===3) {
        return (
            <div className={styles.wrap}>
                <h1>January</h1>
            </div>
        )
    }
}

export default TabContent
