import styles from './index.module.css'

const Lucid03 = ({ children, ...rest }) => {
    return (
        <div className= {styles.lucidWrap}>
            <div className= {styles.lucid}>
                <div className= {styles.lucidBody}></div>
                <div className= {styles.lucidLeft}></div>
                <div className= {styles.lucidRight}></div>
                <div className= {styles.lucidBackground}></div>
            </div>
        </div>
    )
}

export default Lucid03
