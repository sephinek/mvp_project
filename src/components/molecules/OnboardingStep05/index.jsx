import { useRef, useState } from 'react';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import Input from '../../atoms/Input';
import OnboardingYesIcon from '../../../assets/icons/toss/yes.svg';
import OnboardingCheckList from '../OnboardingCheckList';
import MoneyIcon from '../../../assets/icons/toss/money.svg';
import SaluteIcon from '../../../assets/icons/toss/salute.svg';
import SpeakerIcon from '../../../assets/icons/toss/speaker.svg';
import RelationshipIcon from '../../../assets/icons/toss/relationship.svg';
import PlaneIcon from '../../../assets/icons/toss/plane.svg';
import OwlIcon from '../../../assets/icons/toss/owl.svg';
import styles from './index.module.css';

const OnboardingStep05 = ({ nextStep, beforeStep, type }) => {
  const ref = useRef(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [target, setTarget] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    value ? setIsConfirmed(true) : setIsConfirmed(false);
  };

  const handleNextStep = () => {
    if (type === 'no') {
      nextStep(ref.current.value);
    } else {
      nextStep(target);
    }
  };

  if (type === 'no') {
    return (
      <div className={styles.wrap}>
        <div className={styles.goBackBox}>
          <GoBackHeader handler={beforeStep} />
        </div>

        <div className={styles.contentContainer}>
          <OnBoardingTitle secondLine='ex) 창작하는 것, 사람들에게 위로를 주는 것, 큰 성취를 이루는 것'>
            내가 생각하는
            <br />
            나의 꿈을 적어주세요.
          </OnBoardingTitle>

          <Input inputRef={ref} type='visible' onChange={handleChange} />
        </div>

        <div className={styles.bottomBtn}>
          <Button
            theme='secondary'
            disabled={!isConfirmed}
            onClick={handleNextStep}
          >
            다음
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.goBackBox}>
        <GoBackHeader handler={beforeStep} />
      </div>

      <div className={styles.contentContainer}>
        <OnBoardingTitle>
          다른 사람들이
          <br />
          많이 꾸는 꿈들을 모아봤어요.
          <br />
          생각했던 꿈이 있으면
          <br />
          선택해주세요
        </OnBoardingTitle>

        <div className={styles.button_wrap}>
          <OnboardingCheckList
            name='step01'
            choice='single'
            items={[
              {
                value: '경제적으로 여유로운 사람',
                children: '경제적으로 여유로운 사람',
                icon: MoneyIcon,
                targetFn: () => setTarget('경제적으로 여유로운'),
              },
              {
                value: '커리어적으로 성공한 사람',
                children: '커리어적으로 성공한 사람',
                icon: SaluteIcon,
                targetFn: () => setTarget('커리어적으로 성공한'),
              },
              {
                value: '사회적으로 영향력 있는 사람',
                children: '사회적으로 영향력 있는 사람',
                icon: SpeakerIcon,
                targetFn: () => setTarget('사회적으로 영향력 있는'),
              },
              {
                value: '사람들과 좋은 관계를 형성한 사람',
                children: '사람들과 좋은 관계를 형성한 사람',
                icon: RelationshipIcon,
                targetFn: () => setTarget('사람들과 좋은 관계를 형성한'),
              },
              {
                value: '시간과 공간에서 자유로운 사람',
                children: '시간과 공간에서 자유로운 사람',
                icon: PlaneIcon,
                targetFn: () => setTarget('시간과 공간에서 자유로운'),
              },
              {
                value: '동물들에게 도움을 주는 사람',
                children: '동물들에게 도움을 주는 사람',
                icon: OwlIcon,
                targetFn: () => setTarget('동물들에게 도움을 주는'),
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.bottomBtn}>
        <Button theme='secondary' disabled={!target} onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep05;
