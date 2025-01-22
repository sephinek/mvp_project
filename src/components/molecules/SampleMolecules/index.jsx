import Input from '../../atoms/Input'
import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import styles from './index.module.css'

const SampleMolecules = ({ ...rest }) => {
    return (
        <div {...rest} className={styles.wrap}>
            <Title>회원가입</Title>
            <div className={styles.input_wrap}>
                <Text>아이디를 입력하세요</Text>
                <Input />
            </div>
            <div className={styles.input_wrap}>
                <Text>비밀번호를 입력하세요</Text>
                <Input />
            </div>
        </div>
    )
}

export default SampleMolecules
