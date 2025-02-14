import styles from './index.module.css'

const OnboardingListButton = ({ children, ...rest }) => {
    return (
        <OnboardingListButton {...rest} className={styles.OnboardingListButton}>
            {children}
        </OnboardingListButton>
    )
}

export default OnboardingListButton