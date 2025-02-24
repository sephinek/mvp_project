import { useState } from 'react';
import Button from '../../atoms/Button';
import GoBackHeader from '../../common/GoBackHeader';
import OnBoardingTitle from '../../atoms/OnboardingTitle';
import styles from './index.module.css';
import OnboardingCheckList from '../OnboardingCheckList';
import star from '../../../assets/icons/toss/star.svg';
import folder from '../../../assets/icons/toss/folder.svg';
import notes from '../../../assets/icons/toss/notes.svg';
import ferris from '../../../assets/icons/toss/ferris.svg';
import graph from '../../../assets/icons/toss/graph.svg';

const OnboardingStep10 = ({ nextStep, beforeStep }) => {
  const [target, setTarget] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.goBackBox}>
        <GoBackHeader handler={beforeStep} />
      </div>

      <div className={styles.contentContainer}>
        <OnBoardingTitle secondLine='여러 개를 선택할 수 있어요.'>
          비전을 이루기 위해서
          <br />
          어떤 기능들을 사용하고 싶어요?
        </OnBoardingTitle>

        <div className={styles.button_wrap}>
          <OnboardingCheckList
            name='step01'
            choice='multiple'
            items={[
              {
                value: '비전을 되새겨주는 기능',
                children: '비전을 되새겨주는 기능',
                icon: star,
                targetFn: () => setTarget('비전을 되새겨주는 기능'),
              },
              {
                value: '한 눈에 볼 수 있는 달성 리포트',
                children: '한 눈에 볼 수 있는 달성 리포트',
                icon: graph,
                targetFn: () => setTarget('한 눈에 볼 수 있는 달성 리포트'),
              },
              {
                value: '하루 단위의 회고 기능',
                children: '하루 단위의 회고 기능',
                icon: notes,
                targetFn: () => setTarget('하루 단위의 회고 기능'),
              },
              {
                value: '비전을 상상할 수 있는 나만의 공간',
                children: '비전을 상상할 수 있는 나만의 공간',
                icon: ferris,
                targetFn: () => setTarget('비전을 상상할 수 있는 나만의 공간'),
              },
              {
                value: '정보를 나눌 수 있는 커뮤니티',
                children: '정보를 나눌 수 있는 커뮤니티',
                icon: folder,
                targetFn: () => setTarget('정보를 나눌 수 있는 커뮤니티'),
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.bottomBtn}>
        <Button theme='secondary' disabled={!target} onClick={nextStep}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep10;
