import styles from './index.module.css';
import seedling from '../../../assets/icons/toss/seedling.svg';
import tree from '../../../assets/icons/toss/tree.svg';
import { Link } from 'react-router-dom';

const items = [
  {
    title: '목표 추가',
    desciption: '새로운 목표와 계획을\n추가하고 싶어요',
    icon: tree,
    to: '/goal/add',
  },
  {
    title: '계획 추가',
    desciption: '기존 목표에 계획만\n추가하고 싶어요',
    icon: seedling,
    to: '/plan/add',
  },
];
// routePage('/goal/add')

const HomeQuickButtons = () => {
  return (
    <div className={styles.wrap}>
      {items.map(({ title, desciption, icon, to }, idx) => (
        <Link key={idx} className={styles.card} to={to}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{desciption}</p>
          <div className={styles['icon-wrap']}>
            <img src={icon} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeQuickButtons;
