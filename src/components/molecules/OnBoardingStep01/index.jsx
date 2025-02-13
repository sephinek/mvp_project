import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import styles from './index.module.css';
import { useState } from 'react';
import GoBackHeader from '../../common/GoBackHeader';

const OnBoardingStep01 = ({ nextStep, beforeStep }) => {
  const [target, setTarget] = useState();

  return (
    <div className={styles.wrap}>
      <GoBackHeader handler={beforeStep} />
      <Title>
        지금 꿈꾸고 있는
        <br />
        나의 미래의 모습이 있나요?
      </Title>
      <div className={styles.button_wrap}>
        <Button onClick={() => setTarget('yes')}>있어요!</Button>
        <Button onClick={() => setTarget('no')}>아직 없어요</Button>
      </div>
      <Button disabled={!target} onClick={() => nextStep(target)}>
        다음
      </Button>
    </div>
  );
};

export default OnBoardingStep01;
