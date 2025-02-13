import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import styles from './index.module.css';

const OnBoardingStep00 = ({ nextStep }) => {
  return (
    <div className={styles.wrap}>
      <Title>안녕하세요!</Title>
      <Text>
        루시드와 함께 비전을 향한
        <br />
        여정을 시작해볼까요?
      </Text>
      <Button onClick={() => nextStep('yes')}>좋아요</Button>
      <Button onClick={() => nextStep('no')}>저는 계정이 있어요</Button>
    </div>
  );
};

export default OnBoardingStep00;
