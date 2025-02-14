import { useState } from 'react';
import styles from './index.module.css';

const Textfield_default = ({ 
    inputRef, 
    label, 
    helpText, 
    state = 'default', 
    type = 'text', 
    options = [], 
    ...rest 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.inputContainer}>
            {/* 📌 레이블 */}
            {label && <label className={styles.label}>{label}</label>}

            {type === 'select' ? (
                <div className={`${styles.selectContainer} ${styles[state] || ''}`} {...rest}>
                    {/* 📌 셀렉트 박스 */}
                    <div className={styles.selectBox} onClick={toggleDropdown}>
                        {selectedOption || '선택하세요'}
                        <span className={styles.arrow}>&#9662;</span>
                    </div>

                    {/* 📌 드롭다운 리스트 */}
                    {isOpen && (
                        <ul className={styles.optionList}>
                            {options.map((option, index) => (
                                <li key={index} className={styles.optionItem} onClick={() => handleSelect(option)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <input ref={inputRef} {...rest} className={`${styles.inputField} ${styles[state] || ''}`} />
            )}

            {/* 📌 도움말 메시지 (없으면 숨김) */}
            {helpText && <p className={`${styles.helpText} ${state === 'error' ? styles.errorText : ''}`}>{helpText}</p>}
        </div>
    );
};

export default Textfield_default;
