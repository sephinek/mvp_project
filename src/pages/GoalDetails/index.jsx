import TopBar from '../../components/atoms/TopBar';
import ChevronLeftButton from '../../components/common/Icons/ChevronLeftButton';
import ChevronRightButton from '../../components/common/Icons/ChevronRightButton';

export default function GoalDetails() {
  return (
    <section>
      <TopBar
        LeftIcon={ChevronLeftButton}
        RightIcon={ChevronRightButton}
        title='Goal(목표) 상세'
      ></TopBar>

      <div></div>
    </section>
  );
}
