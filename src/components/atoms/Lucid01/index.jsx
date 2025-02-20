import styles from './index.module.css'

const Lucid01 = ({ children, ...rest }) => {
    return (
        <div className= {styles.lucidWrap}>
            <div className= {styles.lucid}>
                <div className= {styles.lucidBody}></div>
                <div className= {styles.lucidHand}></div>
                <div className= {styles.lucidBackground}></div>
            </div>
        </div>
    )
}

export default Lucid01
