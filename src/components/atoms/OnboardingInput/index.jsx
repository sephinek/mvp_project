import styles from './index.module.css'

const OnboardingInput = ({ isText, children, ...rest }) => {
    return (
    <div className={styles.wrapper}>
        <input className={styles.onboardingInput} type="text" />
        {isText && <span>것</span>}
    </div> 
)}

export default OnboardingInput



