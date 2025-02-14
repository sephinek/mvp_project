import { useRef, useState } from 'react';
import Input from '../../atoms/Input';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import useNavigationPage from '../../../hooks/useNavigationPage';
import styles from './index.module.css';
import Text from '../../atoms/Text';
import GoBackHeader from '../../common/GoBackHeader';

const OnBoardingStep02 = ({ nextStep, beforeStep, type }) => {
  const ref = useRef(null);
  const [isConfirm, setIsConfirm] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setIsConfirm(false);
    }
  };

  const handleNextStep = () => {
    const item = ref.current.value;
    nextStep(item);
  };
  if (type === 'yes') {
    return (
      <div className={styles.wrap}>
        <GoBackHeader handler={beforeStep} />
        <Title>
          꿈꾸는 나의
          <br />
          미래의 모습을 적어주세요
        </Title>
        <Text>1줄 이내로 적어주세요</Text>
        <Input inputRef={ref} onChange={handleChange} />
        <Button disabled={isConfirm} onClick={handleNextStep}>
          다음
        </Button>
      </div>
    );
  }
  return (
    <div className={styles.wrap}>
      <Title>
        나의 어릴 적 꿈
        <br />
        3가지를 적어보세요!
      </Title>
      <Text>ex) 디자이너,탐험가,아티스트</Text>
      <Input inputRef={ref} onChange={handleChange} />
      <Button disabled={isConfirm} onClick={handleNextStep}>
        다음
      </Button>
    </div>
  );
};

export default OnBoardingStep02;
