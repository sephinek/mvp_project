import Input from '../../atoms/Input'
import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import styles from './index.module.css'

//const Input = styled.input.attrs({ placeholder: "add your name"})

const LoginForm = ({ idRef, loginClick, title, subTitleID, subTitlePW, button,  ...rest }) => {
    return (
        <div {...rest} className={styles.wrap}>
            <h2>Sign In</h2>
            <Title>{title}</Title>
            <div className={styles.input_wrap}>
                <p>{subTitleID}를 입력하세요</p>
                <Input ref={idRef} placeholder="name@email.com"></Input>
            </div>
            <div className={styles.input_wrap}>
                <p>{subTitlePW}를 입력하세요</p>
                <Input placeholder="password"></Input>
            </div>
            <div className={styles.flexbox}>
                <input type="checkbox"></input>
                <Text>I agree to terms and conditions.</Text>
            </div>
            <Button onClick={loginClick}>{button}</Button>
        </div>
    )
}

export default LoginForm
