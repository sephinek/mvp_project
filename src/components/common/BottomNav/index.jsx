import { useState } from 'react';
import IconButton from '../../atoms/IconButton/index.jsx';
import HomeIcon from '../../../assets/icons/solar/BottomNav-icon01.svg';
import ReflectionDayIcon from '../../../assets/icons/solar/BottomNav-icon02.svg';
import AddIcon from '../../../assets/icons/solar/BottomNav-icon03.svg';
import StatisticsIcon from '../../../assets/icons/solar/BottomNav-icon04.svg';
import MyPageIcon from '../../../assets/icons/solar/BottomNav-icon05.svg';
import { Link, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { addModalState } from '../../../shared/recoil/addModalState.js';
import styles from './index.module.css';

const MENUS = [
  { title: '홈', alt: 'Home menu', icon: HomeIcon, to: '/main' },
  {
    title: '점검데이',
    alt: 'Reflection Day menu',
    icon: ReflectionDayIcon,
    to: '/reflection/vision-board',
  },
  { title: '추가', alt: 'Add menu', icon: AddIcon },
  {
    title: '통계',
    alt: 'Statistics menu',
    icon: StatisticsIcon,
    to: '/statistics',
  },
  { title: 'MY', alt: 'My Page menu', icon: MyPageIcon, to: '/mypage' },
];

export default function BottomNav() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const setModalState = useSetRecoilState(addModalState);

  const currentMenu =
    MENUS.find((menu) => menu.to === location.pathname) || MENUS[0];

  const handleModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
    setIsActive((prev) => !prev);
  };

  return (
    <nav className={styles.bottomNavContainer}>
      <ul className={styles.bottomNavBox}>
        {MENUS.map((menu) =>
          menu.title !== '추가' ? (
            <Link
              to={menu.to}
              key={menu.title}
              className={`${styles.menuBox} ${
                menu === currentMenu ? styles.active : ''
              }`}
            >
              <IconButton
                icon={menu.icon}
                alt={menu.alt}
                type='bottomNavIcon'
                isActive={menu === currentMenu}
              />
              <span
                className={`${styles.menuTitle} ${
                  menu === currentMenu ? styles.active : ''
                }`}
              >
                {menu.title}
              </span>
            </Link>
          ) : (
            <li key={menu.title} className={styles.menuBox}>
              <div
                onClick={handleModal}
                className={`${styles.addButton} ${
                  isActive ? styles.active : ''
                }`}
              >
                <IconButton
                  icon={AddIcon}
                  alt={menu.alt}
                  type='bottomNavAddIcon'
                  active={false}
                  className={`${styles.icon} ${styles.addIcon}`}
                />
              </div>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
