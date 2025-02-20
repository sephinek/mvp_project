import styles from './index.module.css';

const ReflectionVisionBoard = ({ children, ...rest }) => {
    return (
        <div className={styles.wrap} {...rest}>
            <ul className={styles.reflectionVisionBoard}>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
            </ul>
            <ul className={styles.reflectionVisionBoardd}>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
                <li className={styles.visionBoardContent}></li>
            </ul>
        </div>
    );
};

export default ReflectionVisionBoard;

